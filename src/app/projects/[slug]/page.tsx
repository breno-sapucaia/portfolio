import { getProjects, getProject } from "@/data/projects";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  // Generate static params for all projects (including hidden ones)
  // The filtering will happen at runtime based on query parameters
  const { getAllProjects } = await import("@/data/projects");
  const path = await import("path");
  const allProjects = await getAllProjects(path.join(process.cwd(), "content", "projects"));
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let project = await getProject(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let project = await getProject(params.slug);
 
  if (!project) {
    notFound();
  }

  return (
    <section id="project">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${DATA.url}${project.metadata.image}`
              : `${DATA.url}/og?title=${project.metadata.title}`,
            url: `${DATA.url}/projects/${project.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <Link
        href="/projects"
        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {project.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(project.metadata.publishedAt)}
          </p>
        </Suspense>
        <div className="flex gap-2">
          {project.metadata.status && (
            <Badge variant="secondary">
              {project.metadata.status}
            </Badge>
          )}
          {project.metadata.category && (
            <Badge variant="outline">
              {project.metadata.category}
            </Badge>
          )}
        </div>
      </div>
      {project.metadata.cover && (
        <Image
          src={`${project.metadata.cover}`}
          alt={project.metadata.title}
          width={650}
          height={300}
          className="rounded-lg mb-8"
        />
      )}
      {project.metadata.technologies && (
        <div className="flex gap-2 mb-8 flex-wrap">
          {project.metadata.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      )}
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: project.source }}
      ></article>
    </section>
  );
}
