export interface Language {
  code: string;
  /** The language's own name, shown as-is (never translated). */
  label: string;
  /** English name, used only so people can find the language by typing it. */
  english: string;
}

/** Shown first, before anyone types. */
export const LANGUAGES: Language[] = [
  { code: "en", label: "English", english: "English" },
  { code: "es", label: "Español", english: "Spanish" },
  { code: "fr", label: "Français", english: "French" },
  { code: "pt", label: "Português", english: "Portuguese" },
  { code: "ar", label: "العربية", english: "Arabic" },
  { code: "zh-CN", label: "中文", english: "Chinese Simplified" },
  { code: "hi", label: "हिन्दी", english: "Hindi" },
  { code: "yo", label: "Yorùbá", english: "Yoruba" },
  { code: "ig", label: "Igbo", english: "Igbo" },
  { code: "ha", label: "Hausa", english: "Hausa" },
  { code: "ko", label: "한국어", english: "Korean" },
  { code: "ja", label: "日本語", english: "Japanese" },
  { code: "de", label: "Deutsch", english: "German" },
];

/** Everything else Google Translate supports, found by typing in the search box. */
const MORE_LANGUAGES: Language[] = [
  { code: "af", label: "Afrikaans", english: "Afrikaans" },
  { code: "sq", label: "Shqip", english: "Albanian" },
  { code: "am", label: "አማርኛ", english: "Amharic" },
  { code: "hy", label: "Հայերեն", english: "Armenian" },
  { code: "az", label: "Azərbaycan", english: "Azerbaijani" },
  { code: "eu", label: "Euskara", english: "Basque" },
  { code: "be", label: "Беларуская", english: "Belarusian" },
  { code: "bn", label: "বাংলা", english: "Bengali" },
  { code: "bs", label: "Bosanski", english: "Bosnian" },
  { code: "bg", label: "Български", english: "Bulgarian" },
  { code: "ca", label: "Català", english: "Catalan" },
  { code: "ceb", label: "Cebuano", english: "Cebuano" },
  { code: "ny", label: "Chichewa", english: "Chichewa" },
  { code: "zh-TW", label: "中文（繁體）", english: "Chinese Traditional" },
  { code: "co", label: "Corsu", english: "Corsican" },
  { code: "hr", label: "Hrvatski", english: "Croatian" },
  { code: "cs", label: "Čeština", english: "Czech" },
  { code: "da", label: "Dansk", english: "Danish" },
  { code: "nl", label: "Nederlands", english: "Dutch" },
  { code: "eo", label: "Esperanto", english: "Esperanto" },
  { code: "et", label: "Eesti", english: "Estonian" },
  { code: "tl", label: "Filipino", english: "Filipino Tagalog" },
  { code: "fi", label: "Suomi", english: "Finnish" },
  { code: "fy", label: "Frysk", english: "Frisian" },
  { code: "gl", label: "Galego", english: "Galician" },
  { code: "ka", label: "ქართული", english: "Georgian" },
  { code: "el", label: "Ελληνικά", english: "Greek" },
  { code: "gu", label: "ગુજરાતી", english: "Gujarati" },
  { code: "ht", label: "Kreyòl ayisyen", english: "Haitian Creole" },
  { code: "haw", label: "ʻŌlelo Hawaiʻi", english: "Hawaiian" },
  { code: "iw", label: "עברית", english: "Hebrew" },
  { code: "hmn", label: "Hmoob", english: "Hmong" },
  { code: "hu", label: "Magyar", english: "Hungarian" },
  { code: "is", label: "Íslenska", english: "Icelandic" },
  { code: "id", label: "Bahasa Indonesia", english: "Indonesian" },
  { code: "ga", label: "Gaeilge", english: "Irish" },
  { code: "it", label: "Italiano", english: "Italian" },
  { code: "jw", label: "Basa Jawa", english: "Javanese" },
  { code: "kn", label: "ಕನ್ನಡ", english: "Kannada" },
  { code: "kk", label: "Қазақша", english: "Kazakh" },
  { code: "km", label: "ខ្មែរ", english: "Khmer" },
  { code: "rw", label: "Kinyarwanda", english: "Kinyarwanda" },
  { code: "ku", label: "Kurdî", english: "Kurdish" },
  { code: "ky", label: "Кыргызча", english: "Kyrgyz" },
  { code: "lo", label: "ລາວ", english: "Lao" },
  { code: "la", label: "Latina", english: "Latin" },
  { code: "lv", label: "Latviešu", english: "Latvian" },
  { code: "lt", label: "Lietuvių", english: "Lithuanian" },
  { code: "lb", label: "Lëtzebuergesch", english: "Luxembourgish" },
  { code: "mk", label: "Македонски", english: "Macedonian" },
  { code: "mg", label: "Malagasy", english: "Malagasy" },
  { code: "ms", label: "Bahasa Melayu", english: "Malay" },
  { code: "ml", label: "മലയാളം", english: "Malayalam" },
  { code: "mt", label: "Malti", english: "Maltese" },
  { code: "mi", label: "Māori", english: "Maori" },
  { code: "mr", label: "मराठी", english: "Marathi" },
  { code: "mn", label: "Монгол", english: "Mongolian" },
  { code: "my", label: "မြန်မာ", english: "Myanmar Burmese" },
  { code: "ne", label: "नेपाली", english: "Nepali" },
  { code: "no", label: "Norsk", english: "Norwegian" },
  { code: "or", label: "ଓଡ଼ିଆ", english: "Odia" },
  { code: "ps", label: "پښتو", english: "Pashto" },
  { code: "fa", label: "فارسی", english: "Persian Farsi" },
  { code: "pl", label: "Polski", english: "Polish" },
  { code: "pa", label: "ਪੰਜਾਬੀ", english: "Punjabi" },
  { code: "ro", label: "Română", english: "Romanian" },
  { code: "ru", label: "Русский", english: "Russian" },
  { code: "sm", label: "Gagana Samoa", english: "Samoan" },
  { code: "gd", label: "Gàidhlig", english: "Scots Gaelic" },
  { code: "sr", label: "Српски", english: "Serbian" },
  { code: "st", label: "Sesotho", english: "Sesotho" },
  { code: "sn", label: "chiShona", english: "Shona" },
  { code: "sd", label: "سنڌي", english: "Sindhi" },
  { code: "si", label: "සිංහල", english: "Sinhala" },
  { code: "sk", label: "Slovenčina", english: "Slovak" },
  { code: "sl", label: "Slovenščina", english: "Slovenian" },
  { code: "so", label: "Soomaali", english: "Somali" },
  { code: "su", label: "Basa Sunda", english: "Sundanese" },
  { code: "sw", label: "Kiswahili", english: "Swahili" },
  { code: "sv", label: "Svenska", english: "Swedish" },
  { code: "tg", label: "Тоҷикӣ", english: "Tajik" },
  { code: "ta", label: "தமிழ்", english: "Tamil" },
  { code: "tt", label: "Татарча", english: "Tatar" },
  { code: "te", label: "తెలుగు", english: "Telugu" },
  { code: "th", label: "ไทย", english: "Thai" },
  { code: "tr", label: "Türkçe", english: "Turkish" },
  { code: "tk", label: "Türkmen", english: "Turkmen" },
  { code: "uk", label: "Українська", english: "Ukrainian" },
  { code: "ur", label: "اردو", english: "Urdu" },
  { code: "ug", label: "ئۇيغۇرچە", english: "Uyghur" },
  { code: "uz", label: "Oʻzbek", english: "Uzbek" },
  { code: "vi", label: "Tiếng Việt", english: "Vietnamese" },
  { code: "cy", label: "Cymraeg", english: "Welsh" },
  { code: "xh", label: "isiXhosa", english: "Xhosa" },
  { code: "yi", label: "ייִדיש", english: "Yiddish" },
  { code: "zu", label: "isiZulu", english: "Zulu" },
];

export const ALL_LANGUAGES: Language[] = [...LANGUAGES, ...MORE_LANGUAGES];

function normalize(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

/** Languages whose own name or English name contains what was typed (prefix matches first). */
export function searchLanguages(query: string): Language[] {
  const q = normalize(query);
  if (!q) return LANGUAGES;
  const score = (language: Language) => {
    const names = [normalize(language.label), normalize(language.english), language.code.toLowerCase()];
    if (names.some((name) => name.startsWith(q))) return 0;
    if (names.some((name) => name.split(/\s+/).some((word) => word.startsWith(q)))) return 1;
    if (names.some((name) => name.includes(q))) return 2;
    return 3;
  };
  return ALL_LANGUAGES.map((language) => ({ language, rank: score(language) }))
    .filter((entry) => entry.rank < 3)
    .sort((a, b) => a.rank - b.rank)
    .map((entry) => entry.language);
}

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
