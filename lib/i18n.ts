export const locales = ["pt-br", "en-us", "en-gb"] as const;

export type Locale = (typeof locales)[number];

type ContactKey = "linkedin" | "github" | "whatsapp";

type Translation = {
  metadata: {
    title: string;
    description: string;
  };
  languageSwitcherLabel: string;
  brand: string;
  hero: {
    title: string;
    text: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    contactsLabel: string;
    highlightsLabel: string;
    highlights: string[];
  };
  summary: {
    title: string;
    items: Array<{
      value: string;
      label: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    cards: Array<{
      title: string;
      text: string;
    }>;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Array<{
      period: string;
      title: string;
      company: string;
      description: string;
    }>;
  };
  stack: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    availabilityEyebrow: string;
    availabilityTitle: string;
  };
  contacts: Record<ContactKey, string>;
  footer: {
    tagline: string;
    contactsHeading: string;
    legalHeading: string;
    cnpj: string;
    rights: string;
  };
};

export const contactLinks: Record<ContactKey, string> = {
  linkedin: "https://www.linkedin.com/in/vinicius-dos-santos-rosa-a0a895244/",
  github: "https://github.com/Vini959",
  whatsapp:
    "https://wa.me/5542991224783?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20santos-dev-solutions.",
};

export const translations: Record<Locale, Translation> = {
  "pt-br": {
    metadata: {
      title: "santos-dev-solutions | Desenvolvimento React e Next",
      description:
        "Site institucional da santos-dev-solutions, com foco em desenvolvimento React, Next.js, Liferay e React Native.",
    },
    languageSwitcherLabel: "Idioma",
    brand: "santos-dev-solutions",
    hero: {
      title: "Construindo experiências web premium com React e Next.js.",
      text:
        "Sou Vinicius dos Santos Rosa e lidero a santos-dev-solutions com foco em sites, interfaces e produtos digitais que unem velocidade, clareza visual e execução profissional.",
      subtext:
        "Aos 19 anos, já somo mais de dois anos de experiência prática com web, portais corporativos, mobile e desenvolvimento orientado a resultado.",
      primaryCta: "Ver experiência",
      secondaryCta: "Projetos públicos",
      contactsLabel: "Canais oficiais",
      highlightsLabel: "Principais competências",
      highlights: [
        "React e Next.js para produtos web modernos",
        "Experiência com Liferay em ambiente corporativo",
        "React Native para interfaces mobile objetivas",
      ],
    },
    summary: {
      title: "Resumo profissional",
      items: [
        { value: "2+ anos", label: "de experiência prática" },
        { value: "4 frentes", label: "web, mobile, portal e produto" },
        { value: "Atual", label: "Mood Solutions" },
        { value: "Base", label: "React, Next e Liferay" },
      ],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Perfil jovem, repertório profissional e vontade real de construir",
      cards: [
        {
          title: "Quem eu sou",
          text:
            "Sou um desenvolvedor que cresceu próximo da tecnologia e transformou essa afinidade em carreira. Hoje atuo com foco em criar experiências consistentes, escaláveis e com boa leitura para o usuário final.",
        },
        {
          title: "Como trabalho",
          text:
            "Gosto de interfaces bem resolvidas, código organizado e entregas com padrão visual forte. Meu estilo mistura visão de produto, responsabilidade técnica e facilidade para aprender rápido.",
        },
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Uma trajetória em evolução contínua",
      items: [
        {
          period: "Hoje",
          title: "Desenvolvedor de Software Junior",
          company: "Mood Solutions",
          description:
            "Atuando no desenvolvimento de software com foco em entrega, manutenção e evolução de produtos digitais.",
        },
        {
          period: "Experiência anterior",
          title: "Aprendiz Administrativo",
          company: "BRF",
          description:
            "Vivência em rotina corporativa, organização de processos e colaboração com times de negócio.",
        },
      ],
    },
    stack: {
      eyebrow: "Stack principal",
      title: "Tecnologias com as quais entrego valor hoje",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Liferay",
        "React Native",
        "JavaScript",
        "UI responsiva",
        "Integração de sistemas",
      ],
    },
    projects: {
      eyebrow: "Projetos públicos",
      title: "Meu GitHub faz parte da minha vitrine profissional",
      paragraphs: [
        "Além da experiência no mercado, mantenho projetos públicos que reforçam meu interesse por desenvolvimento, estudo contínuo e construção de portfólio.",
        "Essa combinação entre experiência profissional e projetos autorais mostra consistência, iniciativa e vontade de evoluir de forma prática.",
      ],
      availabilityEyebrow: "Disponível para",
      availabilityTitle: "Freelas, oportunidades CLT e parcerias em produto",
    },
    contacts: {
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: {
      tagline:
        "Desenvolvimento web profissional com foco em performance, clareza e presença digital.",
      contactsHeading: "Canais oficiais",
      legalHeading: "Informações legais",
      cnpj: "CNPJ 59.448.748/0001-02",
      rights: "Todos os direitos reservados.",
    },
  },
  "en-us": {
    metadata: {
      title: "santos-dev-solutions | React and Next Development",
      description:
        "Official website for santos-dev-solutions, focused on React, Next.js, Liferay and React Native development.",
    },
    languageSwitcherLabel: "Language",
    brand: "santos-dev-solutions",
    hero: {
      title: "Building premium web experiences with React and Next.js.",
      text:
        "I am Vinicius dos Santos Rosa and I lead santos-dev-solutions with a focus on websites, interfaces, and digital products that combine speed, visual clarity, and professional execution.",
      subtext:
        "At 19, I already bring more than two years of hands-on experience across web, enterprise portals, mobile, and outcome-driven product development.",
      primaryCta: "View experience",
      secondaryCta: "Public projects",
      contactsLabel: "Official channels",
      highlightsLabel: "Core capabilities",
      highlights: [
        "React and Next.js for modern web products",
        "Liferay experience in corporate environments",
        "React Native for focused mobile interfaces",
      ],
    },
    summary: {
      title: "Professional summary",
      items: [
        { value: "2+ years", label: "of hands-on experience" },
        { value: "4 tracks", label: "web, mobile, portals, and product" },
        { value: "Current", label: "Mood Solutions" },
        { value: "Core", label: "React, Next, and Liferay" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Young profile, professional range, and a real drive to build",
      cards: [
        {
          title: "Who I am",
          text:
            "I am a developer who grew up close to technology and turned that affinity into a career. Today I focus on building consistent, scalable experiences with strong readability for end users.",
        },
        {
          title: "How I work",
          text:
            "I value well-resolved interfaces, organized code, and deliveries with a strong visual standard. My style blends product thinking, technical ownership, and the ability to learn fast.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "A journey in continuous evolution",
      items: [
        {
          period: "Today",
          title: "Junior Software Developer",
          company: "Mood Solutions",
          description:
            "Working on software development focused on delivery, maintenance, and the evolution of digital products.",
        },
        {
          period: "Previous experience",
          title: "Administrative Apprentice",
          company: "BRF",
          description:
            "Experience with corporate routines, process organization, and collaboration with business teams.",
        },
      ],
    },
    stack: {
      eyebrow: "Core stack",
      title: "Technologies I use to deliver value today",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Liferay",
        "React Native",
        "JavaScript",
        "Responsive UI",
        "Systems integration",
      ],
    },
    projects: {
      eyebrow: "Public projects",
      title: "My GitHub is part of my professional showcase",
      paragraphs: [
        "Alongside market experience, I maintain public projects that reinforce my interest in development, continuous study, and portfolio building.",
        "That combination of professional experience and personal projects reflects consistency, initiative, and a practical drive to keep evolving.",
      ],
      availabilityEyebrow: "Available for",
      availabilityTitle: "Freelance work, full-time opportunities, and product partnerships",
    },
    contacts: {
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: {
      tagline:
        "Professional web development focused on performance, clarity, and digital presence.",
      contactsHeading: "Official channels",
      legalHeading: "Legal information",
      cnpj: "CNPJ 59.448.748/0001-02",
      rights: "All rights reserved.",
    },
  },
  "en-gb": {
    metadata: {
      title: "santos-dev-solutions | React and Next Development",
      description:
        "Official website for santos-dev-solutions, focused on React, Next.js, Liferay and React Native development.",
    },
    languageSwitcherLabel: "Language",
    brand: "santos-dev-solutions",
    hero: {
      title: "Building premium web experiences with React and Next.js.",
      text:
        "I am Vinicius dos Santos Rosa and I lead santos-dev-solutions with a focus on websites, interfaces, and digital products that combine speed, visual clarity, and professional delivery.",
      subtext:
        "At 19, I already bring more than two years of hands-on experience across web, enterprise portals, mobile, and outcome-driven product development.",
      primaryCta: "View experience",
      secondaryCta: "Public projects",
      contactsLabel: "Official channels",
      highlightsLabel: "Core capabilities",
      highlights: [
        "React and Next.js for modern web products",
        "Liferay experience in corporate environments",
        "React Native for focused mobile interfaces",
      ],
    },
    summary: {
      title: "Professional summary",
      items: [
        { value: "2+ years", label: "of hands-on experience" },
        { value: "4 areas", label: "web, mobile, portals, and product" },
        { value: "Current", label: "Mood Solutions" },
        { value: "Core", label: "React, Next, and Liferay" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A young profile, professional range, and a real drive to build",
      cards: [
        {
          title: "Who I am",
          text:
            "I am a developer who grew up close to technology and turned that affinity into a career. Today I focus on building consistent, scalable experiences with strong readability for end users.",
        },
        {
          title: "How I work",
          text:
            "I value well-resolved interfaces, organised code, and deliveries with a strong visual standard. My style blends product thinking, technical ownership, and the ability to learn quickly.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "A journey in continuous evolution",
      items: [
        {
          period: "Today",
          title: "Junior Software Developer",
          company: "Mood Solutions",
          description:
            "Working on software development focused on delivery, maintenance, and the evolution of digital products.",
        },
        {
          period: "Previous experience",
          title: "Administrative Apprentice",
          company: "BRF",
          description:
            "Experience with corporate routines, process organisation, and collaboration with business teams.",
        },
      ],
    },
    stack: {
      eyebrow: "Core stack",
      title: "Technologies I use to deliver value today",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Liferay",
        "React Native",
        "JavaScript",
        "Responsive UI",
        "Systems integration",
      ],
    },
    projects: {
      eyebrow: "Public projects",
      title: "My GitHub is part of my professional showcase",
      paragraphs: [
        "Alongside market experience, I maintain public projects that reinforce my interest in development, continuous study, and portfolio building.",
        "That combination of professional experience and personal projects reflects consistency, initiative, and a practical drive to keep evolving.",
      ],
      availabilityEyebrow: "Available for",
      availabilityTitle: "Freelance work, full-time opportunities, and product partnerships",
    },
    contacts: {
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: {
      tagline:
        "Professional web development focused on performance, clarity, and digital presence.",
      contactsHeading: "Official channels",
      legalHeading: "Legal information",
      cnpj: "CNPJ 59.448.748/0001-02",
      rights: "All rights reserved.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  "pt-br": "PT-BR",
  "en-us": "EN-US",
  "en-gb": "EN-GB",
};
