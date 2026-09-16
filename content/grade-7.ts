import type { GradeContent } from "./types";
import { criterionTheme } from "./theme";

export const grade7: GradeContent = {
  grade: 7,
  mypYear: "Between MYP Year 1 and Year 3",
  tagline:
    "A teacher led challenge that opens into something closer to a real problem.",
  criteria: {
    A: {
      key: "A",
      ...criterionTheme.A,
      strands: [
        {
          id: "A.i",
          title: "{{Explain}} and {{justify}} the need for a solution",
          instructions:
            "Choose a semi real problem from your teacher's challenge, one connected to something that could actually happen at school or at home. On your own or with a partner, {{outline}} who has this problem and {{describe}} why it's worth solving, in a few sentences.",
          rubricSummary:
            "Strong work {{outlines}} the need for a solution clearly enough that a classmate could {{explain}} it back to you, and {{describes}} at least one specific detail that makes the problem feel real.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "Visible thinking research (Ritchhart & Perkins, 2008) found that {{explaining}} your reasoning out loud, rather than just having a hunch, makes your thinking about a problem stronger.",
          },
          reflectionQuestion:
            "What's one detail about this problem you didn't notice until you tried to {{explain}} it to someone else?",
        },
        {
          id: "A.ii",
          title: "{{Identify}} and {{prioritize}} research",
          instructions:
            "With your partner, or on your own, {{list}} four or five things you'd need to find out. Put them in order from most to least important, and {{describe}} in one sentence why your top pick comes first.",
          rubricSummary:
            "Strong work {{prioritizes}} a fuller list of research points and gives a real reason for the ordering, not just a guess.",
          citation: {
            refId: "dang2025",
            framing:
              "Research on student choice (Dang, 2025) found that students who help decide what to investigate stay more engaged with a project than students who are just handed a list.",
          },
          reflectionQuestion: "Would you have {{prioritized}} these the same way a week ago?",
        },
        {
          id: "A.iii",
          title: "{{Analyse}} existing products",
          instructions:
            "Find two existing products that try to solve a similar problem. {{Describe}} the main features of each, and note one thing you'd borrow from each one.",
          rubricSummary:
            "Strong work {{describes}} real features of more than one product and starts comparing them, not just {{describing}} each in isolation.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The See Think Wonder routine (Ritchhart & Perkins, 2008) reminds you to {{describe}} exactly what you observe before deciding what you think about it.",
          },
          reflectionQuestion: "Did looking at a second product change your opinion of the first one?",
        },
        {
          id: "A.iv",
          title: "{{Develop}} a design brief",
          instructions:
            "Write a short design brief, four to six sentences, that {{outlines}} the problem, your prioritized research, and what you learned from the products you studied.",
          rubricSummary:
            "Strong work {{outlines}} all three parts in a brief that flows as one piece of writing, not three disconnected paragraphs.",
          citation: {
            refId: "dang2025",
            framing:
              "The same research on student agency (Dang, 2025) found that students engage more seriously with a brief they've written in their own words than one copied from a template.",
          },
          reflectionQuestion: "Which part of your brief would be hardest for someone else to write for you?",
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
            "Write a list of four or five success criteria for your solution. Try to make at least one of them measurable, a number, a time, a size.",
          rubricSummary:
            "Strong work {{lists}} specific criteria, with at least one you could actually measure once the solution is built.",
          citation: {
            refId: "condliffe2017",
            framing:
              "Project based learning research (Condliffe et al., 2017) found that clear, specific success criteria set before building leads to stronger final products.",
          },
          reflectionQuestion: "Which of your criteria will be easiest to prove you've met?",
        },
        {
          id: "B.ii",
          title: "{{Develop}} a range of feasible design ideas",
          instructions:
            "Sketch three different design ideas, using labels to {{explain}} each one clearly enough that a partner could understand it without you talking.",
          rubricSummary:
            "Strong work {{presents}} a genuine range of ideas, not three versions of the same thing, each labeled clearly enough to be understood by someone else.",
          citation: {
            refId: "hui2023",
            framing:
              "Research on game based learning (Hui & Mahmud, 2023) found that treating idea generation like play, rather than a test, leads to more original design ideas.",
          },
          reflectionQuestion: "Which idea would you be most embarrassed to show a partner, and why might that be worth exploring anyway?",
        },
        {
          id: "B.iii",
          title: "{{Present}} the chosen design and {{justify}} its selection",
          instructions:
            "Choose your design and {{explain}} your selection: {{outline}} the key features and {{describe}} two reasons this idea beats your others, referencing your success criteria.",
          rubricSummary:
            "Strong work {{outlines}} the chosen design's key features and connects the reasons for choosing it directly back to the success criteria from B.i.",
          citation: {
            refId: "meyer2024",
            framing:
              "Research on the aesthetics of learning (Meyer, 2024) suggests that noticing why a design feels satisfying, not just functional, is a real and valuable part of choosing it.",
          },
          reflectionQuestion: "Is there a criterion your chosen design doesn't fully meet yet?",
        },
        {
          id: "B.iv",
          title: "{{Develop}} planning drawings and diagrams",
          instructions:
            "{{Create}} an accurate planning drawing or diagram of your chosen design. {{Outline}} the materials, measurements, and any requirements someone would need to build it.",
          rubricSummary:
            "Strong work is accurate enough in its measurements and labels that another student could realistically follow it to start building.",
          citation: {
            refId: "condliffe2017",
            framing:
              "The same project based learning research (Condliffe et al., 2017) found that detailed planning drawings reduce the number of problems students run into during building.",
          },
          reflectionQuestion: "If you built this exactly as drawn, would it actually work?",
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
            "{{Outline}} each step of your build in order, considering how much time and which resources each step will take. Make it detailed enough that a peer could follow it.",
          rubricSummary:
            "Strong work {{outlines}} a plan that considers both time and resources realistically, with enough detail for a peer to follow with only a little difficulty.",
          citation: {
            refId: "beasley2022",
            framing:
              "Education research on task planning (Beasley & Haulmark, 2022) shows that students who plan resources and time in advance, not just the steps, run into fewer surprises.",
          },
          reflectionQuestion: "Which resource are you most likely to run out of, or run short on time for?",
        },
        {
          id: "C.ii",
          title: "{{Demonstrate}} technical skills",
          instructions:
            "Practice the specific technique your build needs before using it on your final piece, and ask your teacher for feedback on your technique, not just your progress.",
          rubricSummary:
            "Strong work shows satisfactory to competent technical skill, with visible care and control, especially in a technique that was new to you.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "UDL research (Meyer, Rose, & Gordon, 2014) shows that giving students some choice in tools and methods improves the quality of the technical work they produce.",
          },
          reflectionQuestion: "What technique took the most practice to get right?",
        },
        {
          id: "C.iii",
          title: "Follow the plan to {{create}} the solution",
          instructions:
            "Build your solution, following your plan from C.i as closely as you can. Note any point where you had to deviate and why.",
          rubricSummary:
            "Strong work results in a solution that functions as intended and is presented in a way that shows care, closely following the original plan.",
          citation: {
            refId: "almeqdad2023",
            framing:
              "A UDL meta analysis (Almeqdad et al., 2023) found that letting students adjust a plan slightly during building, rather than following it rigidly, often leads to a better final product.",
          },
          reflectionQuestion: "Was there a moment you were tempted to abandon the plan completely? What kept you going?",
        },
        {
          id: "C.iv",
          title: "{{Justify}} changes made to the design",
          instructions:
            "{{Outline}} each change you made to your original design or plan while building, and {{describe}} your reason for each one.",
          rubricSummary:
            "Strong work {{outlines}} more than one change with real reasons, showing that changes were thought through, not random.",
          citation: {
            refId: "meyerrosegordon2014",
            framing:
              "The same UDL research (Meyer, Rose, & Gordon, 2014) treats these adjustments made partway through a build as a sign of active problem solving, not a failure to plan well.",
          },
          reflectionQuestion: "Which change are you most proud you made, even though it wasn't part of the original plan?",
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
            "{{Design}} two simple tests for your solution that would generate real data, numbers or clear observations, not just a yes or no impression.",
          rubricSummary:
            "Strong work {{describes}} relevant tests that would actually generate usable data about whether the solution works.",
          citation: {
            refId: "ali2023",
            framing:
              "Research on redesigning school assessment (Ali & Knowles, 2023) argues that authentic, hands on testing reveals more than simply {{describing}} expected performance.",
          },
          reflectionQuestion: "Which test result would most surprise you if it came back worse than expected?",
        },
        {
          id: "D.ii",
          title: "{{Evaluate}} the success of the solution",
          instructions:
            "Run your tests, then {{outline}} the success of your solution against every item in your design specification from B.i, using the real results.",
          rubricSummary:
            "Strong work {{outlines}} success against the specification point by point, backed by actual test results rather than impressions.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The Connect Extend Challenge routine (Ritchhart & Perkins, 2008) is built around comparing new results to what you expected, exactly what {{evaluating}} against a specification asks you to do.",
          },
          reflectionQuestion: "Which result connected most closely to what you expected, and which one didn't?",
        },
        {
          id: "D.iii",
          title: "{{Explain}} how the solution could be improved",
          instructions:
            "{{Describe}} two specific ways your solution could be improved, based on your test results, not just your gut feeling.",
          rubricSummary:
            "Strong work {{lists}} more than one specific, realistic improvement, each tied to evidence from testing.",
          citation: {
            refId: "ritchhart2008",
            framing:
              "The same thinking routine's \"Challenge\" step (Ritchhart & Perkins, 2008) pushes you to keep questioning your own work even after it's finished.",
          },
          reflectionQuestion: "If you had one more week, which improvement would you tackle first?",
        },
        {
          id: "D.iv",
          title: "{{Explain}} the impact of the solution",
          instructions:
            "{{Describe}} how your solution would affect the person or group it was {{designed}} for, using specific examples rather than general statements.",
          rubricSummary:
            "Strong work {{describes}} a believable, specific impact on the intended audience, connected back to the original problem.",
          citation: {
            refId: "alpaydin2022",
            framing:
              "Educational theory research (Alpaydin & Demirli, 2022) argues that evaluation should focus on real impact, not just whether a task was completed correctly.",
          },
          reflectionQuestion: "How would you find out if your description of the impact is actually accurate?",
        },
      ],
    },
  },
};
