"use client";

import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainRef = useRef<GainNode | null>(null);

  const stopMusic = useCallback(() => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
    });
    oscillatorsRef.current = [];
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    gainRef.current = null;
    setPlaying(false);
  }, []);

  const startMusic = useCallback(() => {
    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.08;
    masterGain.connect(ctx.destination);
    gainRef.current = masterGain;

    const frequencies = [261.63, 329.63, 392.0, 493.88];
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.value = 0.15 / frequencies.length;
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();
      oscillatorsRef.current.push(osc);

      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.1 + i * 0.05;
      lfoGain.gain.value = 2;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();
    });

    setPlaying(true);
  }, []);

  const toggle = () => {
    if (playing) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="glass-card glow-pink fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-lg transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={playing ? "Müziği kapat" : "Müziği aç"}
      title={playing ? "Müziği kapat" : "Hafif müzik aç"}
    >
      <motion.span
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={playing ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
      >
        {playing ? "🎵" : "🎶"}
      </motion.span>
    </motion.button>
  );
}
