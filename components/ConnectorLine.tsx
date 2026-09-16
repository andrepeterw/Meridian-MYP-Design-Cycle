"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CriterionContent, CriterionKey } from "@/content/types";
import { criterionOrder } from "@/content/theme";
import { buildSmoothPath } from "@/lib/path";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MOBILE_BREAKPOINT = 768;

export function ConnectorLine({
  containerRef,
  criteria,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  criteria: Record<CriterionKey, CriterionContent>;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const containerEl = containerRef.current;
    const path = pathRef.current;
    if (!containerEl || !path) return;

    function measure() {
      const containerEl = containerRef.current;
      const path = pathRef.current;
      if (!containerEl || !path) return;

      const containerRect = containerEl.getBoundingClientRect();
      const height = containerEl.scrollHeight;
      const centerX = containerRect.width / 2;
      const isDesktop = window.innerWidth >= MOBILE_BREAKPOINT;

      let d: string;
      if (isDesktop) {
        const anchors = Array.from(
          containerEl.querySelectorAll<HTMLElement>("[data-strand-anchor]")
        );
        const points = anchors.map((a) => {
          const r = a.getBoundingClientRect();
          return {
            x: r.left + r.width / 2 - containerRect.left,
            y: r.top + r.height / 2 - containerRect.top,
          };
        });
        d =
          points.length > 1
            ? buildSmoothPath(points)
            : `M ${centerX} 0 L ${centerX} ${height}`;
      } else {
        d = `M ${centerX} 0 L ${centerX} ${height}`;
      }

      path.setAttribute("d", d);
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = reduceMotion ? "0" : `${length}`;
      setDims({ width: containerRect.width, height });
    }

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(containerEl);
    window.addEventListener("resize", measure);

    let scrollTrigger: ScrollTrigger | undefined;
    if (!reduceMotion) {
      scrollTrigger = ScrollTrigger.create({
        trigger: containerEl,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const currentPath = pathRef.current;
          if (!currentPath) return;
          const length = currentPath.getTotalLength();
          currentPath.style.strokeDashoffset = `${length * (1 - self.progress)}`;
        },
      });
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      scrollTrigger?.kill();
    };
  }, [containerRef, reduceMotion]);

  // Gentle idle wobble, independent of scroll -- disabled under prefers-reduced-motion.
  useEffect(() => {
    if (reduceMotion) return;
    let raf = 0;
    const start = performance.now();
    const amplitudePx = 4;
    const periodMs = 7000;

    function tick(now: number) {
      const t = (now - start) / periodMs;
      const offset = Math.sin(t * Math.PI * 2) * amplitudePx;
      if (svgRef.current) {
        svgRef.current.style.transform = `translateX(${offset}px)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-0"
      width={dims.width || undefined}
      height={dims.height || undefined}
      style={{ willChange: "transform" }}
    >
      <defs>
        <linearGradient
          id="route-line-gradient"
          gradientUnits="userSpaceOnUse"
          x1={dims.width / 2}
          y1={0}
          x2={dims.width / 2}
          y2={dims.height}
        >
          {criterionOrder.map((key, i) => (
            <stop
              key={key}
              offset={`${(i / (criterionOrder.length - 1)) * 100}%`}
              stopColor={criteria[key].color}
            />
          ))}
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="none"
        stroke="url(#route-line-gradient)"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
