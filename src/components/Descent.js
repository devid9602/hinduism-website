import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { descent } from "../data/content";
import useReveal from "../hooks/useReveal";

/**
 * The signature moment: Shakalya asks the same question seven times,
 * and the answer descends — 3306 down to one. Scroll drives it, so
 * the reader performs the descent rather than watching it.
 */
export default function Descent() {
  const trackRef = useRef(null);
  const still = useReducedMotion();
  const [step, setStep] = useState(0);
  const closeRef = useReveal();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const last = descent.steps.length - 1;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // The seven beats play out over the first 80% of the scroll; the
    // rest holds on "एक", so the answer the whole thing descends
    // towards gets room to land instead of flicking past.
    const t = Math.min(1, v / 0.8);
    const i = Math.round(t * last);
    setStep(Math.min(last, Math.max(0, i)));
  });

  return (
    <section className="descent" aria-label="याज्ञवल्क्य और शाकल्य का संवाद">
      <div className="descent__track" ref={trackRef}>
        <div className="descent__stage">
          <div className="descent__inner">
            <p className="descent__ask">{descent.question}</p>

            <div className="descent__numbers" aria-live="polite">
              {descent.steps.map((s, i) => (
                <motion.span
                  key={s.count}
                  className="descent__num"
                  aria-hidden={i !== step}
                  initial={false}
                  animate={{
                    opacity: i === step ? 1 : 0,
                    y: still ? 0 : i === step ? 0 : i < step ? -22 : 22,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {s.count}
                </motion.span>
              ))}
            </div>

            <div className="descent__note">
              {descent.steps.map((s, i) => (
                <motion.p
                  key={s.count}
                  aria-hidden={i !== step}
                  initial={false}
                  animate={{ opacity: i === step ? 1 : 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {s.note}
                </motion.p>
              ))}
            </div>

            {/* Static list is what shows when motion is turned down */}
            <ul className="descent__static">
              {descent.steps.map((s) => (
                <li key={s.count}>
                  <b>{s.count}</b>
                  <span>{s.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="descent__progress" aria-hidden="true">
            {descent.steps.map((s, i) => (
              <i
                key={s.count}
                className={`descent__dot${i <= step ? " descent__dot--on" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <p className="descent__close measure reveal" ref={closeRef}>
          {descent.close}
        </p>
      </div>
    </section>
  );
}
