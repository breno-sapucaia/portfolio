import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type ProjectMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  cover?: string;
  technologies?: string[];
  status?: string;
  category?: string;
  hidden?: boolean;
  hiddenParam?: string;
};

export type Project = {
  metadata: ProjectMetadata;
  slug: string;
  source: string;
};

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file: string) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getProject(slug: string): Promise<Project> {
  const filePath = path.join("content", "projects", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as ProjectMetadata,
    slug,
  };
}

export async function getAllProjects(dir: string): Promise<Project[]> {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file: string) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getProject(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getProjects(queryParam?: string): Promise<Project[]> {
  const allProjects = await getAllProjects(path.join(process.cwd(), "content", "projects"));
  
  // Filter out hidden projects unless the correct query parameter is provided
  return allProjects.filter(project => {
    if (project.metadata.hidden && project.metadata.hiddenParam) {
      return queryParam === project.metadata.hiddenParam;
    }
    return true;
  });
}
