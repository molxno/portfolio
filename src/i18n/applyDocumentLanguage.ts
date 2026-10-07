import {dictionaries} from "./dictionaries";
import {Language} from "./languages";

const SITE_ORIGIN = "https://molxno.dev";

export function applyDocumentLanguage(language: Language): void {
  if (typeof document === "undefined") {
    return;
  }

  const t = dictionaries[language];
  const localeUrl = `${SITE_ORIGIN}/${language}`;

  document.documentElement.lang = language;
  document.title = t.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t.meta.description);
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", `${localeUrl}/`);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", `${localeUrl}/`);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute("content", language === "es" ? "es_CO" : "en_US");
  }
}
