"use client";

import { useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/reducedMotion";

const CONFETTI_COLORS = ["#0B5478", "#F0782A", "#0B7A50", "#D9433F", "#3A3182", "#F2A93C"];
const ROCKET_COUNT = 15;
const CONFETTI_COUNT = 46;
const CELEBRATION_MS = 4200;
const SCROLL_MS = 3200;

interface Rocket {
  left: number;
  duration: number;
  delay: number;
  size: number;
  wobble: number;
}

interface Confetti {
  left: number;
  duration: number;
  delay: number;
  size: number;
  color: string;
  drift: number;
}

function makeRockets(): Rocket[] {
  return Array.from({ length: ROCKET_COUNT }, () => ({
    left: 4 + Math.random() * 92,
    duration: 2.6 + Math.random() * 1.4,
    delay: Math.random() * 0.7,
    size: 25.3 + Math.random() * 23, // 15% larger than the original 22-42px range
    wobble: (Math.random() - 0.5) * 30,
  }));
}

function makeConfetti(): Confetti[] {
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    left: Math.random() * 100,
    duration: 2.2 + Math.random() * 1.8,
    delay: Math.random() * 1,
    size: 6 + Math.random() * 8,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    drift: (Math.random() - 0.5) * 220,
  }));
}

function smoothScrollToTop(duration: number) {
  const start = window.scrollY;
  if (start <= 0) return;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    window.scrollTo(0, start * (1 - eased));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function LaunchButton() {
  const [particles, setParticles] = useState<{ rockets: Rocket[]; confetti: Confetti[] } | null>(
    null
  );
  const reduceMotion = usePrefersReducedMotion();
  const timeoutRef = useRef<number | undefined>(undefined);

  function handleLaunch() {
    if (reduceMotion) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setParticles({ rockets: makeRockets(), confetti: makeConfetti() });
    smoothScrollToTop(SCROLL_MS);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setParticles(null), CELEBRATION_MS);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="mb-6 max-w-xs text-center text-lg font-semibold text-[var(--ink)]">
          You have walked the whole Design Cycle. Ready to launch?
        </p>
        <button
          type="button"
          onClick={handleLaunch}
          aria-label="Launch: celebrate finishing the Design Cycle route and scroll back to the top"
          className="launch-button"
        >
          <span className="launch-button__top">LAUNCH</span>
        </button>
      </div>

      {particles && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
          {particles.rockets.map((r, i) => (
            <span
              key={`rocket-${i}`}
              className="launch-rocket"
              style={{
                left: `${r.left}%`,
                fontSize: `${r.size}px`,
                animationDuration: `${r.duration}s`,
                animationDelay: `${r.delay}s`,
                ["--wobble" as string]: `${r.wobble}deg`,
              }}
            >
              🚀
            </span>
          ))}
          {particles.confetti.map((c, i) => (
            <span
              key={`confetti-${i}`}
              className="launch-confetti"
              style={{
                left: `${c.left}%`,
                width: `${c.size}px`,
                height: `${c.size * 0.4}px`,
                background: c.color,
                animationDuration: `${c.duration}s`,
                animationDelay: `${c.delay}s`,
                ["--drift" as string]: `${c.drift}px`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
