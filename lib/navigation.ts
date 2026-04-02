import { navItems } from "./constants";

export function getIsActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export function getNavItems() {
  return navItems;
}
