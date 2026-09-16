"use client";

import { useEffect } from "react";

/**
 * Next's client-side routing updates the URL hash without a native navigation,
 * so the browser's :target CSS pseudo-class doesn't reliably re-evaluate.
 * This watches the hash directly and toggles the highlight class itself.
 */
export function CommandTermHighlighter() {
  useEffect(() => {
    function applyHighlight() {
      document
        .querySelectorAll(".command-term-highlight")
        .forEach((el) => el.classList.remove("command-term-highlight"));

      const hash = window.location.hash;
      if (!hash.startsWith("#term-")) return;
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      el.classList.add("command-term-highlight");
      el.scrollIntoView({ block: "start" });
    }

    applyHighlight();
    window.addEventListener("hashchange", applyHighlight);
    return () => window.removeEventListener("hashchange", applyHighlight);
  }, []);

  return null;
}
