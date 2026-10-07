import origenPng from "../images/origen.png";
import booPng from "../images/boo.png";
import tecnicopaPng from "../images/projects/tecnicopa-hero.png";
import skyCoverPng from "../images/projects/sky-cover-hero.png";
import kavalCoverPng from "../images/projects/kaval-cover.png";
import {Language} from "../i18n/languages";
import {Dictionary} from "../i18n/en";

export type ProjectId = keyof Dictionary["projects"]["items"];
export type ProjectOrigin = "alternova" | "own";

export const MARQUEE_SPEED_PX = 40;

export interface ProjectImage {
  png: string;
  webp?: string;
  width: number;
  height: number;
}

export interface Project {
  id: ProjectId;
  origin: ProjectOrigin;
  href: string;
  hrefByLanguage?: Partial<Record<Language, string>>;
  repoHref?: string;
  image: ProjectImage;
}

export const resolveProjectHref = (project: Project, language: Language): string =>
  project.hrefByLanguage?.[language] ?? project.href;

export const projects: readonly Project[] = [
  {
    id: "kaval",
    origin: "alternova",
    href: "https://kavalpay.com/en",
    hrefByLanguage: {es: "https://kavalpay.com/es"},
    image: {png: kavalCoverPng, width: 800, height: 500},
  },
  {
    id: "sky",
    origin: "alternova",
    href: "https://sky.cenextra.org/",
    image: {png: skyCoverPng, width: 800, height: 500},
  },
  {
    id: "tecnicopa",
    origin: "own",
    href: "https://tecnicopa.com",
    repoHref: "https://github.com/molxno/tecnicopa-web",
    image: {png: tecnicopaPng, width: 1440, height: 1032},
  },
  {
    id: "origen",
    origin: "own",
    href: "https://origen.molxno.dev/",
    repoHref: "https://github.com/molxno/origen",
    image: {png: origenPng, width: 1920, height: 993},
  },
  {
    id: "boo",
    origin: "own",
    href: "https://boo.molxno.dev/",
    repoHref: "https://github.com/molxno/boo_app_frontend",
    image: {png: booPng, width: 1920, height: 993},
  },
];
