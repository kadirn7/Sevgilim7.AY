"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoPlaceholderProps {
  index: number;
  src?: string;
  alt?: string;
}

export default function PhotoPlaceholder({
  index,
  src,
  alt = "Anı fotoğrafı",
}: PhotoPlaceholderProps) {
  return (
    <motion.div
      className="glass-card glow-pink group relative aspect-[3/4] overflow-hidden rounded-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      ) : (
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-pink-900/30 via-purple-900/20 to-rose-900/30 p-4"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(131,24,67,0.3), rgba(88,28,135,0.2))",
              "linear-gradient(135deg, rgba(88,28,135,0.3), rgba(131,24,67,0.2))",
              "linear-gradient(135deg, rgba(131,24,67,0.3), rgba(88,28,135,0.2))",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <motion.span
            className="text-4xl sm:text-5xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📸
          </motion.span>
          <p className="mt-3 text-center text-sm text-pink-200/60">
            Fotoğraf {index + 1}
          </p>
        </motion.div>
      )}

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.div>
  );
}
