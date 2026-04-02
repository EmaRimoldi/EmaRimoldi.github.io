import Link from "next/link";
import { socialLinksConfig } from "@/lib/site-config";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/social-brand-icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

type IconName = keyof typeof iconMap;

const iconClass = "h-5 w-5 md:h-6 md:w-6";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-7 md:gap-9">
      {socialLinksConfig.map((link) => {
        const Icon = iconMap[link.icon as IconName];
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-[#262424] transition-opacity duration-200 hover:opacity-60 p-1.5 -m-1.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Icon className={iconClass} />
          </Link>
        );
      })}
    </div>
  );
}
