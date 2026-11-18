"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { LANGUAGES, chooseLanguage, loadTranslateWidget, readLanguage } from "@/lib/translate";

const subscribe = () => () => {};

export function LanguageMenu() {
  const current = useSyncExternalStore(subscribe, readLanguage, () => "en");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (current !== "en") loadTranslateWidget().catch(() => {});
  }, [current]);

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

  return (
    <div ref={rootRef} className="notranslate relative" translate="no">
      <button
        type="button"
        title="Language"
        aria-label="Choose language"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
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
        <ul className="absolute right-0 top-full mt-2 max-h-[70vh] w-44 overflow-y-auto rounded-xl border border-black/10 bg-white p-1 shadow-lg">
          {LANGUAGES.map((language) => {
            const selected = language.code === current;
            return (
              <li key={language.code}>
                <button
                  type="button"
                  lang={language.code}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => (selected ? setOpen(false) : chooseLanguage(language.code))}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left text-sm transition-colors hover:bg-black/5 ${
                    selected ? "font-semibold text-[var(--ink)]" : "text-[var(--ink)]/80"
                  }`}
                >
                  {language.label}
                  {selected && (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M8.2 13.6 4.6 10l1.2-1.2 2.4 2.4 6-6L15.4 6z" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
