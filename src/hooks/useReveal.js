import { useEffect, useRef } from "react";

/**
 * Reveals an element once, the first time it enters the viewport.
 * Adds `is-in`; the transition itself lives in CSS so that
 * prefers-reduced-motion can switch it off cleanly.
 */
export default function useReveal({ threshold = 0.18, delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-in");
        observer.unobserve(el);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}
