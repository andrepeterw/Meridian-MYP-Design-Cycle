import type { GradeContent } from "./types";
import { criterionTheme } from "./theme";

export const grade6: GradeContent = {
  grade: 6,
  mypYear: "MYP Year 1",
  tagline:
    "A teacher-led challenge you're solving for yourself, one step at a time.",
  criteria: {
    A: {
      key: "A",
      ...criterionTheme.A,
      strands: [
        {
          id: "A.i",
          title: "Explain and justify the need for a solution",
          instructions:
            "Look at the design challenge your teacher gave you. Finish these sentences in your Process Journal: \"The problem is ___.\" \"This matters because ___.\" \"If nobody solved it, ___ would happen.\"",
          rubricSummary:
            "Strong work clearly states what the problem is and gives at least one real reason it's worth solving — not just \"because it's the assignment.\"",
          citation: {
            refId: "ritchhart2008",
            framing:
              "Researchers who study how kids think (Ritchhart & Perkins, 2008) found that saying your reasons out loud, not just thinking them, helps you understand a problem better.",
          },
          reflectionQuestion:
            "What are you most sure about in the reason you gave, and why?",
        },
        {
          id: "A.ii",
          title: "Identify and prioritize research",
          instructions:
            "List three things you'd need to find out before you could solve this problem. Circle the one you think is most important to learn first, and say why.",
          rubricSummary:
            "Strong work lists a few real things worth researching and picks out which one matters most, instead of listing everything with no order.",
          citation: {
            refId: "dang2025",
            framing:
              "A recent study (Dang, 2025) found that students learn more when they get to choose what to look into themselves, instead of being told exactly what to research.",
          },
          reflectionQuestion:
            "Did picking your own research question change how interested you are in the problem?",
        },
        {
          id: "A.iii",
          title: "Analyse existing products",
          instructions:
            "Find one object, app, or invention that already tries to solve a similar problem. Look closely and write down three things you notice about how it works or looks.",
          rubricSummary:
            "Strong work describes real, specific details about the existing product, not just \"it's good\" or \"it's bad.\"",
          citation: {
            refId: "ritchhart2008",
            framing:
              "A thinking routine called See-Think-Wonder (Ritchhart & Perkins, 2008) says that looking closely before judging helps you notice things you'd otherwise miss.",
          },
          reflectionQuestion: "What did you notice about this product that surprised you?",
        },
        {
          id: "A.iv",
          title: "Develop a design brief",
          instructions:
            "Put it all together in one short paragraph: what the problem is, what you found out, and what you noticed from the product you studied. This paragraph is your design brief.",
          rubricSummary:
            "Strong work pulls the problem, the research, and the product notes into one paragraph that actually makes sense together, not three separate lists.",
          citation: {
            refId: "dang2025",
            framing:
              "The same research on student choice (Dang, 2025) found that students understand a task more deeply when they write it in their own words instead of copying a template exactly.",
          },
          reflectionQuestion:
            "If you read your design brief back tomorrow, would it remind you why this problem matters?",
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
            "Make a checklist of at least three things your solution must do to count as successful. Keep each one short and clear enough that a friend could check it off.",
          rubricSummary:
            "Strong work lists specific, checkable requirements — \"it must hold 500g without breaking\" rather than \"it should be strong.\"",
          citation: {
            refId: "condliffe2017",
            framing:
              "Research on project-based learning (Condliffe et al., 2017) found that students do better work when they know exactly what \"success\" looks like before they start building.",
          },
          reflectionQuestion: "Which item on your checklist will be hardest to actually achieve?",
        },
        {
          id: "B.ii",
          title: "Develop a range of feasible design ideas",
          instructions:
            "Sketch two or three different ideas that could solve the problem. They don't have to be perfect, just different from each other.",
          rubricSummary:
            "Strong work shows more than one real idea, drawn or labeled clearly enough that someone else could understand it without you explaining.",
          citation: {
            refId: "hui2023",
            framing:
              "A study on game-based learning (Hui & Mahmud, 2023) found that playful, low-pressure idea generation — trying lots of things without fear of being wrong — helps students come up with better ideas.",
          },
          reflectionQuestion: "Which of your ideas surprised you the most, even if it's not your favorite?",
        },
        {
          id: "B.iii",
          title: "Present the chosen design and justify its selection",
          instructions:
            "Pick your favorite idea. Write two sentences: what it is, and one reason it's better than your other ideas.",
          rubricSummary:
            "Strong work names the chosen idea clearly and gives one real reason for picking it, connected to the checklist from B.i.",
          citation: {
            refId: "meyer2024",
            framing:
              "A study on how people experience learning and design (Meyer, 2024) points out that the reasons something \"feels right\" are worth noticing, not just whether it works.",
          },
          reflectionQuestion: "Is your reason for choosing this design about how it works, how it looks, or both?",
        },
        {
          id: "B.iv",
          title: "Develop planning drawings and diagrams",
          instructions:
            "Draw your chosen design one more time, but bigger and labeled. Add arrows or notes showing size, materials, or how the parts fit together.",
          rubricSummary:
            "Strong work includes clear labels and enough detail that someone else could start building from the drawing alone.",
          citation: {
            refId: "condliffe2017",
            framing:
              "The same project-based learning research (Condliffe et al., 2017) found that students who plan out the details before building run into fewer problems once they start.",
          },
          reflectionQuestion: "If you handed this drawing to a classmate, could they build your idea without asking you questions?",
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
            "List the steps you'll take to build your solution, in order. Next to each step, write roughly how long it will take and what materials you need.",
          rubricSummary:
            "Strong work lists steps in the right order with realistic time and materials — a classmate could follow it without getting lost.",
          citation: {
            refId: "beasley2022",
            framing:
              "General education research (Beasley & Haulmark, 2022) notes that breaking a big task into small, ordered steps is one of the most reliable ways students get unstuck.",
          },
          reflectionQuestion: "Which step in your plan are you least sure you can actually do?",
        },
        {
          id: "C.ii",
          title: "Demonstrate technical skills",
          instructions:
            "As you build, practice the specific skill your project needs — cutting, coding, sewing, soldering, whatever it is — carefully, and ask for help before you make a mistake permanent.",
          rubricSummary:
            "Strong work shows careful, controlled use of tools and materials, not rushed or careless.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "Universal Design for Learning research (Meyer, Rose, & Gordon, 2014) shows that students do their best technical work when they're allowed to choose tools and methods that fit how they work best.",
          },
          reflectionQuestion: "What's one technical skill you got better at just by practicing it today?",
        },
        {
          id: "C.iii",
          title: "Follow the plan to create the solution",
          instructions:
            "Build your solution by following your plan from C.i. If you skip a step or change something, write it down as you go.",
          rubricSummary:
            "Strong work results in a solution that actually works the way it was meant to, and mostly matches the original plan.",
          citation: {
            refId: "almeqdad2023",
            framing:
              "A large review of Universal Design for Learning studies (Almeqdad et al., 2023) found that students build stronger final products when they're allowed some flexibility in how they follow a plan, instead of being locked into every detail.",
          },
          reflectionQuestion: "Did the actual building process match what you imagined when you made the plan?",
        },
        {
          id: "C.iv",
          title: "Justify changes made to the design",
          instructions:
            "Look back at your notes. Pick one change you made while building, and explain in one sentence why you made it.",
          rubricSummary:
            "Strong work names a real change and gives an honest reason for it, even if the reason is \"it broke.\"",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "The same UDL research (Meyer, Rose, & Gordon, 2014) treats changing your plan mid-project as a normal, expected part of making, not a mistake to hide.",
          },
          reflectionQuestion: "Do you think this change made your solution better, worse, or just different?",
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
            "Think of one simple test you could run on your solution. Decide what you'll measure (like how much weight it holds, or how long it lasts) and how you'll write the results down.",
          rubricSummary:
            "Strong work picks a test that actually checks whether the solution works, and records real numbers or observations, not just \"it worked.\"",
          citation: {
            refId: "ali2023",
            framing:
              "Research on redesigning how schools check student work (Ali & Knowles, 2023) argues that testing something in a real, hands-on way teaches more than just describing whether it should work.",
          },
          reflectionQuestion: "What will your test actually tell you that just looking at the solution wouldn't?",
        },
        {
          id: "D.ii",
          title: "Evaluate the success of the solution",
          instructions:
            "Go back to your checklist from B.i. For each item, write whether your solution passed, and how you know.",
          rubricSummary:
            "Strong work checks the solution against every item on the original checklist, honestly, using the test results from D.i.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "A thinking routine called Connect-Extend-Challenge (Ritchhart & Perkins, 2008) suggests checking new results against what you expected, to see what actually matches up.",
          },
          reflectionQuestion: "Which checklist item are you proudest of meeting?",
        },
        {
          id: "D.iii",
          title: "Explain how the solution could be improved",
          instructions:
            "Pick the one part of your solution that worked the least well. Write one specific idea for how you'd fix it next time.",
          rubricSummary:
            "Strong work names one real weakness and gives one specific, doable fix, not just \"make it better.\"",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The same thinking routine (Ritchhart & Perkins, 2008) asks you to challenge your own work — to look for what still doesn't sit right, on purpose.",
          },
          reflectionQuestion: "Why didn't you fix this weak spot before you finished building?",
        },
        {
          id: "D.iv",
          title: "Explain the impact of the solution",
          instructions:
            "Think about the person or people your solution was for. Write one or two sentences about how it would actually change their day if they used it.",
          rubricSummary:
            "Strong work describes a believable effect on a real person or group, connected back to the problem from A.i.",
          citation: {
            refId: "alpaydin2022",
            framing:
              "Writers on education theory (Alpaydin & Demirli, 2022) argue that the point of evaluating work isn't just to grade it, but to understand what real difference it makes.",
          },
          reflectionQuestion: "Would the person you designed this for agree with what you just wrote?",
        },
      ],
    },
  },
};
