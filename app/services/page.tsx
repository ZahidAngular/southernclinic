import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services – The Southern Clinic",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" subtitle="Comprehensive Healthcare Solutions" />

      {/* ---------------- Intro ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:pb-36 lg:pt-28">
            <div className="w-full px-4 py-12 lg:w-1/2 lg:pr-20">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-heading-alt" strokeWidth={1.75} />
                <span className="font-manrope text-[18px] font-semibold text-heading-alt">
                  Trusted, patient-centered care.
                </span>
              </div>
              <h1 className="h-display text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                Patient well-being is at the heart of everything we do.
              </h1>
              <p className="copy mt-6 text-black">
                Our clinic offers a wide range of services through our Comprehensive Healthcare
                Solutions, designed to meet all your healthcare needs.
              </p>
              <Link href="/contact" className="btn btn-primary mt-8">
                <ArrowRight className="h-4 w-4" />
                Contact us
              </Link>
            </div>
            <div className="w-full bg-white/[0.17] lg:w-1/2">
              <Image
                src="/images/services-build-relationship.jpg"
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
      <section className="bg-pale pb-8 pt-10">
        <div className="container-1280">
          <div className="p-[10px] pb-7">
            <h1 className="h-display text-center text-[32px] leading-[1.2] lg:text-[48px]">
              Clinical Excellence
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="rounded-[5px] bg-white px-10 py-[60px] text-center"
              >
                <h3 className="mb-5 font-montserrat text-[18px] font-semibold text-black">
                  {service.title}
                </h3>
                <p className="font-inter text-[16px] leading-[1.4] text-card-desc">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
