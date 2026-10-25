import { motion, useScroll, useSpring } from "framer-motion";

/**
 * The sutra: an unbroken line down the page, lit by how far you
 * have read. It stands for the guru-shishya chain the Vedas
 * travelled along, so it carries meaning rather than decorating.
 */
export default function Thread() {
  const { scrollYProgress } = useScroll();
  const lit = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div className="thread" aria-hidden="true">
      <motion.div
        className="thread__lit"
        style={{ height: "100%", scaleY: lit }}
      />
    </div>
  );
}
