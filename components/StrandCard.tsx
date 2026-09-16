"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Strand } from "@/content/types";

export function StrandCard({
  strand,
  color,
  index,
}: {
  strand: Strand;
  color: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={`relative mb-14 w-full last:mb-0 md:w-[calc(50%+2.25rem)] ${
        isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
      }`}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0.3 : 0.5,
        delay: (index % 4) * 0.15,
        ease: "easeOut",
      }}
    >
      <span
        data-strand-anchor
        aria-hidden="true"
        className="absolute top-9 hidden h-3 w-3 -translate-y-1/2 rounded-full ring-4 ring-[var(--paper)] md:block"
        style={{
          background: color,
          [isEven ? "right" : "left"]: "-2.25rem",
        }}
      />

      <div
        className="rounded-2xl border border-black/5 bg-white/95 p-6 shadow-sm"
        style={{ borderLeftColor: color, borderLeftWidth: 4 }}
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm font-bold text-white"
            style={{ background: color }}
          >
            {strand.id}
          </span>
          <h3 className="text-lg font-semibold text-[var(--ink)]">{strand.title}</h3>
        </div>

        <p className="mb-4 leading-relaxed text-[var(--ink)]">{strand.instructions}</p>

        <p className="mb-4 rounded-lg bg-black/[0.035] p-3 text-sm leading-relaxed text-[var(--ink)]">
          <strong>What strong work looks like: </strong>
          {strand.rubricSummary}
        </p>

        <div className="mb-4 space-y-2 text-sm leading-relaxed text-black/70">
          <p>{strand.citation.framing}</p>
          {strand.citation.counterpoint && (
            <p className="border-l-2 border-black/10 pl-3 italic text-black/60">
              {strand.citation.counterpoint}
            </p>
          )}
        </div>

        <p className="text-sm leading-relaxed">
          <span className="font-semibold" style={{ color }}>
            Reflect:{" "}
          </span>
          <span className="text-[var(--ink)]">{strand.reflectionQuestion}</span>
        </p>
      </div>
    </motion.article>
  );
}
