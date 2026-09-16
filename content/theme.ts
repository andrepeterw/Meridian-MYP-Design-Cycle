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
  { name: string; color: string; tint: string; description: string }
> = {
  A: {
    name: "Inquiring and analysing",
    color: AISL.blue,
    tint: "#E7F1F5",
    description:
      "You explain the problem, research it, and analyse what already exists before designing anything.",
  },
  B: {
    name: "Developing ideas",
    color: AISL.orange,
    tint: "#FCEADC",
    description:
      "You develop a specification, sketch a range of ideas, and choose and justify one to build.",
  },
  C: {
    name: "Creating the solution",
    color: AISL.green,
    tint: "#E5F3ED",
    description:
      "You plan, build, and justify the changes you make while creating your solution.",
  },
  D: {
    name: "Evaluating",
    color: AISL.red,
    tint: "#FBEAE9",
    description: "You test your solution, evaluate its success, and explain how it could improve.",
  },
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
