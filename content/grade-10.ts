import type { GradeContent } from "./types";
import { criterionTheme } from "./theme";

export const grade10: GradeContent = {
  grade: 10,
  mypYear: "MYP Year 5",
  tagline: "An open brief. You define the problem, the client, and the solution.",
  criteria: {
    A: {
      key: "A",
      ...criterionTheme.A,
      strands: [
        {
          id: "A.i",
          title: "Explain and justify the need for a solution",
          instructions:
            "Working from an open brief, define your own complex, real-world problem and a specific client or target audience for it. Explain and justify the need for a solution with academic rigor: your evidence should be strong enough to survive someone challenging it.",
          rubricSummary:
            "Excellent work explains and justifies, in detail, why a solution is needed for a specific client or audience, drawing on evidence gathered and reasoned about independently.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "Ritchhart and Perkins (2008) found that when students are pushed to justify their thinking aloud, rather than simply report conclusions, their understanding of a problem becomes measurably more sophisticated.",
            counterpoint:
              "Kirschner, Sweller, and Clark (2006) push back on this kind of inquiry-first approach directly, arguing that minimally guided tasks often teach less efficiently than direct instruction. Decide for yourself whether this brief's open-endedness is helping you or slowing you down.",
            counterpointRefId: "kirschner2006",
          },
          reflectionQuestion: "If an expert in this field read your justification, what part would they push back on hardest, and could you defend it?",
        },
        {
          id: "A.ii",
          title: "Identify and prioritize research",
          instructions:
            "Identify and prioritize the primary and secondary research your problem actually requires, constructing your research approach independently rather than following a set method.",
          rubricSummary:
            "Excellent work identifies and prioritizes research independently, with a research approach that's clearly been constructed, not just assembled from habit.",
          citation: {
            refId: "dang2025",
            framing:
              "Dang (2025) concludes that student agency over research direction is one of the clearest predictors of genuine engagement, based on interviews with both students and school leaders. It's worth asking, though, whether a study built on interviews and self-report can fully capture whether that engagement translates into better research decisions, not just more enthusiasm about them.",
          },
          reflectionQuestion: "Where did your research plan lead you somewhere you didn't expect when you started?",
        },
        {
          id: "A.iii",
          title: "Analyse existing products",
          instructions:
            "Analyse a wide range of existing products relevant to your problem, in detail, identifying not just what works but why it works for the specific client or audience you've defined.",
          rubricSummary:
            "Excellent work analyses a wide range of products in detail, connecting what works specifically to the needs of the defined client or audience.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "Ritchhart and Perkins (2008) developed See-Think-Wonder specifically to counter the tendency to judge quickly rather than observe carefully. It's a routine built for classroom use with limited time, though — worth considering whether a slower, more academic form of product analysis might reveal even more at this level.",
          },
          reflectionQuestion: "What would a genuine expert notice in this product range that you might have missed?",
        },
        {
          id: "A.iv",
          title: "Develop a design brief",
          instructions:
            "Develop a detailed design brief that summarizes your analysis of the research in full, written as though it will actually be handed to your client.",
          rubricSummary:
            "Excellent work develops a detailed brief that summarizes research analysis with precision, written at a standard that could genuinely be shared with a real client.",
          citation: {
            refId: "dang2025",
            framing:
              "Dang's (2025) findings suggest that writing for a real audience, rather than solely for assessment, raises the quality of student work. Since the study relies on self-reported engagement rather than directly measured writing quality, you might reasonably ask how much of that improvement is real versus perceived, and test that on your own brief.",
          },
          reflectionQuestion: "Would your actual client accept this brief, or would they ask you to revise it first?",
        },
      ],
    },
    B: {
      key: "B",
      ...criterionTheme.B,
      strands: [
        {
          id: "B.i",
          title: "Develop a design specification",
          instructions:
            "Develop design specifications that clearly state the success criteria for your solution, derived from your own analysis of the research data, with no fixed template to follow.",
          rubricSummary:
            "Excellent work develops design specifications that clearly and precisely state success criteria, explained with reference to the research that produced them.",
          citation: {
            refId: "condliffe2017",
            framing:
              "Condliffe and colleagues (2017) found that clear, evidence-based success criteria were consistently linked to stronger outcomes across the project-based learning literature they reviewed. Their review draws mostly on U.S. secondary programs, though, so it's fair to ask how directly that finding transfers to a design specification you're writing for an international, MYP context.",
          },
          reflectionQuestion: "Which of your success criteria would be hardest to defend if your client disagreed with it?",
        },
        {
          id: "B.ii",
          title: "Develop a range of feasible design ideas",
          instructions:
            "Develop a range of feasible design ideas, using whatever medium and annotation best communicates them, correctly interpretable by someone who has never spoken to you about the project.",
          rubricSummary:
            "Excellent work develops a genuinely feasible range of ideas with annotation precise enough to be correctly interpreted without any verbal explanation.",
          citation: {
            refId: "hui2023",
            framing:
              "Hui and Mahmud (2023) found that playful, exploratory idea generation outperformed narrowly focused approaches across the mathematics education studies they reviewed. Design and mathematics classrooms aren't identical, so it's worth testing whether that same playful approach holds up when the ideas need to survive a client's scrutiny, not just a teacher's.",
          },
          reflectionQuestion: "Which of your ideas would most impress a real client, and which would they dismiss immediately?",
        },
        {
          id: "B.iii",
          title: "Present the chosen design and justify its selection",
          instructions:
            "Present the chosen design and justify its selection fully and critically, with detailed reference to the design specification, addressing the strongest objection someone could raise against it.",
          rubricSummary:
            "Excellent work justifies the selection fully and critically, addressing the specification in detail and pre-empting the strongest possible objection.",
          citation: {
            refId: "meyer2024",
            framing:
              "Meyer (2024) argues that aesthetic reasoning, explaining why something feels right, deserves a legitimate place alongside functional justification. That argument comes from a philosophical, not empirical, tradition, so you might reasonably weigh how much weight \"it feels right\" should actually carry next to your measurable specification.",
          },
          reflectionQuestion: "What's the strongest argument someone could make against your chosen design, and how would you answer it?",
        },
        {
          id: "B.iv",
          title: "Develop planning drawings and diagrams",
          instructions:
            "Develop accurate and detailed planning drawings and diagrams, and outline the requirements for creation to a standard a professional in the field could actually follow.",
          rubricSummary:
            "Excellent work develops accurate, detailed planning documents and requirements precise enough for an outside professional to follow without clarification.",
          citation: {
            refId: "condliffe2017",
            framing:
              "The same project-based learning review (Condliffe et al., 2017) found detailed planning correlated with smoother execution, though correlation in observational classroom research doesn't prove that better planning caused the smoother build, rather than more capable students simply planning more thoroughly in the first place. Consider which explanation better fits your own experience.",
          },
          reflectionQuestion: "Could a professional in this field actually build from your plan, or only another student?",
        },
      ],
    },
    C: {
      key: "C",
      ...criterionTheme.C,
      strands: [
        {
          id: "C.i",
          title: "Construct a logical plan",
          instructions:
            "Construct a logical, detailed plan that describes the efficient use of time and resources, sufficient for a peer to follow to create your solution with no input from you at all.",
          rubricSummary:
            "Excellent work constructs a detailed, logical plan describing efficient time and resource use, complete enough for independent execution by someone else.",
          citation: {
            refId: "beasley2022",
            framing:
              "Beasley and Haulmark (2022) treat precise planning as a general education skill rather than one specific to design, drawing that conclusion from a broad survey of educational theory rather than design classrooms specifically. It's worth considering what, if anything, is different about planning a physical or technical build compared to planning any other kind of school task.",
          },
          reflectionQuestion: "What part of this plan only makes sense because of expertise you've built up that a peer might not have?",
        },
        {
          id: "C.ii",
          title: "Demonstrate technical skills",
          instructions:
            "Demonstrate excellent technical skills throughout, seeking out techniques beyond what's been taught in class if your solution requires them.",
          rubricSummary:
            "Excellent work demonstrates excellent technical skill, including techniques the student sought out and learned independently, beyond classroom instruction.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "Meyer, Rose, and Gordon (2014) argue that flexibility in tools and methods, not just access to more of them, drives stronger technical performance. Their framework is built primarily around learning differences and accessibility, so it's worth asking whether the same logic applies as cleanly when the goal is pushing technical skill to an expert level.",
          },
          reflectionQuestion: "What technique did you have to teach yourself, and how do you know you did it correctly?",
        },
        {
          id: "C.iii",
          title: "Follow the plan to create the solution",
          instructions:
            "Follow your plan to create a solution that functions exactly as intended, finished to a standard suitable for presentation outside of school.",
          rubricSummary:
            "Excellent work results in a solution that functions as intended and is finished and presented to a professional, presentation-ready standard.",
          citation: {
            refId: "almeqdad2023",
            framing:
              "Almeqdad and colleagues (2023) found flexible, adaptive building processes associated with stronger outcomes across the UDL studies in their meta-analysis. Meta-analyses combine very different studies and contexts, though, so it's fair to ask whether \"flexibility\" means the same thing in a hands-on design project as it does in the classroom studies they reviewed.",
          },
          reflectionQuestion: "Would this solution hold up to use outside of a school context, by someone who's never met you?",
        },
        {
          id: "C.iv",
          title: "Justify changes made to the design",
          instructions:
            "Fully justify every significant change you made to your chosen design and plan while making the solution, with evidence and reasoning precise enough to convince a skeptical outside reviewer.",
          rubricSummary:
            "Excellent work fully justifies changes with precise evidence and reasoning, anticipating and answering why a different choice wasn't made instead.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "The same UDL framework (Meyer, Rose, & Gordon, 2014) treats mid-process adaptation as evidence of a responsive maker rather than poor planning. That framing is a deliberate choice within UDL's own philosophy — a more traditional engineering perspective might instead treat frequent design changes as a sign the planning phase needed more rigor. Which reading fits your project better?",
          },
          reflectionQuestion: "If a stricter reviewer treated every change as a planning failure, how would you argue back?",
        },
      ],
    },
    D: {
      key: "D",
      ...criterionTheme.D,
      strands: [
        {
          id: "D.i",
          title: "Design testing methods",
          instructions:
            "Design detailed, relevant testing methods that generate data matched precisely to how your specified client or target audience would actually use the solution.",
          rubricSummary:
            "Excellent work designs detailed, relevant tests that would generate genuinely useful data under real conditions of use for the specified audience.",
          citation: {
            refId: "ali2023",
            framing:
              "Ali and Knowles (2023) call for assessment that mirrors authentic, real-world tasks rather than convenient, abstract ones, a call aimed at how schools assess students generally, not specifically at product testing. Consider how directly their argument about authentic assessment actually maps onto testing a physical or digital solution you've built.",
          },
          reflectionQuestion: "Which test result would most change your client's opinion of the solution, for better or worse?",
        },
        {
          id: "D.ii",
          title: "Evaluate the success of the solution",
          instructions:
            "Critically evaluate the success of the solution against your design specification, weighing conflicting evidence and being explicit about uncertainty where it exists.",
          rubricSummary:
            "Excellent work critically evaluates success against every specification item, weighing evidence honestly and naming uncertainty rather than resolving it artificially.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The Connect-Extend-Challenge routine (Ritchhart & Perkins, 2008) was designed for a classroom setting to prompt genuine reconsideration of new information. A critical evaluation at this level should go further than the routine's original classroom purpose, treating your own conclusions as open to challenge, not just the material you're reviewing.",
          },
          reflectionQuestion: "Where is the evidence genuinely mixed, rather than clearly pointing one way?",
        },
        {
          id: "D.iii",
          title: "Explain how the solution could be improved",
          instructions:
            "Explain how the solution could be improved, in detail, prioritizing improvements by both evidence and feasibility for the specified client.",
          rubricSummary:
            "Excellent work explains improvements in detail, prioritized by both what the evidence supports and what's realistically feasible for the client.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The \"Challenge\" step in Ritchhart and Perkins's (2008) routine treats ongoing scrutiny of finished work as valuable in itself. Applied at this level, that scrutiny should extend to your own proposed improvements too — are they actually feasible, or just theoretically nice?",
          },
          reflectionQuestion: "Which improvement sounds good in theory but might not actually be feasible for your client?",
        },
        {
          id: "D.iv",
          title: "Explain the impact of the solution",
          instructions:
            "Explain the impact of the solution on the client or target audience in detail, distinguishing between impact you've actually observed and impact you're only predicting.",
          rubricSummary:
            "Excellent work explains impact in detail, clearly distinguishing observed evidence from reasonable prediction, rather than blending the two.",
          citation: {
            refId: "alpaydin2022",
            framing:
              "Alpaydin and Demirli (2022) argue that evaluation should reveal genuine impact rather than simply confirm task completion, a claim drawn from broad educational theory rather than design-specific research. Consider whether their standard for \"genuine impact\" is actually achievable within the timeframe of a school project, or whether some prediction is unavoidable.",
          },
          reflectionQuestion: "How much of your stated impact is something you've actually measured, versus something you expect to be true?",
        },
      ],
    },
  },
};
