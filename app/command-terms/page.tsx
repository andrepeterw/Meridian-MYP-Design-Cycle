import type { Metadata } from "next";
import { commandTerms } from "@/content/command-terms";
import { CommandTermIcon } from "@/components/CommandTermIcon";
import { CommandTermHighlighter } from "@/components/CommandTermHighlighter";

export const metadata: Metadata = {
  title: "Command Terms | Meridian",
  description: "The MYP command terms for design, defined in plain language.",
};

export default function CommandTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-16">
      <CommandTermHighlighter />
      <h1 className="text-4xl font-bold text-[var(--ink)]">Command Terms</h1>
      <p className="mt-4 leading-relaxed text-[var(--ink)]/80">
        Every strand on your grade page uses specific instructional words, like Explain,
        Justify, or Analyse. These words are not interchangeable: each one asks for a
        different kind of answer. Wherever one of these words appears on a grade page as an
        instruction, it links here. Click a term anywhere to jump straight back to its
        definition.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {commandTerms.map((t) => (
          <div
            key={t.slug}
            id={`term-${t.slug}`}
            className="rounded-2xl border border-black/10 bg-white/95 p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--ink)]/5 text-[var(--ink)]">
                <CommandTermIcon slug={t.slug} className="h-6 w-6" />
              </span>
              <h2 className="text-lg font-semibold text-[var(--ink)]">{t.term}</h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--ink)]/80">{t.definition}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
