"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  delay = 0,
  className,
  style,
  as = "div",
  href,
  target,
  rel,
}: {
  children: ReactNode;
  /** delay in milliseconds (matches the original design timings) */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "li" | "a";
  href?: string;
  target?: string;
  rel?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut, delay: delay / 1000 },
    },
  };

  const MotionTag =
    as === "section"
      ? motion.section
      : as === "li"
        ? motion.li
        : as === "a"
          ? motion.a
          : motion.div;

  const extra = as === "a" ? { href, target, rel } : {};

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      variants={variants}
      className={className}
      style={style}
      {...extra}
    >
      {children}
    </MotionTag>
  );
}
