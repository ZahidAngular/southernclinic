"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HOME_SERVICES } from "@/lib/content";
import { SERVICE_ICONS } from "@/components/icons";

/**
 * Home page "Patient Centered Care" slider. Matches the live site's Premium
 * Addons (Slick) carousel settings: 2 cards on desktop / 1 below 1025px,
 * infinite, autoplay every 5000ms, sliding horizontally over 300ms, no arrows
 * and no dots.
 */
const SLIDE_MS = 300;
const AUTOPLAY_MS = 5000;

export function ServicesCarousel() {
  const total = HOME_SERVICES.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  /* Two cloned slides sit past the end so the wrap slides seamlessly, then the
     track snaps back to the start with the transition switched off. */
  useEffect(() => {
    if (index !== total) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, total]);

  useEffect(() => {
    if (animate) return;
    const id = setTimeout(() => setAnimate(true), 20);
    return () => clearTimeout(id);
  }, [animate]);

  const slides = [...HOME_SERVICES, HOME_SERVICES[0], HOME_SERVICES[1]];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-full"
        style={{
          transform: `translateX(-${index * 50}%)`,
          transition: animate ? `transform ${SLIDE_MS}ms ease` : "none",
        }}
      >
        {slides.map((service, i) => {
          const Icon = SERVICE_ICONS[service.icon];
          return (
            /* Each slide is half the 920px viewport (460px), leaving a 440px card. */
            <div
              key={`${service.title}-${i}`}
              className="shrink-0 grow-0 basis-full p-[10px] md:basis-1/2"
            >
              <article className="group rounded-[10px] bg-white px-[45px] py-[40px] shadow-[0_0_10px_0_rgba(0,0,0,0.11)] transition-colors duration-300 hover:bg-slate">
                <div className="mb-[5px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-pale p-[25px]">
                  <Icon className="h-[50px] w-[50px] text-[#25c4cf]" />
                </div>
                <h3
                  className="mb-[9px] text-[31px] font-semibold leading-[1.3] text-heading transition-colors group-hover:text-white"
                  style={{ fontFamily: "Helvetica, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[16px] leading-[22.4px] text-muted transition-colors group-hover:text-white/80"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {service.description}
                  <br />
                  <Link
                    href="/services"
                    className="relative top-[11px] text-[12px] font-semibold text-black transition-colors group-hover:text-white"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Read More
                  </Link>
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
