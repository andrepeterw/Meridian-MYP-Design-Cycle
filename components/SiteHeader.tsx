import Link from "next/link";
import { MeridianMark } from "./MeridianMark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--paper)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--ink)]">
          <MeridianMark className="h-7 w-7" />
          <span>Meridian</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 text-sm">
          <Link href="/#grades" className="text-[var(--ink)]/80 hover:text-[var(--ink)]">
            Grade Levels
          </Link>
          <Link href="/process-journal" className="text-[var(--ink)]/80 hover:text-[var(--ink)]">
            Process Journal
          </Link>
        </nav>
      </div>
    </header>
  );
}
