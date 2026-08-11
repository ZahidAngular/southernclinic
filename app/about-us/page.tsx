import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DoctorIcon, DocumentAltIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ABOUT_SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About – The Southern Clinic",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About The Southern Clinic" subtitle="Fully APGAL Accredited Practice" />

      {/* ---------------- About us ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:items-center lg:gap-5 lg:pb-36 lg:pt-28">
            <Reveal variant="fadeInDown" className="w-full px-4 py-12 lg:w-[631px] lg:pr-20">
              <div className="flex items-end">
                <span className="mr-[17px] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcf6f7]">
                  <DocumentAltIcon className="h-7 w-[24.6px] text-sky" />
                </span>
                <span className="mb-[17px] font-manrope text-[18px] font-semibold leading-[1.3] text-heading-alt">
                  About Us
                </span>
              </div>
              <div className="mt-5">
                <p className="copy copy-dark mb-[27.2px]">
                  The Southern Clinic has been a trusted pillar of family-oriented healthcare,
                  serving patients in Clovelly Park and the surrounding areas since 1950.
                </p>
                <p className="copy copy-dark mb-[27.2px]">
                  As a fully accredited practice, we uphold the rigorous standards set forth by the
                  esteemed Royal Australian College of General Practitioners (RACGP), ensuring that
                  our patients receive top-notch care.
                </p>
                <p className="copy copy-dark mb-[27.2px]">
                  Conveniently situated on South Road, we provide a comprehensive range of services
                  designed to meet your healthcare needs. We take immense pride in the calibre of
                  service we deliver, reflecting our deep commitment to the well-being of our
                  patients and their families.
                </p>
              </div>
            </Reveal>
            <div className="w-full lg:w-[629px]">
              <div className="rounded-[14px] border border-[#b2f6f8] bg-white/[0.17]">
                <Reveal variant="zoomIn">
                  <Image
                    src="/images/about-family-oriented-healthcare.jpg"
                    alt=""
                    width={1280}
                    height={853}
                    className="h-auto w-full rounded-[14px] object-cover lg:h-[560px] lg:w-[627px] lg:translate-x-8 lg:translate-y-8"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Clinical Excellence ---------------- */}
      <section className="bg-pale pt-10">
        <div className="container-1280">
          <div className="p-[10px]">
            <Reveal variant="fadeInDown" delay={100}>
              <h1 className="h-display text-center text-[32px] leading-[50px] lg:text-[45px]">
                Clinical Excellence
              </h1>
            </Reveal>
          </div>
          {/* Two rows of four transparent columns — no card background on the live site */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_SERVICES.map((service) => (
              <a key={service.title} href="#" className="flex p-[30px]">
                {/* White card; a sky-blue panel slides in from the right over 0.6s
                    on hover and everything inside turns white. */}
                <div className="group/card relative w-full overflow-hidden rounded-[5px] border border-[#f5f5f5] bg-white px-10 py-[60px] text-center">
                  <span className="pointer-events-none absolute inset-y-0 left-full w-full bg-sky transition-[left] duration-[600ms] group-hover/card:left-0" />
                  <div className="relative">
                    <DoctorIcon className="mx-auto mb-[13px] h-[41px] w-[40px] text-[#2575FC] transition-colors duration-[400ms] group-hover/card:text-white" />
                    <h3 className="mb-5 font-montserrat text-[18px] font-semibold leading-[1.3] text-black transition-colors duration-[400ms] group-hover/card:text-white">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[16px] leading-[1.4] text-card-desc transition-colors duration-[400ms] group-hover/card:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Fees CTA strip ---------------- */}
      <section className="bg-pale">
        <div className="container-1280">
          <div className="py-[26px]">
            <p className="mb-8 text-center font-manrope text-[20px] leading-[22.4px] text-black">
              You are delivering tomorrow&rsquo;s health care for your family.{" "}
              <Link href="/fees-and-charges" className="font-semibold text-muted underline">
                View Fees and Charges.
              </Link>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

