import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DocumentAltIcon, RightArrowIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services – The Southern Clinic",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Clinic Services" subtitle="Comprehensive Healthcare Solutions" />

      {/* ---------------- Intro ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:items-center lg:gap-5 lg:pb-36 lg:pt-28">
            <Reveal
              variant="fadeInDown"
              className="flex w-full flex-col gap-5 px-4 py-12 lg:w-[631px] lg:pr-20"
            >
              <div className="flex items-end">
                <span className="mr-[17px] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcf6f7]">
                  <DocumentAltIcon className="h-7 w-[24.6px] text-sky" />
                </span>
                <span className="mb-[17px] font-manrope text-[18px] font-semibold leading-[1.3] text-heading-alt">
                  Trusted, patient-centered care.
                </span>
              </div>
              <Reveal variant="fadeInDown" delay={100}>
                <h1 className="h-display text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                  Delivering Patient-Centred Care
                </h1>
              </Reveal>
              <p className="copy copy-29 copy-black mb-[27.2px]">
                Our clinic has expertise in the following services. However, our comprehensive care
                is not limited to just these. Our GPs are always willing to discuss your needs and
                work with you to develop management plans and deliver appropriate care to your
                needs.
              </p>
              <Reveal variant="fadeInLeft" delay={300}>
                <Link href="/contact" className="btn btn-primary btn-gap-14">
                  Contact us
                  <span className="flex h-[18px] w-[17px] items-center justify-center">
                    <RightArrowIcon className="h-[11.3px] w-4" />
                  </span>
                </Link>
              </Reveal>
            </Reveal>
            <div className="w-full lg:w-[629px]">
              <div className="rounded-[14px] bg-white/[0.17]">
                <Reveal variant="zoomIn">
                  <Image
                    src="/images/services-build-relationship.jpg"
                    alt=""
                    width={1280}
                    height={853}
                    className="h-auto w-full rounded-[14px] object-cover lg:h-[560px] lg:w-[629px]"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Clinical Excellence ---------------- */}
      <section className="bg-pale pb-8 pt-10">
        <div className="container-1280">
          <div className="p-[10px] pb-[38px]">
            <Reveal variant="fadeInDown" delay={100}>
              <h1 className="h-display text-center text-[32px] leading-[50px] lg:text-[45px]">
                Clinical Excellence
              </h1>
            </Reveal>
          </div>
          {/* Transparent columns, four per row — no card background on the live site */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article key={service.title} className="flex p-[10px]">
                {/* Same card as the About page: sky-blue panel slides in from the right */}
                <div className="group/card relative w-full overflow-hidden rounded-[5px] border border-[#f5f5f5] bg-white px-10 py-[60px] text-center">
                  <span className="pointer-events-none absolute inset-y-0 left-full w-full bg-sky transition-[left] duration-[600ms] group-hover/card:left-0" />
                  <div className="relative">
                    {/* Empty icon slot — the live cards leave it blank on this page */}
                    <div className="h-9" />
                    <h3 className="mb-5 font-montserrat text-[18px] font-semibold leading-[1.3] text-black transition-colors duration-[400ms] group-hover/card:text-white">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[16px] leading-[1.4] text-card-desc transition-colors duration-[400ms] group-hover/card:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
