import React from "react";
import {
  Heading,
  SkillCard,
  SkillCardLong,
  SkillIcon,
  SkillIcons,
  SkillSubtitle,
  SkillTitle,
  SkillsContainer,
  SkillsWrapper,
} from "./SkillsElements";
import sqlServerIcon from "../../images/sql-server.png";
import supabaseIcon from "../../images/supabase-logo-icon.png";
import djangoIcon from "../../images/django.png";
import laravelIcon from "../../images/laravel.svg";
import reactIcon from "../../images/react.svg";
import astroIcon from "../../images/astro.png";
import typescriptIcon from "../../images/typescript.svg";
import postgresqlIcon from "../../images/postgresql.svg";
import mysqlIcon from "../../images/mysql.svg";
import {useI18n} from "../../i18n";

const SkillsSection: React.FC = () => {
  const {t} = useI18n();

  return (
    <SkillsContainer id={t.sections.skills}>
      <Heading>{t.skills.heading}</Heading>
      <SkillsWrapper>
        <SkillCardLong>
          <SkillTitle>{t.skills.backend.title}</SkillTitle>
          <SkillSubtitle>{t.skills.backend.subtitle}</SkillSubtitle>
          <SkillIcons>
            <SkillIcon src={djangoIcon} alt={t.skills.logos.django} />
            <SkillIcon src={laravelIcon} alt={t.skills.logos.laravel} />
            <SkillIcon src={supabaseIcon} alt={t.skills.logos.supabase} />
          </SkillIcons>
        </SkillCardLong>
        <SkillCard>
          <SkillTitle>{t.skills.frontend.title}</SkillTitle>
          <SkillSubtitle>{t.skills.frontend.subtitle}</SkillSubtitle>
          <SkillIcons>
            <SkillIcon src={reactIcon} alt={t.skills.logos.react} />
            <SkillIcon src={astroIcon} alt={t.skills.logos.astro} />
            <SkillIcon src={typescriptIcon} alt={t.skills.logos.typescript} />
          </SkillIcons>
        </SkillCard>
        <SkillCard>
          <SkillTitle>{t.skills.database.title}</SkillTitle>
          <SkillSubtitle>{t.skills.database.subtitle}</SkillSubtitle>
          <SkillIcons>
            <SkillIcon src={sqlServerIcon} alt={t.skills.logos.sqlServer} />
            <SkillIcon src={postgresqlIcon} alt={t.skills.logos.postgresql} />
            <SkillIcon src={mysqlIcon} alt={t.skills.logos.mysql} />
          </SkillIcons>
        </SkillCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
