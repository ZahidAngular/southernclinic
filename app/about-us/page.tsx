import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FileText, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ABOUT_SERVICES, GALLERY } from "@/lib/content";

export const metadata: Metadata = {
  title: "About – The Southern Clinic",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Clinic" subtitle="Fully Accredited Practice" />

      {/* ---------------- About us ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:pb-36 lg:pt-28">
            <div className="w-full px-4 py-12 lg:w-1/2 lg:pr-20">
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-heading-alt" strokeWidth={1.75} />
                <span className="font-manrope text-[18px] font-semibold text-heading-alt">About Us</span>
              </div>
              <div className="space-y-6">
                <p className="copy text-body-dark">
                  Southern Clinic has been a trusted pillar of family-oriented healthcare, serving
                  patients in Clovelly Park and the surrounding areas since 1950.
                </p>
                <p className="copy text-body-dark">
                  As a fully accredited practice, we uphold the rigorous standards set forth by the
                  esteemed Royal Australian College of General Practitioners (RACGP), ensuring that
                  our patients receive top-notch care.
                </p>
                <p className="copy text-body-dark">
                  Conveniently situated on South Road, we provide a comprehensive range of services
                  designed to meet your healthcare needs. We take immense pride in the calibre of
                  service we deliver, reflecting our deep commitment to the well-being of our
                  patients and their families.
                </p>
              </div>
            </div>
            <div className="w-full bg-white/[0.17] lg:w-1/2">
              <Image
                src="/images/about-family-oriented-healthcare.jpg"
                alt=""
                width={1280}
                height={853}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Clinical Excellence ---------------- */}
      <section className="bg-pale pt-10">
        <div className="container-1280">
          <div className="p-[10px]">
            <h1 className="h-display text-center text-[32px] leading-[1.2] lg:text-[48px]">
              Clinical Excellence
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_SERVICES.map((service) => (
              <article
                key={service.title}
                className="rounded-[5px] bg-white px-10 py-[60px] text-center"
              >
                <Stethoscope className="mx-auto h-10 w-10 text-[#2575FC]" strokeWidth={1.5} />
                <h3 className="mb-5 mt-6 font-montserrat text-[18px] font-semibold text-black">
                  {service.title}
                </h3>
                <p className="font-inter text-[16px] leading-[1.4] text-card-desc">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="container-1280">
          <div className="py-[26px] text-center">
            <Link href="/fees-and-charges" className="font-inter text-[20px] text-muted hover:text-sky">
              View Fees and Charges.
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- High quality healthcare ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:pt-28">
            <div className="w-full p-[10px] lg:w-1/2">
              <Image
                src="/images/about-high-quality-healthcare.jpg"
                alt=""
                width={1280}
                height={853}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="w-full px-4 py-12 lg:w-1/2 lg:pl-20 lg:pr-4">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-heading-alt" strokeWidth={1.75} />
                <span className="font-manrope text-[18px] font-semibold text-heading-alt">
                  Relationship building
                </span>
              </div>
              <h1 className="h-display text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                We provide high quality healthcare.
              </h1>
              <p className="copy mt-6 text-body-dark">
                At Clovelly Park Medical, we prioritise building enduring relationships based on
                trust, empathy, and understanding. Your health and comfort are our foremost concerns,
                and we are honoured to accompany you on your journey to optimal wellness.
              </p>
              <p className="copy mt-6 text-body-dark">
                Thank you for placing your trust in us. We eagerly anticipate the opportunity to
                continue serving our community with the same dedication and compassion that has
                characterised Clovelly Park Medical since its establishment in 1950.
              </p>
              <Link href="/doctors" className="btn btn-primary mt-8">
                <ArrowRight className="h-4 w-4" />
                View our doctors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Gallery ---------------- */}
      <section className="pb-[50px]">
        <div className="container-1280">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {GALLERY.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={410}
                height={307}
                className="h-auto w-full rounded-[10px] object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
