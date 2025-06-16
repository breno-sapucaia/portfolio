"use client";

import { useState } from "react";
import { Eye, Share2, Link, Check } from "lucide-react";
import { DATA } from "@/data/resume";

interface BlogStatsProps {
  slug: string;
  views: number;
}

export function BlogStats({ slug, views }: BlogStatsProps) {
  const [currentViews, setCurrentViews] = useState<number>(views);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = `${DATA.url}/blog/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error copying link:", error);
    }
  };

  const handleShare = async () => {
    const url = `${DATA.url}/blog/${slug}`;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
      <div className="flex items-center gap-1">
        <Eye className="h-4 w-4" />
        <span>{currentViews.toLocaleString()} views</span>
      </div>
      <button
        onClick={handleShare}
        className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>
      |
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        title="Copy link"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
