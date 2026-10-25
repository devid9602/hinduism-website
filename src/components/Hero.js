import { motion, useReducedMotion } from "framer-motion";
import { channel, hero } from "../data/content";

export default function Hero() {
  const still = useReducedMotion();

  // One orchestrated entrance for the whole page, then stillness.
  const rise = (delay) =>
    still
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <header className="hero" id="top">
      <div className="hero__inner">
        <motion.p className="hero__eyebrow" {...rise(0.1)}>
          {channel.tagline}
        </motion.p>

        <motion.h1 className="hero__q" {...rise(0.25)}>
          {hero.question}
        </motion.h1>

        <motion.div
          className="hero__rule"
          initial={still ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p className="hero__stand" {...rise(0.9)}>
          {hero.standfirst}
        </motion.p>

        <motion.div className="hero__scroll" {...rise(1.25)}>
          <span />
          नीचे चलिए
        </motion.div>
      </div>
    </header>
  );
}
