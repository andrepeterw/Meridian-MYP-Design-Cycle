import type { Metadata } from "next";
import { grade6 } from "@/content/grade-6";
import { GradeHeader } from "@/components/GradeHeader";
import { DesignCycleRoute } from "@/components/DesignCycleRoute";

export const metadata: Metadata = {
  title: "Grade 6 | Meridian",
  description: "The MYP Design Cycle Route, scaffolded for Grade 6.",
};

export default function Grade6Page() {
  return (
    <>
      <GradeHeader content={grade6} />
      <DesignCycleRoute content={grade6} />
    </>
  );
}
