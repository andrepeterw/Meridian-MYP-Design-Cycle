import type { AchievementLevel } from "@/content/achievement-levels";

/**
 * A compact four-step ladder showing how one task's expected answer grows across the
 * achievement bands (1-2 through 7-8), using the criterion's own color for the step
 * markers and connecting line.
 */
export function AchievementLadder({
  levels,
  color,
  size = "compact",
}: {
  levels: AchievementLevel[];
  color: string;
  size?: "compact" | "large";
}) {
  const termClass = size === "large" ? "text-base" : "text-sm";
  const descriptionClass = size === "large" ? "text-sm" : "text-xs";
  const badgeSize = size === "large" ? "h-8 w-8 text-xs" : "h-7 w-7 text-[11px]";

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-3">
      {levels.map((level, i) => (
        <div key={level.band}>
          <div className="mb-2 flex items-center">
            <span
              className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${badgeSize}`}
              style={{ background: color }}
            >
              {level.band}
            </span>
            {i < levels.length - 1 && (
              <span
                aria-hidden="true"
                className="ml-1 hidden h-0.5 flex-1 sm:block"
                style={{ background: color, opacity: 0.3 }}
              />
            )}
          </div>
          <p className={`font-semibold text-[var(--ink)] ${termClass}`}>{level.commandTerm}</p>
          <p className={`mt-0.5 leading-snug text-[var(--ink)]/70 ${descriptionClass}`}>
            {level.description}
          </p>
        </div>
      ))}
    </div>
  );
}
