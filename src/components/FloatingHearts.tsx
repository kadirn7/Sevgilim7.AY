"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const heartEmojis = ["❤️", "💕", "💗", "🤍", "💖"];

interface Heart {
  id: number;
  x: number;
  emoji: string;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts({ count = 12 }: { count?: number }) {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      size: Math.random() * 16 + 12,
      duration: Math.random() * 15 + 12,
      delay: Math.random() * 10,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute select-none"
          style={{
            left: `${heart.x}%`,
            fontSize: heart.size,
            bottom: "-5%",
          }}
          animate={{
            y: [0, -900],
            x: [0, Math.sin(heart.id) * 40],
            opacity: [0, 0.8, 0.6, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  );
}
