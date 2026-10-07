import {parseLangFromPath} from "./routing";
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  LANGUAGE_STORAGE_KEY,
  Language,
} from "./languages";

export interface DetectLanguageInput {
  pathname?: string;
  stored?: string | null;
  search?: string;
  languages?: readonly string[];
}

export function parseLangParam(search: string): Language | null {
  const normalized = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(normalized);
  const value = params.get("lang");
  if (!value) {
    return null;
  }
  const base = value.toLowerCase();
  return isLanguage(base) ? base : null;
}

export function pickSupportedLanguage(code: string | null | undefined): Language | null {
  if (!code) {
    return null;
  }
  const base = code.toLowerCase().split("-")[0];
  return isLanguage(base) ? base : null;
}

export function detectLanguage(input: DetectLanguageInput = {}): Language {
  const fromPath = input.pathname ? parseLangFromPath(input.pathname) : null;
  if (fromPath) {
    return fromPath;
  }

  const fromQuery = parseLangParam(input.search ?? "");
  if (fromQuery) {
    return fromQuery;
  }

  const languages = input.languages ?? [];
  for (const code of languages) {
    const match = pickSupportedLanguage(code);
    if (match) {
      return match;
    }
  }

  return DEFAULT_LANGUAGE;
}

export function readStoredLanguage(): string | null {
  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function persistLanguage(language: Language): void {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Storage can be blocked (private mode, permissions, etc.).
  }
}

export function readNavigatorLanguages(): string[] {
  if (typeof navigator === "undefined") {
    return [];
  }
  if (navigator.languages && navigator.languages.length > 0) {
    return Array.from(navigator.languages);
  }
  return navigator.language ? [navigator.language] : [];
}

export interface DetectLanguageEnvironment {
  pathname?: string;
  readStored?: () => string | null;
  search?: string;
  languages?: readonly string[];
}

export function detectLanguageFromEnvironment(
  env: DetectLanguageEnvironment = {}
): Language {
  return detectLanguage({
    pathname: env.pathname ?? (typeof window !== "undefined" ? window.location.pathname : ""),
    search: env.search ?? (typeof window !== "undefined" ? window.location.search : ""),
    languages: env.languages ?? readNavigatorLanguages(),
  });
}
