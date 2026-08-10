"use client";

import { useEffect, useState } from "react";
import { InformationIcon } from "@/components/icons";
import { COVID_MESSAGES } from "@/lib/content";

/**
 * Dark strip under the hero: static label + rotating Covid-19 messages.
 * The live site runs this as a Slick carousel — one slide at a time, sliding
 * horizontally over 300ms, autoplaying every 5s, looping forever.
 */
const SLIDE_MS = 300;
const AUTOPLAY_MS = 5000;

export function CovidTicker() {
  const total = COVID_MESSAGES.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  /* The track carries a clone of the first slide, so the loop slides onto the
     clone and then jumps back to slide 0 with the transition switched off. */
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

  const slides = [...COVID_MESSAGES, COVID_MESSAGES[0]];

  return (
    <section className="bg-slate">
      <div className="container-1280">
        <div className="flex flex-col items-center justify-center py-[10px] lg:min-h-[73px] lg:flex-row">
          <div className="flex shrink-0 flex-col items-start justify-center p-[10px] lg:w-[321px]">
            <div className="flex items-end">
              <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center">
                <InformationIcon className="h-[31px] w-[33px] text-white" />
              </span>
              <span className="ml-[14px] font-montserrat text-[18px] font-semibold leading-[1.3] text-white">
                Covid-19 information
              </span>
            </div>
          </div>

          <div className="w-full overflow-hidden py-[10px] lg:w-[959px]">
            <div
              className="flex w-full"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: animate ? `transform ${SLIDE_MS}ms ease` : "none",
              }}
            >
              {slides.map((message, i) => (
                <div key={i} className="shrink-0 grow-0 basis-full px-[10px]">
                  <h2
                    className="text-center text-[20px] font-normal leading-[26px] tracking-[-0.5px] text-white lg:text-left"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {message}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
