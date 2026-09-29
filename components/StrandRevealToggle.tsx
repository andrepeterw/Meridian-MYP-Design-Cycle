"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function StrandRevealToggle({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="text-sm font-medium underline underline-offset-2"
        style={{ color }}
      >
        Click here to see what a level 1 to 8 answer looks like.
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-lg bg-black/[0.035] p-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
