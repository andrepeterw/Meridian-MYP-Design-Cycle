import Link from "next/link";
import { Fragment } from "react";
import { commandTermFormToSlug } from "@/content/command-terms";

const MARKER = /\{\{([^}]+)\}\}/g;

/**
 * Renders content text, turning any {{word}} marker into a link to that
 * word's entry on the Command Terms page. Markers are hand placed in the
 * grade content files only where a word is genuinely being used as the
 * MYP command term (the instructional verb), not as an ordinary noun.
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
        return (
          <Link
            key={i}
            href={`/command-terms#term-${slug}`}
            className="underline decoration-dotted decoration-1 underline-offset-2 text-inherit hover:decoration-solid"
          >
            {part}
          </Link>
        );
      })}
    </>
  );
}
