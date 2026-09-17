import Link from "next/link";
import type { Metadata } from "next";
import { homeContent } from "@/content/home";
import { references } from "@/content/references";
import { gradeList } from "@/content/grades";
import { AISL, criterionTheme, gradeAccent } from "@/content/theme";
import { MeridianMark } from "@/components/MeridianMark";
import { DesignCycleWheel } from "@/components/DesignCycleWheel";
import { EmphasisText } from "@/components/EmphasisText";

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
          Meridian is a map for the{" "}
          <a
            href={homeContent.introLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {homeContent.introLinkText}
          </a>
          {homeContent.introAfterLink}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink)]/60">
          {homeContent.whyThisExists}
        </p>
      </section>

      <section className="mx-auto max-w-[515px] px-6 pb-16 text-center">
        <DesignCycleWheel className="h-auto w-full" />
        <p className="mt-4 text-sm text-[var(--ink)]/50">
          Hover, tap, or tab to a quarter of the wheel for what it means.
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
              style={{ ["--grade-color" as string]: gradeAccent[g] }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-white/90 px-4 py-8 text-center shadow-sm transition-colors duration-200 hover:border-[var(--grade-color)] hover:bg-[var(--grade-color)] hover:shadow-md"
            >
              <span className="text-3xl font-bold text-[var(--ink)] transition-colors duration-200 group-hover:text-white">
                {g}
              </span>
              <span className="mt-1 text-sm text-[var(--ink)]/60 transition-colors duration-200 group-hover:text-white/80">
                Grade {g}
              </span>
            </Link>
          ))}
          <Link
            href="/process-journal"
            style={{ background: criterionTheme.A.tint, ["--pj-color" as string]: AISL.grey }}
            className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-black/5 px-4 py-8 text-center shadow-sm ring-2 ring-transparent transition-all duration-200 hover:shadow-md hover:ring-[var(--pj-color)] sm:col-span-1 md:col-span-5"
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
                <EmphasisText text={ref.apa} />
                {ref.url && (
                  <>
                    {" "}
                    <a
                      href={ref.url}
                      className="text-[var(--ink)] underline underline-offset-2 break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.url}
                    </a>
                  </>
                )}
              </li>
            ))}
        </ul>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 text-center text-sm text-[var(--ink)]/60">
        <p>
          <a
            href={homeContent.credits.designerLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {homeContent.credits.designerLinkText}
          </a>
          {homeContent.credits.designerAfterLink}
        </p>
        <p>{homeContent.credits.reviewer}</p>
        <p>{homeContent.credits.year}</p>
      </section>
    </main>
  );
}
