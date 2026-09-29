import type { StrandId } from "./types";

export type AchievementYear = "year1" | "year3" | "year5";

export interface AchievementLevel {
  band: "1–2" | "3–4" | "5–6" | "7–8";
  commandTerm: string;
  description: string;
}

export type StrandAchievementLevels = Record<AchievementYear, AchievementLevel[]>;

/**
 * Achievement-level ladders (bands 1-2 through 7-8) for all sixteen strands, paraphrased
 * from the IB Design Guide (pages 32-45) in Meridian's own words. The guide only
 * publishes bands for Year 1, Year 3, and Year 5 of the programme, so each strand
 * carries one ladder per year rather than one per grade -- see achievementYearForGrade
 * in content/grades.ts for how a grade maps to a year (Grade 6 -> year1, Grade 7-8 ->
 * year3, Grade 9-10 -> year5).
 *
 * The guide itself doesn't give seven of these strands (A.ii, A.iii, B.iii, C.i, C.iv,
 * D.iii, D.iv) a distinct 1-2 band descriptor at any year -- a level 1-2 answer is too
 * basic to show that strand's task on its own, so the guide folds it in with nothing
 * written. NOT_DESCRIBED_AT_1_2 stands in for that gap rather than inventing wording
 * that isn't in the guide.
 */
const NOT_DESCRIBED_AT_1_2: AchievementLevel = {
  band: "1–2",
  commandTerm: "—",
  description:
    "Not described separately at this level. A level 1 to 2 answer is usually too basic to show this part of the task on its own.",
};

export const achievementLevelsByStrand: Partial<Record<StrandId, StrandAchievementLevels>> = {
  "A.i": {
    year1: [
      { band: "1–2", commandTerm: "State", description: "Says there is a problem, without saying why it matters." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why this problem is worth solving." },
      { band: "5–6", commandTerm: "Explain", description: "Explains why this problem needs solving, with real reasons." },
      { band: "7–8", commandTerm: "Explain and justify", description: "Explains why it needs solving, and justifies why, working mostly on your own." },
    ],
    year3: [
      { band: "1–2", commandTerm: "State", description: "Says there is a problem, without saying why it matters." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why this problem is worth solving." },
      { band: "5–6", commandTerm: "Explain", description: "Explains why this problem needs solving, with real reasons." },
      { band: "7–8", commandTerm: "Explain and justify", description: "Explains why it needs solving, and justifies why, working mostly on your own." },
    ],
    year5: [
      { band: "1–2", commandTerm: "State", description: "Says there is a problem for your client or user, without saying why it matters." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why this problem matters for them." },
      { band: "5–6", commandTerm: "Explain", description: "Explains why this problem matters for them, with real reasons." },
      { band: "7–8", commandTerm: "Explain and justify", description: "Explains why it matters, and justifies why it is worth solving now, for them specifically." },
    ],
  },
  "A.ii": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names a few research topics you need to look into, with help." },
      { band: "5–6", commandTerm: "State and prioritize", description: "Names the research you need and puts it in a sensible order, with help." },
      { band: "7–8", commandTerm: "State and prioritize", description: "Names the research you need and puts it in a sensible order, working mostly on your own." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names the research you need, with help." },
      { band: "5–6", commandTerm: "Construct", description: "Builds a research plan that names and orders your research, with help." },
      { band: "7–8", commandTerm: "Construct", description: "Builds a research plan that names and orders your research, working independently." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Sketches a research plan that names your research, with help." },
      { band: "5–6", commandTerm: "Construct", description: "Builds a research plan that names and orders your primary and secondary research, with help." },
      { band: "7–8", commandTerm: "Construct", description: "Builds a detailed research plan that names and orders your research, working independently." },
    ],
  },
  "A.iii": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names the main features of one existing product." },
      { band: "5–6", commandTerm: "Outline", description: "Gives a short summary of the main features of one existing product." },
      { band: "7–8", commandTerm: "Describe", description: "Gives a detailed account of the main features of one existing product." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of one existing product." },
      { band: "5–6", commandTerm: "Describe", description: "Gives a detailed account of a group of similar products." },
      { band: "7–8", commandTerm: "Analyse", description: "Breaks down a group of similar products to show what makes them work." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Analyse", description: "Breaks down one existing product to show what makes it work." },
      { band: "5–6", commandTerm: "Analyse", description: "Breaks down a range of existing products to show what makes them work." },
      { band: "7–8", commandTerm: "Analyse", description: "Breaks down a range of existing products in detail, to show what makes them work." },
    ],
  },
  "A.iv": {
    year1: [
      { band: "1–2", commandTerm: "State", description: "Names what your research found." },
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of some of what your research found." },
      { band: "5–6", commandTerm: "Outline", description: "Gives a short summary of what your research found." },
      { band: "7–8", commandTerm: "Present", description: "Shows what your research found, clearly and completely." },
    ],
    year3: [
      { band: "1–2", commandTerm: "State", description: "Names what your research found, inside a basic design brief." },
      { band: "3–4", commandTerm: "Develop", description: "Puts together a basic design brief that gives a short summary of what your research found." },
      { band: "5–6", commandTerm: "Develop", description: "Puts together a design brief that gives a short summary of what your research found." },
      { band: "7–8", commandTerm: "Develop", description: "Puts together a design brief that shows what your research found and why it matters." },
    ],
    year5: [
      { band: "1–2", commandTerm: "State", description: "Names what your research found, inside a basic design brief." },
      { band: "3–4", commandTerm: "Develop", description: "Puts together a design brief that gives a short summary of your research findings." },
      { band: "5–6", commandTerm: "Develop", description: "Puts together a design brief that shows what your research found and why it matters." },
      { band: "7–8", commandTerm: "Develop", description: "Puts together a detailed design brief that sums up your research findings clearly." },
    ],
  },
  "B.i": {
    year1: [
      { band: "1–2", commandTerm: "State", description: "Names one basic thing your solution needs to do." },
      { band: "3–4", commandTerm: "State", description: "Names a few things your solution needs to do." },
      { band: "5–6", commandTerm: "Develop", description: "Works out a few success criteria for your solution." },
      { band: "7–8", commandTerm: "Develop", description: "Works out a full list of success criteria for your solution." },
    ],
    year3: [
      { band: "1–2", commandTerm: "List", description: "Names a few basic things your solution needs to do." },
      { band: "3–4", commandTerm: "Construct", description: "Builds a list of success criteria for your solution." },
      { band: "5–6", commandTerm: "Develop", description: "Works out design specifications that show what your solution needs to do." },
      { band: "7–8", commandTerm: "Develop", description: "Works out a design specification that explains what your solution needs to do, based on your research data." },
    ],
    year5: [
      { band: "1–2", commandTerm: "List", description: "Names a few basic design specifications." },
      { band: "3–4", commandTerm: "List", description: "Names design specifications connected to what your solution needs to do." },
      { band: "5–6", commandTerm: "Develop", description: "Works out design specifications that spell out what your solution needs to do." },
      { band: "7–8", commandTerm: "Develop", description: "Works out detailed design specifications that explain what your solution needs to do, based on your research." },
    ],
  },
  "B.ii": {
    year1: [
      { band: "1–2", commandTerm: "Present", description: "Shows one design idea that others can understand." },
      { band: "3–4", commandTerm: "Present", description: "Shows more than one design idea, with key features labeled, that others can understand." },
      { band: "5–6", commandTerm: "Present", description: "Shows a few feasible design ideas, with key features labeled, that others can understand." },
      { band: "7–8", commandTerm: "Present", description: "Shows several feasible design ideas, with key features outlined, that others can correctly understand." },
    ],
    year3: [
      { band: "1–2", commandTerm: "Present", description: "Shows one design idea that others can understand." },
      { band: "3–4", commandTerm: "Present", description: "Shows a few feasible design ideas, with key features explained, that others can understand." },
      { band: "5–6", commandTerm: "Present", description: "Shows a range of feasible design ideas, with key features explained, that others can understand." },
      { band: "7–8", commandTerm: "Present", description: "Shows a range of feasible design ideas, fully annotated, that others can correctly understand." },
    ],
    year5: [
      { band: "1–2", commandTerm: "Present", description: "Shows one design that others can understand." },
      { band: "3–4", commandTerm: "Present", description: "Shows a few feasible designs, sketched or annotated, that others can understand." },
      { band: "5–6", commandTerm: "Develop", description: "Works out a range of feasible design ideas, annotated, that others can understand." },
      { band: "7–8", commandTerm: "Develop", description: "Works out a range of feasible design ideas, in detailed annotation, that others can correctly understand." },
    ],
  },
  "B.iii": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names the key features of your chosen design." },
      { band: "5–6", commandTerm: "Present", description: "Shows your chosen design, stating its key features." },
      { band: "7–8", commandTerm: "Present", description: "Shows your chosen design, describing its key features." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of why you chose your design, linked to your specification." },
      { band: "5–6", commandTerm: "Present", description: "Shows your chosen design, with a short summary of why you chose it, linked to your specification." },
      { band: "7–8", commandTerm: "Present", description: "Shows your chosen design, with the reasons for choosing it, linked to your specification." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Justify", description: "Gives reasons for choosing your design, linked to your specification." },
      { band: "5–6", commandTerm: "Present", description: "Shows your chosen design, and justifies choosing it, linked to your specification." },
      { band: "7–8", commandTerm: "Present", description: "Shows your chosen design, and justifies your choice fully and critically, with detailed reference to your specification." },
    ],
  },
  "B.iv": {
    year1: [
      { band: "1–2", commandTerm: "Create", description: "Makes an incomplete planning drawing." },
      { band: "3–4", commandTerm: "Create", description: "Makes a planning drawing, or lists what is needed to build your solution." },
      { band: "5–6", commandTerm: "Create", description: "Makes a planning drawing and lists the main details for building your solution." },
      { band: "7–8", commandTerm: "Create", description: "Makes a planning drawing that outlines the main details for building your solution." },
    ],
    year3: [
      { band: "1–2", commandTerm: "Create", description: "Makes incomplete planning drawings." },
      { band: "3–4", commandTerm: "Create", description: "Makes planning drawings, or lists what is needed for your solution." },
      { band: "5–6", commandTerm: "Develop", description: "Makes accurate planning drawings and lists what is needed for your solution." },
      { band: "7–8", commandTerm: "Develop", description: "Makes accurate planning drawings and outlines what is needed for your solution." },
    ],
    year5: [
      { band: "1–2", commandTerm: "Create", description: "Makes incomplete planning drawings." },
      { band: "3–4", commandTerm: "Create", description: "Makes planning drawings, or lists what your solution needs." },
      { band: "5–6", commandTerm: "Develop", description: "Makes accurate planning drawings and lists what your solution needs." },
      { band: "7–8", commandTerm: "Develop", description: "Makes accurate, detailed planning drawings and outlines exactly what your solution needs." },
    ],
  },
  "C.i": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "List", description: "Lists the main steps of your plan, with some details, though peers would find it hard to follow." },
      { band: "5–6", commandTerm: "List", description: "Lists the steps of your plan, considering time and resources, so peers can follow it." },
      { band: "7–8", commandTerm: "Outline", description: "Gives a short summary of your plan, considering time and resources, so peers can follow it." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of each step in your plan, though peers would find it hard to follow." },
      { band: "5–6", commandTerm: "Construct", description: "Builds a plan that considers time and resources, so peers can follow it." },
      { band: "7–8", commandTerm: "Construct", description: "Builds a logical plan that gives a short summary of how you will use time and resources, so peers can follow it." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Construct", description: "Builds a plan with some production details, though peers would find it hard to follow." },
      { band: "5–6", commandTerm: "Construct", description: "Builds a logical plan that considers time and resources, so peers can follow it." },
      { band: "7–8", commandTerm: "Construct", description: "Builds a detailed, logical plan that fully describes how you will use time and resources, so peers can follow it." },
    ],
  },
  "C.ii": {
    year1: [
      { band: "1–2", commandTerm: "Demonstrate", description: "Shows simple skills, needing a lot of help after being shown how." },
      { band: "3–4", commandTerm: "Demonstrate", description: "Shows simple and some complex skills, needing some help after being shown how." },
      { band: "5–6", commandTerm: "Demonstrate", description: "Shows complex skills, mostly working independently after being shown how." },
      { band: "7–8", commandTerm: "Demonstrate", description: "Shows a wide range of complex skills, working independently with minimal help." },
    ],
    year3: [
      { band: "1–2", commandTerm: "Demonstrate", description: "Shows simple skills, needing a lot of help after being shown how." },
      { band: "3–4", commandTerm: "Demonstrate", description: "Shows simple and some complex skills, needing some help after being shown how." },
      { band: "5–6", commandTerm: "Demonstrate", description: "Shows complex skills, mostly working independently after being shown how." },
      { band: "7–8", commandTerm: "Demonstrate", description: "Shows a wide range of complex skills, working independently with minimal help." },
    ],
    year5: [
      { band: "1–2", commandTerm: "Demonstrate", description: "Shows simple skills, needing a lot of help after being shown how." },
      { band: "3–4", commandTerm: "Demonstrate", description: "Shows simple and some complex skills, needing some help after being shown how." },
      { band: "5–6", commandTerm: "Demonstrate", description: "Shows complex skills, mostly working independently after being shown how." },
      { band: "7–8", commandTerm: "Demonstrate", description: "Shows a wide range of complex skills, working independently with minimal help." },
    ],
  },
  "C.iii": {
    year1: [
      { band: "1–2", commandTerm: "Create", description: "Makes a solution that barely works and looks unfinished." },
      { band: "3–4", commandTerm: "Create", description: "Makes a solution that partly works and looks reasonably finished." },
      { band: "5–6", commandTerm: "Create", description: "Makes a solution that works as intended and looks well finished." },
      { band: "7–8", commandTerm: "Follow", description: "Follows your plan to make a solution that works as intended and looks well finished." },
    ],
    year3: [
      { band: "1–2", commandTerm: "Create", description: "Makes a solution that barely works and looks unfinished." },
      { band: "3–4", commandTerm: "Create", description: "Makes a solution that partly works and looks reasonably finished." },
      { band: "5–6", commandTerm: "Create", description: "Makes a solution that works as intended and looks well finished." },
      { band: "7–8", commandTerm: "Follow", description: "Follows your plan to make a solution that works as intended and looks well finished." },
    ],
    year5: [
      { band: "1–2", commandTerm: "Create", description: "Makes a solution that barely works and looks unfinished." },
      { band: "3–4", commandTerm: "Create", description: "Makes a solution that partly works and looks reasonably finished." },
      { band: "5–6", commandTerm: "Create", description: "Makes a solution that works as intended and looks well finished." },
      { band: "7–8", commandTerm: "Follow", description: "Follows your plan to make a solution that works as intended and looks well finished." },
    ],
  },
  "C.iv": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names one change you made to your design or plan." },
      { band: "5–6", commandTerm: "State", description: "Names one change you made to your design and plan." },
      { band: "7–8", commandTerm: "List", description: "Lists the changes you made to your design and plan." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of the changes you made to your design or plan." },
      { band: "5–6", commandTerm: "Outline", description: "Gives a short summary of the changes you made to your design and plan." },
      { band: "7–8", commandTerm: "Explain", description: "Explains the changes you made to your design and plan." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of the changes you made to your design and plan." },
      { band: "5–6", commandTerm: "Describe", description: "Gives a detailed account of the changes you made to your design and plan." },
      { band: "7–8", commandTerm: "Fully justify", description: "Fully justifies, with real reasons, the changes you made to your design and plan." },
    ],
  },
  "D.i": {
    year1: [
      { band: "1–2", commandTerm: "Define", description: "Names one way you could test your solution." },
      { band: "3–4", commandTerm: "Define", description: "Names one relevant way to test your solution and collect data." },
      { band: "5–6", commandTerm: "Define", description: "Names relevant ways to test your solution and collect data." },
      { band: "7–8", commandTerm: "Outline", description: "Gives a short summary of simple, relevant ways to test your solution and collect data." },
    ],
    year3: [
      { band: "1–2", commandTerm: "Describe", description: "Names one way you could test your solution." },
      { band: "3–4", commandTerm: "Describe", description: "Gives a short account of one relevant way to test your solution and collect data." },
      { band: "5–6", commandTerm: "Describe", description: "Gives a detailed account of relevant ways to test your solution and collect data." },
      { band: "7–8", commandTerm: "Describe", description: "Gives a detailed account of thorough, relevant ways to test your solution and collect accurate data." },
    ],
    year5: [
      { band: "1–2", commandTerm: "Design", description: "Names one way you could test your solution." },
      { band: "3–4", commandTerm: "Design", description: "Plans one relevant way to test your solution and collect data." },
      { band: "5–6", commandTerm: "Design", description: "Plans relevant ways to test your solution and collect data." },
      { band: "7–8", commandTerm: "Design", description: "Plans thorough, relevant ways to test your solution and collect data." },
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
  "D.iii": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names one way the solution could be improved." },
      { band: "5–6", commandTerm: "Outline", description: "Gives a short summary of one way the solution could be improved." },
      { band: "7–8", commandTerm: "Outline", description: "Gives a short summary of how the solution could be improved." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "List", description: "Names the ways the solution could be improved." },
      { band: "5–6", commandTerm: "Outline", description: "Gives a short summary of how the solution could be improved." },
      { band: "7–8", commandTerm: "Describe", description: "Gives a detailed account of how the solution could be improved." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of how the solution could be improved." },
      { band: "5–6", commandTerm: "Describe", description: "Gives a detailed account of how the solution could be improved." },
      { band: "7–8", commandTerm: "Explain", description: "Explains, with real reasons, how the solution could be improved." },
    ],
  },
  "D.iv": {
    year1: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "State", description: "Names one way the solution could affect your client or user." },
      { band: "5–6", commandTerm: "Outline", description: "Gives a short summary of the solution's impact, with guidance." },
      { band: "7–8", commandTerm: "Outline", description: "Gives a short summary of the solution's impact, working independently." },
    ],
    year3: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of the solution's impact." },
      { band: "5–6", commandTerm: "Describe", description: "Gives a detailed account of the solution's impact, with guidance." },
      { band: "7–8", commandTerm: "Describe", description: "Gives a detailed account of the solution's impact, working independently." },
    ],
    year5: [
      NOT_DESCRIBED_AT_1_2,
      { band: "3–4", commandTerm: "Outline", description: "Gives a short summary of the solution's impact." },
      { band: "5–6", commandTerm: "Explain", description: "Explains the solution's impact, with guidance." },
      { band: "7–8", commandTerm: "Explain", description: "Explains the solution's impact, working independently." },
    ],
  },
};
