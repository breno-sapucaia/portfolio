import BlurFade from "@/components/magicui/blur-fade";
import { getProjects, Project } from "@/data/projects";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
  description: "My projects and specifications.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extract query parameters
  const queryParam = searchParams.q as string | undefined;
  
  const projects = await getProjects(queryParam);
  return (
    <section>
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to portfolio
      </Link>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">projects</h1>
      </BlurFade>
      <Suspense fallback={
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-1">
            <div className="h-6 w-48 animate-pulse rounded-md bg-muted"></div>
            <div className="h-4 w-24 animate-pulse rounded-md bg-muted"></div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="h-6 w-48 animate-pulse rounded-md bg-muted"></div>
            <div className="h-4 w-24 animate-pulse rounded-md bg-muted"></div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="h-6 w-48 animate-pulse rounded-md bg-muted"></div>
            <div className="h-4 w-24 animate-pulse rounded-md bg-muted"></div>
          </div>
        </div>
      }>
      {projects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={project.slug}>
            <Link
              className="flex flex-col space-y-2 mb-6 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              href={`/projects/${project.slug}`}
            >
              <div className="w-full flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <p className="tracking-tight font-medium">{project.metadata.title}</p>
                  {project.metadata.status && (
                    <Badge variant="secondary" className="text-xs">
                      {project.metadata.status}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.metadata.summary}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    {project.metadata.publishedAt}
                  </p>
                  {project.metadata.technologies && (
                    <div className="flex gap-1 flex-wrap">
                      {project.metadata.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.metadata.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.metadata.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </Suspense>
    </section>
  );
}
