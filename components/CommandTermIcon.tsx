const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Small original line icons for the Command Terms glossary, one per term. */
export function CommandTermIcon({ slug, className }: { slug: string; className?: string }) {
  const props = { viewBox: "0 0 24 24", className, "aria-hidden": true as const };

  switch (slug) {
    case "analyse":
      return (
        <svg {...props}>
          <circle cx="7" cy="7" r="3" {...common} />
          <circle cx="17" cy="6" r="2" {...common} />
          <circle cx="16" cy="14" r="2" {...common} />
          <circle cx="8" cy="17" r="2" {...common} />
          <path d="M9.5 8.5L14.5 6.5M9 9.5L14.5 13M9.5 15.5L14 14.5" {...common} />
        </svg>
      );
    case "construct":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="7" height="6" {...common} />
          <rect x="14" y="4" width="7" height="6" {...common} />
          <rect x="8.5" y="15" width="7" height="6" {...common} />
          <path d="M6.5 10V15M17.5 10V12.5H12" {...common} />
        </svg>
      );
    case "create":
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" {...common} />
          <circle cx="12" cy="12" r="3" {...common} />
        </svg>
      );
    case "define":
      return (
        <svg {...props}>
          <path d="M6 8c-1.5 0-2 1-2 2.5S5 13 6 13" {...common} />
          <path d="M11 8c-1.5 0-2 1-2 2.5S9.5 13 11 13" {...common} />
          <path d="M4 17h16" {...common} />
        </svg>
      );
    case "demonstrate":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M9 12l2 2 4-4" {...common} />
        </svg>
      );
    case "describe":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="7" height="7" {...common} />
          <path d="M13 5.5h8M13 8.5h8M13 11.5h5" {...common} />
          <path d="M3 15.5h18M3 18.5h12" {...common} />
        </svg>
      );
    case "design":
      return (
        <svg {...props}>
          <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" {...common} />
          <path d="M13 8l3 3" {...common} />
        </svg>
      );
    case "develop":
      return (
        <svg {...props}>
          <path d="M4 19h16" {...common} />
          <rect x="5.5" y="14" width="3" height="5" {...common} />
          <rect x="10.5" y="10" width="3" height="9" {...common} />
          <rect x="15.5" y="5" width="3" height="14" {...common} />
        </svg>
      );
    case "evaluate":
      return (
        <svg {...props}>
          <path d="M12 4v16M7 20h10" {...common} />
          <path d="M4 8h6M18 8h-6" {...common} />
          <path d="M4 8l-2 5a3 3 0 006 0zM20 8l2 5a3 3 0 01-6 0z" {...common} />
        </svg>
      );
    case "explain":
      return (
        <svg {...props}>
          <path d="M3 5h9v7H9l-3 3v-3H3z" {...common} />
          <circle cx="18" cy="16" r="3" {...common} />
          <path d="M13 9l2.5 5" {...common} />
        </svg>
      );
    case "identify":
      return (
        <svg {...props}>
          <path d="M4 20V9l4-4 4 4v11" {...common} />
          <path d="M12 20V13l4-4 4 4v7" {...common} />
          <path d="M6.5 20v-6M14.5 20v-4" {...common} />
          <path d="M4 20h16" {...common} />
        </svg>
      );
    case "justify":
      return (
        <svg {...props}>
          <path d="M3 5h13v7H8l-3 3v-3H3z" {...common} />
          <path d="M13 9h1M16 9h1" {...common} />
          <path d="M17 4v3M15.5 5.5h3" {...common} />
        </svg>
      );
    case "list":
      return (
        <svg {...props}>
          <circle cx="5" cy="6" r="1.2" {...common} />
          <circle cx="5" cy="12" r="1.2" {...common} />
          <circle cx="5" cy="18" r="1.2" {...common} />
          <path d="M9 6h12M9 12h12M9 18h12" {...common} />
        </svg>
      );
    case "outline":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="1" strokeDasharray="3 3" {...common} />
        </svg>
      );
    case "present":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="12" {...common} />
          <path d="M12 16v4M8 20h8" {...common} />
          <path d="M6 13l3.5-4L12 11l3-3.5L18 10" {...common} />
        </svg>
      );
    case "prioritize":
      return (
        <svg {...props}>
          <path d="M5 18h4M5 13h8M5 8h12" {...common} />
          <path d="M20 5v7m0 0l-2.5-2.5M20 12l2.5-2.5" {...common} />
        </svg>
      );
    case "state":
      return (
        <svg {...props}>
          <rect x="4" y="8" width="16" height="8" rx="1" {...common} />
          <path d="M8 12h8" {...common} />
        </svg>
      );
    case "summarize":
      return (
        <svg {...props}>
          <path d="M4 5h16M4 8h16M4 11h16" {...common} />
          <path d="M8 11l4 6 4-6" {...common} />
        </svg>
      );
    default:
      return null;
  }
}
