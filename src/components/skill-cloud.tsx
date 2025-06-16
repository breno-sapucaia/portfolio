"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type SkillCategory = "all" | "frontend" | "backend" | "cloud";

interface Skill {
  name: string;
  icon: keyof typeof Icons;
  category: SkillCategory[];
}

const skills: Skill[] = [
  { name: "React", icon: "react", category: ["frontend"] },
  { name: "Next.js", icon: "nextjs", category: ["frontend"] },
  { name: "TypeScript", icon: "typescript", category: ["frontend", "backend"] },
  { name: "Node.js", icon: "github", category: ["backend"] },
  { name: "Python", icon: "github", category: ["backend"] },
  { name: "PostgreSQL", icon: "github", category: ["backend"] },
  { name: "Docker", icon: "github", category: ["backend", "cloud"] },
  { name: "AWS", icon: "github", category: ["cloud"] },
  { name: "GraphQL", icon: "github", category: ["backend"] },
];

const categories: { id: SkillCategory; label: string; description: string }[] = [
  {
    id: "all",
    label: "All Skills",
    description: "Show all my technical skills",
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "UI/UX and client-side technologies",
  },
  {
    id: "backend",
    label: "Backend",
    description: "Server-side and database technologies",
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    description: "Infrastructure and deployment technologies",
  },
];

export function SkillCloud() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter((skill) =>
    selectedCategory === "all"
      ? true
      : skill.category.includes(selectedCategory)
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="relative"
          >
            {selectedCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 rounded-md bg-primary"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">{category.label}</span>
          </Button>
        ))}
      </div>

      <div className="relative">
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredSkills.map((skill) => {
            const Icon = Icons[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "flex items-center gap-2 rounded-lg border bg-card p-3 text-card-foreground shadow-sm transition-all hover:shadow-md",
                  "hover:scale-105"
                )}
              >
                <Icon className="size-6" />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        {categories.find((c) => c.id === selectedCategory)?.description}
      </div>
    </div>
  );
} 