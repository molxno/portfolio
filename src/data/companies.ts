import laravel from "../images/skills/laravel.svg";
import kotlin from "../images/skills/kotlin.svg";
import vueOnLight from "../images/skills/vue-on-light.svg";
import awsOnLight from "../images/skills/aws-on-light.svg";
import django from "../images/skills/django.svg";
import react from "../images/skills/react.svg";
import digitalocean from "../images/skills/digitalocean.svg";
import postgresql from "../images/skills/postgresql.svg";
import python from "../images/skills/python.svg";
import azure from "../images/skills/azure.svg";
import jira from "../images/skills/jira.svg";
import {Dictionary} from "../i18n/en";

export type CompanyId = keyof Dictionary["timeline"]["items"];

export type TimelineOrder = "oldest-first" | "newest-first";

/**
 * Visual order of the experience timeline.
 * `oldest-first` matches the original published site (BTG → Sportta → Alternova).
 * Set to `newest-first` to put the current role at the top.
 */
export const TIMELINE_ORDER: TimelineOrder = "oldest-first";

const inTimelineOrder = (
  items: readonly Company[],
  order: TimelineOrder,
): readonly Company[] => (order === "newest-first" ? [...items].reverse() : items);

export type TechChipId =
  | "laravel"
  | "kotlin"
  | "vue"
  | "aws"
  | "django"
  | "react"
  | "reactNative"
  | "digitalocean"
  | "postgresql"
  | "python"
  | "azure"
  | "sql"
  | "jira";

export interface TechChip {
  label: string;
  icon?: string;
}

export const techChips: Record<TechChipId, TechChip> = {
  laravel: {label: "Laravel", icon: laravel},
  kotlin: {label: "Kotlin", icon: kotlin},
  vue: {label: "Vue", icon: vueOnLight},
  aws: {label: "AWS", icon: awsOnLight},
  django: {label: "Django", icon: django},
  react: {label: "React", icon: react},
  reactNative: {label: "React Native", icon: react},
  digitalocean: {label: "DigitalOcean", icon: digitalocean},
  postgresql: {label: "PostgreSQL", icon: postgresql},
  python: {label: "Python", icon: python},
  azure: {label: "Azure", icon: azure},
  sql: {label: "SQL"},
  jira: {label: "Jira", icon: jira},
};

export interface Company {
  id: CompanyId;
  href: string;
  current?: boolean;
  chips: readonly TechChipId[];
}

const companiesOldestFirst: readonly Company[] = [
  {
    id: "btg",
    href: "https://www.linkedin.com/company/btg-pactual-col/",
    chips: ["python", "react", "azure", "sql", "jira"],
  },
  {
    id: "sportta",
    href: "https://www.linkedin.com/company/grupo-sportta/",
    chips: ["laravel", "react", "reactNative", "digitalocean", "postgresql"],
  },
  {
    id: "alternova",
    href: "https://www.linkedin.com/company/alternova-inc/",
    current: true,
    chips: ["laravel", "kotlin", "vue", "aws", "django"],
  },
];

export const companies: readonly Company[] = inTimelineOrder(
  companiesOldestFirst,
  TIMELINE_ORDER,
);
