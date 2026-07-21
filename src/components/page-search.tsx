"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MARK_ATTR = "data-page-search";

function clearHighlights() {
  document.querySelectorAll(`mark[${MARK_ATTR}]`).forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mark.textContent ?? ""), mark);
    parent.normalize();
  });
}

function highlightMatches(query: string): HTMLElement[] {
  const lower = query.toLowerCase();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement?.tagName;
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      if (tag && ["SCRIPT", "STYLE", "MARK", "INPUT", "NAV"].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.toLowerCase().includes(lower)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  let current: Node | null;
  while ((current = walker.nextNode())) nodes.push(current as Text);

  const marks: HTMLElement[] = [];
  for (const textNode of nodes) {
    const text = textNode.nodeValue ?? "";
    const idx = text.toLowerCase().indexOf(lower);
    if (idx === -1) continue;

    const mark = document.createElement("mark");
    mark.setAttribute(MARK_ATTR, "true");
    mark.className = "bg-primary/30 text-inherit rounded px-0.5";
    mark.textContent = text.slice(idx, idx + query.length);

    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.createTextNode(text.slice(0, idx)));
    fragment.appendChild(mark);
    fragment.appendChild(document.createTextNode(text.slice(idx + query.length)));

    textNode.parentNode?.replaceChild(fragment, textNode);
    marks.push(mark);
  }
  return marks;
}

export function PageSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    clearHighlights();
    if (!open || query.trim().length < 2) return;
    const matches = highlightMatches(query.trim());
    matches[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
    return () => clearHighlights();
  }, [query, open]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="flex items-center">
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "w-40 sm:w-56 opacity-100 mr-2" : "w-0 opacity-0 mr-0"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && close()}
          placeholder="Search this page..."
          className="w-full rounded-full border border-outline-variant bg-surface px-4 py-1.5 font-body-sm text-body-sm text-on-surface outline-none focus:border-primary"
        />
      </div>
      <button
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        className="hover:opacity-70 transition-opacity duration-300"
        aria-label={open ? "Close search" : "Open search"}
      >
        {open ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
      </button>
    </div>
  );
}
