"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  text: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
  textClassName?: string;
  separator?: string;
}

export function RubyInfiniteMarquee({
  text,
  speed = "normal",
  direction = "left",
  className,
  textClassName,
  separator = "—",
}: InfiniteMarqueeProps) {
  const speedClass = {
    slow: "ruby-animate-marquee-slow",
    normal: "ruby-animate-marquee",
    fast: "ruby-animate-marquee-fast",
  }[speed];

  const dirClass = direction === "right" ? "ruby-animate-marquee-reverse" : speedClass;

  const repeatedText = Array(8).fill(`${text} ${separator} `).join("");

  return (
    <div className={cn("overflow-hidden whitespace-nowrap select-none", className)}>
      <div className={cn("inline-block", dirClass, textClassName)}>
        <span>{repeatedText}</span>
        <span aria-hidden>{repeatedText}</span>
      </div>
    </div>
  );
}
