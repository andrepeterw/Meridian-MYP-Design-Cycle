import type { Metadata } from "next";
import { grade8 } from "@/content/grade-8";
import { GradeHeader } from "@/components/GradeHeader";
import { DesignCycleRoute } from "@/components/DesignCycleRoute";

export const metadata: Metadata = {
  title: "Grade 8 | Meridian",
  description: "The MYP Design Cycle Route, scaffolded for Grade 8.",
};

export default function Grade8Page() {
  return (
    <>
      <GradeHeader content={grade8} />
      <DesignCycleRoute content={grade8} />
    </>
  );
}
