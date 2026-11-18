export interface Language {
  code: string;
  /** The language's own name, shown as-is (never translated). */
  label: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
  { code: "zh-CN", label: "中文" },
  { code: "hi", label: "हिन्दी" },
  { code: "yo", label: "Yorùbá" },
  { code: "ig", label: "Igbo" },
  { code: "ha", label: "Hausa" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "Deutsch" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string
        ) => unknown;
      };
    };
  }
}

const COOKIE = "googtrans";
const EXPIRED = "Thu, 01 Jan 1970 00:00:00 GMT";

/** The language the visitor picked, read from Google's own cookie ("/en/es" -> "es"). */
export function readLanguage(): string {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/;]*\/([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "en";
}

function clearLanguageCookie() {
  const host = location.hostname;
  document.cookie = `${COOKIE}=; expires=${EXPIRED}; path=/`;
  document.cookie = `${COOKIE}=; expires=${EXPIRED}; path=/; domain=${host}`;
  document.cookie = `${COOKIE}=; expires=${EXPIRED}; path=/; domain=.${host}`;
}

/** Saves the choice and reloads, so the page is translated from a clean state. */
export function chooseLanguage(code: string) {
  clearLanguageCookie();
  if (code !== "en") {
    document.cookie = `${COOKIE}=/en/${code}; path=/; max-age=31536000; samesite=lax`;
  }
  location.reload();
}

let guarded = false;

// Translation wraps text nodes in <font> tags behind React's back, so React's
// later removeChild/insertBefore calls can point at a node that has moved. Skipping
// those calls (rather than throwing) is the standard workaround.
function guardDomForTranslation() {
  if (guarded) return;
  guarded = true;
  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(
    this: Node,
    node: T,
    reference: Node | null
  ): T {
    if (reference && reference.parentNode !== this) return node;
    return insertBefore.call(this, node, reference) as T;
  };
}

let loading: Promise<void> | null = null;

/**
 * Loads Google's translate script, once, and only when a non-English language
 * is in use. Given the cookie, the widget translates the page as soon as it starts.
 */
export function loadTranslateWidget(): Promise<void> {
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    guardDomForTranslation();

    const holder = document.createElement("div");
    holder.id = "google_translate_element";
    holder.hidden = true;
    document.body.appendChild(holder);

    window.googleTranslateElementInit = () => {
      new window.google!.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
      resolve();
    };

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      loading = null;
      reject(new Error("Could not load the translation service."));
    };
    document.head.appendChild(script);
  });
  return loading;
}
