import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { ProjectCard } from "@/components/project-card";
import { projectsItems } from "@/content/projects-items";

export default function ProjectsPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <p className="font-serif text-sm md:text-base text-[#6E6763] mb-10 md:mb-12 max-w-2xl leading-relaxed">
          Selected work: tools and research codebases I build on or maintain.
        </p>

        <div className="flex flex-col gap-8 md:gap-10">
          {projectsItems.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
