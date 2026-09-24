import type { CriterionKey, Grade } from "./types";

export const AISL = {
  blue: "#0E477F",
  orange: "#DE8513",
  green: "#0D7D65",
  indigo: "#4D3787",
  red: "#CC4C2D",
  grey: "#B7B5BF",
  ink: "#122233",
  paper: "#F9FAFC",
} as const;

export const criterionTheme: Record<
  CriterionKey,
  { name: string; color: string; tint: string; description: string }
> = {
  A: {
    name: "Inquiring and analysing",
    color: AISL.blue,
    tint: "#E9EFF5",
    description:
      "You explain the problem, research it, and analyse what already exists before designing anything.",
  },
  B: {
    name: "Developing ideas",
    color: AISL.orange,
    tint: "#FCF0DE",
    description:
      "You develop a specification, sketch a range of ideas, and choose and justify one to build.",
  },
  C: {
    name: "Creating the solution",
    color: AISL.green,
    tint: "#E7F3F0",
    description:
      "You plan, build, and justify the changes you make while creating your solution.",
  },
  D: {
    name: "Evaluating",
    color: AISL.red,
    tint: "#FBEEEB",
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
