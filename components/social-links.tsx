import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { socialLinksConfig } from "@/lib/site-config";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
} as const;

type IconName = keyof typeof iconMap;

export function SocialLinks() {
  const socialLinks = socialLinksConfig;

  return (
    <div className="flex justify-center gap-8 md:gap-10">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as IconName];
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-[#262424] transition-opacity duration-200 hover:opacity-60"
          >
            <Icon size={32} className="md:w-8 md:h-8" />
          </Link>
        );
      })}
    </div>
  );
}
