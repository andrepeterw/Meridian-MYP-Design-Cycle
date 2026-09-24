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
          className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2"
        >
          <svg viewBox="0 0 24 24" className="h-[1.725rem] w-[1.725rem] drop-shadow-sm">
            <path
              d="M12 1.5C7.86 1.5 4.5 4.86 4.5 9c0 5.63 7.5 13.5 7.5 13.5S19.5 14.63 19.5 9c0-4.14-3.36-7.5-7.5-7.5z"
              fill="var(--ink)"
              stroke="var(--paper)"
              strokeWidth={1.75}
            />
            <circle cx="12" cy="9" r="2.75" fill="var(--paper)" />
          </svg>
        </span>
        <LaunchButton />
      </div>
    </div>
  );
}
