"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scroll reveal, ported from the original design's
 * IntersectionObserver script. Adds `.reveal-ready` (so [data-reveal] elements
 * start hidden only when JS runs), reveals sections as they enter the viewport
 * with a per-card stagger, and re-fires the `titleReg` comic-registration
 * animation on [data-snap] headings. Fully bypassed under reduced-motion.
 */
export default function RevealController() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    let cardIndex = 0;
    reveals.forEach((el) => {
      if (el.hasAttribute("data-card")) {
        el.style.transitionDelay = `${cardIndex * 0.09}s`;
        cardIndex++;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          const snap = el.matches("[data-snap]")
            ? el
            : el.querySelector<HTMLElement>("[data-snap]");
          if (snap) {
            snap.style.animation = "none";
            // force reflow so the animation restarts
            void snap.offsetWidth;
            snap.style.animation = "titleReg .8s both";
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    reveals.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
