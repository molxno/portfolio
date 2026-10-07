import React from "react";
import {
  Heading,
  SkillCard,
  SkillCardCompact,
  SkillCardLong,
  SkillIcon,
  SkillIcons,
  SkillItem,
  SkillName,
  SkillSubtitle,
  SkillTitle,
  SkillsContainer,
  SkillsWrapper,
} from "./SkillsElements";
import {skillGroups, skillIcons} from "../../data/skills";
import {Dictionary, useI18n} from "../../i18n";

const groupCopy = (t: Dictionary, id: keyof Pick<Dictionary["skills"], "backend" | "frontend" | "database" | "cloud">) =>
  t.skills[id];

const SkillsSection: React.FC = () => {
  const {t} = useI18n();

  return (
    <SkillsContainer id={t.sections.skills}>
      <Heading>{t.skills.heading}</Heading>
      <SkillsWrapper>
        {skillGroups.map((group) => {
          const copy = groupCopy(t, group.id);
          const Card =
            group.variant === "long"
              ? SkillCardLong
              : group.variant === "compact"
                ? SkillCardCompact
                : SkillCard;

          return (
            <Card key={group.id}>
              <SkillTitle>{copy.title}</SkillTitle>
              <SkillSubtitle>{copy.subtitle}</SkillSubtitle>
              <SkillIcons>
                {group.skills.map((skillId) => (
                  <SkillItem key={skillId}>
                    <SkillIcon src={skillIcons[skillId]} alt="" />
                    <SkillName>{t.skills.items[skillId]}</SkillName>
                  </SkillItem>
                ))}
              </SkillIcons>
            </Card>
          );
        })}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
