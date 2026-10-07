import {dictionaries} from "./dictionaries";
import {isLanguage, Language} from "./languages";

export type SectionKey = keyof typeof dictionaries.en.sections;

export function parseLangFromPath(pathname: string): Language | null {
  const segment = pathname.replace(/\/+$/, "").split("/").filter(Boolean)[0];
  return isLanguage(segment) ? segment : null;
}

export function localePath(language: Language, hash = ""): string {
  if (!hash) {
    return `/${language}`;
  }
  const normalized = hash.startsWith("#") ? hash : `#${hash}`;
  return `/${language}${normalized}`;
}

export function findSectionKey(hashOrId: string): SectionKey | null {
  const id = hashOrId.replace(/^#/, "");
  if (!id) {
    return null;
  }

  for (const language of ["en", "es"] as const) {
    const sections = dictionaries[language].sections;
    for (const key of Object.keys(sections) as SectionKey[]) {
      if (sections[key] === id) {
        return key;
      }
    }
  }

  return null;
}

export function mapSectionHash(hash: string, targetLanguage: Language): string {
  const key = findSectionKey(hash);
  if (!key) {
    return "";
  }
  return `#${dictionaries[targetLanguage].sections[key]}`;
}
