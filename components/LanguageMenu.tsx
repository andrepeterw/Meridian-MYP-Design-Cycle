"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ALL_LANGUAGES, chooseLanguage, loadTranslateWidget, readLanguage, searchLanguages } from "@/lib/translate";

const subscribe = () => () => {};

export function LanguageMenu() {
  const current = useSyncExternalStore(subscribe, readLanguage, () => "en");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (current !== "en") loadTranslateWidget().catch(() => {});
  }, [current]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const listed = searchLanguages(query);
  const active = ALL_LANGUAGES.find((language) => language.code === current);
  const results =
    query.trim() === "" && active && !listed.includes(active) ? [active, ...listed] : listed;

  function pick(code: string) {
    if (code === current) setOpen(false);
    else chooseLanguage(code);
  }

  return (
    <div ref={rootRef} className="notranslate relative" translate="no">
      <button
        type="button"
        title="Language"
        aria-label="Choose language"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => {
          setQuery("");
          setOpen((value) => !value);
        }}
        className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--ink)]/70 transition-colors hover:bg-black/5 hover:text-[var(--ink)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.6 2.5 4 5.6 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.6-4-9s1.4-6.5 4-9z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-black/10 bg-white p-1 shadow-lg">
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="language-results"
            aria-label="Type a language"
            placeholder="Type a language…"
            value={query}
            autoComplete="off"
            spellCheck={false}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && results[0]) {
                event.preventDefault();
                pick(results[0].code);
              }
            }}
            className="mb-1 w-full rounded-lg border border-black/10 bg-[var(--paper)] px-3 py-1.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink)]/45 focus:border-[var(--ink)]/40"
          />
          <ul id="language-results" className="max-h-[60vh] overflow-y-auto">
            {results.length === 0 && (
              <li className="px-3 py-2 text-sm text-[var(--ink)]/60">No language found</li>
            )}
            {results.map((language, index) => {
              const selected = language.code === current;
              const showEnglish = query.trim() !== "" && language.english !== language.label;
              return (
                <li key={language.code}>
                  <button
                    type="button"
                    lang={language.code}
                    aria-current={selected ? "true" : undefined}
                    onClick={() => pick(language.code)}
                    className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-1.5 text-left text-sm transition-colors hover:bg-black/5 ${
                      query.trim() !== "" && index === 0 ? "bg-black/5" : ""
                    } ${selected ? "font-semibold text-[var(--ink)]" : "text-[var(--ink)]/80"}`}
                  >
                    <span>
                      {language.label}
                      {showEnglish && (
                        <span lang="en" className="ml-1.5 text-xs font-normal text-[var(--ink)]/50">
                          {language.english}
                        </span>
                      )}
                    </span>
                    {selected && (
                      <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
                        <path d="M8.2 13.6 4.6 10l1.2-1.2 2.4 2.4 6-6L15.4 6z" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
