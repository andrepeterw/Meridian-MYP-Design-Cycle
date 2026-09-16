export type CriterionKey = "A" | "B" | "C" | "D";

export type StrandId =
  | "A.i" | "A.ii" | "A.iii" | "A.iv"
  | "B.i" | "B.ii" | "B.iii" | "B.iv"
  | "C.i" | "C.ii" | "C.iii" | "C.iv"
  | "D.i" | "D.ii" | "D.iii" | "D.iv";

/** A single citation attached to a strand, framed for that grade's reading level. */
export interface StrandCitation {
  /** Matches an id in content/references.ts */
  refId: string;
  /** One grade-appropriate sentence (or two, at Grade 9-10) connecting the source to this strand. */
  framing: string;
  /** Optional "other side of the debate" sentence, used sparingly (Criterion A, older grades). */
  counterpoint?: string;
  /** refId of the source used in the counterpoint, if different from refId. */
  counterpointRefId?: string;
}

export interface Strand {
  id: StrandId;
  title: string;
  /** Written directly to the student, grade-scaffolded, action-driven. */
  instructions: string;
  /** Original paraphrase of what strong work looks like at this grade -- never copied from the IB guide. */
  rubricSummary: string;
  citation: StrandCitation;
  reflectionQuestion: string;
}

export interface CriterionContent {
  key: CriterionKey;
  name: string;
  color: string;
  tint: string;
  strands: [Strand, Strand, Strand, Strand];
}

export type Grade = 6 | 7 | 8 | 9 | 10;

export interface GradeContent {
  grade: Grade;
  mypYear: string;
  /** Short line shown under the grade's page heading, reflecting where they sit on the scaffolding ladder. */
  tagline: string;
  criteria: {
    A: CriterionContent;
    B: CriterionContent;
    C: CriterionContent;
    D: CriterionContent;
  };
}
