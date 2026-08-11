"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Play, X } from "lucide-react";

/**
 * Live site's "play button" isn't a video — it's an ElementsKit popup whose
 * iframe src is just the current page URL. Clicking it opens a small modal
 * that loads the site itself, defaulting to whatever page the button sits
 * on; the visitor can then click around inside it to reach any other page.
 */
export function SitePopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open site preview"
        onClick={() => setOpen(true)}
        className="glow-btn absolute left-0 top-1/2 z-[6] flex h-[100px] w-[100px] -translate-y-1/2 items-center justify-center rounded-full bg-sky text-[#62999b] outline-none focus:outline-none focus-visible:outline-none"
      >
        <Play className="h-[35px] w-[35px] text-white" fill="currentColor" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[1042] flex items-center justify-center bg-black/80 p-2"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="fixed right-5 top-5 z-[1046] flex h-11 w-11 items-center justify-center rounded-full text-white hover:opacity-80"
          >
            <X className="h-7 w-7" strokeWidth={1.75} />
          </button>
          <div
            className="relative z-[1045] aspect-video w-full max-w-[900px] overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe src={pathname} title="Site preview" className="h-full w-full border-0" />
          </div>
        </div>
      )}
    </>
  );
}
