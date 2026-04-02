"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navItems } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  return (
    <header className="site-header border-b border-[#DDD4CE]/30">
      <nav className="site-container">
        <div className="flex items-center justify-between gap-6 md:gap-8 lg:gap-10">
          {/* Logo/Name on the left - hidden on homepage */}
          {!isHomepage ? (
            <Link
              href="/"
              className="font-serif text-sm md:text-base lg:text-lg font-medium text-[#262424] hover:opacity-60 transition-opacity duration-200 whitespace-nowrap tracking-tight"
            >
              {siteConfig.name}
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {/* Navigation — centered when on homepage, right-side on subpages */}
          <div className={`flex flex-wrap gap-6 md:gap-8 lg:gap-10 font-serif ${isHomepage ? "flex-1 justify-center" : ""}`}>
            {navItems.map((item) => {
              const isActive =
                (item.href === "/" && pathname === "/") ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-sm md:text-base ${
                    isActive ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Spacer to balance the layout on homepage */}
          {isHomepage && <div className="flex-1" />}
        </div>
      </nav>
    </header>
  );
}
