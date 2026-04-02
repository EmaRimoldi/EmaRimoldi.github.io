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
        {isHomepage ? (
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 md:gap-6">
            <div />
            <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-10 font-serif">
              {navItems.map((item) => {
                const isActive =
                  (item.href === "/" && pathname === "/") ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link text-sm md:text-base whitespace-nowrap ${
                      isActive ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div aria-hidden className="min-w-0" />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-6 md:gap-8 lg:gap-10">
            <Link
              href="/"
              className="font-serif text-sm md:text-base lg:text-lg font-medium text-[#262424] hover:opacity-60 transition-opacity duration-200 whitespace-nowrap tracking-tight"
            >
              {siteConfig.name}
            </Link>
            <div className="flex flex-wrap justify-end gap-5 md:gap-8 lg:gap-10 font-serif">
              {navItems.map((item) => {
                const isActive =
                  (item.href === "/" && pathname === "/") ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link text-sm md:text-base whitespace-nowrap ${
                      isActive ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
