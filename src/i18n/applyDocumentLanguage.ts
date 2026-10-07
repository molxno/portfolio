import {SITE_ORIGIN} from "../data/site";
import {dictionaries} from "./dictionaries";
import {buildJsonLd, JSON_LD_SCRIPT_ID} from "./jsonLd";
import {Language} from "./languages";

const setMeta = (selector: string, content: string): void => {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute("content", content);
  }
};

const upsertJsonLd = (language: Language): void => {
  let script = document.getElementById(JSON_LD_SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = JSON_LD_SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(buildJsonLd(language));
};

export function applyDocumentLanguage(language: Language): void {
  if (typeof document === "undefined") {
    return;
  }

  const t = dictionaries[language];
  const localeUrl = `${SITE_ORIGIN}/${language}`;

  document.documentElement.lang = language;
  document.title = t.meta.title;

  setMeta('meta[name="description"]', t.meta.description);
  setMeta('meta[property="og:title"]', t.meta.title);
  setMeta('meta[property="og:description"]', t.meta.description);
  setMeta('meta[property="og:url"]', `${localeUrl}/`);
  setMeta('meta[property="og:locale"]', language === "es" ? "es_CO" : "en_US");
  setMeta('meta[name="twitter:title"]', t.meta.title);
  setMeta('meta[name="twitter:description"]', t.meta.description);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", `${localeUrl}/`);
  }

  upsertJsonLd(language);
}
