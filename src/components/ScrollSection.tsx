"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface ScrollSectionProps {
  title: string;
  emoji?: string;
  items: string[];
  delay?: number;
}

export default function ScrollSection({
  title,
  emoji = "✨",
  items,
  delay = 0,
}: ScrollSectionProps) {
  return (
    <motion.section
      className="px-4 py-16 sm:px-6 sm:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.h2
        className="glow-text mb-10 text-center font-[family-name:var(--font-playfair)] text-2xl font-light tracking-wide text-pink-100 sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {emoji} {title}
      </motion.h2>

      <motion.div
        className="mx-auto grid max-w-3xl gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <GlassCard delay={i * 0.05}>
              <div className="flex items-start gap-3">
                <motion.span
                  className="text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  💕
                </motion.span>
                <p className="text-base leading-relaxed text-pink-100/90 sm:text-lg">
                  {item}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
