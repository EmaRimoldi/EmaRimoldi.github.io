import { SiteHeader } from "./site-header";
import { Footer } from "./footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5EEE9] text-[#262424] flex flex-col">
      <SiteHeader />
      <main className="flex-1 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
