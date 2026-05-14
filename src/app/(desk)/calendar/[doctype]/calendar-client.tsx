"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Event {
  name: string;
  subject: string;
  start: string;
  end: string;
}

interface CalendarClientProps {
  doctype: string;
  events: Event[];
  hasConfig: boolean;
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function CalendarClient({ doctype, events, hasConfig }: CalendarClientProps) {
  const [cursor, setCursor] = useState<Date>(() => new Date());

  const monthStart = startOfMonth(cursor);
  const monthEnd = endOfMonth(cursor);
  const firstWeekday = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();

  const cells = useMemo(() => {
    const total = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
    return Array.from({ length: total }, (_, i) => {
      const dayNum = i - firstWeekday + 1;
      if (dayNum < 1 || dayNum > daysInMonth) return null;
      return new Date(cursor.getFullYear(), cursor.getMonth(), dayNum);
    });
  }, [cursor, firstWeekday, daysInMonth]);

  const byDate = useMemo(() => {
    const m = new Map<string, Event[]>();
    for (const e of events) {
      if (!e.start) continue;
      const key = e.start.slice(0, 10);
      if (!m.has(key)) m.set(key, []);
      m.get(key)!.push(e);
    }
    return m;
  }, [events]);

  const monthLabel = cursor.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  function shift(delta: number) {
    setCursor((c) => new Date(c.getFullYear(), c.getMonth() + delta, 1));
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/list/${doctype}`} className="text-gray-400 hover:text-gray-600">
            <ArrowLeft size={20} />
          </Link>
          <CalendarDays className="text-gray-500" size={20} />
          <h1 className="text-xl font-semibold text-gray-900">{doctype} Calendar</h1>
          {!hasConfig && (
            <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] text-yellow-700">
              fallback (no Calendar View)
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border bg-white p-1.5 hover:bg-gray-50"
            onClick={() => shift(-1)}
          >
            <ChevronLeft size={16} />
          </button>
          <div className="min-w-[140px] text-center text-sm font-medium">{monthLabel}</div>
          <button
            className="rounded-md border bg-white p-1.5 hover:bg-gray-50"
            onClick={() => shift(1)}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-b bg-gray-50 text-xs font-medium text-gray-600">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="px-2 py-2 text-center">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              const dayEvents = day ? byDate.get(isoDate(day)) ?? [] : [];
              return (
                <div
                  key={i}
                  className="min-h-[88px] border-b border-r p-1.5 text-xs"
                >
                  {day && (
                    <>
                      <div className="mb-1 text-gray-500">{day.getDate()}</div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 3).map((e) => (
                          <Link
                            key={e.name}
                            href={`/form/${doctype}/${encodeURIComponent(e.name)}`}
                            className="block truncate rounded bg-blue-50 px-1 py-0.5 text-blue-700 hover:bg-blue-100"
                            title={e.subject}
                          >
                            {e.subject}
                          </Link>
                        ))}
                        {dayEvents.length > 3 && (
                          <div className="text-[10px] text-gray-400">
                            +{dayEvents.length - 3} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
