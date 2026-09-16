import type { Metadata } from "next";
import { grade7 } from "@/content/grade-7";
import { GradeHeader } from "@/components/GradeHeader";
import { DesignCycleRoute } from "@/components/DesignCycleRoute";

export const metadata: Metadata = {
  title: "Grade 7 | Meridian",
  description: "The MYP Design Cycle Route, scaffolded for Grade 7.",
};

export default function Grade7Page() {
  return (
    <>
      <GradeHeader content={grade7} />
      <DesignCycleRoute content={grade7} />
    </>
  );
}
