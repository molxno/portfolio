import React, {createContext, useCallback, useContext, useLayoutEffect, useMemo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {applyDocumentLanguage} from "./applyDocumentLanguage";
import {persistLanguage} from "./detectLanguage";
import {dictionaries} from "./dictionaries";
import {Dictionary} from "./en";
import {DEFAULT_LANGUAGE, Language} from "./languages";
import {localePath, mapSectionHash, parseLangFromPath} from "./routing";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = parseLangFromPath(location.pathname) ?? DEFAULT_LANGUAGE;

  useLayoutEffect(() => {
    persistLanguage(language);
    applyDocumentLanguage(language);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    persistLanguage(next);
    applyDocumentLanguage(next);
    navigate(localePath(next, mapSectionHash(location.hash, next)));
  }, [navigate, location.hash]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: dictionaries[language],
    }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return context;
}
