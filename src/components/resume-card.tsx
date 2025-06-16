"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface ResumeCardProps {
  context: "work" | "education";
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  milestones: {
    title: string;
    start: string;
    end: string;
    description?: string;
  }[];
}

export const ResumeCard = ({
  context,
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  milestones,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  // If milestones are provided, render grouped promotion UI
  if (milestones && milestones.length > 0) {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: "auto",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Card className="flex cursor-pointer" onClick={handleClick}>
          <div className="flex-none flex flex-col items-center mr-4">
            <Avatar className="border size-12 mb-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className={"object-contain "}
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-1 flex-grow flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 transform transition-all duration-300 ease-out ml-2",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                  {badges && (
                    <span className="inline-flex gap-x-1 ml-2">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            </CardHeader>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="flex flex-col pl-2 relative overflow-hidden"
            >
              {milestones.length > 0 &&
                milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start relative h-full pb-4">
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center mr-4 h-full">
                      <span
                        className={`w-3 h-3 rounded-full border-2 border-primary bg-background z-10 ${
                          idx === 0 ? "mt-2" : ""
                        }`}
                      ></span>
                      {idx < milestones.length - 1 && (
                        <div
                          className="w-px bg-muted flex-1"
                          style={{ minHeight: 'calc(100% - 36px)' }}
                        ></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs sm:text-sm">
                          {milestone.title}
                        </span>
                        {/* <span className="text-xs sm:text-sm tabular-nums text-muted-foreground">{milestone.period}</span> */}
                      </div>
                      {/* {milestone.location && (
                      <div className="text-xs text-muted-foreground mb-1">{milestone.location}</div>
                    )}
                    {milestone.badges && (
                      <div className="flex gap-x-1 mb-1">
                        {milestone.badges.map((badge, i) => (
                          <Badge variant="secondary" className="align-middle text-xs" key={i}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )} */}
                      {milestone.description && (
                        <div className="text-xs sm:text-sm mt-1">
                          {milestone.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <Link href={href || "#"} target="_blank" onClick={(e) => e.stopPropagation()} className="text-xs sm:text-sm text-muted-foreground">Go to {title} website</Link>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Default: single-role card UI
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <Card className="flex cursor-pointer" onClick={handleClick}>
        <div className="flex-none flex flex-col items-center mr-4">
          <Avatar className="border size-12 mb-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className={cn("object-contain", context === "education" ? "p-2" : "")}
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-4 transform transition-all duration-300 ease-out ml-2",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="mt-2 text-xs sm:text-sm overflow-hidden"
          >
            {description}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
