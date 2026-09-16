import type { GradeContent } from "./types";
import { criterionTheme } from "./theme";

export const grade9: GradeContent = {
  grade: 9,
  mypYear: "Between MYP Year 3 and Year 5",
  tagline: "A real problem, increasingly unfamiliar, for a target audience you've defined.",
  criteria: {
    A: {
      key: "A",
      ...criterionTheme.A,
      strands: [
        {
          id: "A.i",
          title: "Explain and justify the need for a solution",
          instructions:
            "Working from a checklist of success criteria rather than a template, define the real problem for a target audience you've identified. Explain and justify why it needs solving, backed by evidence, and prioritize which piece of evidence matters most.",
          rubricSummary:
            "Strong work explains and justifies the need for a solution for a clearly named target audience, backed by real evidence, and begins to prioritize which reasons carry the most weight.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "Ritchhart and Perkins (2008) found that students who justify their reasoning aloud, rather than simply stating conclusions, develop a measurably deeper understanding of a problem.",
            counterpoint:
              "Not every researcher agrees that this kind of open-ended, inquiry-first approach is the most efficient way to learn a skill — Kirschner, Sweller, and Clark (2006) argue that more directly guided instruction often teaches faster. It's worth deciding for yourself which side your own experience supports.",
            counterpointRefId: "kirschner2006",
          },
          reflectionQuestion:
            "Has anything about your target audience's real needs changed how you'd justify this problem, compared to when you first picked it?",
        },
        {
          id: "A.ii",
          title: "Identify and prioritize research",
          instructions:
            "Identify the primary and secondary research you need, and prioritize it with real independence — you decide the order, and be ready to explain your reasoning if asked.",
          rubricSummary:
            "Strong work identifies and prioritizes both primary and secondary research independently, needing only light guidance to justify the order chosen.",
          citation: {
            refId: "dang2025",
            framing:
              "Dang (2025) found that agency over research direction, not just over the final product, was a major factor in how seriously students engaged with a design task. That effect appeared to grow stronger as students took on more of the decision-making themselves.",
          },
          reflectionQuestion: "Which research decision did you make with the least input from your teacher, and how confident are you in it?",
        },
        {
          id: "A.iii",
          title: "Analyse existing products",
          instructions:
            "Analyse a broader range of existing products, four or more, that address a similar problem for your target audience. Go beyond describing features — identify patterns in what works and what doesn't across the group.",
          rubricSummary:
            "Strong work analyses a wide range of products for patterns and gaps, rather than treating each one as a separate, disconnected case.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The See-Think-Wonder routine (Ritchhart & Perkins, 2008) was built to slow down snap judgments so real patterns can surface across multiple observations, not just one. Applying it across a wider range of products should surface trends a single product wouldn't reveal.",
          },
          reflectionQuestion: "What pattern showed up across multiple products that you wouldn't have caught from studying just one?",
        },
        {
          id: "A.iv",
          title: "Develop a design brief",
          instructions:
            "Develop a design brief that identifies your target audience and summarizes your analysis of the research, written so a client unfamiliar with your process could read it and understand your direction.",
          rubricSummary:
            "Strong work develops a brief that summarizes the research analysis clearly enough for an outside reader, and names a specific target audience throughout.",
          citation: {
            refId: "dang2025",
            framing:
              "The same study on student agency (Dang, 2025) found that when students write for a real, external audience rather than just their teacher, the quality and seriousness of their writing tends to rise. Framing your brief for a client, not just for assessment, is likely to sharpen it.",
          },
          reflectionQuestion: "If your target audience read this brief, would they recognize themselves in it?",
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
            "Develop a design specification against a checklist of success criteria, with only a minimal template, that clearly states what your solution must achieve for your target audience, based on your research data.",
          rubricSummary:
            "Strong work develops specifications that clearly state success criteria, are traceable to research data, and consider the target audience specifically, not generically.",
          citation: {
            refId: "condliffe2017",
            framing:
              "Condliffe and colleagues (2017) found that evidence-based success criteria set before building are one of the strongest predictors of a strong final project across the project-based learning studies they reviewed. The clearer and more specific the criteria, the more consistently strong the outcomes.",
          },
          reflectionQuestion: "Which criterion did you have to defend to your teacher, and did that discussion change it?",
        },
        {
          id: "B.ii",
          title: "Develop a range of feasible design ideas",
          instructions:
            "Develop a range of feasible design ideas using a medium and materials you've chosen yourself, correctly interpretable by others without explanation.",
          rubricSummary:
            "Strong work develops a genuinely feasible range of ideas, clearly interpretable by an outside reader, showing independent choices about medium and materials.",
          citation: {
            refId: "hui2023",
            framing:
              "Hui and Mahmud's (2023) review found that a playful, exploratory approach to generating ideas consistently produced better outcomes than a narrowly focused, single-answer approach. Choosing your own medium for exploring ideas is part of what that playfulness looks like in practice.",
          },
          reflectionQuestion: "Which idea did you develop furthest before deciding it wasn't feasible, and what did that process teach you?",
        },
        {
          id: "B.iii",
          title: "Present the chosen design and justify its selection",
          instructions:
            "Present the chosen design and justify its selection with reference to the design specification, being ready to explain why the alternatives you didn't choose fell short.",
          rubricSummary:
            "Strong work justifies the selection with direct reference to the specification and explains, specifically, why other options were rejected.",
          citation: {
            refId: "meyer2024",
            framing:
              "Meyer (2024) argues that aesthetic judgment, recognizing why something feels right, is a legitimate and often underexamined part of how people evaluate their own work. A strong justification can acknowledge that feeling while still tying it back to the concrete specification.",
          },
          reflectionQuestion: "If you had to defend this choice to someone who preferred a different idea, what's your strongest counter-argument?",
        },
        {
          id: "B.iv",
          title: "Develop planning drawings and diagrams",
          instructions:
            "Develop accurate planning drawings and diagrams, and outline the requirements for creation with minimal guidance, treating this as a document you could hand to someone else to build from.",
          rubricSummary:
            "Strong work develops accurate, detailed planning documents that could realistically guide another person's build with little to no clarification needed.",
          citation: {
            refId: "condliffe2017",
            framing:
              "The same project-based learning review (Condliffe et al., 2017) found that the level of detail in planning documents correlated with how smoothly the building phase went. Vague plans consistently cost more time to fix mid-build than they saved in the planning stage.",
          },
          reflectionQuestion: "If someone else built from this plan without you present, where would they most likely get stuck?",
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
            "Construct a logical plan that considers time and resources with real precision, minimal teacher guidance, sufficient for a peer to follow independently.",
          rubricSummary:
            "Strong work constructs a precise, realistic plan requiring little outside input to be followable by someone else.",
          citation: {
            refId: "beasley2022",
            framing:
              "Beasley and Haulmark (2022) identify precise resource and time planning as a skill that separates students who complete complex tasks smoothly from those who don't. That precision becomes more important, not less, as a project grows more independent.",
          },
          reflectionQuestion: "What part of your plan required the most outside research to get right?",
        },
        {
          id: "C.ii",
          title: "Demonstrate technical skills",
          instructions:
            "Demonstrate excellent technical skills, choosing your own materials with minimal guidance and pushing your technique beyond what you've already mastered.",
          rubricSummary:
            "Strong work demonstrates excellent, independent technical skill, including at least one technique that was genuinely new or challenging for you.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "Meyer, Rose, and Gordon (2014) argue that real choice over materials and methods, not just access to them, is what drives stronger technical performance. Choosing your own approach, rather than following a single prescribed method, is central to their argument.",
          },
          reflectionQuestion: "What's the most difficult technical decision you made independently this strand?",
        },
        {
          id: "C.iii",
          title: "Follow the plan to create the solution",
          instructions:
            "Follow your plan to create a solution that functions as intended, adapting where necessary and documenting your reasoning as you go, with minimal check-ins.",
          rubricSummary:
            "Strong work results in a solution that functions as intended, built with real independence and thoughtful adaptation rather than rigid or careless execution.",
          citation: {
            refId: "almeqdad2023",
            framing:
              "Almeqdad and colleagues' (2023) meta-analysis found that flexible, responsive building processes are associated with stronger outcomes than strict adherence to an unchanged plan. Independent adaptation, done thoughtfully, is treated as a strength in their findings, not a deviation to avoid.",
          },
          reflectionQuestion: "Where did you have to make a real judgment call without checking with your teacher first?",
        },
        {
          id: "C.iv",
          title: "Justify changes made to the design",
          instructions:
            "Explain and justify the changes you made to your design and plan, connecting each one to evidence from the building process, in a way that would satisfy a skeptical reader.",
          rubricSummary:
            "Strong work justifies changes with specific evidence and reasoning strong enough to convince someone who wasn't there while you built.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "The same UDL research (Meyer, Rose, & Gordon, 2014) frames mid-process adaptation as a sign of a responsive, self-directed maker. Being able to justify those changes clearly is part of what distinguishes thoughtful adaptation from simply giving up on the original plan.",
          },
          reflectionQuestion: "Which change would be hardest to justify to someone who only saw your original plan?",
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
            "Design detailed, relevant testing methods that generate real data, chosen with minimal guidance to match how your target audience would actually use the solution.",
          rubricSummary:
            "Strong work designs precise, relevant tests independently, closely matched to real conditions of use for the target audience.",
          citation: {
            refId: "ali2023",
            framing:
              "Ali and Knowles (2023) argue that authentic, real-world assessment reveals far more about actual performance than assessment designed around convenience or tradition. Designing your own tests to match real use, rather than what's easiest to measure, follows that same logic.",
          },
          reflectionQuestion: "Which of your tests would be hardest to run, and why did you choose it anyway?",
        },
        {
          id: "D.ii",
          title: "Evaluate the success of the solution",
          instructions:
            "Evaluate the success of the solution against your design specification, weighing the test results critically rather than accepting them at face value.",
          rubricSummary:
            "Strong work evaluates each specification item critically, questioning what the data actually shows rather than accepting a convenient interpretation.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The Connect-Extend-Challenge routine (Ritchhart & Perkins, 2008) was designed to push evaluation beyond simple agreement or disagreement, toward genuinely questioning what new information means. A critical evaluation does the same with your test data.",
          },
          reflectionQuestion: "Which result are you most tempted to interpret generously, and why?",
        },
        {
          id: "D.iii",
          title: "Explain how the solution could be improved",
          instructions:
            "Explain how the solution could be improved, prioritizing which improvements matter most based on the evidence, not just which ones are easiest.",
          rubricSummary:
            "Strong work explains prioritized, evidence-based improvements, showing judgment about what matters most rather than an unranked list.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The same routine's \"Challenge\" step (Ritchhart & Perkins, 2008) treats ongoing self-questioning as central to genuine evaluation, not an afterthought once a project is \"finished.\" Prioritizing which challenges matter most is a natural extension of that habit.",
          },
          reflectionQuestion: "If you could only make one of your suggested improvements, which would it be and why?",
        },
        {
          id: "D.iv",
          title: "Explain the impact of the solution",
          instructions:
            "Explain the impact of the solution on your target audience with specific, checkable detail, and be honest about where the impact might be smaller than you'd hoped.",
          rubricSummary:
            "Strong work explains a specific, checkable impact and is honest about its limits, rather than overstating what the solution actually achieves.",
          citation: {
            refId: "alpaydin2022",
            framing:
              "Alpaydin and Demirli (2022) argue that evaluation in education should aim to reveal real impact, including its limits, rather than simply confirming that a task was completed. Honesty about limited or partial impact is treated as a sign of stronger evaluation, not a weaker result.",
          },
          reflectionQuestion: "What's the most honest limitation you could name about your solution's actual impact?",
        },
      ],
    },
  },
};
