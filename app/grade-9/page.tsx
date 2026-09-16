import type { Metadata } from "next";
import { grade9 } from "@/content/grade-9";
import { GradeHeader } from "@/components/GradeHeader";
import { DesignCycleRoute } from "@/components/DesignCycleRoute";

export const metadata: Metadata = {
  title: "Grade 9 | Meridian",
  description: "The MYP Design Cycle Route, scaffolded for Grade 9.",
};

export default function Grade9Page() {
  return (
    <>
      <GradeHeader content={grade9} />
      <DesignCycleRoute content={grade9} />
    </>
  );
}
