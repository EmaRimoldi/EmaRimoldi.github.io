import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { projectsItems } from "@/content/projects-items";

export default function ProjectsPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <div className="space-y-12 md:space-y-16">
          {projectsItems.map((item, index) => (
            <div key={item.id} className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#262424] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#6E6763] italic mb-3">
                  {item.descriptor}
                </p>
              </div>

              <p className="text-sm md:text-base text-[#6E6763] leading-relaxed max-w-2xl">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.year && (
                  <span className="inline-block px-3 py-1 bg-[#E8E1DA] text-sm text-[#262424] rounded">
                    {item.year}
                  </span>
                )}
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-[#E8E1DA] text-sm text-[#262424] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.links && (
                <div className="flex flex-wrap gap-4 text-sm pt-2">
                  {item.links.paper && (
                    <a
                      href={item.links.paper}
                      className="text-[#262424] underline hover:opacity-60"
                    >
                      Paper
                    </a>
                  )}
                  {item.links.notes && (
                    <a
                      href={item.links.notes}
                      className="text-[#262424] underline hover:opacity-60"
                    >
                      Notes
                    </a>
                  )}
                  {item.links.code && (
                    <a
                      href={item.links.code}
                      className="text-[#262424] underline hover:opacity-60"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}

              {index < projectsItems.length - 1 && (
                <div className="pt-8 border-b border-[#DDD4CE]/50" />
              )}
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
