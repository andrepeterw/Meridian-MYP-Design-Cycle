"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { commandTermBySlug } from "@/content/command-terms";
import { CommandTermIcon } from "./CommandTermIcon";
import { TERM_TOOLTIP_SHOW, TERM_TOOLTIP_HIDE, type TermTooltipDetail } from "@/lib/termTooltipEvents";

const MOBILE_BREAKPOINT = 768;
const MARGIN = 12;

/**
 * A single shared tooltip, mounted once for the whole app. Term links
 * scattered across grade pages dispatch show/hide events (see TermText)
 * rather than each owning their own floating box, so there is exactly one
 * tooltip on screen at a time and it can be positioned to stay clear of
 * whatever else is on the page. Position and visibility are set directly
 * on the DOM nodes (refs), not via React state, so measuring the box after
 * its content changes never triggers a render-in-effect loop.
 */
export function TermTooltipLayer() {
  const [active, setActive] = useState<TermTooltipDetail | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onShow(e: Event) {
      setActive((e as CustomEvent<TermTooltipDetail>).detail);
    }
    function onHide(e: Event) {
      const detail = (e as CustomEvent<TermTooltipDetail>).detail;
      setActive((current) => (current && current.el === detail.el ? null : current));
    }
    window.addEventListener(TERM_TOOLTIP_SHOW, onShow);
    window.addEventListener(TERM_TOOLTIP_HIDE, onHide);
    return () => {
      window.removeEventListener(TERM_TOOLTIP_SHOW, onShow);
      window.removeEventListener(TERM_TOOLTIP_HIDE, onHide);
    };
  }, []);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const line = lineRef.current;
    const banner = bannerRef.current;
    if (!box || !line || !banner) return;

    function showBannerMode() {
      if (!box || !line || !banner) return;
      box.style.visibility = "hidden";
      line.style.opacity = "0";
      banner.style.display = "flex";
    }

    if (!active) {
      box.style.visibility = "hidden";
      line.style.opacity = "0";
      banner.style.display = "none";
      return;
    }

    if (window.innerWidth < MOBILE_BREAKPOINT) {
      showBannerMode();
      return;
    }

    const rect = active.el.getBoundingClientRect();
    const boxHeight = box.offsetHeight;
    const boxWidth = box.offsetWidth;

    // A word can fall anywhere within its card's wrapped text, so the card's
    // own edge (not the word's position) is what decides where the tooltip
    // goes -- otherwise a word near the middle of a wide card would place
    // the box right back on top of that same card's text.
    const card = active.el.closest("article");
    const hRect = card ? card.getBoundingClientRect() : rect;

    const side: "left" | "right" =
      hRect.left + hRect.width / 2 < window.innerWidth / 2 ? "right" : "left";

    const fitsRight = hRect.right + MARGIN + boxWidth <= window.innerWidth - MARGIN;
    const fitsLeft = hRect.left - MARGIN - boxWidth >= MARGIN;
    if ((side === "right" && !fitsRight) || (side === "left" && !fitsLeft)) {
      showBannerMode();
      return;
    }

    banner.style.display = "none";

    let top = rect.top + rect.height / 2 - boxHeight / 2;
    top = Math.max(MARGIN, Math.min(top, window.innerHeight - boxHeight - MARGIN));

    box.style.top = `${top}px`;
    if (side === "right") {
      box.style.left = `${hRect.right + MARGIN}px`;
      box.style.right = "auto";
    } else {
      box.style.right = `${window.innerWidth - hRect.left + MARGIN}px`;
      box.style.left = "auto";
    }
    box.style.visibility = "visible";

    const x1 = side === "right" ? rect.right : rect.left;
    const x2 = side === "right" ? hRect.right + MARGIN : hRect.left - MARGIN;
    const y1 = rect.top + rect.height / 2;
    const y2 = top + boxHeight / 2;
    line.setAttribute("x1", String(x1));
    line.setAttribute("y1", String(y1));
    line.setAttribute("x2", String(x2));
    line.setAttribute("y2", String(y2));
    line.style.opacity = "0.6";
  }, [active]);

  const term = active ? commandTermBySlug[active.slug] : null;

  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[94]"
        width="100%"
        height="100%"
      >
        <line
          ref={lineRef}
          stroke="var(--ink)"
          strokeWidth={1.5}
          strokeDasharray="4 3"
          style={{ opacity: 0 }}
        />
      </svg>

      <div
        ref={boxRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[95] w-56 rounded-lg border border-black/10 bg-white p-3 text-xs shadow-lg"
        style={{ visibility: "hidden" }}
      >
        {term && (
          <>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--ink)]/5 text-[var(--ink)]">
                <CommandTermIcon slug={term.slug} className="h-4 w-4" />
              </span>
              <p className="font-bold text-[var(--ink)]">{term.term}</p>
            </div>
            <p className="mt-1.5 leading-snug text-[var(--ink)]/80">{term.definition}</p>
          </>
        )}
      </div>

      <div
        ref={bannerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[95] items-start gap-3 border-t border-black/10 bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
        style={{ display: "none" }}
      >
        <div className="mx-auto flex max-w-md items-start gap-3">
          {term && (
            <>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--ink)]/5 text-[var(--ink)]">
                <CommandTermIcon slug={term.slug} className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <p className="font-bold text-[var(--ink)]">{term.term}</p>
                <p className="mt-0.5 leading-snug text-[var(--ink)]/80">{term.definition}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
