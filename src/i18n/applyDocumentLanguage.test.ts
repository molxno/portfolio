import {applyDocumentLanguage} from "./applyDocumentLanguage";
import {JSON_LD_SCRIPT_ID, buildJsonLd} from "./jsonLd";

const mountHead = () => {
  document.documentElement.innerHTML = `
    <head>
      <title></title>
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:locale" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <link rel="canonical" href="" />
    </head>
    <body></body>
  `;
};

describe("applyDocumentLanguage", () => {
  beforeEach(() => {
    mountHead();
  });

  test("writes localized title, description, and social tags for Spanish", () => {
    applyDocumentLanguage("es");

    expect(document.documentElement.lang).toBe("es");
    expect(document.title).toContain("Desarrollador fullstack");
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toContain(
      "Kotlin y Vue",
    );
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).not.toContain(
      "Jetpack Compose",
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
      "https://molxno.dev/es/",
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
      "https://molxno.dev/es/",
    );
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute("content")).toBe(
      "es_CO",
    );
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute("content")).toBe(
      document.title,
    );
  });

  test("upserts Person and WebSite JSON-LD without inventing contacts", () => {
    applyDocumentLanguage("en");
    applyDocumentLanguage("es");

    const scripts = document.querySelectorAll(`#${JSON_LD_SCRIPT_ID}`);
    expect(scripts).toHaveLength(1);

    const data = JSON.parse(scripts[0].textContent || "{}");
    const person = data["@graph"].find((node: {["@type"]: string}) => node["@type"] === "Person");
    const site = data["@graph"].find((node: {["@type"]: string}) => node["@type"] === "WebSite");

    expect(person.name).toBe("Santiago Molano Holguín");
    expect(person.jobTitle).toBe("Desarrollador fullstack");
    expect(person.worksFor.name).toBe("Alternova Inc");
    expect(person.sameAs).toEqual([
      "https://x.com/molxno",
      "https://www.linkedin.com/in/molanosantiago/",
      "https://github.com/molxno",
    ]);
    expect(person.email).toBeUndefined();
    expect(person.telephone).toBeUndefined();
    expect(person.knowsAbout).toContain("Laravel");
    expect(person.knowsAbout).toHaveLength(13);
    expect(site.url).toBe("https://molxno.dev");
    expect(buildJsonLd("es")["@graph"][0].jobTitle).toBe("Desarrollador fullstack");
  });
});
