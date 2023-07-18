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

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <Heading>Skills</Heading>
      <SkillsWrapper>
        <SkillCardLong>
          <SkillTitle>Backend</SkillTitle>
          <SkillSubtitle>
            <strong>PHP</strong> is my strength but I have also worked with{" "}
            <strong>Python</strong>.
          </SkillSubtitle>
          <SkillIcons>
            <SkillIcon
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/1280px-Logo.min.svg.png"
              standarWidth
            />
            <SkillIcon
              src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
              standarWidth
            />
          </SkillIcons>
        </SkillCardLong>
        <SkillCard>
          <SkillTitle>Frontend</SkillTitle>
          <SkillSubtitle>
            High experience with <strong>Javascript</strong>.
          </SkillSubtitle>
          <SkillIcons>
            <SkillIcon src="https://techinfini.in/wp-content/uploads/2017/09/React-Logo-1.png" />
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Css-versicherung-logo.svg/1280px-Css-versicherung-logo.svg.png" />
          </SkillIcons>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Database</SkillTitle>
          <SkillSubtitle>
            I have handled <strong>SQLServer</strong> and{" "}
            <strong>PostgreSQL</strong> but <strong>MySQL</strong> is the one
            with which I have more experience.
          </SkillSubtitle>
          <SkillIcons>
            <SkillIcon src={sqlServerIcon} />
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg" />
            <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png" />
          </SkillIcons>
        </SkillCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
