"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 60,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const offset =
    direction === "left"
      ? { x: -80, y: 0 }
      : direction === "right"
      ? { x: 80, y: 0 }
      : { x: 0, y };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}