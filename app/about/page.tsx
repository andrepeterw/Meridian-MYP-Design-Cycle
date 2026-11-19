import type { Metadata } from "next";
import { homeContent } from "@/content/home";
import { references } from "@/content/references";
import { MeridianMark } from "@/components/MeridianMark";
import { DesignCycleWheel } from "@/components/DesignCycleWheel";
import { EmphasisText } from "@/components/EmphasisText";

export const metadata: Metadata = {
  title: "About | Meridian",
  description:
    "What Meridian is, how to use it, common questions, and the research behind it.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        <MeridianMark className="mx-auto h-16 w-16" />
        <h1 className="mt-6 text-4xl font-bold text-[var(--ink)] md:text-5xl">
          About Meridian
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

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-[var(--ink)]">How to use it</h2>
        <ol className="space-y-3">
          {homeContent.howToUse.map((step, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-[var(--ink)]/85">
              <span className="shrink-0 whitespace-nowrap font-bold text-[var(--ink)]/40">{i + 1}.</span>
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
          {homeContent.credits.designerBeforeLink}
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
        <p className="mt-2">
          This work is licensed under{" "}
          <a
            href={homeContent.credits.licenseUrl}
            target="_blank"
            rel="noopener noreferrer license"
            className="underline underline-offset-2"
          >
            {homeContent.credits.licenseText}
          </a>
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt=""
            className="ml-1 inline-block h-[1em] w-[1em] align-text-bottom"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt=""
            className="ml-1 inline-block h-[1em] w-[1em] align-text-bottom"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
            alt=""
            className="ml-1 inline-block h-[1em] w-[1em] align-text-bottom"
          />
        </p>
      </section>
    </main>
  );
}
