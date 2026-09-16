import { forwardRef } from "react";
import type { CriterionContent, CriterionKey } from "@/content/types";
import { StrandCard } from "./StrandCard";
import { TermText } from "./TermText";

const headingText: Record<CriterionKey, string> = {
  A: "Inquiring and {{analysing}}",
  B: "{{Developing}} ideas",
  C: "{{Creating}} the solution",
  D: "{{Evaluating}}",
};

export const CriterionSection = forwardRef<HTMLElement, { criterion: CriterionContent }>(
  function CriterionSection({ criterion }, ref) {
    return (
      <section
        ref={ref}
        id={`criterion-${criterion.key}`}
        aria-labelledby={`criterion-${criterion.key}-heading`}
        className="relative py-20 md:py-28"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:max-w-4xl">
          <header className="mb-14 text-center">
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold text-white shadow-sm"
              style={{ background: criterion.color }}
              aria-hidden="true"
            >
              {criterion.key}
            </span>
            <h2
              id={`criterion-${criterion.key}-heading`}
              className="mt-4 text-2xl font-bold text-[var(--ink)] md:text-3xl"
            >
              <TermText text={`Criterion ${criterion.key}: ${headingText[criterion.key]}`} />
            </h2>
          </header>

          <div className="relative">
            {criterion.strands.map((strand, i) => (
              <StrandCard key={strand.id} strand={strand} color={criterion.color} index={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);
