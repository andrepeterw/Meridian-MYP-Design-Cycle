"use client";

import { Fragment } from "react";
import { commandTermFormToSlug, commandTermBySlug } from "@/content/command-terms";
import { TERM_TOOLTIP_SHOW, TERM_TOOLTIP_HIDE } from "@/lib/termTooltipEvents";

const MARKER = /\{\{([^}]+)\}\}/g;

function show(el: HTMLElement, slug: string) {
  window.dispatchEvent(new CustomEvent(TERM_TOOLTIP_SHOW, { detail: { el, slug } }));
}
function hide(el: HTMLElement) {
  window.dispatchEvent(new CustomEvent(TERM_TOOLTIP_HIDE, { detail: { el } }));
}

/**
 * Renders content text, turning any {{word}} marker into an inline command
 * term with a hover/focus-triggered definition (see TermTooltipLayer).
 * Markers are hand placed in the grade content files only where a word is
 * genuinely being used as the MYP command term (the instructional verb),
 * not as an ordinary noun.
 */
export function TermText({ text }: { text: string }) {
  const parts = text.split(MARKER);
  // text.split with a capturing group alternates: [plain, marked, plain, marked, ...]
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) {
          return part ? <Fragment key={i}>{part}</Fragment> : null;
        }
        const slug = commandTermFormToSlug[part.toLowerCase()];
        if (!slug) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`TermText: no command term matches marked word "${part}"`);
          }
          return <Fragment key={i}>{part}</Fragment>;
        }
        const definition = commandTermBySlug[slug].definition;
        return (
          <span
            key={i}
            tabIndex={0}
            aria-label={`${part}: MYP command term. ${definition}`}
            className="cursor-help underline decoration-dotted decoration-1 underline-offset-2 hover:decoration-solid"
            onMouseEnter={(e) => show(e.currentTarget, slug)}
            onMouseLeave={(e) => hide(e.currentTarget)}
            onFocus={(e) => show(e.currentTarget, slug)}
            onBlur={(e) => hide(e.currentTarget)}
          >
            {part}
          </span>
        );
      })}
    </>
  );
}
