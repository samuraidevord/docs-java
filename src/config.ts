export const SITE = {
  title: "Rust",
  description: "Documentation del lenguaje de progrmación Rust.",
  defaultLanguage: "es_ES",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  Spanish: "es",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  es: {
    "¿Qué es Java ?": [{ text: "Introducción", link: "es/introduction" }],
    "Tipos de Datos": [
      { text: "Introducción", link: "es/variables/introduction" },
      { text: "Primitivos", link: "es/variables/primitives" },
      { text: "Referencias", link: "es/variables/references" },
    ],
    "Bloques de Código": [
      {
        text: "Introducción",
        link: "es/code-block",
      },
    ],
  },
};
