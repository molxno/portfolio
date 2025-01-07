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

const SkillsSection: React.FC = () => {
  return (
    <SkillsContainer id="skills">
      <Heading>Skills</Heading>
      <SkillsWrapper>
        <SkillCardLong>
          <SkillTitle>Backend</SkillTitle>
          <SkillSubtitle>
            I have gained experience in backend development using various languages such as PHP, Python and TypeScript.
            My main achievements include working extensively with PHP using the <strong>Laravel</strong> framework,
            developing
            applications with Python using <strong>Django</strong> and <strong>FastAPI</strong>, and working with
            TypeScript in{" "}
            <strong>Supabase</strong>.
          </SkillSubtitle>
          <SkillIcons>
            <SkillIcon
              src="https://img.icons8.com/?size=512&id=qV-JzWYl9dzP&format=png"
              alt="django logo"
            />
            <SkillIcon
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
              alt="laravel logo"
            />
            <SkillIcon
              src={supabaseIcon}
              alt="supabase logo"
            />
          </SkillIcons>
        </SkillCardLong>
        <SkillCard>
          <SkillTitle>Frontend</SkillTitle>
          <SkillSubtitle>
            I have experience in frontend development using <strong>React</strong>, <strong>Astro</strong> and{" "}
            <strong>Typescript</strong>.
          </SkillSubtitle>
          <SkillIcons>
            <SkillIcon
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react logo"
            />
            <SkillIcon
              src="https://astro.build/assets/press/astro-icon-light-gradient.png"
              alt="astro logo"
            />
            <SkillIcon
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
              alt="typescript logo"
            />
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
            <SkillIcon src={sqlServerIcon} alt="sql server logo"/>
            <SkillIcon
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png"
              alt="postgresql logo"
            />
            <SkillIcon
              src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg"
              alt="mysql logo"
            />
          </SkillIcons>
        </SkillCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;