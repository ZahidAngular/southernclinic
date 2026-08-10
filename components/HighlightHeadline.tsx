"use client";

import { useEffect, useState } from "react";

/**
 * "Book online using Hotdoc website" — the live site draws a hand-drawn
 * circle around "Hotdoc website" (Elementor Pro animated-headline, highlight
 * style) and redraws it every 8s. SVG path and stroke copied from the source.
 */
export function HighlightHeadline({ href }: { href: string }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setKey((k) => k + 1), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
      <h2 className="mb-5 text-center font-montserrat text-[26px] font-semibold leading-[1.2] tracking-[-0.5px] text-heading lg:text-[39px] lg:leading-[46.8px]">
        <span>Book online using </span>
        <span className="relative inline-block">
          <span className="relative text-[#AEBCB9]">Hotdoc website</span>
          <svg
            key={key}
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(100%+20px)] w-[calc(100%+20px)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
          >
            <path
              d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
              fill="none"
              stroke="#3d3d3d"
              strokeWidth={9}
              style={{
                strokeDasharray: "0 1500",
                animation: "sc-headline-dash 1.2s forwards",
              }}
            />
          </svg>
        </span>
      </h2>
    </a>
  );
}
