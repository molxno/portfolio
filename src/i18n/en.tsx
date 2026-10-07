import React from "react";

export const en = {
  meta: {
    title: "Santiago Molano Holguín | Fullstack Developer: Laravel, Kotlin & Vue",
    description:
      "Fullstack developer with 4+ years in banking, fintech, and digital health. Backend specialist in Laravel; also Kotlin (Jetpack Compose) and Vue. Open to remote, hybrid, and on-site roles.",
  },
  nav: {
    home: "home",
    about: "Who is Molxno?",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  language: {
    group: "Language",
    en: "EN",
    es: "ES",
    chooseEn: "Language: English",
    chooseEs: "Language: Spanish",
  },
  sections: {
    about: "about-me",
    experience: "experience",
    projects: "projects",
    skills: "skills",
  },
  hero: {
    title: "Molano",
    subtitle: "Santiago",
  },
  about: {
    topLine: "About Me",
    headline:
      "Tech Lead & Software Architect | PHP (Laravel), Clean Architecture, Fintech",
    description:
      "I’m Santiago Molano, a backend developer with 4+ years of experience leading Laravel projects in fintech and banking. I specialize in clean architecture, scalable APIs, and secure deployments. I’ve led technical initiatives, mentored developers, and taken ownership of critical backend systems. Certified in cybersecurity and currently enhancing my English (B1 → B2), I’m focused on stepping into a Tech Lead or Software Architect role — where strategy meets code and impact is measurable.",
    buttonLabel: "Download CV",
    cvAria: "Download CV (PDF, English)",
    photoAlt: "My photo",
  },
  timeline: {
    heading: "Timeline",
    linkedIn: "LinkedIn",
    items: {
      btg: {
        title: "BTG Pactual Colombia",
        position: "Fullstack Developer | QA Analyst",
        description:
          "Resolved critical incidents in production at SQL level, ensuringavailability in banking operations. Channeled functional bugs with the external provider, generating reports in Jira and facilitating a quick solution. Automated cleanup of duplicate stored procedures, improvingsystem maintainability.",
        date: "July 2022 - January 2023",
      },
      sportta: {
        title: "Sportta Group",
        position: "Fullstack Developer",
        description:
          "Developed and maintained the mobile and web app (React/React Native + Laravel) for athletes.Deployment cycle automation (CI/CD), reducing errors and delivery time in production. Restructured relational database to optimize performance and scalability.",
        date: "January 2023 - May 2023",
      },
      alternovaPhp: {
        title: "Alternova Inc",
        position: "PHP Backend Developer",
        description:
          "I led the backend development of BAM Guatemala's banking correspondent system, managing the entire project lifecycle (deployments, critical bugs, new functionalities). Implemented clean architecture and OWASP vulnerability control, ensuring high availability and security in productive banking environments. I technically guided a junior developer, coordinating tasks and code reviews as an informal project leader.",
        date: "May 2023 - Currently",
      },
      alternovaPython: {
        title: "Alternova Inc",
        position: "Python Backend Developer",
        description:
          "I developed the backend of a health project designed to help people who have been victims of violence through a mobile application and a website. I implemented design patterns to ensure clean code and put a particular focus on the maintainability of the system using Django.",
        date: "Mar 2025 - Currently",
      },
    },
  },
  projects: {
    heading: "Projects",
    items: {
      crm: {
        name: "CRM",
        alt: "CRM project",
      },
      origen: {
        name: "Landing Page",
        alt: "Landing Page project",
      },
      crypto: {
        name: "Cryptocurrency",
        alt: "Cryptocurrency project",
      },
      veterinary: {
        name: "Veterinary",
        alt: "Veterinary project",
      },
      boo: {
        name: "Landing Page",
        alt: "Landing Page project",
      },
      costs: {
        name: "Controls costs",
        alt: "Controls costs project",
      },
    },
  },
  skills: {
    heading: "Skills",
    backend: {
      title: "Backend",
      subtitle: (
        <>
          I specialize in <strong>backend development</strong> with a focus on
          building <strong>scalable</strong>, <strong>secure</strong>, and{" "}
          <strong>well-architected systems</strong>. My core expertise is{" "}
          <strong>Laravel</strong>. I also deliver APIs and services with{" "}
          <strong>Django</strong> and <strong>FastAPI</strong>, and I prioritize{" "}
          <strong>clean architecture</strong>, <strong>performance</strong>, and{" "}
          <strong>maintainability</strong>.
        </>
      ),
    },
    frontend: {
      title: "Frontend / Mobile",
      subtitle: (
        <>
          I build <strong>responsive</strong>, <strong>accessible</strong>{" "}
          interfaces with <strong>React</strong>, <strong>Vue</strong>, and{" "}
          <strong>Astro</strong>, and Android apps with{" "}
          <strong>Kotlin</strong>.
        </>
      ),
    },
    database: {
      title: "Databases",
      subtitle: (
        <>
          I work with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and{" "}
          <strong>SQL Server</strong>, with a focus on{" "}
          <strong>data integrity</strong>, <strong>query performance</strong>,
          and <strong>scalable schema design</strong>.
        </>
      ),
    },
    cloud: {
      title: "Cloud & DevOps",
      subtitle: (
        <>
          <strong>AWS</strong>, <strong>Docker</strong>, and{" "}
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
    rights: "© molxno, Property of a Backend Wizard.",
    madeWith: "Made with ❤️",
    x: "X",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
  },
};

export type Dictionary = typeof en;
