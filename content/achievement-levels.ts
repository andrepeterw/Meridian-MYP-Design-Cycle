import type { StrandId } from "./types";

export type AchievementYear = "year1" | "year3" | "year5";

export interface AchievementLevel {
  band: "1–2" | "3–4" | "5–6" | "7–8";
  commandTerm: string;
  description: string;
}

export type StrandAchievementLevels = Record<AchievementYear, AchievementLevel[]>;

/**
 * Achievement-level ladders (bands 1-2 through 7-8) for individual strands, paraphrased
 * from the IB Design Guide in Meridian's own words. The guide only publishes bands for
 * Year 1, Year 3, and Year 5 of the programme, so each strand carries one ladder per year
 * rather than one per grade -- see achievementYearForGrade in content/grades.ts for how a
 * grade maps to a year.
 *
 * Pilot: only A.i and D.ii are filled in here, since they're the two strands (of the four
 * first considered) whose command term genuinely changes band to band across every year.
 * B.ii and C.ii grow mostly through added detail/scope rather than a new command word, so
 * they're left out rather than forced into a ladder that doesn't fit. When adding a new
 * strand, pull its actual band text from the guide first and confirm it has a real term
 * progression before writing descriptions -- don't reuse A.i/D.ii's wording as a template.
 */
export const achievementLevelsByStrand: Partial<Record<StrandId, StrandAchievementLevels>> = {
  "A.i": {
    year1: [
      { band: "1–2", commandTerm: "State", description: "Says there is a problem, without saying why it matters." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why this problem is worth solving." },
      { band: "5–6", commandTerm: "Explain", description: "Explains why this problem needs solving, with real reasons." },
      { band: "7–8", commandTerm: "Explain and justify", description: "Explains why it needs solving, and justifies why, working mostly on their own." },
    ],
    year3: [
      { band: "1–2", commandTerm: "State", description: "Says there is a problem, without saying why it matters." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why this problem is worth solving." },
      { band: "5–6", commandTerm: "Explain", description: "Explains why this problem needs solving, with real reasons." },
      { band: "7–8", commandTerm: "Explain and justify", description: "Explains why it needs solving, and justifies why, working mostly on their own." },
    ],
    year5: [
      { band: "1–2", commandTerm: "State", description: "Says there is a problem for their user, without saying why it matters." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why this problem matters for their user." },
      { band: "5–6", commandTerm: "Explain", description: "Explains why this problem matters for their user, with real reasons." },
      { band: "7–8", commandTerm: "Explain and justify", description: "Explains why it matters, and justifies why it is worth solving now." },
    ],
  },
  "D.ii": {
    year1: [
      { band: "1–2", commandTerm: "State", description: "Says whether the solution worked, without measuring it against anything." },
      { band: "3–4", commandTerm: "State", description: "Says whether it worked, based on one test." },
      { band: "5–6", commandTerm: "State", description: "Says whether it worked, based on real testing." },
      { band: "7–8", commandTerm: "Outline", description: "Gives a short summary of how well it worked, based on real testing with actual users." },
    ],
    year3: [
      { band: "1–2", commandTerm: "State", description: "Says whether the solution worked." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of how well it met the plan, based on testing." },
      { band: "5–6", commandTerm: "Describe", description: "Gives a detailed account of how well it met the plan, based on testing." },
      { band: "7–8", commandTerm: "Explain", description: "Explains how well it met the plan, backed by real testing with real users." },
    ],
    year5: [
      { band: "1–2", commandTerm: "State", description: "Says whether the solution worked." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of how well it met the plan, based on testing." },
      { band: "5–6", commandTerm: "Explain", description: "Explains how well it met the plan, with reasons, based on testing." },
      { band: "7–8", commandTerm: "Critically evaluate", description: "Weighs up the solution's real strengths and limits against the plan, backed by testing with actual users." },
    ],
  },
};
