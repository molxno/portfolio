import React from "react";

export const en = {
  meta: {
    title: "Santiago Molano Holguín | Fullstack Developer: Laravel, Kotlin & Vue",
    description:
      "Fullstack developer with 4+ years in banking, fintech, and digital health. Backend specialist in Laravel; also Kotlin and Vue. Open to remote, hybrid, and on-site roles.",
    jobTitle: "Fullstack Developer",
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
    headline: "Fullstack developer | Laravel, Kotlin & Vue",
    description:
      "I’m Santiago Molano, a backend developer with 4+ years of experience leading Laravel projects in fintech and banking. I specialize in clean architecture, scalable APIs, and secure deployments. I’ve led technical initiatives, mentored developers, and taken ownership of critical backend systems. Certified in cybersecurity and currently enhancing my English (B1 → B2), I’m focused on stepping into a Tech Lead or Software Architect role — where strategy meets code and impact is measurable.",
    buttonLabel: "Download CV",
    cvAria: "Download CV (PDF, English)",
    photoAlt: "My photo",
  },
  timeline: {
    heading: "Where I've worked",
    region: "Career timeline",
    linkedIn: "LinkedIn",
    current: "Current",
    items: {
      btg: {
        title: "BTG Pactual Colombia",
        period: "Jul 2022 – Jan 2023",
        roles: [
          {
            position: "Operations Analyst / Fullstack Developer · Internship",
            date: "Jul 2022 – Jan 2023",
          },
        ],
        achievements: [
          "Resolved critical SQL-level incidents in banking operations.",
          "Escalated bugs to the vendor with Jira reports for faster fixes.",
          "Automated cleanup of duplicate stored procedures.",
        ],
      },
      sportta: {
        title: "Sportta S.A.S",
        period: "Jan 2023 – May 2023",
        roles: [{position: "Fullstack Developer", date: "Jan 2023 – May 2023"}],
        achievements: [
          "Built the mobile and web app for athletes (React Native, React, Laravel).",
          "Automated CI/CD, reducing errors and delivery time.",
          "Restructured the relational database for performance and scalability.",
        ],
      },
      alternova: {
        title: "Alternova Inc",
        period: "May 2023 – Present",
        roles: [
          {position: "Fullstack Developer", date: "Oct 2026 – Present"},
          {position: "Backend Developer", date: "May 2023 – Oct 2026"},
        ],
        achievements: [
          "Sole owner of BAM Guatemala's banking correspondent platform: backend, Android, and web.",
          "Built the Nequi Guatemala integration as an independent model on hexagonal architecture and AWS.",
          "Backend of Sky, a digital health platform for ADHD (Laravel games, Django admin).",
        ],
      },
    },
  },
  projects: {
    heading: "Projects",
    region: "Project carousel",
    visitSite: "Visit site",
    viewRepo: "View repo",
    pause: "Pause carousel",
    play: "Play carousel",
    origin: {
      alternova: "Alternova",
      own: "Own project",
    },
    items: {
      kaval: {
        name: "Kaval Pay",
        alt: "BAM Guatemala and Nequi Guatemala",
        description:
          "Transactional infrastructure that turns merchants into real-time service points connected to financial institutions.",
      },
      sky: {
        name: "Sky Therapeutics",
        alt: "Alternova, Sky Therapeutics, and Children's Learning Clinic",
        description:
          "Digital health platform for people with ADHD. Backend for the games in Laravel and the admin panel in Django.",
      },
      tecnicopa: {
        name: "TecniCopa",
        alt: "TecniCopa landing page",
        description:
          "On-site computer support in Copacabana, Antioquia, and its landing page.",
      },
      origen: {
        name: "Origen",
        alt: "Origen landing page",
        description: "Digital marketing and advertising landing page.",
      },
      boo: {
        name: "Boo",
        alt: "Boo landing page",
        description: "Landing page for an appointment-booking product.",
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
