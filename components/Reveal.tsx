"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Entrance animations copied from the live site's Elementor settings
 * (data-settings: "_animation" / "_animation_delay" per widget).
 *
 * Elementor keeps a widget at `visibility: hidden` (its `.elementor-invisible`
 * class) until the element scrolls into the viewport, then runs the keyframes
 * once. This mirrors that: hidden until observed, animate on first entry, and
 * never replay — so scrolling down the page reveals sections the same way the
 * original does instead of everything having already animated at load.
 */
type Variant = "fadeIn" | "fadeInDown" | "fadeInUp" | "fadeInLeft" | "zoomIn" | "bounceIn";

const ANIMATION: Record<Variant, string> = {
  fadeIn: "sc-fadeIn 0.8s ease-out both",
  fadeInDown: "sc-fadeInDown 0.8s ease-out both",
  fadeInUp: "sc-fadeInUp 0.8s ease-out both",
  fadeInLeft: "sc-fadeInLeft 0.8s ease-out both",
  zoomIn: "sc-zoomIn 0.8s ease-out both",
  bounceIn: "sc-bounceIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both",
};

export function Reveal({
  children,
  variant = "fadeInDown",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    let done = false;

    // Same idea as Elementor's waypoint: fire once the element's top edge has
    // come a little way into the viewport. Runs immediately on mount so
    // above-the-fold widgets animate at load, exactly like the live site.
    const check = () => {
      const el = ref.current;
      if (done || !el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        done = true;
        setShown(true);
        remove();
      }
    };
    const remove = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return remove;
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        shown
          ? { animation: ANIMATION[variant], animationDelay: `${delay}ms` }
          : { visibility: "hidden" }
      }
    >
      {children}
    </div>
  );
}
