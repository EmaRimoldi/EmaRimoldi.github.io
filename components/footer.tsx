import Link from "next/link";
import { contactConfig, socialLinksConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#DDD4CE]/90 bg-[#F5EEE9]/92 backdrop-blur-md backdrop-saturate-100 supports-[backdrop-filter]:bg-[#F5EEE9]/85">
      <div className="site-container py-3.5 md:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          {/* Left: Copyright */}
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#8A827A]">
            © {currentYear} Emanuele Rimoldi
          </p>

          {/* Right: Email and Social Links */}
          <div className="flex items-center gap-5 md:gap-7 text-xs text-[#6E6763]">
            <Link
              href={contactConfig.email.href}
              className="hover:text-[#262424] transition-colors duration-200"
            >
              {contactConfig.email.value}
            </Link>
            <div className="flex gap-4 md:gap-5">
              {socialLinksConfig.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#262424] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
