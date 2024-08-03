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

const SkillsSection: React.FC = () => {
    return (
        <SkillsContainer id="skills">
            <Heading>Skills</Heading>
            <SkillsWrapper>
                <SkillCardLong>
                    <SkillTitle>Backend</SkillTitle>
                    <SkillSubtitle>
                        <strong>PHP</strong> is my strength but I have also worked with{" "}
                        <strong>Python</strong> and <strong>Java</strong>.
                    </SkillSubtitle>
                    <SkillIcons>
                        <SkillIcon
                            src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                            alt="fastapi logo"
                        />
                        <SkillIcon
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                            alt="laravel logo"
                        />
                        <SkillIcon
                            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                            alt="java logo"
                        />
                    </SkillIcons>
                </SkillCardLong>
                <SkillCard>
                    <SkillTitle>Frontend</SkillTitle>
                    <SkillSubtitle>
                        High experience with <strong>Javascript</strong>.
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
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
                            alt="tailwind logo"
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