"use client";

import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";

interface LinkResult {
  name: string;
  label?: string | null;
}

interface LinkAutocompleteProps {
  id?: string;
  doctype: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function LinkAutocomplete({
  id,
  doctype,
  value,
  onChange,
  disabled,
  placeholder,
}: LinkAutocompleteProps) {
  const [input, setInput] = useState(value);
  const [debounced] = useDebounce(input, 200);
  const [results, setResults] = useState<LinkResult[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInput(value);
  }, [value]);

  useEffect(() => {
    if (!open || !doctype) return;
    const q = encodeURIComponent(debounced);
    fetch(`/api/link-search?doctype=${encodeURIComponent(doctype)}&q=${q}`)
      .then((r) => r.json())
      .then((d) => setResults(d.results ?? []))
      .catch(() => setResults([]));
  }, [debounced, doctype, open]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <Input
        id={id}
        type="text"
        value={input}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          setInput(e.target.value);
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {open && results.length > 0 && (
        <div className="absolute z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-md border bg-white shadow-lg">
          {results.map((r) => (
            <button
              key={r.name}
              type="button"
              className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
              onClick={() => {
                onChange(r.name);
                setInput(r.name);
                setOpen(false);
              }}
            >
              <div className="font-medium">{r.name}</div>
              {r.label && r.label !== r.name && (
                <div className="text-xs text-gray-500">{r.label}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
