"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { romanticQuotes } from "@/lib/quotes";

export default function QuoteSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % romanticQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="glass-card glow-pink relative mx-auto max-w-2xl overflow-hidden rounded-2xl px-6 py-10 sm:px-10 sm:py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="absolute left-4 top-4 text-4xl text-pink-300/30">&ldquo;</motion.div>

      <div className="relative min-h-[80px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.6 }}
            className="glow-text text-center font-[family-name:var(--font-playfair)] text-lg italic leading-relaxed text-pink-100 sm:text-xl md:text-2xl"
          >
            {romanticQuotes[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute right-4 bottom-4 text-4xl text-pink-300/30"
        style={{ transform: "rotate(180deg)" }}
      >
        &rdquo;
      </motion.div>

      <motion.div className="mt-6 flex justify-center gap-2">
        {romanticQuotes.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-pink-400"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Alıntı ${i + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
