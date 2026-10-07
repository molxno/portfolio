import laravel from "../images/skills/laravel.svg";
import django from "../images/skills/django.svg";
import fastapi from "../images/skills/fastapi.svg";
import react from "../images/skills/react.svg";
import vue from "../images/skills/vue.svg";
import kotlin from "../images/skills/kotlin.svg";
import astro from "../images/skills/astro.svg";
import mysql from "../images/skills/mysql.svg";
import postgresql from "../images/skills/postgresql.svg";
import sqlserver from "../images/skills/sqlserver.svg";
import aws from "../images/skills/aws.svg";
import docker from "../images/skills/docker.svg";
import githubactions from "../images/skills/githubactions.svg";
import {Dictionary} from "../i18n/en";

export type SkillId = keyof Dictionary["skills"]["items"];
export type SkillGroupId = "backend" | "frontend" | "database" | "cloud";
export type SkillGroupVariant = "long" | "card" | "compact";

export interface SkillGroup {
  id: SkillGroupId;
  variant: SkillGroupVariant;
  skills: readonly SkillId[];
}

export const skillIcons: Record<SkillId, string> = {
  laravel,
  django,
  fastapi,
  react,
  vue,
  kotlin,
  astro,
  mysql,
  postgresql,
  sqlserver,
  aws,
  docker,
  githubactions,
};

export const skillGroups: readonly SkillGroup[] = [
  {id: "backend", variant: "long", skills: ["laravel", "django", "fastapi"]},
  {id: "frontend", variant: "card", skills: ["react", "vue", "kotlin", "astro"]},
  {id: "database", variant: "card", skills: ["mysql", "postgresql", "sqlserver"]},
  {id: "cloud", variant: "compact", skills: ["aws", "docker", "githubactions"]},
];
