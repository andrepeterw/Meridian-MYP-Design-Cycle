export interface ProcessJournalNode {
  id: string;
  label: string;
  evidenceNote: string;
}

export interface ProcessJournalCriterion {
  key: "A" | "B" | "C" | "D";
  name: string;
  color: string;
  nodes: ProcessJournalNode[];
}

/** A real example Process Journal, linked above the illustrative product/digital examples. */
export const exemplarSiteUrl: string | null =
  "https://sites.google.com/aislagos.org/dr-s-process-journal/home";

export const processJournalContent = {
  intro:
    "Meridian shows you the route through the Design Cycle. Your Process Journal is where the actual evidence of your work lives: research notes, sketches, drafts, testing data, reflections, final products. This page shows you how to build one and what a finished one looks like.",
  setup: {
    steps: [
      "Go to sites.google.com and start a new, blank site.",
      "Name it clearly, for example, \"Your Name, MYP Design Process Journal.\"",
      "Build the page tree below exactly: one page per unit, with a section for each of the four criteria, and a page for each strand inside it.",
      "Share it with your Design teacher using the sharing setting below, so feedback and comments can happen throughout the unit, not just at the end.",
    ],
    sharingSetting:
      "Set sharing so anyone with the link can comment. This lets your teacher (and anyone else you share it with) leave feedback directly on your journal as you go, without needing individual edit access.",
  },
  uploadGuidance: [
    "Upload things that actually show your thinking: research notes, photos of sketches, screenshots, drafts, feedback you received, testing data, and reflections.",
    "Every upload should demonstrate meaningful learning. If a piece of evidence doesn't show what you did or what you learned, leave it out. Don't upload things just to fill space.",
    "Update your journal right after you finish each strand's reflection question on your grade's Design Cycle Route page, not all at once at the end of the unit. Evidence uploaded in the moment is more honest and more useful than evidence reconstructed from memory later.",
  ],
  tree: [
    {
      key: "A",
      name: "Inquiring and analysing",
      color: "#0E477F",
      nodes: [
        { id: "A.i", label: "A.i", evidenceNote: "Notes justifying the problem: who it affects, and why." },
        { id: "A.ii", label: "A.ii", evidenceNote: "Your prioritized research plan and what you found." },
        { id: "A.iii", label: "A.iii", evidenceNote: "Photos or notes analysing existing products." },
        { id: "A.iv", label: "A.iv", evidenceNote: "Your finished design brief." },
      ],
    },
    {
      key: "B",
      name: "Developing ideas",
      color: "#DE8513",
      nodes: [
        { id: "B.i", label: "B.i", evidenceNote: "Your design specification / success criteria." },
        { id: "B.ii", label: "B.ii & B.iii", evidenceNote: "Sketches of design ideas, plus your justification for the one you chose." },
        { id: "B.iv", label: "B.iv", evidenceNote: "Your planning drawings and diagrams." },
      ],
    },
    {
      key: "C",
      name: "Creating the solution",
      color: "#0D7D65",
      nodes: [
        { id: "C.i", label: "C.i", evidenceNote: "Your build plan, with time and resources considered." },
        { id: "C.ii", label: "C.ii", evidenceNote: "Photos or video of technical skills in progress." },
        { id: "C.iii", label: "C.iii", evidenceNote: "Photos of the finished solution being made and tested for function." },
        { id: "C.iv", label: "C.iv", evidenceNote: "Notes on any changes made and why." },
      ],
    },
    {
      key: "D",
      name: "Evaluating",
      color: "#CC4C2D",
      nodes: [
        { id: "D.i", label: "D.i", evidenceNote: "Your testing methods and raw results." },
        { id: "D.ii", label: "D.ii", evidenceNote: "Your evaluation against your design specification." },
        { id: "D.iii", label: "D.iii", evidenceNote: "Specific, realistic improvement ideas." },
        { id: "D.iv", label: "D.iv", evidenceNote: "Your reflection on the solution's real impact." },
      ],
    },
  ] satisfies ProcessJournalCriterion[],
  exemplars: {
    disclaimer: "This is an illustrative model, not a real student submission.",
    unitName: "Unit 1: Helping classmates manage focus during independent study periods",
    product: {
      label: "Product design solution",
      projectName: "Solution A (Product): A flip block focus timer",
      entries: {
        "A.i": "\"The problem: during study hall, my classmates say they lose track of time and switch tasks too often to focus,\" backed by a quick survey of 15 classmates on their study habits.",
        "A.ii": "Research plan: primary research (survey and three short interviews about focus habits) prioritized above secondary research (articles on the Pomodoro technique), because real habits mattered more than general study advice.",
        "A.iii": "Notes and photos comparing three existing physical timers and focus tools, with a table of what worked and what didn't for a student user.",
        "A.iv": "One page design brief combining the problem, the survey results, and the physical tool comparison into a single direction: a screen free desk timer.",
        "B.i": "Checklist: must work without a screen or battery, must fit on a standard desk corner, must clearly show two states, focus and break.",
        "B.ii": "Three labeled sketches of different physical mechanisms (flip block, rotating dial, sliding marker), with a paragraph explaining why the flip block was chosen over the other two.",
        "B.iv": "A labeled diagram with exact measurements and a materials list, ready to hand to a partner to build from.",
        "C.i": "A step by step build plan with time estimates for each stage of assembly.",
        "C.ii": "Photos of practicing the acrylic cutting technique on scrap material before using it on the final piece.",
        "C.iii": "Photos of the finished flip block, with a note on the one step that had to be redone.",
        "C.iv": "\"Changed the block from a cube to a flattened rectangle because the cube kept rolling off the desk. Logged the stability problem and the fix.\"",
        "D.i": "Test plan: 5 classmates use the flip block for a week during study hall, logging ease of use and durability.",
        "D.ii": "Results table checked against the original checklist from B.i, with a note on which criteria passed and which didn't.",
        "D.iii": "\"The flip block is quiet, but the color change is hard to see from across the room. Bigger color faces would likely fix this.\"",
        "D.iv": "Reflection on classmate feedback: three of five testers said they'd actually keep using it, two preferred something with an alarm.",
      } as Record<string, string>,
    },
    digital: {
      label: "Digital design solution",
      projectName: "Solution B (Digital): A study timer web app",
      entries: {
        "A.i": "\"The problem: during study hall, my classmates say they lose track of time and switch tasks too often to focus,\" backed by a quick survey of 15 classmates on their study habits.",
        "A.ii": "Research plan: primary research (survey and three short interviews about focus habits) prioritized above secondary research (articles on the Pomodoro technique), because real habits mattered more than general study advice.",
        "A.iii": "Notes and screenshots comparing three existing timer apps, with a table of what worked and what didn't for a student user.",
        "A.iv": "One page design brief combining the problem, the survey results, and the app comparison into a single direction: a browser based timer.",
        "B.i": "Checklist: must run in a browser with no install, must let a user set custom session lengths, must save a session history.",
        "B.ii": "Three labeled wireframe sketches of different layouts, with a paragraph explaining why the single screen layout was chosen over the other two.",
        "B.iv": "A labeled wireframe diagram with the exact screen layout and a list of the app's screens, ready to hand to a partner to build from.",
        "C.i": "A step by step build plan listing each feature to code, in order, with time estimates.",
        "C.ii": "Screenshots of practicing the timer countdown logic in code, tested separately before adding it to the full app.",
        "C.iii": "Screenshots of the finished app running, with a note on the one feature that had to be simplified.",
        "C.iv": "\"Changed the session history from a full calendar view to a simple list because the calendar was too slow to load. Logged the performance issue and the fix.\"",
        "D.i": "Test plan: 5 classmates use the app for a week during study hall, logging ease of use and whether they kept using it.",
        "D.ii": "Results table checked against the original checklist from B.i, with a note on which criteria passed and which didn't.",
        "D.iii": "\"The session history list gets hard to read after a few days of use. A weekly summary view would likely fix this.\"",
        "D.iv": "Reflection on classmate feedback: four of five testers said they'd actually keep using it, one said they'd rather use a physical timer.",
      } as Record<string, string>,
    },
  },
};
