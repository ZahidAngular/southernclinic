"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type Item = { q: string; a: string };

/** ElementsKit accordion look: dark grey header bars with plus/minus toggles. */
export function Accordion({ items, defaultOpen = 0 }: { items: Item[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={i === items.length - 1 ? undefined : "mb-[10px]"}>
            {/* Open bar is dark grey on the live site, closed bars are sky blue */}
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`flex w-full items-center justify-between gap-4 px-[30px] py-[15px] text-left ${
                isOpen ? "bg-accordion" : "bg-sky"
              }`}
            >
              <span className="font-raleway text-[18px] font-semibold leading-[24px] text-white">
                {item.q}
              </span>
              {isOpen ? (
                <Minus className="h-[18px] w-[18px] shrink-0 text-white" />
              ) : (
                <Plus className="h-[18px] w-[18px] shrink-0 text-white" />
              )}
            </button>
            {/* Live site is a Bootstrap-style collapse animating height over 0.35s
                ease. Reproduced with the grid-rows trick so it animates without
                measuring pixel heights in JS. */}
            <div
              className="grid transition-[grid-template-rows] duration-[350ms] ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-[15px] pt-[35px]">
                  <p className="font-opensans text-[18px] font-medium leading-[31px] text-black">
                    {item.a}
                  </p>
                  {/* The live answers carry one empty trailing line */}
                  <div className="h-[31px]" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
