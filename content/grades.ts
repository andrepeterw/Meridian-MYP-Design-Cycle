import type { Grade, GradeContent } from "./types";
import { grade6 } from "./grade-6";
import { grade7 } from "./grade-7";
import { grade8 } from "./grade-8";
import { grade9 } from "./grade-9";
import { grade10 } from "./grade-10";

export const grades: Record<Grade, GradeContent> = {
  6: grade6,
  7: grade7,
  8: grade8,
  9: grade9,
  10: grade10,
};

export const gradeList: Grade[] = [6, 7, 8, 9, 10];
