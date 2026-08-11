import Image from "next/image";
import type { Metadata } from "next";
import { Clock, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Accordion } from "@/components/Accordion";
import { SitePopup } from "@/components/SitePopup";
import { Reveal } from "@/components/Reveal";
import { BriefcaseIcon, EmailIcon, LocationPinIcon, PhoneIcon } from "@/components/icons";
import { AFTER_HOURS, CLINIC, CONTACT_FAQS, OPENING_HOURS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact – The Southern Clinic",
};

const INFO_CARDS = [
  {
    icon: LocationPinIcon,
    title: "Clinic location",
    lines: [CLINIC.address],
  },
  {
    icon: EmailIcon,
    title: "Email address",
    lines: [CLINIC.emails[0], CLINIC.emails[1]],
  },
  {
    icon: PhoneIcon,
    title: "Let's talk with us",
    lines: [`Phone: ${CLINIC.phone}`, `Fax: ${CLINIC.fax}`],
  },
  {
    icon: BriefcaseIcon,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Each column carries its own 15px gutter — matching the live
                site's per-column padding rather than a single grid gap. */}
            {INFO_CARDS.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="p-[15px]">
                <article className="rounded-[5px] bg-white px-10 py-12 text-center">
                  <span className="mx-auto mb-[13px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#dcf6f7]">
                    <Icon className="h-[45px] w-[45px] text-sky" />
                  </span>
                  <h3 className="mb-5 font-raleway text-[21px] font-semibold leading-[25px] text-black">
                    {title}
                  </h3>
                  <p className="font-manrope text-[15px] font-medium leading-[25px] text-[#565656]">
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </article>
              </div>
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
              <Reveal variant="fadeInDown" delay={100}>
                <h1 className="h-display mb-8 text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                  We&apos;re here to help.
                </h1>
              </Reveal>
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
          <div className="flex flex-col py-16 lg:flex-row lg:items-center lg:gap-5 lg:pb-36 lg:pt-28">
            <div className="flex w-full flex-col gap-5 px-4 lg:w-[631px] lg:pr-20">
              <Reveal variant="fadeInDown" delay={100}>
                <h1 className="h-display text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                  After Hours Service
                </h1>
              </Reveal>
              <p className="copy text-black">
                For after-hours medical care please check the options below.
              </p>

              {AFTER_HOURS.map((item) => (
                <div key={item.label} className="flex flex-col gap-5">
                  <p className="font-manrope text-[17px] leading-[32px] text-black">
                    <span className="font-bold">{item.label}</span>{" "}
                    <a href={item.href} className="text-muted underline hover:text-sky">
                      {item.value}
                    </a>
                    {item.note && (
                      <>
                        <br />
                        {item.note}
                      </>
                    )}
                  </p>
                  <div className="h-px w-full bg-black" />
                </div>
              ))}

              <p className="font-inter text-[16px] leading-[22.4px] text-black">
                <span className="font-bold">Call healthdirect:</span>{" "}
                <a href="tel:1800022222" className="text-muted underline hover:text-sky">
                  1800 022 222
                </a>
                <br />
                Where a registered nurse will talk to you about your symptoms. A callback or a
                video call from a GP who can provide advice may be offered.
              </p>
              <p className="font-inter text-[16px] font-bold text-black">
                If an emergency call 000 or go to your nearest Public Hospital.
              </p>
              {/* Invisible leftover element on the live page still occupies space */}
              <div className="h-[48px]" />
            </div>

            <div className="w-full lg:w-[629px]">
              {/* Same outlined frame as the About/Services page images: image
                  overflows the frame by 32px right/down, revealing the border
                  on the top-left. */}
              <div className="relative rounded-[14px] border border-[#b2f6f8] bg-white/[0.17]">
                <Reveal variant="zoomIn">
                  <Image
                    src="/images/fees-afterhour-service-building.jpg"
                    alt=""
                    width={1280}
                    height={853}
                    className="h-auto w-full rounded-[14px] object-cover lg:h-[560px] lg:w-[627px] lg:translate-x-8 lg:translate-y-8"
                  />
                </Reveal>
                {/* Its left edge sits flush with the frame's left edge,
                    vertically centred — matches the live button exactly.
                    Not wrapped in Reveal: SitePopup's own button is
                    `position: absolute`, so a wrapping div collapses to zero
                    size and Reveal's own visibility check never sees it
                    on-screen, leaving the button permanently hidden. */}
                <SitePopup />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
