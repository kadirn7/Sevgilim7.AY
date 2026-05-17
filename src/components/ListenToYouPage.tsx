"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackground from "./AnimatedBackground";
import FloatingParticles from "./FloatingParticles";

const paragraphs = [
  {
    emoji: "🎧",
    text: "Biliyorum… Anlatmayı çok seviyorsun. Ve ben de dinlemeyi — özellikle seni dinlemeyi.",
  },
  {
    emoji: "☕",
    text: "Bazen komşunun kızı başka bir tanıdığın erkeğiyle nişanlanacaktır ama erkek razı değildir ve başka bir kızla sevgilidir ama ailesi ayrılırlar diye kızı yedekte tutuyordur bunu siz bilirsiniz bu durum sana garip gelir ve bana anlatmak istersin :)) çok seviyorumm seni bir tanemmm anlattttt sabaha kadar dinlerim ben seni :))) Bana bunları anlatmayı sevdiğini biliyorum paylaşmayı seviyorsun bende dinlemeyi seviyorummm tabiki senin gibi anlatacak daha çok şeyim olsa ve anlatabilsem fırsat buldukça anlatmaya çalışıyorummmm",
  },
  {
    emoji: "💻",
    text: "Bazen de tam o sırada ben bilgisayarın başındayım. Elimde iş, kafamda başka bir şey. Sen konuşuyorsun, ben “hı hı” diyorum ama yarım kalmış oluyor. Sonra sessizlik… Çalıştığım işten dolayı anlattığın şeylere ben o yoğunluktan sana “kaldığın yerden devam et” demeyi unutuyorum. bende sıkıldım her an müsait olamıyorum çoğu zaman bu işten çok sıkıldım zaten aşkımm en kısa sürede istifa edeceğim derslere de çalışmam lazımmm seninle aynı şehirde olmam lazım aynı evde hatta :))))",
  },
  {
    emoji: "💔",
    text: "Aşkımmm senden özür diliyorum çoğu verdiğim sözleri tutamadım aşkımm çok üzgünümmmm verdiğim en basit şınav sayısını bile günlerde tuturamadım zayıflama kısmını tutturamadım birtanemmm elimden geldiğince kendimi düzelteceğimmm seni çokkk seviyorumm",
  },
];

export default function ListenToYouPage() {
  return (
    <motion.main
      className="relative min-h-[100dvh]"
      initial={{ opacity: 0, filter: "blur(16px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
    >
      <AnimatedBackground showHearts starCount={45} />
      <FloatingParticles count={20} />

      {/* Hero */}
      <section className="relative flex min-h-[70dvh] flex-col items-center justify-center px-5 py-20 text-center">
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.span
            className="mb-6 inline-block text-4xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎙️
          </motion.span>

          <p className="mb-4 text-sm tracking-[0.3em] text-pink-300/50 uppercase">
            Sana bir şey söylemek istedim
          </p>

          <h1 className="glow-text font-[family-name:var(--font-playfair)] text-3xl font-light leading-tight text-pink-50 sm:text-4xl md:text-5xl">
            Seni Dinlemek İstiyorum
          </h1>

          <motion.p
            className="mt-6 text-base italic leading-relaxed text-pink-100/70 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Bu sayfa sadece senin için yazıldı.
            <br />
            Kaldığın yerden devam et demek için.
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs tracking-widest text-pink-300/40">OKUMAK İÇİN KAYDIR</p>
        </motion.div>
      </section>

      {/* Letter body */}
      <section className="relative z-10 mx-auto max-w-2xl px-5 pb-16 sm:px-6">
        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {paragraphs.map((block, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              className="glass-card glow-pink rounded-2xl p-6 sm:p-8"
            >
              <span className="mb-3 block text-2xl">{block.emoji}</span>
              <p className="text-base leading-relaxed text-pink-100/90 sm:text-lg sm:leading-loose">
                {block.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="glow-text font-[family-name:var(--font-playfair)] text-2xl text-pink-50 sm:text-3xl"
            animate={{
              textShadow: [
                "0 0 20px rgba(249,168,212,0.4)",
                "0 0 40px rgba(249,168,212,0.7)",
                "0 0 20px rgba(249,168,212,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Seni çok seviyorum.
          </motion.p>
          <p className="mt-4 text-lg text-pink-200/70">
            Sesine hastayım. Hikâyelerine hastayım. Sana hastayım.
          </p>
          <p className="mt-6 text-sm italic text-purple-200/50">
            — Kaldığın yerden devam et, dinliyorum. ♥
          </p>
        </motion.div>
      </section>

      {/* Footer nav */}
      <footer className="relative z-10 border-t border-white/5 px-4 py-10 text-center">
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/senin-icin"
            className="glow-button rounded-full border border-pink-300/30 bg-pink-500/15 px-6 py-2.5 text-sm text-pink-100 transition-all hover:bg-pink-500/25"
          >
            Sürprize dön 💕
          </Link>
          <Link
            href="/"
            className="text-sm text-pink-300/50 transition-colors hover:text-pink-300"
          >
            ← Ana sayfa
          </Link>
        </motion.div>
      </footer>
    </motion.main>
  );
}
