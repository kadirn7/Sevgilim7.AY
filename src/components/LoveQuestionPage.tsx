"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import FloatingParticles from "./FloatingParticles";

const funnyNoTexts = [
  "Olmaz öyle şey! 😤",
  "Yanlış buton bu!",
  "Hayır yok burada 💕",
  "Deneme boşa~",
  "Kalbim sadece evet biliyor",
];

export default function LoveQuestionPage() {
  const [celebrating, setCelebrating] = useState(false);
  const [noPos, setNoPos] = useState({ x: 55, y: 58 });
  const [noText, setNoText] = useState(funnyNoTexts[0]);
  const [attempts, setAttempts] = useState(0);
  const areaRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = useCallback(() => {
    setNoPos({
      x: 8 + Math.random() * 72,
      y: 18 + Math.random() * 58,
    });
    setNoText(funnyNoTexts[Math.floor(Math.random() * funnyNoTexts.length)]);
    setAttempts((a) => a + 1);
  }, []);

  const handlePointerNearNo = useCallback(
    (clientX: number, clientY: number) => {
      const btn = noBtnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - cx, clientY - cy);
      if (dist < 120) moveNoButton();
    },
    [moveNoButton]
  );

  if (celebrating) {
    return (
      <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 py-12 text-center">
        <AnimatedBackground showHearts starCount={70} />
        <FloatingParticles count={40} />

        <AnimatePresence>
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute text-2xl select-none"
              initial={{
                x: "50vw",
                y: "50vh",
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: [1, 1, 0],
                scale: [0, 1.5, 0.5],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: i * 0.05,
                ease: "easeOut",
              }}
            >
              {["❤️", "💕", "✨", "💖", "🎉"][i % 5]}
            </motion.span>
          ))}
        </AnimatePresence>

        <motion.div
          className="relative z-10 max-w-xl"
          initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.p
            className="mb-4 text-5xl sm:text-6xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🎉💕🎉
          </motion.p>

          <h1 className="glow-text font-[family-name:var(--font-playfair)] text-4xl font-light text-pink-50 sm:text-5xl md:text-6xl">
            Biliyordum :))
          </h1>

          <motion.p
            className="mt-6 text-lg text-pink-100/80 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            İşte bu yüzden seni çok seviyorum aşkım ❤️
          </motion.p>

          <motion.p
            className="mt-3 text-sm italic text-purple-200/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            (Hayır butonunu {attempts} kez kovaladın 😄)
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/senin-icin"
              className="glow-button rounded-full border border-pink-300/30 bg-pink-500/20 px-8 py-3 text-sm text-pink-50 transition-all hover:bg-pink-500/30 sm:text-base"
            >
              Sürprize dön 💕
            </Link>
            <Link
              href="/"
              className="text-sm text-pink-300/50 transition-colors hover:text-pink-300"
            >
              Ana sayfa
            </Link>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main
      ref={areaRef}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 py-12"
      onMouseMove={(e) => handlePointerNearNo(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        const t = e.touches[0];
        if (t) handlePointerNearNo(t.clientX, t.clientY);
      }}
    >
      <AnimatedBackground showHearts starCount={50} />
      <FloatingParticles count={25} />

      <motion.div
        className="relative z-10 flex w-full max-w-lg flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="mb-6 text-5xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💗
        </motion.span>

        <h1 className="glow-text font-[family-name:var(--font-playfair)] text-3xl font-light text-pink-50 sm:text-4xl md:text-5xl">
          Beni seviyor musun?
        </h1>

        <motion.p
          className="mt-4 text-sm text-pink-200/60 sm:text-base"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Dürüst ol… ama doğru cevap belli 😏
        </motion.p>

        {/* Yes button — sabit ve kolay */}
        <motion.button
          onClick={() => setCelebrating(true)}
          className="glow-button relative z-20 mt-12 rounded-full border border-pink-300/40 bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-purple-500/30 px-14 py-4 text-lg font-medium text-pink-50 backdrop-blur-sm transition-all hover:from-pink-500/50"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          Evet ❤️
        </motion.button>

        {attempts > 0 && (
          <motion.p
            key={noText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-sm text-rose-300/80"
          >
            {noText}
          </motion.p>
        )}
      </motion.div>

      {/* Kaçan Hayır butonu */}
      <motion.button
        ref={noBtnRef}
        type="button"
        className="absolute z-30 cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-pink-200/50 backdrop-blur-sm select-none sm:px-6 sm:py-3 sm:text-base"
        style={{
          left: `${noPos.x}%`,
          top: `${noPos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseEnter={moveNoButton}
        onTouchStart={(e) => {
          e.preventDefault();
          moveNoButton();
        }}
        onClick={(e) => {
          e.preventDefault();
          moveNoButton();
        }}
        onPointerDown={(e) => {
          e.preventDefault();
          moveNoButton();
        }}
        animate={{
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 0.15 }}
        aria-label="Hayır (yakalanamaz)"
      >
        Hayır
      </motion.button>

      <Link
        href="/senin-icin"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs text-pink-300/40 transition-colors hover:text-pink-300/70"
      >
        ← Geri dön
      </Link>
    </main>
  );
}
