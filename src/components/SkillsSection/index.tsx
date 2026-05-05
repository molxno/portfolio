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
            <SkillIcon src={djangoIcon} alt="django logo" />
            <SkillIcon src={laravelIcon} alt="laravel logo" />
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
            <SkillIcon src={reactIcon} alt="react logo" />
            <SkillIcon src={astroIcon} alt="astro logo" />
            <SkillIcon src={typescriptIcon} alt="typescript logo" />
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
            <SkillIcon src={postgresqlIcon} alt="postgresql logo" />
            <SkillIcon src={mysqlIcon} alt="mysql logo" />
          </SkillIcons>
        </SkillCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
