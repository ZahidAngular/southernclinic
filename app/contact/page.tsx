import Image from "next/image";
import type { Metadata } from "next";
import { Briefcase, Clock, FileText, Mail, MapPin, Phone, Play } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Accordion } from "@/components/Accordion";
import { AFTER_HOURS, CLINIC, CONTACT_FAQS, OPENING_HOURS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact – The Southern Clinic",
};

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Clinic location",
    lines: [CLINIC.address],
  },
  {
    icon: Mail,
    title: "Email address",
    lines: [`${CLINIC.emails[0]} ${CLINIC.emails[1]}`],
  },
  {
    icon: Phone,
    title: "Let's talk with us",
    lines: [`Phone: ${CLINIC.phone}`, `Fax: ${CLINIC.fax}`],
  },
  {
    icon: Briefcase,
    title: "Doctor consulting",
    lines: ["Please call Clinic and Check Availablity."],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" subtitle="We are here to help you" />

      {/* ---------------- Info cards ---------------- */}
      <section className="bg-soft py-16 lg:pb-[100px] lg:pt-[98px]">
        <div className="container-1280">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INFO_CARDS.map(({ icon: Icon, title, lines }) => (
              <article key={title} className="rounded-[5px] bg-white p-[15px] px-8 py-12 text-center">
                <Icon className="mx-auto h-10 w-10 text-[#2575FC]" strokeWidth={1.5} />
                <h3 className="mb-4 mt-6 font-montserrat text-[21px] font-semibold text-black">
                  {title}
                </h3>
                <p className="font-inter text-[15px] font-medium leading-[1.6] text-[#565656]">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Map ---------------- */}
      <section>
        <iframe
          title="Clinic location"
          src="https://maps.google.com/maps?q=1140%20South%20Road%20Clovelly%20Park%20SA%C2%A05042&t=m&z=14&output=embed&iwloc=near"
          className="h-[450px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ---------------- We're here to help + opening hours ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row">
            <div className="w-full px-4 py-4 lg:w-1/2 lg:pr-12">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-heading-alt" strokeWidth={1.75} />
                <span className="font-manrope text-[18px] font-semibold text-heading-alt">
                  Basic information for patients
                </span>
              </div>
              <h1 className="h-display mb-8 text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                We&apos;re here to help.
              </h1>
              <Accordion items={CONTACT_FAQS} />
            </div>

            <div className="flex w-full items-start justify-center lg:w-1/2">
              <div className="w-full max-w-[544px] bg-hours px-8 py-12">
                <div className="mb-6 flex items-center gap-3">
                  <Clock className="h-7 w-7 text-white" strokeWidth={1.75} />
                  <span className="font-montserrat text-[22px] font-semibold text-white">
                    Opening Hours
                  </span>
                </div>
                <ul>
                  {OPENING_HOURS.map((row) => (
                    <li key={row.day}>
                      <div className="flex items-center justify-between gap-4 py-3">
                        <span className="font-montserrat text-[18px] font-semibold text-white lg:text-[22px]">
                          {row.day}
                        </span>
                        <span className="font-montserrat text-[18px] font-semibold text-white lg:text-[22px]">
                          {row.time}
                        </span>
                      </div>
                      <div className="h-px w-full bg-white/40" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- After hours service ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:pb-36 lg:pt-28">
            <div className="w-full px-4 lg:w-1/2 lg:pb-12 lg:pr-20">
              <h1 className="h-display text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                After Hours Service
              </h1>
              <p className="copy mt-6 text-black">
                For after-hours medical care please check the options below.
              </p>

              <div className="mt-6">
                {AFTER_HOURS.map((item) => (
                  <div key={item.label}>
                    <p className="py-4 font-manrope text-[17px]">
                      <span className="font-bold text-black">{item.label}</span>{" "}
                      <a href={item.href} className="text-muted hover:text-sky">
                        {item.value}
                      </a>
                    </p>
                    <div className="h-px w-full bg-black/10" />
                  </div>
                ))}
                <p className="pt-6 font-manrope text-[16px]">
                  <span className="font-bold text-black">Call healthdirect:</span>{" "}
                  <a href="tel:1800022222" className="text-muted hover:text-sky">
                    1800 022 222
                  </a>
                </p>
                <p className="pt-4 font-manrope text-[16px] font-bold text-black">
                  If an emergency call 000 or go to your nearest Public Hospital.
                </p>
              </div>
            </div>

            <div className="relative w-full bg-white/[0.17] lg:w-1/2">
              <Image
                src="/images/fees-afterhour-service-1.jpg"
                alt=""
                width={1280}
                height={853}
                className="h-auto w-full object-cover"
              />
              <span className="absolute left-1/2 top-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-heading-alt shadow-lg">
                <Play className="h-6 w-6" fill="currentColor" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
