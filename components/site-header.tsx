"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { siteConfig, navItems } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const clusterParentRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);
  const [navTx, setNavTx] = useState(0);

  const updateNavTransform = useCallback(() => {
    const parent = clusterParentRef.current;
    const nav = clusterRef.current;
    if (!parent || !nav) return;

    const pw = parent.clientWidth;
    const nw = nav.offsetWidth;
    if (pw <= 0 || nw <= 0) return;

    if (isHomepage) {
      setNavTx((pw - nw) / 2);
    } else {
      setNavTx(pw - nw);
    }
  }, [isHomepage]);

  useLayoutEffect(() => {
    updateNavTransform();
  }, [updateNavTransform, pathname]);

  useLayoutEffect(() => {
    const parent = clusterParentRef.current;
    const nav = clusterRef.current;
    if (!parent || typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(updateNavTransform);
    });
    ro.observe(parent);
    if (nav) ro.observe(nav);
    window.addEventListener("resize", updateNavTransform);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateNavTransform);
    };
  }, [updateNavTransform]);

  return (
    <header className="site-header overflow-x-hidden border-b border-[#DDD4CE]/30">
      <nav className="site-container">
        <div className="nav-shell flex min-h-[2.75rem] items-center">
          <div
            className="nav-brand-morph shrink-0 overflow-hidden"
            style={{
              maxWidth: isHomepage ? "0px" : "min(280px, 42vw)",
              opacity: isHomepage ? 0 : 1,
              paddingRight: isHomepage ? 0 : 12,
            }}
          >
            <Link
              href="/"
              className="block font-serif text-sm font-medium tracking-tight text-[#262424] whitespace-nowrap transition-opacity duration-200 hover:opacity-60 md:text-base lg:text-lg"
            >
              {siteConfig.name}
            </Link>
          </div>

          <div
            ref={clusterParentRef}
            className="relative min-h-[2.75rem] min-w-0 flex-1"
          >
            <div
              ref={clusterRef}
              className="nav-cluster-track absolute top-1/2 flex w-max flex-wrap items-center gap-5 font-serif will-change-transform md:gap-8 lg:gap-10"
              style={{
                transform: `translate(${navTx}px, -50%)`,
              }}
            >
              {navItems.map((item) => {
                const isActive =
                  (item.href === "/" && pathname === "/") ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link text-sm whitespace-nowrap md:text-base ${
                      isActive ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
