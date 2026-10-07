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
    heading: "Línea de tiempo",
    linkedIn: "LinkedIn",
    items: {
      btg: {
        title: "BTG Pactual Colombia",
        position: "Desarrollador fullstack | Analista QA",
        description:
          "Resolví incidentes críticos en producción a nivel SQL, asegurando la disponibilidad en operaciones bancarias. Canalicé bugs funcionales con el proveedor externo, generando reportes en Jira y facilitando una solución rápida. Automaticé la limpieza de procedimientos almacenados duplicados, mejorando la mantenibilidad del sistema.",
        date: "Julio 2022 - Enero 2023",
      },
      sportta: {
        title: "Sportta Group",
        position: "Desarrollador fullstack",
        description:
          "Desarrollé y mantuve la app móvil y web (React/React Native + Laravel) para atletas. Automatización del ciclo de despliegue (CI/CD), reduciendo errores y el tiempo de entrega en producción. Restructuré la base de datos relacional para optimizar el rendimiento y la escalabilidad.",
        date: "Enero 2023 - Mayo 2023",
      },
      alternovaPhp: {
        title: "Alternova Inc",
        position: "Desarrollador backend PHP",
        description:
          "Lideré el desarrollo backend del sistema de corresponsales bancarios de BAM Guatemala, gestionando todo el ciclo de vida del proyecto (despliegues, bugs críticos, nuevas funcionalidades). Implementé arquitectura limpia y control de vulnerabilidades OWASP, asegurando alta disponibilidad y seguridad en entornos bancarios productivos. Guié técnicamente a un desarrollador junior, coordinando tareas y revisiones de código como líder informal del proyecto.",
        date: "Mayo 2023 - Actualidad",
      },
      alternovaPython: {
        title: "Alternova Inc",
        position: "Desarrollador backend Python",
        description:
          "Desarrollé el backend de un proyecto de salud diseñado para ayudar a personas que han sido víctimas de violencia a través de una aplicación móvil y un sitio web. Implementé patrones de diseño para asegurar código limpio y puse un enfoque particular en la mantenibilidad del sistema usando Django.",
        date: "Mar 2025 - Actualidad",
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
