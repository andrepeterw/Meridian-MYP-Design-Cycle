import type { Metadata } from "next";
import { grade10 } from "@/content/grade-10";
import { GradeHeader } from "@/components/GradeHeader";
import { DesignCycleRoute } from "@/components/DesignCycleRoute";

export const metadata: Metadata = {
  title: "Grade 10 | Meridian",
  description: "The MYP Design Cycle Route, scaffolded for Grade 10.",
};

export default function Grade10Page() {
  return (
    <>
      <GradeHeader content={grade10} />
      <DesignCycleRoute content={grade10} />
    </>
  );
}
