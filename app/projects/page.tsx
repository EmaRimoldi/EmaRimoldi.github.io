import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { ProjectCard } from "@/components/project-card";
import { projectsItems } from "@/content/projects-items";

export default function ProjectsPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <div className="flex flex-col gap-8 md:gap-10">
          {projectsItems.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
