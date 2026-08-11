import Image from "next/image";
import Link from "next/link";
import { CLINIC, NAV } from "@/lib/content";
import { FacebookFIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer>
      <div className="bg-slate">
        <div className="container-1280">
          <div className="flex flex-col items-center py-8 lg:flex-row lg:items-stretch">
            {/* Not a link on the live site — plain image */}
            <div className="flex shrink-0 p-4 lg:w-64">
              <Image
                src="/images/logonew.png"
                alt=""
                width={224}
                height={46}
                className="h-[46px] w-[224px]"
              />
            </div>

            <div className="flex w-full items-center justify-center p-4 lg:w-[768px]">
              {/* 7 equal columns, each label centred in its own column */}
              <nav className="grid w-full grid-cols-2 justify-items-center gap-y-3 p-[10px] sm:grid-cols-4 lg:grid-cols-7 lg:gap-y-0">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-manrope text-[17px] font-semibold leading-[1.3] text-white transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex shrink-0 p-4 lg:w-64">
              <a
                href={CLINIC.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook-f"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-muted transition-colors hover:text-sky"
              >
                <FacebookFIcon className="h-[21px] w-[21px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container-1280">
          <div className="py-4">
            <div className="flex flex-col items-center gap-3 p-[10px] font-inter text-[13px] leading-[19.5px] lg:flex-row lg:justify-between lg:gap-5">
              <p className="text-black">
                © 2024 The Southern Clinic Powered by{" "}
                <a href="https://webappconsulting.com.au/" className="hover:text-sky">
                  Web App Consulting
                </a>
              </p>
              <ul className="flex items-center gap-5 text-muted">
                <li>
                  <a href="#" className="hover:text-sky">
                    Term of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
