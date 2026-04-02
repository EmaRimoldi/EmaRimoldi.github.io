import { contactLinksArray } from "@/lib/site-config";

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
  icon?: string;
}

/**
 * Contact links sourced from centralized site config
 * Edit links in lib/site-config.ts
 */
export const contactLinks: ContactLink[] = contactLinksArray.map((link) => ({
  label: link.label,
  value: link.value,
  href: link.href,
  icon: link.icon,
}));
