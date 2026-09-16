import { AISL } from "@/content/theme";

/** An original mark for Meridian: a globe with its own meridian line, gradient in the four criterion colors. Not the AISL crest. */
export function MeridianMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="meridian-mark-gradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={AISL.blue} />
          <stop offset="33%" stopColor={AISL.orange} />
          <stop offset="66%" stopColor={AISL.green} />
          <stop offset="100%" stopColor={AISL.red} />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" fill="none" stroke={AISL.blue} strokeWidth="1.5" opacity="0.35" />
      <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke={AISL.blue} strokeWidth="1" opacity="0.25" />
      <path
        d="M16 3 C 9 10, 23 22, 16 29"
        fill="none"
        stroke="url(#meridian-mark-gradient)"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
