import type { Metadata } from "next";
import MeridianHero from "@/components/MeridianHero";

export const metadata: Metadata = {
  title: "Meridian: The MYP Design Cycle Route",
  description:
    "A grade-scaffolded route through the MYP Design Cycle, from Criterion A to Criterion D.",
};

export default function HomePage() {
  return (
    <main>
      <MeridianHero />
    </main>
  );
}
