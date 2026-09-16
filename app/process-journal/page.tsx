import type { Metadata } from "next";
import { processJournalContent, exemplarSiteUrl } from "@/content/process-journal";

export const metadata: Metadata = {
  title: "Process Journal Guide | Meridian",
  description: "How to build and maintain your MYP Design Process Journal in Google Sites.",
};

export default function ProcessJournalPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-16">
      <h1 className="text-4xl font-bold text-[var(--ink)]">Your Process Journal</h1>
      <p className="mt-4 leading-relaxed text-[var(--ink)]/80">{processJournalContent.intro}</p>

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--ink)]">
        Part one: building your journal
      </h2>
      <ol className="space-y-3">
        {processJournalContent.setup.steps.map((step, i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-[var(--ink)]/85">
            <span className="font-bold text-[var(--ink)]/40">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-xl border border-black/5 bg-white/90 p-4">
        <h3 className="font-semibold text-[var(--ink)]">Sharing setting</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/75">
          {processJournalContent.setup.sharingSetting}
        </p>
      </div>

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--ink)]">Required page tree</h2>
      <p className="mb-6 leading-relaxed text-[var(--ink)]/80">
        Build one section per unit. Inside it, one section per criterion, and one page per
        strand, exactly like this:
      </p>
      <div className="space-y-6">
        {processJournalContent.tree.map((criterion) => (
          <div key={criterion.key} className="rounded-xl border border-black/5 bg-white/90 p-4">
            <h3 className="flex items-center gap-2 font-semibold text-[var(--ink)]">
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: criterion.color }}
              >
                {criterion.key}
              </span>
              Criterion {criterion.key}: {criterion.name}
            </h3>
            <ul className="mt-3 space-y-2 pl-8 text-sm text-[var(--ink)]/80">
              {criterion.nodes.map((node) => (
                <li key={node.id}>
                  <span className="font-medium text-[var(--ink)]">{node.label}</span>
                  {" — "}
                  {node.evidenceNote}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--ink)]">What to upload, and when</h2>
      <ul className="space-y-3">
        {processJournalContent.uploadGuidance.map((point, i) => (
          <li key={i} className="leading-relaxed text-[var(--ink)]/85">
            {point}
          </li>
        ))}
      </ul>

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--ink)]">
        Part two: see an example
      </h2>

      {exemplarSiteUrl ? (
        <p className="leading-relaxed text-[var(--ink)]/85">
          See a real, consented example journal here:{" "}
          <a
            href={exemplarSiteUrl}
            className="text-[var(--ink)] underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {exemplarSiteUrl}
          </a>
        </p>
      ) : (
        <>
          <div className="rounded-xl border border-black/10 bg-black/[0.03] p-4 text-sm font-medium text-[var(--ink)]/80">
            {processJournalContent.exemplar.disclaimer}
          </div>
          <p className="mt-4 leading-relaxed text-[var(--ink)]/80">
            <strong>{processJournalContent.exemplar.projectName}</strong>
          </p>
          <div className="mt-6 space-y-6">
            {processJournalContent.tree.map((criterion) => (
              <div key={criterion.key} className="rounded-xl border border-black/5 bg-white/90 p-4">
                <h3 className="flex items-center gap-2 font-semibold text-[var(--ink)]">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: criterion.color }}
                  >
                    {criterion.key}
                  </span>
                  Criterion {criterion.key}
                </h3>
                <ul className="mt-3 space-y-3 pl-8 text-sm text-[var(--ink)]/80">
                  {criterion.nodes.map((node) => (
                    <li key={node.id}>
                      <span className="font-medium text-[var(--ink)]">{node.label}</span>
                      {": "}
                      {processJournalContent.exemplar.entries[node.id] ?? node.evidenceNote}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
