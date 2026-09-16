import type { GradeContent } from "./types";
import { criterionTheme } from "./theme";

export const grade8: GradeContent = {
  grade: 8,
  mypYear: "MYP Year 3",
  tagline: "A real, {{identified}} problem, {{designed}} for a familiar group of people.",
  criteria: {
    A: {
      key: "A",
      ...criterionTheme.A,
      strands: [
        {
          id: "A.i",
          title: "{{Explain}} and {{justify}} the need for a solution",
          instructions:
            "{{Identify}} a real problem that actually affects a familiar group of people: your grade, your team, your neighborhood. {{Explain}} why it needs a solution and {{justify}} your reasoning with at least one piece of real evidence: an observation, a survey answer, or a fact you've found.",
          rubricSummary:
            "Strong work {{explains}} the need for a solution using real evidence, not assumptions, and starts to {{justify}} why that evidence actually matters rather than just {{stating}} it.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "Ritchhart and Perkins (2008) studied how making thinking visible (saying your reasoning out loud instead of keeping it in your head) changes how deeply students understand a problem. They found that students who {{explain}} and {{justify}} their thinking, rather than just {{stating}} conclusions, build a more accurate picture of what's actually going on.",
          },
          reflectionQuestion: "What evidence are you most confident in, and what would make you doubt it?",
        },
        {
          id: "A.ii",
          title: "{{Identify}} and {{prioritize}} research",
          instructions:
            "{{Construct}} a short research plan: {{list}} the primary research (things you'll find out yourself, like surveys or interviews) and secondary research (things you'll find from books, articles, or the internet) you need, and put them in order of priority.",
          rubricSummary:
            "Strong work separates primary from secondary research clearly and {{prioritizes}} both types with a real reason, not just a guess at what sounds thorough.",
          citation: {
            refId: "dang2025",
            framing:
              "Dang (2025) looked at what actually helps students feel ownership over a project, interviewing both school leaders and students. The study found that agency over what to research, not just how to research it, was one of the strongest factors in how seriously students engaged with their work.",
          },
          reflectionQuestion: "Which part of your research plan did you have the least say in, and does that bother you?",
        },
        {
          id: "A.iii",
          title: "{{Analyse}} existing products",
          instructions:
            "Find a group of similar products, at least three, that already try to solve this problem. {{Analyse}} them: what do they have in common, where do they differ, and which features actually work well?",
          rubricSummary:
            "Strong work {{analyses}} a real group of products rather than just {{describing}} them one by one, and draws out a pattern or comparison across them.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The See Think Wonder routine (Ritchhart & Perkins, 2008) is {{designed}} to slow down first impressions so you notice more detail before forming an opinion. Applied to a group of products, it pushes you to compare what you actually observe across all of them, not just react to the first one.",
          },
          reflectionQuestion: "Did comparing multiple products change which features you now think actually matter?",
        },
        {
          id: "A.iv",
          title: "{{Develop}} a design brief",
          instructions:
            "{{Develop}} a design brief that {{presents}} your analysis of the research: the problem, your prioritized research plan, and what the group of products taught you. Write it as a document someone outside your class could understand.",
          rubricSummary:
            "Strong work {{presents}} an analysis, not just a summary: it draws conclusions from the research rather than just {{listing}} what was found.",
          citation: {
            refId: "dang2025",
            framing:
              "The same agency research (Dang, 2025) found that when students author a document like this themselves, rather than filling in a fixed template, they engage more critically with what they've actually learned. That extra ownership tends to show up as a more thoughtful, connected final brief.",
          },
          reflectionQuestion: "If a stranger read only your brief, would they understand why you made every choice in it?",
        },
      ],
    },
    B: {
      key: "B",
      ...criterionTheme.B,
      strands: [
        {
          id: "B.i",
          title: "{{Develop}} a design specification",
          instructions:
            "{{Develop}} a design specification: a list of success criteria based on the data you actually collected in Criterion A, not just your gut sense of what's needed.",
          rubricSummary:
            "Strong work {{develops}} specifications that clearly trace back to real data from your research, with criteria specific enough to test later.",
          citation: {
            refId: "condliffe2017",
            framing:
              "Condliffe and colleagues (2017) reviewed a large body of research on project based learning and found that clear, evidence based success criteria set early in a project consistently predict stronger final products. Students who skip this step, or base it on guesswork, tend to produce weaker, less focused work.",
          },
          reflectionQuestion: "Which of your criteria is backed by the weakest evidence, and how could you strengthen it?",
        },
        {
          id: "B.ii",
          title: "{{Develop}} a range of feasible design ideas",
          instructions:
            "{{Present}} a range of feasible design ideas, using a medium (sketches, diagrams, digital mockups) clear enough that someone outside your class could correctly interpret each one without your help.",
          rubricSummary:
            "Strong work {{presents}} a genuine range of feasible ideas, each clear enough to be understood by someone unfamiliar with the project.",
          citation: {
            refId: "hui2023",
            framing:
              "Hui and Mahmud (2023) reviewed research on game based learning and found consistent evidence that playful, exploratory approaches to a task boost both how much students enjoy it and how well they perform. Applied to design, that means treating idea generation as low stakes exploration tends to produce a wider, more original range of ideas.",
          },
          reflectionQuestion: "Which of your ideas took the most risk, and is it still in the running?",
        },
        {
          id: "B.iii",
          title: "{{Present}} the chosen design and {{justify}} its selection",
          instructions:
            "{{Present}} your chosen design and {{outline}} the reasons for its selection, referring directly back to your design specification from B.i.",
          rubricSummary:
            "Strong work {{outlines}} reasons for selection that connect explicitly to specific items in the specification, not vague praise for the idea.",
          citation: {
            refId: "meyer2024",
            framing:
              "Meyer (2024) examines how aesthetic experience, the sense that something is \"right\" beyond just functional, shapes how people engage with what they make. The study suggests that being able to name why a design feels satisfying is itself a meaningful part of the design process, not just decoration on top of the reasoning.",
          },
          reflectionQuestion: "Is any part of your justification really about how the design feels, rather than what the specification requires?",
        },
        {
          id: "B.iv",
          title: "{{Develop}} planning drawings and diagrams",
          instructions:
            "{{Develop}} accurate planning drawings or diagrams of your chosen design, and {{outline}} the requirements (materials, tools, measurements) needed to {{create}} it.",
          rubricSummary:
            "Strong work is accurate enough that someone with the same tools and materials could genuinely attempt to build from it.",
          citation: {
            refId: "condliffe2017",
            framing:
              "The same project based learning review (Condliffe et al., 2017) found that detailed, accurate planning consistently reduces the number of problems students encounter once they start building. Skipping detail at this stage tends to cost more time later, not less.",
          },
          reflectionQuestion: "What's the one measurement or requirement you're least confident is correct?",
        },
      ],
    },
    C: {
      key: "C",
      ...criterionTheme.C,
      strands: [
        {
          id: "C.i",
          title: "{{Construct}} a logical plan",
          instructions:
            "{{Construct}} a logical plan that {{outlines}} the efficient use of your time and resources, detailed enough for a peer to actually follow it to {{create}} your solution.",
          rubricSummary:
            "Strong work {{outlines}} a plan that's genuinely efficient, not just sequential, showing you thought about where time and materials could be wasted.",
          citation: {
            refId: "beasley2022",
            framing:
              "Beasley and Haulmark (2022) discuss planning as a core skill across education, not just in design, noting that students who plan efficiently, not just thoroughly, tend to complete tasks with less wasted effort. Efficient planning means anticipating bottlenecks before they happen, not just {{listing}} steps.",
          },
          reflectionQuestion: "Where in your plan is time or a resource most likely to run out?",
        },
        {
          id: "C.ii",
          title: "{{Demonstrate}} technical skills",
          instructions:
            "{{Demonstrate}} excellent technical skills as you build, choosing tools and techniques that suit both the task and how you personally work best.",
          rubricSummary:
            "Strong work shows competent to excellent control of tools and materials, with technique that's clearly been practiced, not just attempted once.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "Meyer, Rose, and Gordon (2014) developed Universal Design for Learning around the idea that students produce their best work when given multiple ways to act and express what they know. In a design context, that means real choice over tools and methods tends to produce stronger technical outcomes than a one size fits all approach.",
          },
          reflectionQuestion: "Which tool or method did you choose because it actually suits how you work, not just because it was available?",
        },
        {
          id: "C.iii",
          title: "Follow the plan to {{create}} the solution",
          instructions:
            "Follow your plan to {{create}} the solution, aiming for a final product that functions as intended and is {{presented}} professionally.",
          rubricSummary:
            "Strong work results in a solution that functions as intended and is finished to a standard you'd be comfortable showing someone outside your class.",
          citation: {
            refId: "almeqdad2023",
            framing:
              "Almeqdad and colleagues (2023) synthesized a wide range of studies on Universal Design for Learning and found that flexibility during the making process, not rigid adherence to a fixed plan, is associated with stronger final outcomes. Their meta analysis suggests that allowing some adaptation while building is a feature of good design, not a sign of poor planning.",
          },
          reflectionQuestion: "Where did you have to trust your judgment over your original plan?",
        },
        {
          id: "C.iv",
          title: "{{Justify}} changes made to the design",
          instructions:
            "{{Explain}} the changes you made to your chosen design or plan while making the solution, connecting each one to a specific reason.",
          rubricSummary:
            "Strong work {{explains}} more than one change with reasoning that shows real problem solving, not just \"it didn't work.\"",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "The same UDL framework (Meyer, Rose, & Gordon, 2014) treats adjusting a plan partway through the process as evidence of active, responsive thinking rather than a failure to plan correctly. {{Explaining}} those changes well is itself a skill the framework values.",
          },
          reflectionQuestion: "Which change taught you something you'll apply to your next project?",
        },
      ],
    },
    D: {
      key: "D",
      ...criterionTheme.D,
      strands: [
        {
          id: "D.i",
          title: "{{Design}} testing methods",
          instructions:
            "{{Describe}} detailed, relevant testing methods that would generate accurate data about how well your solution actually performs.",
          rubricSummary:
            "Strong work {{describes}} tests detailed enough to generate real, accurate data, not just a single vague check.",
          citation: {
            refId: "ali2023",
            framing:
              "Ali and Knowles (2023) argue that how schools assess student work should shift toward authentic, real world tasks rather than abstract exercises. Applied to testing a design, that means measuring how a solution performs under real conditions tells you more than predicting how it should perform on paper.",
          },
          reflectionQuestion: "Which of your planned tests is closest to how this solution would actually be used in real life?",
        },
        {
          id: "D.ii",
          title: "{{Evaluate}} the success of the solution",
          instructions:
            "{{Explain}} the success of your solution against your design specification from B.i, using the results of the tests you actually ran.",
          rubricSummary:
            "Strong work {{explains}} success point by point against the specification, using real test results as evidence rather than general impressions.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The Connect Extend Challenge routine (Ritchhart & Perkins, 2008) is built specifically for {{evaluating}} new information against what you already expected or believed. Used here, it means checking each test result honestly against what your specification actually required, not against what you hoped would happen.",
          },
          reflectionQuestion: "Which specification item is hardest to honestly call a success?",
        },
        {
          id: "D.iii",
          title: "{{Explain}} how the solution could be improved",
          instructions:
            "{{Describe}} how the solution could be improved, {{listing}} specific, realistic changes based on your test results rather than general wishes.",
          rubricSummary:
            "Strong work {{describes}} multiple specific improvements, each grounded in a real result from testing.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The same thinking routine's \"Challenge\" step (Ritchhart & Perkins, 2008) is designed to keep you questioning even finished work, rather than treating it as done. That habit of ongoing challenge is exactly what strong improvement suggestions require.",
          },
          reflectionQuestion: "Which improvement would take the most resources, and is it still worth suggesting?",
        },
        {
          id: "D.iv",
          title: "{{Explain}} the impact of the solution",
          instructions:
            "{{Describe}} the impact of your solution on the client or target audience, using specific, believable detail rather than a general claim that it \"helps.\"",
          rubricSummary:
            "Strong work {{describes}} a specific, believable impact connected clearly back to the original problem and audience.",
          citation: {
            refId: "alpaydin2022",
            framing:
              "Alpaydin and Demirli (2022) discuss how educational theory frames evaluation as more than grading; it should reveal what real difference a piece of work makes. Their framing suggests a strong impact statement should be checkable against reality, not just plausible sounding.",
          },
          reflectionQuestion: "How could you actually check whether this impact happens, rather than just assuming it?",
        },
      ],
    },
  },
};
