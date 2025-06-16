"use client";

import { useEffect, useRef } from "react";

interface ViewIncrementerProps {
  slug: string;
}

export function ViewIncrementer({ slug }: ViewIncrementerProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (!targetRef.current || hasIncremented.current) return;

    observerRef.current = new IntersectionObserver(
      async (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasIncremented.current) {
          try {
            await fetch(`/api/views`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ slug }),
            });
            hasIncremented.current = true;
            // Disconnect the observer after incrementing
            observerRef.current?.disconnect();
          } catch (error) {
            console.error("Error incrementing view:", error);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    observerRef.current.observe(targetRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [slug]);

  return <div ref={targetRef} className="h-1" />;
} 