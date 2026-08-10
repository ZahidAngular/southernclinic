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
          <div key={item.q} className="mb-[10px] shadow-[-1px_7px_15px_0_rgba(0,0,0,0.07)]">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 bg-accordion px-[30px] py-[14px] text-left"
            >
              <span className="font-raleway text-[18px] font-semibold text-white">{item.q}</span>
              {isOpen ? (
                <Minus className="h-[18px] w-[18px] shrink-0 text-white" />
              ) : (
                <Plus className="h-[18px] w-[18px] shrink-0 text-white" />
              )}
            </button>
            {isOpen && (
              <div className="px-[15px] pb-6 pt-[35px]">
                <p className="font-opensans text-[18px] font-medium text-black">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
