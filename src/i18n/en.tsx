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
    buttonLabel: "Download Curriculum Vitae",
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
          <strong>well-architected systems</strong>. My core expertise lies in{" "}
          <strong>PHP with Laravel</strong>, where I’ve led the development of
          production-grade applications. I’ve also delivered robust APIs and
          services using <strong>Python</strong> with <strong>Django</strong>{" "}
          and <strong>FastAPI</strong>, and worked with{" "}
          <strong>TypeScript</strong> in <strong>Supabase</strong> to
          streamline modern backend workflows. I prioritize{" "}
          <strong>clean architecture</strong>, <strong>performance</strong>,
          and <strong>maintainability</strong> in every solution I build.
        </>
      ),
    },
    frontend: {
      title: "Frontend",
      subtitle: (
        <>
          I have experience in <strong>frontend development</strong> focused
          on creating <strong>responsive</strong>, <strong>accessible</strong>
          , and <strong>user-centered interfaces</strong>. I’ve worked with
          modern technologies like <strong>React</strong>,{" "}
          <strong>Astro</strong>, and <strong>TypeScript</strong>, building
          dynamic web applications and integrating them seamlessly with
          backend services. I value <strong>clean UI architecture</strong>,{" "}
          <strong>performance optimization</strong>, and delivering intuitive
          user experiences.
        </>
      ),
    },
    database: {
      title: "Database",
      subtitle: (
        <>
          I have worked with <strong>SQL Server</strong> and{" "}
          <strong>PostgreSQL</strong>, but my strongest experience is with{" "}
          <strong>MySQL</strong>, particularly in designing, optimizing, and
          managing relational databases in production environments. I focus on{" "}
          <strong>data integrity</strong>, <strong>query performance</strong>,
          and <strong>scalable schema design</strong> to support high-demand
          applications.
        </>
      ),
    },
    logos: {
      django: "django logo",
      laravel: "laravel logo",
      supabase: "supabase logo",
      react: "react logo",
      astro: "astro logo",
      typescript: "typescript logo",
      sqlServer: "sql server logo",
      postgresql: "postgresql logo",
      mysql: "mysql logo",
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
