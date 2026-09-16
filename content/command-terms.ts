export interface CommandTerm {
  slug: string;
  term: string;
  definition: string;
  /** Every inflected word form of this term that appears in the grade content, lowercase. */
  forms: string[];
}

/**
 * MYP command terms for design. Definitions are original paraphrases of the
 * meaning in the IB Design guide appendix ("MYP command terms for design"),
 * not copied from the guide's wording, since the guide is IB copyrighted material.
 */
export const commandTerms: CommandTerm[] = [
  {
    slug: "analyse",
    term: "Analyse",
    definition:
      "Break something down into its parts so you can see how the pieces relate to each other, then use that to reach a conclusion.",
    forms: ["analyse", "analyses", "analysed", "analysing", "analyze", "analyzes", "analyzed", "analyzing"],
  },
  {
    slug: "construct",
    term: "Construct",
    definition: "Lay information out in a diagram or a clear, logical structure.",
    forms: ["construct", "constructs", "constructed", "constructing"],
  },
  {
    slug: "create",
    term: "Create",
    definition: "Bring something new into existence using your own ideas or imagination.",
    forms: ["create", "creates", "created", "creating"],
  },
  {
    slug: "define",
    term: "Define",
    definition: "State exactly what a word, phrase, concept, or quantity means.",
    forms: ["define", "defines", "defined", "defining"],
  },
  {
    slug: "demonstrate",
    term: "Demonstrate",
    definition: "Make something clear by giving reasons, evidence, or a practical example.",
    forms: ["demonstrate", "demonstrates", "demonstrated", "demonstrating"],
  },
  {
    slug: "describe",
    term: "Describe",
    definition: "Give a detailed picture of a situation, event, pattern, or process.",
    forms: ["describe", "describes", "described", "describing"],
  },
  {
    slug: "design",
    term: "Design",
    definition: "Produce a plan, simulation, or model.",
    forms: ["design", "designs", "designed", "designing"],
  },
  {
    slug: "develop",
    term: "Develop",
    definition:
      "Improve something step by step, adding detail until it reaches a more advanced or effective state.",
    forms: ["develop", "develops", "developed", "developing"],
  },
  {
    slug: "evaluate",
    term: "Evaluate",
    definition: "Weigh up the strengths and limitations of something to judge its value.",
    forms: ["evaluate", "evaluates", "evaluated", "evaluating"],
  },
  {
    slug: "explain",
    term: "Explain",
    definition: "Give a detailed account that includes the reasons or causes behind something.",
    forms: ["explain", "explains", "explained", "explaining"],
  },
  {
    slug: "identify",
    term: "Identify",
    definition:
      "Pick out the correct answer from a number of possibilities, or name a distinguishing feature briefly.",
    forms: ["identify", "identifies", "identified", "identifying"],
  },
  {
    slug: "justify",
    term: "Justify",
    definition: "Give valid reasons or evidence that support an answer or a decision.",
    forms: ["justify", "justifies", "justified", "justifying"],
  },
  {
    slug: "list",
    term: "List",
    definition: "Give a sequence of brief answers with no explanation.",
    forms: ["list", "lists", "listed", "listing"],
  },
  {
    slug: "outline",
    term: "Outline",
    definition: "Give a brief account or summary, without going into full detail.",
    forms: ["outline", "outlines", "outlined", "outlining"],
  },
  {
    slug: "present",
    term: "Present",
    definition: "Offer something for others to view, observe, or consider.",
    forms: ["present", "presents", "presented", "presenting"],
  },
  {
    slug: "prioritize",
    term: "Prioritize",
    definition: "Decide what matters most and put things in order of importance.",
    forms: ["prioritize", "prioritizes", "prioritized", "prioritizing", "prioritise", "prioritises", "prioritised", "prioritising"],
  },
  {
    slug: "state",
    term: "State",
    definition: "Give a short, specific answer, name, or value with no explanation.",
    forms: ["state", "states", "stated", "stating"],
  },
  {
    slug: "summarize",
    term: "Summarize",
    definition: "Pull out the general theme or the main points, without unnecessary detail.",
    forms: ["summarize", "summarizes", "summarized", "summarizing", "summarise", "summarises", "summarised", "summarising"],
  },
];

export const commandTermBySlug: Record<string, CommandTerm> = Object.fromEntries(
  commandTerms.map((t) => [t.slug, t])
);

/** Maps every lowercase inflected word form back to its command term's slug. */
export const commandTermFormToSlug: Record<string, string> = Object.fromEntries(
  commandTerms.flatMap((t) => t.forms.map((form) => [form, t.slug]))
);
