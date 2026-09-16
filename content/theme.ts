import type { CriterionKey, Grade } from "./types";

export const AISL = {
  blue: "#0B5478",
  orange: "#F0782A",
  green: "#0B7A50",
  indigo: "#3A3182",
  red: "#D9433F",
  grey: "#B7B7BD",
  ink: "#12242E",
  paper: "#FAFBFC",
} as const;

export const criterionTheme: Record<
  CriterionKey,
  { name: string; color: string; tint: string }
> = {
  A: { name: "Inquiring and analysing", color: AISL.blue, tint: "#E7F1F5" },
  B: { name: "Developing ideas", color: AISL.orange, tint: "#FCEADC" },
  C: { name: "Creating the solution", color: AISL.green, tint: "#E5F3ED" },
  D: { name: "Evaluating", color: AISL.red, tint: "#FBEAE9" },
};

export const criterionOrder: CriterionKey[] = ["A", "B", "C", "D"];

/** One brand color per grade, used for the grade picker's hover state on the home page. */
export const gradeAccent: Record<Grade, string> = {
  6: AISL.blue,
  7: AISL.orange,
  8: AISL.green,
  9: AISL.red,
  10: AISL.indigo,
};
