"use client";

import { useState } from "react";
import { criterionTheme } from "@/content/theme";
import type { CriterionKey } from "@/content/types";

/**
 * An original illustration of the MYP Design Cycle: four criteria, sixteen strands,
 * arranged as a wheel. This is Meridian's own artwork, not a reproduction of the
 * IB's design cycle diagram. Hovering (or tapping, or tabbing to) a quadrant shows
 * that criterion's name and description in a callout, connected by a leader line.
 */

const HITZONES: Record<CriterionKey, string> = {
  A: "M 300 20 A 280 280 0 0 1 580 300 L 426 300 A 126 126 0 0 0 300 174 Z",
  B: "M 580 300 A 280 280 0 0 1 300 580 L 300 426 A 126 126 0 0 0 426 300 Z",
  C: "M 300 580 A 280 280 0 0 1 20 300 L 174 300 A 126 126 0 0 0 300 426 Z",
  D: "M 20 300 A 280 280 0 0 1 300 20 L 300 174 A 126 126 0 0 0 174 300 Z",
};

// Leader lines run from the wheel's edge out to the exact corner the callout
// is anchored to, so the two visually meet with no gap.
const LEADER_LINES: Record<CriterionKey, { x1: number; y1: number; x2: number; y2: number }> = {
  A: { x1: 492.33, y1: 107.67, x2: 600, y2: 0 },
  B: { x1: 492.33, y1: 492.33, x2: 600, y2: 600 },
  C: { x1: 107.67, y1: 492.33, x2: 0, y2: 600 },
  D: { x1: 107.67, y1: 107.67, x2: 0, y2: 0 },
};

// Each callout is anchored flush against the wheel's own corner (never past
// its outer edge, so it can never overflow the page) and grows outward from
// there via the transform.
const CALLOUT_POSITION: Record<CriterionKey, React.CSSProperties> = {
  A: { right: 0, top: 0, transform: "translateY(calc(-100% - 10px))" },
  B: { right: 0, bottom: 0, transform: "translateY(calc(100% + 10px))" },
  C: { left: 0, bottom: 0, transform: "translateY(calc(100% + 10px))" },
  D: { left: 0, top: 0, transform: "translateY(calc(-100% - 10px))" },
};

const CRITERIA: CriterionKey[] = ["A", "B", "C", "D"];

export function DesignCycleWheel({ className }: { className?: string }) {
  const [active, setActive] = useState<CriterionKey | null>(null);

  function show(key: CriterionKey) {
    setActive(key);
  }
  function hide(key: CriterionKey) {
    setActive((current) => (current === key ? null : current));
  }
  function toggle(key: CriterionKey) {
    setActive((current) => (current === key ? null : key));
  }

  return (
    <div className="relative">
      <svg
        viewBox="0 0 600 600"
        className={className}
        style={{ overflow: "visible" }}
        role="img"
        aria-label="The MYP Design Cycle as a wheel: Criterion A, Inquiring and analysing; Criterion B, Developing ideas; Criterion C, Creating the solution; Criterion D, Evaluating, each with its four strands, read clockwise. Hover, tap, or tab to a quarter of the wheel for its description."
      >
        <defs>
          <marker id="wheel-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--ink)" opacity={0.55} />
          </marker>
          <marker id="wheel-arrowhead-reverse" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--ink)" opacity={0.55} />
          </marker>
        </defs>

        <g style={{ filter: active === "A" ? "brightness(1.08)" : undefined, transition: "filter 0.15s" }}>
          <path d="M 300 122 A 178 178 0 0 1 478 300 L 430 300 A 130 130 0 0 0 300 170 Z" fill="#0B5478" stroke="var(--paper)" strokeWidth={3} />
          <text x={408.89} y={191.11} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">A</text>
          <path d="M 300 50 A 250 250 0 0 1 395.67 69.03 L 368.12 135.55 A 178 178 0 0 0 300 122 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={341.55} y={91.09} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={341.55} dy="-0.35em">Explain</tspan><tspan x={341.55} dy="1.1em">need</tspan></text>
          <path d="M 395.67 69.03 A 250 250 0 0 1 476.78 123.22 L 425.87 174.13 A 178 178 0 0 0 368.12 135.55 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={418.34} y={122.9} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={418.34} dy="-0.35em">Prioritize</tspan><tspan x={418.34} dy="1.1em">research</tspan></text>
          <path d="M 476.78 123.22 A 250 250 0 0 1 530.97 204.33 L 464.45 231.88 A 178 178 0 0 0 425.87 174.13 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={477.1} y={181.66} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={477.1} dy="-0.35em">Analyse</tspan><tspan x={477.1} dy="1.1em">products</tspan></text>
          <path d="M 530.97 204.33 A 250 250 0 0 1 550 300 L 478 300 A 178 178 0 0 0 464.45 231.88 Z" fill="#E7F1F5" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={508.91} y={258.45} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={508.91} dy="-0.35em">Design</tspan><tspan x={508.91} dy="1.1em">brief</tspan></text>
        </g>

        <g style={{ filter: active === "B" ? "brightness(1.08)" : undefined, transition: "filter 0.15s" }}>
          <path d="M 478 300 A 178 178 0 0 1 300 478 L 300 430 A 130 130 0 0 0 430 300 Z" fill="#F0782A" stroke="var(--paper)" strokeWidth={3} />
          <text x={408.89} y={408.89} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">B</text>
          <path d="M 550 300 A 250 250 0 0 1 530.97 395.67 L 464.45 368.12 A 178 178 0 0 0 478 300 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={508.91} y={341.55} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={508.91} dy="-0.35em">Design</tspan><tspan x={508.91} dy="1.1em">specification</tspan></text>
          <path d="M 530.97 395.67 A 250 250 0 0 1 476.78 476.78 L 425.87 425.87 A 178 178 0 0 0 464.45 368.12 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={477.1} y={418.34} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={477.1} dy="-0.35em">Design</tspan><tspan x={477.1} dy="1.1em">ideas</tspan></text>
          <path d="M 476.78 476.78 A 250 250 0 0 1 395.67 530.97 L 368.12 464.45 A 178 178 0 0 0 425.87 425.87 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={418.34} y={477.1} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={418.34} dy="-0.35em">Justify</tspan><tspan x={418.34} dy="1.1em">design</tspan></text>
          <path d="M 395.67 530.97 A 250 250 0 0 1 300 550 L 300 478 A 178 178 0 0 0 368.12 464.45 Z" fill="#FCEADC" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={341.55} y={508.91} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={341.55} dy="-0.35em">Planning</tspan><tspan x={341.55} dy="1.1em">drawings</tspan></text>
        </g>

        <g style={{ filter: active === "C" ? "brightness(1.08)" : undefined, transition: "filter 0.15s" }}>
          <path d="M 300 478 A 178 178 0 0 1 122 300 L 170 300 A 130 130 0 0 0 300 430 Z" fill="#0B7A50" stroke="var(--paper)" strokeWidth={3} />
          <text x={191.11} y={408.89} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">C</text>
          <path d="M 300 550 A 250 250 0 0 1 204.33 530.97 L 231.88 464.45 A 178 178 0 0 0 300 478 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={258.45} y={508.91} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={258.45} dy="-0.35em">Construct</tspan><tspan x={258.45} dy="1.1em">plan</tspan></text>
          <path d="M 204.33 530.97 A 250 250 0 0 1 123.22 476.78 L 174.13 425.87 A 178 178 0 0 0 231.88 464.45 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={181.66} y={477.1} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={181.66} dy="-0.35em">Demonstrate</tspan><tspan x={181.66} dy="1.1em">skills</tspan></text>
          <path d="M 123.22 476.78 A 250 250 0 0 1 69.03 395.67 L 135.55 368.12 A 178 178 0 0 0 174.13 425.87 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={122.9} y={418.34} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={122.9} dy="-0.35em">Create</tspan><tspan x={122.9} dy="1.1em">solution</tspan></text>
          <path d="M 69.03 395.67 A 250 250 0 0 1 50 300 L 122 300 A 178 178 0 0 0 135.55 368.12 Z" fill="#E5F3ED" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={91.09} y={341.55} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={91.09} dy="-0.35em">Justify</tspan><tspan x={91.09} dy="1.1em">changes</tspan></text>
        </g>

        <g style={{ filter: active === "D" ? "brightness(1.08)" : undefined, transition: "filter 0.15s" }}>
          <path d="M 122 300 A 178 178 0 0 1 300 122 L 300 170 A 130 130 0 0 0 170 300 Z" fill="#D9433F" stroke="var(--paper)" strokeWidth={3} />
          <text x={191.11} y={191.11} textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight={700} fill="white">D</text>
          <path d="M 50 300 A 250 250 0 0 1 69.03 204.33 L 135.55 231.88 A 178 178 0 0 0 122 300 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={91.09} y={258.45} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={91.09} dy="-0.35em">Design</tspan><tspan x={91.09} dy="1.1em">testing</tspan></text>
          <path d="M 69.03 204.33 A 250 250 0 0 1 123.22 123.22 L 174.13 174.13 A 178 178 0 0 0 135.55 231.88 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={122.9} y={181.66} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={122.9} dy="-0.35em">Evaluate</tspan><tspan x={122.9} dy="1.1em">success</tspan></text>
          <path d="M 123.22 123.22 A 250 250 0 0 1 204.33 69.03 L 231.88 135.55 A 178 178 0 0 0 174.13 174.13 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={181.66} y={122.9} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={181.66} dy="-0.35em">Explain</tspan><tspan x={181.66} dy="1.1em">improvement</tspan></text>
          <path d="M 204.33 69.03 A 250 250 0 0 1 300 50 L 300 122 A 178 178 0 0 0 231.88 135.55 Z" fill="#FBEAE9" stroke="var(--paper)" strokeWidth={2.5} />
          <text x={258.45} y={91.09} textAnchor="middle" dominantBaseline="central" fontSize={10.5} fontWeight={600} fill="var(--ink)"><tspan x={258.45} dy="-0.35em">Explain</tspan><tspan x={258.45} dy="1.1em">impact</tspan></text>
        </g>

        <circle cx={300} cy={300} r={126} fill="var(--paper)" stroke="#e5e5e5" strokeWidth={1} />
        <text x={300} y={292} textAnchor="middle" dominantBaseline="central" fontSize={16} fontWeight={700} fill="var(--ink)">The Design</text>
        <text x={300} y={314} textAnchor="middle" dominantBaseline="central" fontSize={16} fontWeight={700} fill="var(--ink)">Cycle</text>

        <path d="M 254.16 40.01 A 264 264 0 0 1 345.84 40.01" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />
        <path d="M 559.99 254.16 A 264 264 0 0 1 559.99 345.84" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />
        <path d="M 345.84 559.99 A 264 264 0 0 1 254.16 559.99" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />
        <path d="M 40.01 345.84 A 264 264 0 0 1 40.01 254.16" fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinecap="round" markerEnd="url(#wheel-arrowhead)" opacity={0.55} />

        {/* Inner arrows in the light ring right around the hub, pointing the opposite way
            around the wheel: the cycle is iterative, so students can step back to an earlier
            criterion, not just move forward. Drawn after the hub circle so they always sit on
            top of it, instead of relying on radius alone to stay clear of its fill. */}
        <path d="M 354.09 183.99 A 128 128 0 0 0 245.91 183.99" fill="none" stroke="var(--ink)" strokeWidth={2.5} strokeLinecap="round" markerEnd="url(#wheel-arrowhead-reverse)" opacity={0.55} />
        <path d="M 416.01 354.09 A 128 128 0 0 0 416.01 245.91" fill="none" stroke="var(--ink)" strokeWidth={2.5} strokeLinecap="round" markerEnd="url(#wheel-arrowhead-reverse)" opacity={0.55} />
        <path d="M 245.91 416.01 A 128 128 0 0 0 354.09 416.01" fill="none" stroke="var(--ink)" strokeWidth={2.5} strokeLinecap="round" markerEnd="url(#wheel-arrowhead-reverse)" opacity={0.55} />
        <path d="M 183.99 245.91 A 128 128 0 0 0 183.99 354.09" fill="none" stroke="var(--ink)" strokeWidth={2.5} strokeLinecap="round" markerEnd="url(#wheel-arrowhead-reverse)" opacity={0.55} />

        {/* Invisible hit zones, one per quadrant, driving hover/focus/tap. */}
        {CRITERIA.map((key) => (
          <path
            key={key}
            d={HITZONES[key]}
            fill="transparent"
            style={{ cursor: "pointer" }}
            tabIndex={0}
            role="button"
            aria-label={`Criterion ${key}: ${criterionTheme[key].name}. ${criterionTheme[key].description}`}
            onMouseEnter={() => show(key)}
            onMouseLeave={() => hide(key)}
            onFocus={() => show(key)}
            onBlur={() => hide(key)}
            onClick={() => toggle(key)}
          />
        ))}

        {active && (
          <line
            x1={LEADER_LINES[active].x1}
            y1={LEADER_LINES[active].y1}
            x2={LEADER_LINES[active].x2}
            y2={LEADER_LINES[active].y2}
            stroke={criterionTheme[active].color}
            strokeWidth={1.75}
            strokeDasharray="4 3"
            pointerEvents="none"
          />
        )}
      </svg>

      {CRITERIA.map((key) => (
        <div
          key={key}
          aria-hidden="true"
          className="pointer-events-none absolute w-36 max-w-[70%] rounded-lg border bg-white/95 p-2.5 text-xs shadow-md transition-opacity duration-150 sm:w-48"
          style={{
            ...CALLOUT_POSITION[key],
            borderColor: criterionTheme[key].color,
            opacity: active === key ? 1 : 0,
            zIndex: active === key ? 10 : -1,
          }}
        >
          <p className="font-bold" style={{ color: criterionTheme[key].color }}>
            {key}: {criterionTheme[key].name}
          </p>
          <p className="mt-1 leading-snug text-[var(--ink)]/80">{criterionTheme[key].description}</p>
        </div>
      ))}
    </div>
  );
}
