"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CriterionKey, GradeContent } from "@/content/types";
import { criterionOrder } from "@/content/theme";
import { CriterionSection } from "./CriterionSection";
import { ConnectorLine } from "./ConnectorLine";
import { LaunchButton } from "./LaunchButton";
import { lerpColor } from "@/lib/color";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function DesignCycleRoute({ content }: { content: GradeContent }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Partial<Record<CriterionKey, HTMLElement | null>>>({});

  useEffect(() => {
    const container = containerRef.current;
    const backdrop = backdropRef.current;
    if (!container || !backdrop) return;

    const ctx = gsap.context(() => {
      const sections = criterionOrder
        .map((key) => ({
          key,
          el: sectionRefs.current[key],
          tint: content.criteria[key].tint,
        }))
        .filter(
          (s): s is { key: CriterionKey; el: HTMLElement; tint: string } => !!s.el
        );

      if (sections[0]) {
        backdrop.style.background = sections[0].tint;
      }

      sections.forEach((section, i) => {
        const next = sections[i + 1];
        if (!next) return;
        ScrollTrigger.create({
          trigger: next.el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          onUpdate: (self) => {
            backdrop.style.background = lerpColor(section.tint, next.tint, self.progress);
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [content]);

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={backdropRef}
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{ background: content.criteria.A.tint }}
      />
      <ConnectorLine containerRef={containerRef} criteria={content.criteria} />
      {criterionOrder.map((key) => (
        <CriterionSection
          key={key}
          criterion={content.criteria[key]}
          ref={(el) => {
            sectionRefs.current[key] = el;
          }}
        />
      ))}

      <div className="relative z-10 py-20">
        <span
          data-strand-anchor
          aria-hidden="true"
          className="absolute left-1/2 top-8 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "var(--ink)" }}
        />
        <LaunchButton />
      </div>
    </div>
  );
}
