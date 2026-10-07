import {detectLanguage, detectLanguageFromEnvironment, readStoredLanguage} from "./detectLanguage";
import {LANGUAGE_STORAGE_KEY} from "./languages";
import {localePath, mapSectionHash, parseLangFromPath} from "./routing";

describe("detectLanguage", () => {
  test("uses the /es or /en path when present", () => {
    expect(detectLanguage({pathname: "/es", languages: ["en-US"]})).toBe("es");
    expect(detectLanguage({pathname: "/en/", languages: ["es-CO"]})).toBe("en");
  });

  test("selects Spanish from ['es-CO'] on the root path", () => {
    expect(detectLanguage({pathname: "/", languages: ["es-CO"]})).toBe("es");
  });

  test("selects the first supported language from ['en-US','es']", () => {
    expect(detectLanguage({pathname: "/", languages: ["en-US", "es"]})).toBe("en");
  });

  test("skips unsupported languages until it finds Spanish in ['fr','es']", () => {
    expect(detectLanguage({pathname: "/", languages: ["fr", "es"]})).toBe("es");
  });

  test("falls back to English when only ['de'] is available", () => {
    expect(detectLanguage({pathname: "/", languages: ["de"]})).toBe("en");
  });

  test("falls back to English when the language list is empty", () => {
    expect(detectLanguage({pathname: "/", languages: []})).toBe("en");
  });

  test("uses the ?lang= URL parameter when the path has no locale", () => {
    expect(detectLanguage({pathname: "/", search: "?lang=es", languages: ["en-US"]})).toBe("es");
    expect(detectLanguage({pathname: "/", search: "?foo=1&lang=en", languages: ["es-CO"]})).toBe("en");
  });

  test("path wins over the query parameter and navigator", () => {
    expect(
      detectLanguage({
        pathname: "/en",
        search: "?lang=es",
        languages: ["es-CO"],
      })
    ).toBe("en");
  });
});

describe("locale routing", () => {
  test("parseLangFromPath reads /es and /en", () => {
    expect(parseLangFromPath("/es")).toBe("es");
    expect(parseLangFromPath("/en")).toBe("en");
    expect(parseLangFromPath("/")).toBeNull();
    expect(parseLangFromPath("/fr")).toBeNull();
  });

  test("localePath builds /es and /en URLs", () => {
    expect(localePath("es")).toBe("/es");
    expect(localePath("en", "#skills")).toBe("/en#skills");
    expect(localePath("es", "habilidades")).toBe("/es#habilidades");
  });

  test("mapSectionHash translates section hashes between languages", () => {
    expect(mapSectionHash("#skills", "es")).toBe("#habilidades");
    expect(mapSectionHash("#habilidades", "en")).toBe("#skills");
    expect(mapSectionHash("#about-me", "es")).toBe("#sobre-mi");
    expect(mapSectionHash("#experiencia", "en")).toBe("#experience");
    expect(mapSectionHash("", "es")).toBe("");
  });
});

describe("localStorage access", () => {
  const originalGetItem = window.localStorage.getItem;

  afterEach(() => {
    window.localStorage.getItem = originalGetItem;
    window.localStorage.removeItem(LANGUAGE_STORAGE_KEY);
  });

  test("readStoredLanguage returns the saved value", () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "es");
    expect(readStoredLanguage()).toBe("es");
  });

  test("blocked localStorage does not throw and detection continues", () => {
    window.localStorage.getItem = () => {
      throw new Error("blocked");
    };

    expect(readStoredLanguage()).toBeNull();
    expect(
      detectLanguageFromEnvironment({
        pathname: "/",
        search: "?lang=es",
        languages: ["de"],
      })
    ).toBe("es");
  });
});
