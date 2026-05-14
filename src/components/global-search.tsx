"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";

interface SearchResult {
  doctype: string;
  name: string;
  content?: string | null;
}

export function GlobalSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [debounced] = useDebounce(input, 250);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!debounced) {
      setResults([]);
      return;
    }
    fetch(`/api/global-search?q=${encodeURIComponent(debounced)}`)
      .then((r) => r.json())
      .then((d) => setResults(d.results ?? []))
      .catch(() => setResults([]));
  }, [debounced]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(r: SearchResult) {
    setOpen(false);
    setInput("");
    if (r.doctype === "DocType") {
      router.push(`/list/${encodeURIComponent(r.name)}`);
    } else {
      router.push(`/form/${encodeURIComponent(r.doctype)}/${encodeURIComponent(r.name)}`);
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex h-9 w-64 items-center gap-2 rounded-md border bg-[#f5f5f5] px-3">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>
      {open && input && results.length > 0 && (
        <div className="absolute left-0 z-50 mt-1 max-h-96 w-80 overflow-y-auto rounded-md border bg-white shadow-lg">
          {results.map((r, i) => (
            <button
              key={`${r.doctype}/${r.name}/${i}`}
              type="button"
              className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
              onClick={() => navigate(r)}
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">{r.name}</div>
                <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
                  {r.doctype}
                </span>
              </div>
              {r.content && (
                <div className="line-clamp-1 text-xs text-gray-500">{r.content}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
