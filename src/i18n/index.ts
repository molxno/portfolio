export {applyDocumentLanguage} from "./applyDocumentLanguage";
export {
  detectLanguage,
  detectLanguageFromEnvironment,
  persistLanguage,
  readStoredLanguage,
} from "./detectLanguage";
export {dictionaries} from "./dictionaries";
export type {Dictionary} from "./en";
export {LanguageProvider, useI18n} from "./LanguageContext";
export {DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, type Language} from "./languages";
export {localePath, mapSectionHash, parseLangFromPath} from "./routing";
