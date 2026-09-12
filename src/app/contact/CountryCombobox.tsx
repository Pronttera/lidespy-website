"use client";

import { useId, useMemo, useRef, useState } from "react";
import COUNTRIES from "@/data/countries.json";
import { ChevronDown } from "@/components/icons";
import { flag } from "./flag";

export type Country = (typeof COUNTRIES)[number];

/** Matches ranked the way people expect: what it starts with, then contains. */
function search(query: string): Country[] {
  const q = query.trim().toLowerCase();
  if (!q) return COUNTRIES;
  const starts: Country[] = [];
  const contains: Country[] = [];
  for (const c of COUNTRIES) {
    const name = c.name.toLowerCase();
    if (name.startsWith(q)) starts.push(c);
    else if (name.includes(q)) contains.push(c);
  }
  return [...starts, ...contains];
}

/**
 * A country field that behaves like a combobox: type to filter, arrow keys to
 * move, Enter or click to pick. The input is the form control, so the value
 * still posts as `country` with no hidden field behind it.
 */
export default function CountryCombobox({
  value,
  error,
  className,
  onChange,
  onPick,
  onBlur,
}: {
  value: string;
  error?: string;
  className: string;
  onChange: (value: string) => void;
  onPick: (country: Country) => void;
  onBlur: () => void;
}) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  // An exact match means the visitor has already chosen: show the whole list
  // again rather than the single country they are sitting on.
  const exact = COUNTRIES.some((c) => c.name === value);
  const matches = useMemo(() => (exact ? COUNTRIES : search(value)), [value, exact]);

  const openAt = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  const pick = (country: Country) => {
    onPick(country);
    setOpen(false);
  };

  /** Keeps the highlighted row in view as the arrows walk past the fold. */
  const scrollTo = (index: number) => {
    const el = listRef.current?.children[index];
    el?.scrollIntoView({ block: "nearest" });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) return openAt(0);
      const next =
        event.key === "ArrowDown"
          ? (active + 1) % matches.length
          : (active - 1 + matches.length) % matches.length;
      setActive(next);
      scrollTo(next);
      return;
    }
    if (event.key === "Enter" && open && matches[active]) {
      event.preventDefault();
      pick(matches[active]);
      return;
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  const selected = COUNTRIES.find((c) => c.name === value);

  return (
    <div
      className="relative"
      onBlur={(event) => {
        // Only a move right out of the field counts as leaving it.
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
        setOpen(false);
        onBlur();
      }}
    >
      <div className="relative">
        {selected && (
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[15px] leading-none"
          >
            {flag(selected.iso)}
          </span>
        )}
        <input
          name="country"
          value={value}
          role="combobox"
          autoComplete="off"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            open && matches[active] ? `${listId}-${matches[active].iso}` : undefined
          }
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "country-error" : undefined}
          onChange={(event) => {
            onChange(event.target.value);
            openAt(0);
          }}
          onFocus={() => openAt(0)}
          onKeyDown={onKeyDown}
          className={`${className} w-full pr-10 ${selected ? "pl-9" : ""}`}
        />
        <ChevronDown
          size={12}
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink"
        />
      </div>

      {open && (
        <ul
          id={listId}
          ref={listRef}
          role="listbox"
          className="absolute top-[calc(100%+4px)] right-0 left-0 z-20 max-h-[228px] overflow-y-auto rounded-ui border border-ink/20 bg-white py-1 shadow-[0_18px_40px_-24px_rgba(18,21,15,0.45)]"
        >
          {matches.map((c, i) => (
            <li
              key={c.iso}
              id={`${listId}-${c.iso}`}
              role="option"
              aria-selected={c.name === value}
              // Pick before focus leaves, so the click is not lost to the blur.
              onMouseDown={(event) => {
                event.preventDefault();
                pick(c);
              }}
              onMouseEnter={() => setActive(i)}
              className={`flex cursor-pointer items-center gap-2.5 px-3.5 py-2 text-[13.5px] ${
                i === active ? "bg-panel text-ink" : "text-muted"
              }`}
            >
              <span aria-hidden className="text-[14px] leading-none">
                {flag(c.iso)}
              </span>
              {c.name}
            </li>
          ))}
          {matches.length === 0 && (
            <li className="px-3.5 py-2.5 text-[13px] text-muted-3">
              No country matches that.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
