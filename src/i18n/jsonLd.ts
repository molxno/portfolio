import {CURRENT_EMPLOYER, PERSON_ID, PERSON_IMAGE, PERSON_NAME, SITE_NAME, SITE_ORIGIN, SOCIAL_PROFILES, WEBSITE_ID} from "../data/site";
import {skillGroups} from "../data/skills";
import {dictionaries} from "./dictionaries";
import {Language} from "./languages";

export const JSON_LD_SCRIPT_ID = "structured-data";

export const buildJsonLd = (language: Language) => {
  const t = dictionaries[language];
  const knowsAbout = skillGroups.flatMap((group) =>
    group.skills.map((id) => t.skills.items[id]),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PERSON_NAME,
        url: SITE_ORIGIN,
        image: PERSON_IMAGE,
        jobTitle: t.meta.jobTitle,
        description: t.meta.description,
        worksFor: {
          "@type": "Organization",
          name: CURRENT_EMPLOYER.name,
          url: CURRENT_EMPLOYER.url,
        },
        sameAs: [...SOCIAL_PROFILES],
        knowsAbout,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_ORIGIN,
        name: SITE_NAME,
        inLanguage: ["en", "es"],
        publisher: {"@id": PERSON_ID},
      },
    ],
  };
};
