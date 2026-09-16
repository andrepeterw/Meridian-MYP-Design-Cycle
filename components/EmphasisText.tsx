import { Fragment } from "react";

const MARKER = /\*([^*]+)\*/g;

/** Renders text, turning *marked* segments into <em> — used for APA italics. */
export function EmphasisText({ text }: { text: string }) {
  const parts = text.split(MARKER);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}
