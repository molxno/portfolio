import React from "react";
import {useI18n} from "../../i18n";
import {Language} from "../../i18n/languages";
import {LangButton, LanguageSwitch, LangSeparator} from "./LanguageToggleElements";

const LanguageToggle: React.FC = () => {
  const {language, setLanguage, t} = useI18n();

  const choose = (next: Language) => {
    if (next !== language) {
      setLanguage(next);
    }
  };

  return (
    <LanguageSwitch role="group" aria-label={t.language.group}>
      <LangButton
        type="button"
        $pressed={language === "en"}
        aria-pressed={language === "en"}
        aria-label={t.language.chooseEn}
        onClick={() => choose("en")}
      >
        {t.language.en}
      </LangButton>
      <LangSeparator aria-hidden="true">|</LangSeparator>
      <LangButton
        type="button"
        $pressed={language === "es"}
        aria-pressed={language === "es"}
        aria-label={t.language.chooseEs}
        onClick={() => choose("es")}
      >
        {t.language.es}
      </LangButton>
    </LanguageSwitch>
  );
};

export default LanguageToggle;
