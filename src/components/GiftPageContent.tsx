"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";
import FloatingParticles from "./FloatingParticles";
import MusicToggle from "./MusicToggle";
import QuoteSlider from "./QuoteSlider";
import PhotoPlaceholder from "./PhotoPlaceholder";
import ScrollSection from "./ScrollSection";
import { dreams, places } from "@/lib/quotes";

const agingDreams = [
  "Saçlarımız ağarırken bile birbirimize gülümseyelim.",
  "Elli yıl sonra da ilk günkü gibi el ele tutuşalım.",
  "Çocuklarımız büyürken biz de birbirimize daha çok bağlanalım.",
  "Her sabah uyandığımda yanımda seni bulayım.",
  "Son nefesime kadar seni sevmeye devam edeyim.",
];

export default function GiftPageContent() {
  return (
    <motion.main
      className="relative min-h-[100dvh]"
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <AnimatedBackground showHearts starCount={50} />
      <FloatingParticles count={30} />
      <MusicToggle />

      {/* Hero */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-3xl"
        >
          <motion.span
            className="mb-6 inline-block text-4xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            👶❤️
          </motion.span>

          <motion.h1
            className="glow-text font-[family-name:var(--font-playfair)] text-3xl font-light leading-tight text-pink-50 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Geleceğin Annesine ❤️
          </motion.h1>

          <motion.div
            className="mt-8 space-y-4 text-base leading-relaxed text-pink-100/80 sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>Belki bunu zamanında yapamadım…</p>
            <p>ama seni her gün daha fazla seviyorum.</p>
            <p className="text-pink-200/70">
              Hayatıma huzur olduğun için,
              <br />
              yanımda kaldığın için,
              <br />
              beni ben olduğum halimle sevdiğin için teşekkür ederim.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <p className="text-xs tracking-widest text-pink-300/40">AŞAĞI KAYDIR</p>
        </motion.div>
      </section>

      {/* Quote Slider */}
      <section className="relative z-10 px-4 py-12 sm:px-6">
        <QuoteSlider />
      </section>

      {/* Photo Gallery */}
      <section className="relative z-10 px-4 py-12 sm:px-6">
        <motion.h2
          className="glow-text mb-8 text-center font-[family-name:var(--font-playfair)] text-2xl text-pink-100 sm:text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📷 Anılarımız
        </motion.h2>
        <motion.div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {[
            { src: "/images/1.jpg", alt: "Anımız 1" },
            { src: "/images/2.jpg", alt: "Anımız 2" },
            { src: "/images/3.jpg", alt: "Anımız 3" },
            { src: "/images/4.jpg", alt: "Anımız 4" },
            { src: "/images/5.jpg", alt: "Anımız 5" },
          ].map((photo, i) => (
            <PhotoPlaceholder
              key={photo.src}
              index={i}
              src={photo.src}
              alt={photo.alt}
            />
          ))}
        </motion.div>
      </section>

      {/* Scroll Sections */}
      <ScrollSection
        title="Seninle Hayal Ettiklerim"
        emoji="🌙"
        items={dreams}
      />
      <ScrollSection
        title="Birlikte Gideceğimiz Yerler"
        emoji="✈️"
        items={places}
        delay={0.1}
      />
      <ScrollSection
        title="Birlikte Yaşlanalım ❤️"
        emoji="🌹"
        items={agingDreams}
        delay={0.2}
      />

      {/* Final message */}
      <section className="relative z-10 px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8 flex justify-center gap-2 text-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {["❤️", "💕", "❤️"].map((h, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {h}
              </motion.span>
            ))}
          </motion.div>

          <motion.h2
            className="glow-text font-[family-name:var(--font-playfair)] text-3xl font-light text-pink-50 sm:text-4xl md:text-5xl lg:text-6xl"
            animate={{
              textShadow: [
                "0 0 30px rgba(249,168,212,0.5)",
                "0 0 60px rgba(249,168,212,0.8)",
                "0 0 30px rgba(249,168,212,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Her şey seninle güzel.
          </motion.h2>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-4 py-12 text-center">
        <motion.p
          className="glow-text font-[family-name:var(--font-playfair)] text-xl text-pink-200 sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          7. Ayımız Kutlu Olsun ❤️
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/seni-dinliyorum"
            className="glow-button rounded-full border border-pink-300/30 bg-purple-500/15 px-6 py-2.5 text-sm text-pink-100 transition-all hover:bg-purple-500/25"
          >
            Seni dinlemek istiyorum 🎧
          </Link>
          <Link
            href="/beni-seviyor-musun"
            className="rounded-full border border-pink-300/20 bg-pink-500/10 px-6 py-2.5 text-sm text-pink-200/80 transition-all hover:bg-pink-500/20"
          >
            Beni seviyor musun? 💕
          </Link>
          <Link
            href="/"
            className="text-sm text-pink-300/50 transition-colors hover:text-pink-300"
          >
            ← Başa dön
          </Link>
        </motion.div>

        <motion.p
          className="mt-4 text-xs text-pink-300/30"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Sonsuza kadar seninle ♥
        </motion.p>
      </footer>
    </motion.main>
  );
}
