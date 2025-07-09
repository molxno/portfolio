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
            I specialize in <strong>backend development</strong> with a focus on
            building <strong>scalable</strong>, <strong>secure</strong>, and{" "}
            <strong>well-architected systems</strong>. My core expertise lies in{" "}
            <strong>PHP with Laravel</strong>, where I’ve led the development of
            production-grade applications. I’ve also delivered robust APIs and
            services using <strong>Python</strong> with <strong>Django</strong>{" "}
            and <strong>FastAPI</strong>, and worked with{" "}
            <strong>TypeScript</strong> in <strong>Supabase</strong> to
            streamline modern backend workflows. I prioritize{" "}
            <strong>clean architecture</strong>, <strong>performance</strong>,
            and <strong>maintainability</strong> in every solution I build.
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
            <SkillIcon src={supabaseIcon} alt="supabase logo" />
          </SkillIcons>
        </SkillCardLong>
        <SkillCard>
          <SkillTitle>Frontend</SkillTitle>
          <SkillSubtitle>
            I have experience in <strong>frontend development</strong> focused
            on creating <strong>responsive</strong>, <strong>accessible</strong>
            , and <strong>user-centered interfaces</strong>. I’ve worked with
            modern technologies like <strong>React</strong>,{" "}
            <strong>Astro</strong>, and <strong>TypeScript</strong>, building
            dynamic web applications and integrating them seamlessly with
            backend services. I value <strong>clean UI architecture</strong>,{" "}
            <strong>performance optimization</strong>, and delivering intuitive
            user experiences.
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
            I have worked with <strong>SQL Server</strong> and{" "}
            <strong>PostgreSQL</strong>, but my strongest experience is with{" "}
            <strong>MySQL</strong>, particularly in designing, optimizing, and
            managing relational databases in production environments. I focus on{" "}
            <strong>data integrity</strong>, <strong>query performance</strong>,
            and <strong>scalable schema design</strong> to support high-demand
            applications.
          </SkillSubtitle>
          <SkillIcons>
            <SkillIcon src={sqlServerIcon} alt="sql server logo" />
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
