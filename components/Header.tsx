"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CLINIC, NAV } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="container-1280">
        <div className="flex items-center justify-between gap-4 lg:h-[100px]">
          <Link href="/" className="block py-3 lg:py-0">
            <Image
              src="/images/logonew.png"
              alt="logonew"
              width={233}
              height={56}
              priority
              className="h-auto w-[180px] lg:w-[233px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-montserrat text-[13px] font-semibold uppercase text-nav transition-colors hover:text-sky"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={CLINIC.phoneHref}
              className="inline-block rounded-full bg-phone px-[27px] py-[13px] font-inter text-[17px] text-white transition-opacity hover:opacity-90"
            >
              Tel: {CLINIC.phone}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-sky lg:hidden"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <div className="container-1280 py-4">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/5 py-3 font-montserrat text-[13px] font-semibold uppercase text-nav"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={CLINIC.phoneHref}
              className="mt-4 inline-block rounded-full bg-phone px-[27px] py-[13px] font-inter text-[17px] text-white"
            >
              Tel: {CLINIC.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
