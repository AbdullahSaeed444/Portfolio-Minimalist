export type SitePageMetadata = {
  title: string;
  description: string;
};

export type SiteSocial = {
  label: string;
  url: string;
};

export type SiteContent = {
  name: string;
  headline: {
    firstLine: string;
    secondLine: string;
    accent: string;
    punctuation: string;
  };
  intro: string;
  availability: string;
  contactEmail: string;
  socials: SiteSocial[];
  eyebrow: string;
  skills: string[];
  biography: string;
  metadata: {
    title: string;
    description: string;
    siteUrl: string;
    openGraphAlt: string;
    pages: {
      work: SitePageMetadata;
      about: SitePageMetadata;
      contact: SitePageMetadata;
    };
  };
  navigation: {
    ariaLabel: string;
    homeAriaLabel: string;
    items: { href: string; label: string }[];
  };
  home: {
    exploreWork: string;
    contactLink: string;
    selectedWorkEyebrow: string;
    selectedWorkHeading: string;
    allWorkLink: string;
    practiceEyebrow: string;
    practiceHeading: string;
  };
  pages: {
    work: { eyebrow: string; title: string; intro: string };
    about: { eyebrow: string; title: string; biographyLabel: string; skillsLabel: string };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
      emailLabel: string;
      socialsLabel: string;
    };
    caseStudy: {
      labels: { problem: string; whatIBuilt: string; stack: string; result: string; links: string };
      backToWork: string;
      projectLink: string;
    };
  };
  footer: { contactLink: string };
};

export const siteContent: SiteContent = {
  name: "codivico",
  headline: {
    firstLine: "Secure business",
    secondLine: "software, built with",
    accent: "Next.js",
    punctuation: ".",
  },
  intro:
    "Dashboards, portals, and content systems where each user's data stays private. I also build WordPress sites and custom React work.",
  availability: "Available for remote and part-time contract work.",
  contactEmail: "AbdullahSaeedAwan2002@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/AbdullahSaeed444" },
    { label: "Instagram", url: "https://www.instagram.com/codivico_official/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-saeed-awan-b44aa2279/" },
  ],
  eyebrow: "Independent practice / 2026",
  skills: ["Next.js", "React", "WordPress", "custom development", "Neon/Postgres", "Clerk"],
  biography:
    "I’m a software engineer and business/data analyst based in Pakistan, available for remote part-time contract work.",
  metadata: {
    title: "codivico — Next.js developer for secure business apps",
    description:
      "I build dashboards, portals, and content systems that keep user data private, plus WordPress sites and custom React work.",
    siteUrl: "https://TODO-real-domain.invalid",
    openGraphAlt: "codivico — Next.js developer for secure business apps",
    pages: {
      work: {
        title: "Work",
        description: "Selected web app and content management projects.",
      },
      about: {
        title: "About",
        description:
          "Software engineer and business/data analyst based in Pakistan, available for remote part-time contract work.",
      },
      contact: {
        title: "Contact",
        description: "Available for remote and part-time contract work.",
      },
    },
  },
  navigation: {
    ariaLabel: "Main navigation",
    homeAriaLabel: "codivico, home",
    items: [
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  home: {
    exploreWork: "Explore work",
    contactLink: "Contact me",
    selectedWorkEyebrow: "Selected work",
    selectedWorkHeading: "Problem to outcome.",
    allWorkLink: "All work",
    practiceEyebrow: "Practice",
    practiceHeading: "Useful work, clearly explained.",
  },
  pages: {
    work: {
      eyebrow: "Selected work / 01",
      title: "Work",
      intro: "Selected projects across web apps and content management.",
    },
    about: {
      eyebrow: "About / 02",
      title: "About",
      biographyLabel: "About",
      skillsLabel: "Skills",
    },
    contact: {
      eyebrow: "Contact / 03",
      title: "Contact",
      intro: "Hiring or have a project? Contact me at my email or via socials below.",
      emailLabel: "Email",
      socialsLabel: "Socials",
    },
    caseStudy: {
      labels: {
        problem: "Problem",
        whatIBuilt: "What I built",
        stack: "Stack",
        result: "Result",
        links: "Links",
      },
      backToWork: "Back to work",
      projectLink: "Read case study",
    },
  },
  footer: { contactLink: "Contact" },
};

export const visibleSocials = siteContent.socials.filter(
  (social) => !social.url.toUpperCase().startsWith("TODO"),
);

if (process.env.NODE_ENV !== "production") {
  const missingSocials = siteContent.socials.filter((social) =>
    social.url.toUpperCase().startsWith("TODO"),
  );

  if (missingSocials.length > 0) {
    console.warn(
      "Missing social link URLs:",
      missingSocials.map((social) => `${social.label}: ${social.url}`).join(", "),
    );
  }
}