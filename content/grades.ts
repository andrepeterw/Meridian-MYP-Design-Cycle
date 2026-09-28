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
 * The IB Design Guide only publishes achievement-level bands for Year 1, Year 3, and
 * Year 5 of the programme. Grade 6 and 7 both read as Year 1, Grade 8 as Year 3, and
 * Grade 9 and 10 both as Year 5, for the purpose of picking which band ladder to show.
 */
export const achievementYearForGrade: Record<Grade, AchievementYear> = {
  6: "year1",
  7: "year1",
  8: "year3",
  9: "year5",
  10: "year5",
};
