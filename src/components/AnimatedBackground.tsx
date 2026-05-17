"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";
import FloatingHearts from "./FloatingHearts";

export default function AnimatedBackground({
  showHearts = true,
  starCount = 60,
}: {
  showHearts?: boolean;
  starCount?: number;
}) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="gradient-romantic absolute inset-0" />

      <motion.div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/10 blur-[80px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <StarField count={starCount} />
      {showHearts && <FloatingHearts count={10} />}
    </motion.div>
  );
}
