import Link from "next/link";
import type { GradeContent } from "@/content/types";
import { criterionOrder } from "@/content/theme";
import { gradeList } from "@/content/grades";
import { TermText } from "./TermText";

export function GradeHeader({ content }: { content: GradeContent }) {
  return (
    <header className="relative z-10 border-b border-black/5 bg-[var(--paper)]">
      <div className="mx-auto max-w-4xl px-6 py-10 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--ink)]/60">
          {content.mypYear}
        </p>
        <h1 className="mt-2 text-4xl font-bold text-[var(--ink)] md:text-5xl">
          Grade {content.grade}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[var(--ink)]/80">
          <TermText text={content.tagline} />
        </p>

        <nav aria-label="Jump to criterion" className="mt-6 flex flex-wrap justify-center gap-2">
          {criterionOrder.map((key) => (
            <a
              key={key}
              href={`#criterion-${key}`}
              className="rounded-full px-3 py-1 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-110"
              style={{ background: content.criteria[key].color }}
            >
              {key}: {content.criteria[key].name}
            </a>
          ))}
        </nav>

        <nav aria-label="Switch grade" className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          {gradeList.map((g) => (
            <Link
              key={g}
              href={`/grade-${g}`}
              aria-current={g === content.grade ? "page" : undefined}
              className={
                g === content.grade
                  ? "rounded-full border border-[var(--ink)]/20 bg-[var(--ink)]/5 px-3 py-1 font-semibold text-[var(--ink)]"
                  : "rounded-full px-3 py-1 text-[var(--ink)]/60 hover:text-[var(--ink)]"
              }
            >
              Grade {g}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
