import {en} from "./en";
import {es} from "./es";
import {Language} from "./languages";

export const dictionaries = {
  en,
  es,
} as const;

export type Dictionaries = typeof dictionaries;
export type DictionaryLanguage = keyof Dictionaries & Language;
