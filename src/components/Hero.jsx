import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dot-grid">
      {/* soft gradient blob */}
      <div
        className="
          absolute
          w-[640px]
          h-[640px]
          rounded-full
          bg-accent/10
          blur-3xl
        "
      />

      {/* fade so the dot grid stays subtle at the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <div className="relative text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            items-center
            gap-2
            font-mono
            text-xs
            text-ink-soft
            bg-surface
            border
            border-line
            px-4
            py-2
            rounded-full
            mb-8
          "
        >
          <span className="signal-dot" />
          Available for freelance &amp; collaboration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold text-ink tracking-tight leading-[0.95]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-7 font-mono text-accent text-base sm:text-lg tracking-tight"
        >
          <span className="text-ink-faint">~/</span>
          {profile.title.toLowerCase()}
          <span className="inline-block w-[2px] h-5 bg-accent ml-1 align-middle animate-pulse" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-5 max-w-xl mx-auto text-ink-soft leading-7"
        >
          {profile.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ y: -2 }}
            href="#portofolio"
            className="
              inline-flex
              items-center
              gap-2
              bg-accent
              text-white
              px-7
              py-3.5
              rounded-xl
              font-medium
              hover:bg-accent-dark
              transition-colors
            "
          >
            Lihat Portofolio
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              text-ink-soft
              hover:text-ink
              px-7
              py-3.5
              rounded-xl
              font-mono
              text-sm
              border
              border-line
              hover:border-ink/30
              transition
            "
          >
            get_in_touch()
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px h-8 bg-ink-faint/50"
        />
      </motion.div>
    </section>
  );
}
