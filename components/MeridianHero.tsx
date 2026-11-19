"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AISL, criterionTheme, gradeAccent } from "@/content/theme";
import type { CriterionKey, Grade } from "@/content/types";

type Phase = "scatter" | "line" | "circle";

interface Strand {
  code: string;
  name: string;
  criterion: CriterionKey;
}

// Order matters: A.i through D.iv in sequence lets the circle and arc phases
// group each criterion into its own quarter of the wheel.
const STRANDS: Strand[] = [
  { code: "A.i", name: "Explain the need", criterion: "A" },
  { code: "A.ii", name: "Prioritize research", criterion: "A" },
  { code: "A.iii", name: "Analyse products", criterion: "A" },
  { code: "A.iv", name: "Develop the brief", criterion: "A" },
  { code: "B.i", name: "Develop specifications", criterion: "B" },
  { code: "B.ii", name: "Develop design ideas", criterion: "B" },
  { code: "B.iii", name: "Present your choice", criterion: "B" },
  { code: "B.iv", name: "Plan and diagram", criterion: "B" },
  { code: "C.i", name: "Plan your build", criterion: "C" },
  { code: "C.ii", name: "Show technical skill", criterion: "C" },
  { code: "C.iii", name: "Follow your plan", criterion: "C" },
  { code: "C.iv", name: "Explain your changes", criterion: "C" },
  { code: "D.i", name: "Design your testing", criterion: "D" },
  { code: "D.ii", name: "Evaluate success", criterion: "D" },
  { code: "D.iii", name: "Explain improvements", criterion: "D" },
  { code: "D.iv", name: "Explain the impact", criterion: "D" },
];

const GRADES: Grade[] = [6, 7, 8, 9, 10];

const TOTAL_CARDS = STRANDS.length;
const MAX_SCROLL = 3000;
// Scrolling past this finishes the circle-to-arc morph and reveals the buttons.
const REVEAL_SCROLL = 600;
const KEY_STEP = 150;
const CARD_WIDTH = 60;
const CARD_HEIGHT = 85;
const FALLBACK_HEADER_HEIGHT = 53;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

// A fixed, repeatable scatter (rather than Math.random) so rendering stays pure
// and looks the same on every visit.
const pseudoRandom = (index: number, salt: number) => {
  const value = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};
const SCATTER = STRANDS.map((_, i) => ({
  x: (pseudoRandom(i, 1) - 0.5) * 1500,
  y: (pseudoRandom(i, 2) - 0.5) * 1000,
  rotation: (pseudoRandom(i, 3) - 0.5) * 180,
  scale: 0.6,
  opacity: 0,
}));

type MotionPreference = "pending" | "reduce" | "full";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

// "pending" until the browser can be asked, so the animated version never
// mounts (and never captures the wheel) for someone who has reduced motion on.
function useMotionPreference(): MotionPreference {
  return useSyncExternalStore<MotionPreference>(
    subscribeToMotionPreference,
    () => (window.matchMedia(MOTION_QUERY).matches ? "reduce" : "full"),
    () => "pending"
  );
}

// The hero fills whatever is left under the top menu, which can be taller on
// narrow screens where its links wrap.
function useHeaderHeight() {
  const [height, setHeight] = useState(FALLBACK_HEADER_HEIGHT);
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const observer = new ResizeObserver(() => setHeight(header.getBoundingClientRect().height));
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
  return height;
}

function GradeLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {GRADES.map((grade) => (
        <Link
          key={grade}
          href={`/grade-${grade}`}
          style={{ ["--grade-color" as string]: gradeAccent[grade] }}
          className="rounded-full border-2 border-[var(--ink)] px-5 py-2 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--grade-color)] hover:bg-[var(--grade-color)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
        >
          Grade {grade}
        </Link>
      ))}
      <Link
        href="/process-journal"
        style={{ background: AISL.blue, ["--pj-color" as string]: AISL.grey }}
        className="rounded-full px-5 py-2 text-sm font-semibold text-white ring-2 ring-transparent transition-all duration-200 hover:ring-[var(--pj-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
      >
        Process Journal Guide
      </Link>
    </div>
  );
}

interface FlipCardProps {
  strand: Strand;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

function FlipCard({ strand, target }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { color, tint } = criterionTheme[strand.criterion];

  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{
        position: "absolute",
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* A real button, so the card is reachable and operable by keyboard. */}
      <motion.button
        type="button"
        onClick={() => setIsFlipped((flipped) => !flipped)}
        aria-pressed={isFlipped}
        aria-label={
          isFlipped
            ? `${strand.code}, ${strand.name}. Tap to show the code again.`
            : `${strand.code}. Tap to reveal what this strand is.`
        }
        className="relative block h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <span
          className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-xl shadow-lg"
          style={{ backfaceVisibility: "hidden", backgroundColor: color }}
        >
          <span className="text-sm font-bold text-white">{strand.code}</span>
        </span>

        <span
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl p-1 text-center shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", backgroundColor: tint }}
        >
          <span className="text-[7px] font-bold uppercase tracking-wide" style={{ color }}>
            {strand.code}
          </span>
          <span className="mt-0.5 hyphens-auto break-words text-[8px] font-medium leading-tight text-[var(--ink)]">
            {strand.name}
          </span>
        </span>
      </motion.button>
    </motion.div>
  );
}

// Fully static version for reduced motion: no wheel capture, no flying cards,
// just the same content in reading order.
function MeridianHeroStatic() {
  return (
    <div className="w-full px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
        Meridian: The MYP Design Cycle Route
      </h1>
      <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-3">
        {STRANDS.map((strand) => {
          const { color, tint } = criterionTheme[strand.criterion];
          return (
            <li key={strand.code} className="rounded-lg p-3" style={{ backgroundColor: tint }}>
              <div className="text-xs font-bold" style={{ color }}>
                {strand.code}
              </div>
              <div className="mt-1 text-[11px] leading-tight text-[var(--ink)]">{strand.name}</div>
            </li>
          );
        })}
      </ul>
      <h2 className="mt-14 text-2xl font-semibold text-[var(--ink)] md:text-3xl">Choose Your Grade</h2>
      <div className="mt-6">
        <GradeLinks />
      </div>
    </div>
  );
}

function MeridianHeroAnimated({ height }: { height: string }) {
  const [introPhase, setIntroPhase] = useState<Phase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTo = (value: number) => {
      scrollRef.current = Math.min(Math.max(value, 0), MAX_SCROLL);
      virtualScroll.set(scrollRef.current);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollTo(scrollRef.current + e.deltaY);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      scrollTo(scrollRef.current + deltaY);
    };

    // Keyboard users cannot use a wheel, so the arrow and page keys drive the same scroll.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const steps: Record<string, number> = {
        ArrowDown: KEY_STEP,
        ArrowUp: -KEY_STEP,
        PageDown: REVEAL_SCROLL,
        PageUp: -REVEAL_SCROLL,
      };
      if (e.key === "Home") scrollTo(0);
      else if (e.key === "End") scrollTo(MAX_SCROLL);
      else if (e.key in steps) scrollTo(scrollRef.current + steps[e.key]);
      else return;
      e.preventDefault();
    };

    // The top menu's "Grade Levels" link points at #grades, so jump to the finished arc.
    // Next's in-page navigation does not fire hashchange, so clicks are watched too.
    const revealGrades = () => scrollTo(Math.max(scrollRef.current, REVEAL_SCROLL));
    const revealForHash = () => {
      if (window.location.hash === "#grades") revealGrades();
    };
    const handleLinkClick = (e: MouseEvent) => {
      if ((e.target as Element).closest?.('a[href$="#grades"]')) revealGrades();
    };
    revealForHash();

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", revealForHash);
    document.addEventListener("click", handleLinkClick);
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", revealForHash);
      document.removeEventListener("click", handleLinkClick);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, REVEAL_SCROLL], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotate = useTransform(virtualScroll, [REVEAL_SCROLL, MAX_SCROLL], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const toLine = setTimeout(() => setIntroPhase("line"), 500);
    const toCircle = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(toLine);
      clearTimeout(toCircle);
    };
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  // Tabbing to a grade button (before the arc has formed) finishes the morph, so
  // a keyboard user never lands on something they cannot see.
  const revealOnFocus = () => {
    if (scrollRef.current < REVEAL_SCROLL) {
      scrollRef.current = REVEAL_SCROLL;
      virtualScroll.set(REVEAL_SCROLL);
    }
  };

  // Keep the title inside the ring of cards instead of running underneath them.
  const ringRadius = Math.min(Math.min(containerSize.width, containerSize.height) * 0.35, 350);
  const titleWidth = Math.max(180, ringRadius * 2 - 130);

  return (
    <div
      ref={containerRef}
      className="relative w-full touch-none overflow-hidden overscroll-none"
      style={{ height }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center text-center"
          style={{ width: titleWidth }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="text-balance text-2xl font-medium tracking-tight text-[var(--ink)] md:text-4xl"
          >
            Meridian: The MYP Design Cycle Route
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 whitespace-nowrap text-[10px] font-bold tracking-[0.15em] text-[var(--ink)]/60 md:text-xs md:tracking-[0.2em]"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        {/* Rendered from the start so keyboard users can reach it; the opacity is what fades it in. */}
        <motion.div
          id="grades"
          onFocusCapture={revealOnFocus}
          style={{ opacity: contentOpacity, y: contentY }}
          className={`absolute top-[8%] z-10 flex flex-col items-center justify-center px-4 text-center ${
            morphValue < 0.5 ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Choose Your Grade
          </h2>
          <GradeLinks />
        </motion.div>

        <p className="sr-only">
          Use the up and down arrow keys to move the wheel, or Tab to the grade buttons.
        </p>

        <div className="relative flex h-full w-full items-center justify-center">
          {STRANDS.map((strand, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = SCATTER[i];
            } else if (introPhase === "line") {
              const lineSpacing = Math.min(70, (containerSize.width - 40) / TOTAL_CARDS);
              const lineTotalWidth = TOTAL_CARDS * lineSpacing;
              target = { x: i * lineSpacing - lineTotalWidth / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleScale = isMobile ? 0.8 : 1;
              const circleAngle = (i / TOTAL_CARDS) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;

              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_CARDS - 1);

              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const boundedRotation = -scrollProgress * spreadAngle * 0.8;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(circleScale, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return <FlipCard key={strand.code} strand={strand} target={target} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default function MeridianHero() {
  const preference = useMotionPreference();
  const headerHeight = useHeaderHeight();
  const height = `calc(100dvh - ${headerHeight}px)`;

  if (preference === "reduce") return <MeridianHeroStatic />;

  if (preference === "pending") {
    // Server render and first paint: reserve the space, and give anyone without
    // JavaScript the static version.
    return (
      <div className="w-full overflow-auto" style={{ height }}>
        <noscript>
          <MeridianHeroStatic />
        </noscript>
      </div>
    );
  }

  return <MeridianHeroAnimated height={height} />;
}
