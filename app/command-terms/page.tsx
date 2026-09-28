import type { Metadata } from "next";
import { commandTerms } from "@/content/command-terms";
import { achievementLevelsByStrand } from "@/content/achievement-levels";
import { criterionTheme } from "@/content/theme";
import { CommandTermIcon } from "@/components/CommandTermIcon";
import { AchievementLadder } from "@/components/AchievementLadder";

export const metadata: Metadata = {
  title: "Command Terms | Meridian",
  description: "The MYP command terms for design, defined in plain language.",
};

const exampleLevels = achievementLevelsByStrand["A.i"]!.year5;

export default function CommandTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-16">
      <h1 className="text-4xl font-bold text-[var(--ink)]">Command Terms</h1>
      <p className="mt-4 leading-relaxed text-[var(--ink)]/80">
        Every strand on your grade page uses specific instructional words, like Explain,
        Justify, or Analyse. These words are not interchangeable: each one asks for a
        different kind of answer. This page is a reference glossary for all of them, in
        one place.
      </p>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white/95 p-6 shadow-sm">
        <p className="mb-5 leading-relaxed text-[var(--ink)]/80">
          A command term describes how deep your answer needs to go, not how old you are.
          Here is the same task, answered four different ways.
        </p>
        <p className="mb-4 text-sm font-semibold" style={{ color: criterionTheme.A.color }}>
          A.i &mdash; Explain and justify the need for a solution
        </p>
        <AchievementLadder levels={exampleLevels} color={criterionTheme.A.color} size="large" />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {commandTerms.map((t) => (
          <div
            key={t.slug}
            className="rounded-2xl border border-black/10 bg-white/95 p-5 shadow-sm transition-all duration-200 hover:border-[var(--ink)]/25 hover:shadow-md"
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
