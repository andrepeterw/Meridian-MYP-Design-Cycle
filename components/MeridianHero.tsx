"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AISL, criterionTheme, gradeAccent } from "@/content/theme";
import type { CriterionKey, Grade } from "@/content/types";
import { lerpColor } from "@/lib/color";
import { MeridianMark } from "./MeridianMark";

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
// Scrolling past this finishes the circle-to-arc morph and reveals the buttons.
const REVEAL_SCROLL = 600;
// How much scrolling turns the arc by one card. The arc has no end: it keeps
// turning, and A.i comes round again after D.iv.
const SCROLL_PER_CARD = 180;
const KEY_STEP = 150;
const CARD_WIDTH = 60;
const CARD_HEIGHT = 85;
const FALLBACK_HEADER_HEIGHT = 53;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

// Rotate by the shortest way round, so a card never spins a full turn just
// because its two angles sit on opposite sides of 0 and 360.
const lerpAngle = (start: number, end: number, t: number) =>
  start + (((end - start + 540) % 360) - 180) * t;

// The circle opens into the arc card by card, A.i first and D.iv last, so the
// Criterion A cards lead the animation.
const MORPH_STAGGER = 0.5;
const cardMorph = (morph: number, index: number) => {
  const delay = (index / (TOTAL_CARDS - 1)) * MORPH_STAGGER;
  return Math.min(1, Math.max(0, (morph - delay) / (1 - MORPH_STAGGER)));
};

// The thread behind the cards runs the same four colours, in the same order, as
// the ribbon in the Meridian mark. It is coloured along the strand order (not
// top to bottom) so each stretch matches the cards it passes behind.
const THREAD_STOPS = [AISL.blue, AISL.orange, AISL.green, AISL.red];
const THREAD_COLORS = Array.from({ length: TOTAL_CARDS - 1 }, (_, i) => {
  const along = ((i + 0.5) / (TOTAL_CARDS - 1)) * (THREAD_STOPS.length - 1);
  const stop = Math.min(Math.floor(along), THREAD_STOPS.length - 2);
  return lerpColor(THREAD_STOPS[stop], THREAD_STOPS[stop + 1], along - stop);
});

type Point = { x: number; y: number };

// One piece of a smooth (Catmull-Rom) curve from p1 to p2, shaped by its two
// neighbours, so the pieces join into a single flowing line.
function curveBetween(p0: Point, p1: Point, p2: Point, p3: Point) {
  const c1x = p1.x + (p2.x - p0.x) / 6;
  const c1y = p1.y + (p2.y - p0.y) / 6;
  const c2x = p2.x - (p3.x - p1.x) / 6;
  const c2y = p2.y - (p3.y - p1.y) / 6;
  return `M ${p1.x},${p1.y} C ${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
}

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
  index: number;
  onPositionUpdate: (index: number, x: number, y: number) => void;
}

function FlipCard({ strand, target, index, onPositionUpdate }: FlipCardProps) {
  // A mouse flips the card while it hovers; touch and keyboard users, who have no
  // hover, tap or press Enter to flip it and again to flip it back.
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const isFlipped = hovered || toggled;
  const lastPointer = useRef<string | null>(null);
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
      // Reports where the card actually is (mid-spring), so the thread follows
      // the card itself and not just where it is headed.
      onUpdate={(latest) => {
        const x = typeof latest.x === "number" ? latest.x : target.x;
        const y = typeof latest.y === "number" ? latest.y : target.y;
        onPositionUpdate(index, x, y);
      }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      // On the wrapper, which never rotates in 3D, so the hover area can't shrink
      // and flicker while the card is mid-flip.
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        zIndex: 1,
      }}
    >
      {/* A real button, so the card is reachable and operable by keyboard. */}
      <motion.button
        type="button"
        onPointerDown={(event) => {
          lastPointer.current = event.pointerType;
        }}
        onClick={() => {
          const pointer = lastPointer.current;
          lastPointer.current = null;
          // A mouse click does nothing: hovering already flipped the card.
          if (pointer === "mouse" || pointer === "pen") return;
          setToggled((value) => !value);
        }}
        aria-pressed={toggled}
        aria-label={
          toggled
            ? `${strand.code}, ${strand.name}. Press to show the code again.`
            : `${strand.code}. Hover or press to reveal what this strand is.`
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
  const [contentBottom, setContentBottom] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container) return;
    // Watches the hero and the grade-button block (which wraps differently on
    // narrow screens or when translated), so the logo below it stays centred in the gap.
    const measure = () => {
      setContainerSize({ width: container.clientWidth, height: container.clientHeight });
      if (content) setContentBottom(content.offsetTop + content.offsetHeight);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    if (content) observer.observe(content);
    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTo = (value: number) => {
      scrollRef.current = Math.max(value, 0);
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
  const scrollRotate = useTransform(virtualScroll, (value) => Math.max(0, value - REVEAL_SCROLL));
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

  // The thread is drawn straight onto its SVG paths every frame, outside React
  // state, so following the cards never triggers a re-render.
  const cardPositions = useRef<Point[]>(STRANDS.map(() => ({ x: 0, y: 0 })));
  const segmentRefs = useRef<(SVGPathElement | null)[]>([]);
  const closingRef = useRef<SVGPathElement>(null);
  const closingGradientRef = useRef<SVGLinearGradientElement>(null);

  const handlePositionUpdate = useCallback((index: number, x: number, y: number) => {
    cardPositions.current[index] = { x, y };
  }, []);

  useEffect(() => {
    const { width, height } = containerSize;
    if (!width || !height) return;
    let frameId = 0;
    const tick = (time: number) => {
      // A slow ripple keeps the thread gently alive while nobody is scrolling.
      const points = cardPositions.current.map((p, i) => ({
        x: width / 2 + p.x,
        y: height / 2 + p.y + Math.sin(time / 1500 + i * 0.4) * 4,
      }));
      const count = points.length;
      // Where the endless arc wraps, the last card sits at one end of the screen
      // and the first at the other. That one piece would cut across the whole
      // screen, so it is hidden (and never used to shape its neighbours).
      const stretched = (a: Point, b: Point) => Math.abs(a.x - b.x) > width * 1.2;
      for (let k = 0; k < count; k++) {
        const from = points[k];
        const to = points[(k + 1) % count];
        const before = points[(k + count - 1) % count];
        const after = points[(k + 2) % count];
        // Pieces 0 to 14 join neighbouring strands; the last one joins D.iv back round to A.i.
        const path = k < count - 1 ? segmentRefs.current[k] : closingRef.current;
        if (!path) continue;
        if (stretched(from, to)) {
          path.setAttribute("opacity", "0");
          continue;
        }
        path.setAttribute("opacity", "1");
        path.setAttribute(
          "d",
          curveBetween(stretched(before, from) ? from : before, from, to, stretched(to, after) ? to : after)
        );
      }
      const gradient = closingGradientRef.current;
      if (gradient) {
        gradient.setAttribute("x1", String(points[count - 1].x));
        gradient.setAttribute("y1", String(points[count - 1].y));
        gradient.setAttribute("x2", String(points[0].x));
        gradient.setAttribute("y2", String(points[0].y));
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [containerSize]);

  // Tabbing to a grade button (before the arc has formed) finishes the morph, so
  // a keyboard user never lands on something they cannot see.
  const revealOnFocus = () => {
    if (scrollRef.current < REVEAL_SCROLL) {
      scrollRef.current = REVEAL_SCROLL;
      virtualScroll.set(REVEAL_SCROLL);
    }
  };

  // The arc: shared by every card, and by the logo that sits in the space above it.
  const isMobile = containerSize.width < 768;
  const spreadAngle = isMobile ? 100 : 130;
  const step = spreadAngle / (TOTAL_CARDS - 1);
  const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
  const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
  const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
  const arcCenterY = arcApexY + arcRadius;
  const arcScale = isMobile ? 1.4 : 1.8;
  // How many cards fit on screen either side of the middle of the arc.
  const visibleHalf =
    arcRadius > 0
      ? Math.asin(Math.min(1, containerSize.width / 2 / arcRadius)) / ((step * Math.PI) / 180)
      : 0;
  const wrapLimit = visibleHalf + 1.5;
  // The arc opens with A.i just inside the left edge, so the Criterion A cards come first.
  const arcFocus = visibleHalf - 0.6 + rotateValue / SCROLL_PER_CARD;

  // Keep the title inside the ring of cards instead of running underneath them.
  const ringRadius = Math.min(Math.min(containerSize.width, containerSize.height) * 0.35, 350);
  const titleWidth = Math.max(180, ringRadius * 2 - 130);
  const ringLogoSize = Math.max(32, Math.min(64, ringRadius * 0.28));

  // After the morph there is a gap between the grade buttons and the top of the
  // arc; the logo is centred in it (and left out if the screen is too short for it).
  const arcTop = containerSize.height / 2 + arcApexY - (CARD_HEIGHT * arcScale) / 2;
  const gap = arcTop - contentBottom;
  const gapLogoSize = Math.min(96, gap - 40);
  const gapLogoTop = contentBottom + (gap - gapLogoSize) / 2;

  return (
    <div
      ref={containerRef}
      className="relative w-full touch-none overflow-clip overscroll-none"
      style={{ height }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div
          className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center text-center"
          style={{ width: titleWidth }}
        >
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, y: 20 }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0 }
                : { opacity: 0 }
            }
            transition={{ duration: 1 }}
            className="mb-3"
            style={{ width: ringLogoSize, height: ringLogoSize }}
          >
            <MeridianMark className="h-full w-full" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="text-balance text-xl font-medium tracking-tight text-[var(--ink)] md:text-4xl"
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
          ref={contentRef}
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

        {gapLogoSize >= 40 && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 z-10 flex justify-center"
            style={{ top: gapLogoTop, opacity: contentOpacity }}
          >
            <div style={{ width: gapLogoSize, height: gapLogoSize }}>
              <MeridianMark className="h-full w-full" />
            </div>
          </motion.div>
        )}

        <p className="sr-only">
          Use the up and down arrow keys to move the wheel, or Tab to the grade buttons.
        </p>

        <div className="relative flex h-full w-full items-center justify-center">
          {/* Decorative thread behind the cards; the strand codes and names on
              the cards carry the real content. */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient ref={closingGradientRef} id="meridian-thread-closing" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={AISL.red} />
                <stop offset="100%" stopColor={AISL.blue} />
              </linearGradient>
            </defs>
            <g
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              style={{ opacity: introPhase === "scatter" ? 0 : 0.55, transition: "opacity 1s ease" }}
            >
              <path ref={closingRef} stroke="url(#meridian-thread-closing)" />
              {THREAD_COLORS.map((color, i) => (
                <path
                  key={i}
                  ref={(element) => {
                    segmentRefs.current[i] = element;
                  }}
                  stroke={color}
                />
              ))}
            </g>
          </svg>

          {STRANDS.map((strand, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = SCATTER[i];
            } else if (introPhase === "line") {
              const lineSpacing = Math.min(70, (containerSize.width - 40) / TOTAL_CARDS);
              const lineTotalWidth = TOTAL_CARDS * lineSpacing;
              target = { x: i * lineSpacing - lineTotalWidth / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const minDimension = Math.min(containerSize.width, containerSize.height);

              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleScale = isMobile ? 0.8 : 1;
              // Clockwise from 12 o'clock, each criterion filling one quadrant:
              // A top right, B bottom right, C bottom left, D top left.
              const circleAngle = ((i + 0.5) / TOTAL_CARDS) * 360 - 90;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              // How many card-widths the arc has turned. Each card's place is wrapped
              // into a window that starts just past the left edge of the screen, so a
              // card leaving on the left comes back in on the right, out of sight.
              const offset = ((((i - arcFocus + wrapLimit) % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS) - wrapLimit;
              const currentArcAngle = -90 + offset * step;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: arcScale,
              };

              const morph = cardMorph(morphValue, i);
              target = {
                x: lerp(circlePos.x, arcPos.x, morph),
                y: lerp(circlePos.y, arcPos.y, morph),
                rotation: lerpAngle(circlePos.rotation, arcPos.rotation, morph),
                scale: lerp(circleScale, arcPos.scale, morph),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={strand.code}
                strand={strand}
                target={target}
                index={i}
                onPositionUpdate={handlePositionUpdate}
              />
            );
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
