import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts, Post } from "@/data/blog";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;


export default async function BlogPage() {
  const posts = await getBlogPosts();
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
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
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
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </Suspense>
    </section>
  );
}