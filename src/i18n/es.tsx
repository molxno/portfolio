import React from "react";
import {Dictionary} from "./en";

export const es: Dictionary = {
  meta: {
    title: "Santiago Molano Holguín | Desarrollador fullstack: Laravel, Kotlin y Vue",
    description:
      "Desarrollador fullstack con más de 4 años en banca, fintech y salud digital. Especialista en backend con Laravel; también Kotlin (Jetpack Compose) y Vue. Abierto a roles remotos, híbridos y presenciales.",
  },
  nav: {
    home: "inicio",
    about: "¿Quién es Molxno?",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  language: {
    group: "Idioma",
    en: "EN",
    es: "ES",
    chooseEn: "Idioma: inglés",
    chooseEs: "Idioma: español",
  },
  sections: {
    about: "sobre-mi",
    experience: "experiencia",
    projects: "proyectos",
    skills: "habilidades",
  },
  hero: {
    title: "Molano",
    subtitle: "Santiago",
  },
  about: {
    topLine: "Sobre mí",
    headline:
      "Tech Lead y Software Architect | PHP (Laravel), Clean Architecture, Fintech",
    description:
      "Soy Santiago Molano, un desarrollador backend con más de 4 años de experiencia liderando proyectos Laravel en fintech y banca. Me especializo en arquitectura limpia, APIs escalables y despliegues seguros. He liderado iniciativas técnicas, mentoreado desarrolladores y asumido la responsabilidad de sistemas backend críticos. Certificado en ciberseguridad y actualmente mejorando mi inglés (B1 → B2), estoy enfocado en dar el paso a un rol de Tech Lead o Software Architect — donde la estrategia se encuentra con el código y el impacto es medible.",
    buttonLabel: "Descargar CV",
    cvAria: "Descargar CV (PDF, español)",
    photoAlt: "Mi foto",
  },
  timeline: {
    heading: "Dónde he trabajado",
    region: "Línea de tiempo profesional",
    linkedIn: "LinkedIn",
    current: "Actual",
    items: {
      btg: {
        title: "BTG Pactual Colombia",
        period: "Jul 2022 – Ene 2023",
        roles: [
          {
            position: "Analista de Operaciones / Desarrollador Fullstack · Prácticas",
            date: "Jul 2022 – Ene 2023",
          },
        ],
        achievements: [
          "Resolví incidentes críticos a nivel SQL en operaciones bancarias.",
          "Canalicé bugs con el proveedor mediante reportes en Jira para acelerar su solución.",
          "Automaticé la limpieza de procedimientos almacenados duplicados.",
        ],
      },
      sportta: {
        title: "Sportta S.A.S",
        period: "Ene 2023 – May 2023",
        roles: [{position: "Desarrollador Fullstack", date: "Ene 2023 – May 2023"}],
        achievements: [
          "Desarrollé la app móvil y web para atletas (React Native, React, Laravel).",
          "Automaticé el CI/CD, reduciendo errores y tiempos de entrega.",
          "Reestructuré la base de datos relacional para mejorar rendimiento y escalabilidad.",
        ],
      },
      alternova: {
        title: "Alternova Inc",
        period: "May 2023 – Actualidad",
        roles: [
          {position: "Desarrollador Fullstack", date: "Oct 2026 – Actualidad"},
          {position: "Desarrollador Backend", date: "May 2023 – Oct 2026"},
        ],
        achievements: [
          "Responsable único de la plataforma de corresponsales bancarios BAM Guatemala: backend, Android y web.",
          "Desarrollé Nequi Guatemala como modelo de negocio independiente en arquitectura hexagonal y AWS.",
          "Backend de Sky, plataforma de salud digital para TDAH (Laravel y Django).",
        ],
      },
    },
  },
  projects: {
    heading: "Proyectos",
    items: {
      crm: {
        name: "CRM",
        alt: "Proyecto CRM",
      },
      origen: {
        name: "Página de aterrizaje",
        alt: "Proyecto de página de aterrizaje",
      },
      crypto: {
        name: "Criptomonedas",
        alt: "Proyecto de criptomonedas",
      },
      veterinary: {
        name: "Veterinaria",
        alt: "Proyecto de veterinaria",
      },
      boo: {
        name: "Página de aterrizaje",
        alt: "Proyecto de página de aterrizaje",
      },
      costs: {
        name: "Control de costos",
        alt: "Proyecto de control de costos",
      },
    },
  },
  skills: {
    heading: "Habilidades",
    backend: {
      title: "Backend",
      subtitle: (
        <>
          Me especializo en el <strong>desarrollo backend</strong> con foco en
          construir sistemas <strong>escalables</strong>, <strong>seguros</strong> y{" "}
          <strong>bien arquitecturados</strong>. Mi experiencia principal es{" "}
          <strong>Laravel</strong>. También entrego APIs y servicios con{" "}
          <strong>Django</strong> y <strong>FastAPI</strong>, y priorizo la{" "}
          <strong>arquitectura limpia</strong>, el <strong>rendimiento</strong> y
          la <strong>mantenibilidad</strong>.
        </>
      ),
    },
    frontend: {
      title: "Frontend / Mobile",
      subtitle: (
        <>
          Construyo interfaces <strong>responsivas</strong> y{" "}
          <strong>accesibles</strong> con <strong>React</strong>,{" "}
          <strong>Vue</strong> y <strong>Astro</strong>, y apps Android con{" "}
          <strong>Kotlin</strong>.
        </>
      ),
    },
    database: {
      title: "Bases de datos",
      subtitle: (
        <>
          Trabajo con <strong>MySQL</strong>, <strong>PostgreSQL</strong> y{" "}
          <strong>SQL Server</strong>, con foco en la{" "}
          <strong>integridad de los datos</strong>, el{" "}
          <strong>rendimiento de las consultas</strong> y un{" "}
          <strong>diseño de esquema escalable</strong>.
        </>
      ),
    },
    cloud: {
      title: "Cloud y DevOps",
      subtitle: (
        <>
          <strong>AWS</strong>, <strong>Docker</strong> y{" "}
          <strong>GitHub Actions</strong>.
        </>
      ),
    },
    items: {
      laravel: "Laravel",
      django: "Django",
      fastapi: "FastAPI",
      react: "React",
      vue: "Vue",
      kotlin: "Kotlin",
      astro: "Astro",
      mysql: "MySQL",
      postgresql: "PostgreSQL",
      sqlserver: "SQL Server",
      aws: "AWS",
      docker: "Docker",
      githubactions: "GitHub Actions",
    },
  },
  footer: {
    rights: "© molxno, Propiedad de un mago del backend.",
    madeWith: "Hecho con ❤️",
    x: "X",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
  },
};
