"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function StrandRevealToggle({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // The content stays mounted while collapsed (hidden from view and from
  // assistive tech) rather than being added on open: a page translator only
  // translates text that is already in the page when it scans.
  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="text-sm font-medium underline underline-offset-2"
        style={{ color }}
      >
        Click here to see the Rubric
      </button>
      <motion.div
        initial={false}
        animate={
          open
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
        aria-hidden={!open}
        className="overflow-hidden"
      >
        <div className="mt-3 rounded-lg bg-black/[0.035] p-3">{children}</div>
      </motion.div>
    </div>
  );
}
