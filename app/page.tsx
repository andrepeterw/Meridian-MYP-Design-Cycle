import Link from "next/link";
import type { Metadata } from "next";
import { homeContent } from "@/content/home";
import { references } from "@/content/references";
import { gradeList } from "@/content/grades";
import { criterionOrder, criterionTheme } from "@/content/theme";
import { MeridianMark } from "@/components/MeridianMark";

export const metadata: Metadata = {
  title: "Meridian: The MYP Design Cycle Route",
  description:
    "A grade-scaffolded route through the MYP Design Cycle, from Criterion A to Criterion D.",
};

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        <MeridianMark className="mx-auto h-16 w-16" />
        <h1 className="mt-6 text-4xl font-bold text-[var(--ink)] md:text-5xl">
          {homeContent.siteTitle}
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[var(--ink)]/80">
          {homeContent.intro}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink)]/60">
          {homeContent.whyThisExists}
        </p>
      </section>

      <section id="grades" className="mx-auto max-w-4xl scroll-mt-20 px-6 pb-20">
        <h2 className="mb-6 text-center text-2xl font-bold text-[var(--ink)]">
          Choose your grade
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {gradeList.map((g) => (
            <Link
              key={g}
              href={`/grade-${g}`}
              className="flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-white/90 px-4 py-8 text-center shadow-sm transition hover:shadow-md"
            >
              <span className="text-3xl font-bold text-[var(--ink)]">{g}</span>
              <span className="mt-1 text-sm text-[var(--ink)]/60">Grade {g}</span>
            </Link>
          ))}
          <Link
            href="/process-journal"
            className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-black/5 px-4 py-8 text-center shadow-sm transition hover:shadow-md sm:col-span-1 md:col-span-5"
            style={{ background: criterionTheme.A.tint }}
          >
            <span className="text-lg font-semibold text-[var(--ink)]">Process Journal guide</span>
            <span className="mt-1 text-sm text-[var(--ink)]/60">
              Set up and maintain your journal in Google Sites
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-[var(--ink)]">How to use it</h2>
        <ol className="space-y-3">
          {homeContent.howToUse.map((step, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-[var(--ink)]/85">
              <span className="font-bold text-[var(--ink)]/40">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-[var(--ink)]">
          What the four criteria mean
        </h2>
        <ul className="space-y-3">
          {criterionOrder.map((key) => (
            <li key={key} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: criterionTheme[key].color }}
              >
                {key}
              </span>
              <span className="text-[var(--ink)]/85">{criterionTheme[key].name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-[var(--ink)]">FAQ</h2>
        <div className="space-y-3">
          {homeContent.faq.map((item, i) => (
            <details key={i} className="rounded-xl border border-black/5 bg-white/90 p-4">
              <summary className="cursor-pointer font-medium text-[var(--ink)]">
                {item.question}
              </summary>
              <p className="mt-2 leading-relaxed text-[var(--ink)]/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-[var(--ink)]">References</h2>
        <ul className="space-y-4 text-sm leading-relaxed text-[var(--ink)]/80">
          {references
            .slice()
            .sort((a, b) => a.apa.localeCompare(b.apa))
            .map((ref) => (
              <li key={ref.id} className="pl-8 -indent-8">
                {ref.url ? (
                  <>
                    {ref.apa}{" "}
                    <a
                      href={ref.url}
                      className="text-[var(--ink)] underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.url}
                    </a>
                  </>
                ) : (
                  ref.apa
                )}
              </li>
            ))}
        </ul>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 text-center text-sm text-[var(--ink)]/60">
        <p>{homeContent.credits.designer}</p>
        <p>{homeContent.credits.reviewer}</p>
      </section>
    </main>
  );
}
