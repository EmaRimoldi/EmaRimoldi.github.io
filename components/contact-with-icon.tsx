import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

interface ContactWithIconProps {
  label: string;
  value: string;
  href?: string;
  icon?: string;
}

export function ContactWithIcon({
  label,
  value,
  href,
  icon = "mail",
}: ContactWithIconProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Mail;

  return (
    <div className="flex items-center gap-4">
      <Icon size={20} className="text-[#6E6763] flex-shrink-0" />
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-[#262424]">{label}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-base text-[#262424] hover:text-[#6E6763] transition-colors duration-200 break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-base text-[#262424] break-all">{value}</p>
        )}
      </div>
    </div>
  );
}
