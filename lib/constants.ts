import { socialLinksConfig } from "./site-config";

export const siteConfig = {
  name: "Emanuele Rimoldi",
  description:
    "AI researcher exploring intelligence, learning, and useful models — theory, agents, and the mathematical foundations of computation.",
  author: "Emanuele Rimoldi",
  url: "https://emarimoldi.github.io",
  og: {
    type: "website",
    locale: "en_US",
  },
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Photography", href: "/photography" },
  { label: "Music", href: "/music" },
];

export const socialLinks = socialLinksConfig;

export const colors = {
  background: "#F5EEE9",
  text: "#262424",
  textSoft: "#6E6763",
  line: "#DDD4CE",
};

export const spacing = {
  maxWidth: "1280px",
  contentWidth: "1180px",
  readingWidth: "760px",
};
