import type { Grade, GradeContent } from "./types";
import type { AchievementYear } from "./achievement-levels";
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

/**
 * The IB Design Guide only publishes achievement-level bands and strand titles for
 * Year 1, Year 3, and Year 5 of the programme: Year 1 = Grade 6, Year 3 = Grade 7 and 8,
 * Year 5 = Grade 9 and 10. Used both for picking which band ladder to show and (in each
 * grade-N.ts strand title) for the strand titles pulled from the same year columns.
 */
export const achievementYearForGrade: Record<Grade, AchievementYear> = {
  6: "year1",
  7: "year3",
  8: "year3",
  9: "year5",
  10: "year5",
};
