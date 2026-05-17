"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function HeroLanding() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/senin-icin");
    }, 1200);
  };

  return (
    <motion.main
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 py-12"
      animate={
        isTransitioning
          ? { opacity: 0, filter: "blur(20px)", scale: 0.95 }
          : { opacity: 1, filter: "blur(0px)", scale: 1 }
      }
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <AnimatedBackground showHearts starCount={80} />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            className="glow-text font-[family-name:var(--font-playfair)] text-3xl font-light leading-tight tracking-wide text-pink-50 sm:text-5xl md:text-6xl lg:text-7xl"
            animate={{
              textShadow: [
                "0 0 20px rgba(249,168,212,0.5), 0 0 40px rgba(196,181,253,0.3)",
                "0 0 30px rgba(249,168,212,0.8), 0 0 60px rgba(196,181,253,0.5)",
                "0 0 20px rgba(249,168,212,0.5), 0 0 40px rgba(196,181,253,0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            İyi ki Varsın Aşkım ❤️
          </motion.h1>
        </motion.div>

        <motion.div
          className="mt-8 max-w-lg space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.p
            className="text-base leading-relaxed text-pink-100/80 sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Bugün bizim <span className="font-semibold text-pink-300">7. ayımız</span>…
          </motion.p>
          <motion.p
            className="text-sm leading-relaxed text-pink-200/70 sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Belki bazı şeyler için geç kaldım,
            <br />
            ama seni sevmek için hiçbir zaman geç kalmadım.
          </motion.p>
          <motion.p
            className="text-sm italic leading-relaxed text-purple-200/70 sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Sen hayatımın en güzel detayı oldun.
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleNavigate}
          disabled={isTransitioning}
          className="glow-button group relative mt-12 overflow-hidden rounded-full border border-pink-300/30 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 px-8 py-4 text-sm font-medium tracking-wide text-pink-50 backdrop-blur-sm transition-all hover:border-pink-300/50 disabled:opacity-50 sm:mt-14 sm:px-10 sm:py-5 sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/20 to-pink-400/0"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative z-10 flex items-center gap-2">
            Senin İçin Bir Şey Hazırladım
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        <motion.p
          className="mt-8 text-xs text-pink-300/40"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ♥ 7. ayımız ♥
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-8 w-5 rounded-full border border-pink-300/30 p-1">
          <motion.div
            className="mx-auto h-1.5 w-1 rounded-full bg-pink-300/60"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.main>
  );
}
