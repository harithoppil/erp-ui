"use client";

import { useCallback, useRef, useEffect } from "react";
import type React from "react";
import { toast } from "sonner";

export interface TriggerResult {
  success: boolean;
  blocked?: boolean;
  error?: string;
  patches?: Record<string, unknown>;
}

export function useFormTriggers(doctype: string, values: Record<string, unknown>, setValues: React.Dispatch<React.SetStateAction<Record<string, unknown>>>) {
  const triggersRef = useRef<any>(null);
  const loadingRef = useRef<Set<string>>(new Set());

  // Dynamically load trigger module for this doctype
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const mod = await import(`@/triggers/index`);
        const maps = mod.TRIGGER_MAPS as Record<string, any>;
        const map = maps?.[doctype] || maps?.[doctype.replace(/_/g, " ")] || null;
        if (!cancelled) triggersRef.current = map;
      } catch {
        if (!cancelled) triggersRef.current = null;
      }
    }
    load();
    return () => { cancelled = true; };
  }, [doctype]);

  const executeFieldTriggers = useCallback(async (fieldName: string, newValue: unknown): Promise<TriggerResult> => {
    const triggers = triggersRef.current;
    if (!triggers) return { success: true };

    const fieldTriggers = triggers[fieldName];
    if (!fieldTriggers?.onChange?.length) return { success: true };

    // Build current doc state
    const doc = { ...values, [fieldName]: newValue };

    for (const action of fieldTriggers.onChange) {
      // Skip if condition fails
      if (action.condition && !action.condition(doc)) continue;

      switch (action.type) {
        case "validate": {
          const valid = action.rule(doc);
          if (!valid) {
            toast.error(action.error || `Validation failed for ${fieldName}`);
            return { success: false, blocked: true, error: action.error };
          }
          break;
        }

        case "setValue": {
          const computed = action.value(doc);
          setValues((prev: Record<string, unknown>) => ({ ...prev, [action.field]: computed }));
          break;
        }

        case "clearFields": {
          const updates: Record<string, unknown> = {};
          for (const f of action.fields) updates[f as string] = null;
          setValues((prev: Record<string, unknown>) => ({ ...prev, ...updates }));
          break;
        }

        case "setQuery": {
          // Query config is computed but applied by the Link field component
          const config = action.query(doc);
          if (typeof window !== "undefined") {
            (window as any).__frappeQueries = (window as any).__frappeQueries || {};
            (window as any).__frappeQueries[action.targetField as string] = config;
          }
          break;
        }

        case "serverCall": {
          if (loadingRef.current.has(action.method)) continue;
          loadingRef.current.add(action.method);

          try {
            const args = action.args ? action.args(doc) : {};
            const res = await fetch("/api/frappe-proxy", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ method: action.method, args }),
            });

            if (!res.ok) {
              const err = await res.text();
              console.error(`Server call failed: ${action.method}`, err);
              toast.error(`Server error: ${action.method}`);
              continue;
            }

            const data = await res.json();

            // Apply patches from response
            if (action.patches && action.patches.length > 0) {
              const updates: Record<string, unknown> = {};
              for (const patch of action.patches) {
                const path = patch.fromResponse ? patch.fromResponse.split(".") : [];
                let val: unknown = data;
                for (const key of path) {
                  if (val && typeof val === "object") val = (val as Record<string, unknown>)[key];
                  else { val = undefined; break; }
                }
                // Fallback: if fromResponse is empty, use the whole response
                if (path.length === 0) val = data;
                updates[patch.field as string] = val;
              }
              setValues((prev: Record<string, unknown>) => ({ ...prev, ...updates }));
            }
          } catch (err) {
            console.error(`Server call error: ${action.method}`, err);
            toast.error(`Network error: ${action.method}`);
          } finally {
            loadingRef.current.delete(action.method);
          }
          break;
        }

        case "raw": {
          try {
            await action.execute?.(null, doc);
          } catch (err) {
            console.error(`Raw action error on ${fieldName}:`, err);
          }
          break;
        }
      }
    }

    return { success: true };
  }, [doctype, values, setValues]);

  const runSetupTriggers = useCallback(() => {
    const triggers = triggersRef.current;
    if (!triggers) return;

    for (const key of Object.keys(triggers)) {
      if (key.startsWith("$")) {
        const hook = triggers[key];
        if (hook?.onSetup) {
          for (const action of hook.onSetup) {
            if (action.type === "raw") {
              action.execute?.(null, values);
            }
          }
        }
      }
    }
  }, [values]);

  return { executeFieldTriggers, runSetupTriggers, hasTriggers: !!triggersRef.current };
}
