export const siteAuthor = "Emanuele Rimoldi";

/**
 * Social and contact links configuration
 * Update these values to change where the site links point to
 */
export const contactConfig = {
  email: {
    label: "Email",
    value: "emanuelerimoldi7@gmail.com",
    href: "mailto:emanuelerimoldi7@gmail.com",
    icon: "mail",
  },
  github: {
    label: "GitHub",
    value: "@EmaRimoldi",
    href: "https://github.com/EmaRimoldi",
    icon: "github",
  },
  linkedin: {
    label: "LinkedIn",
    value: "Emanuele Rimoldi",
    href: "https://www.linkedin.com/in/emanuele-rimoldi",
    icon: "linkedin",
  },
  instagram: {
    label: "Instagram",
    value: "@emanuelerimoldi",
    href: "https://www.instagram.com/emanuelerimoldi",
    icon: "instagram",
  },
};

/**
 * Social links only (used for homepage footer, etc.)
 * Derived from contactConfig
 */
export const socialLinksConfig = [
  {
    name: contactConfig.github.label,
    href: contactConfig.github.href,
    icon: "github",
  },
  {
    name: contactConfig.linkedin.label,
    href: contactConfig.linkedin.href,
    icon: "linkedin",
  },
  {
    name: contactConfig.instagram.label,
    href: contactConfig.instagram.href,
    icon: "instagram",
  },
];

/**
 * Contact links in order (used for contact page)
 */
export const contactLinksArray = [
  contactConfig.email,
  contactConfig.github,
  contactConfig.linkedin,
  contactConfig.instagram,
];
