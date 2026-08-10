import Image from "next/image";
import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { CovidTicker } from "@/components/CovidTicker";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import {
  DocumentAltIcon,
  HeadSideMaskIcon,
  PhoneVolumeIcon,
  RightArrowIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { HighlightHeadline } from "@/components/HighlightHeadline";
import { CLINIC, HOME_DOCTORS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/home-bg.jpg)" }}
      >
        <div className="container-1280">
          <div className="flex flex-col pt-[60px] lg:flex-row lg:gap-5 lg:pt-[112px]">
            <div className="flex w-full flex-col px-4 py-8 lg:w-1/2 lg:py-12 lg:pl-4 lg:pr-12">
              <Reveal variant="fadeInDown" delay={300}>
                <h6 className="eyebrow">Tell us your problem!</h6>
              </Reveal>
              <Reveal variant="fadeInDown" delay={100}>
                <h1 className="h-display mt-[21px] text-[40px] leading-[1.1] lg:text-[70px] lg:leading-[76px]">
                  Your Wellness, Our Mission
                </h1>
              </Reveal>
              <div className="mt-[33px] flex flex-wrap items-center gap-[19px]">
                <Reveal variant="fadeInLeft" delay={300}>
                  <Link href="/doctors" className="btn btn-primary">
                    Meet our doctors
                  </Link>
                </Reveal>
                <Reveal variant="fadeInLeft" delay={200}>
                  <Link href="/contact" className="btn btn-outline btn-gap-14">
                    <span className="flex h-[19px] w-4 items-center justify-center">
                      <PhoneVolumeIcon className="h-4 w-4" />
                    </span>
                    contact us
                  </Link>
                </Reveal>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2">
              <Reveal variant="zoomIn">
                <Image
                  src="/images/demo-medical-hero-banner-01.webp"
                  alt=""
                  width={1000}
                  height={1092}
                  priority
                  className="mx-auto h-auto w-full max-w-[513px] object-contain"
                />
              </Reveal>
              <Reveal
                variant="bounceIn"
                className="mx-auto -mt-10 w-[308px] lg:absolute lg:-right-[105px] lg:-top-[28px] lg:mx-0 lg:mt-0"
              >
                <div className="rounded-[7px] bg-white p-4 shadow-[0_3px_7px_0_rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-[14px]">
                    <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[rgba(0,173,239,0.25)]">
                      <Stethoscope className="h-[35px] w-[35px] text-[#821B3B]" strokeWidth={1.75} />
                    </span>
                    <span className="font-montserrat text-[18px] font-semibold leading-[1.4] text-heading">
                      Your healthcare is our priority
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal
                variant="bounceIn"
                className="pointer-events-none absolute bottom-[70px] right-0 hidden lg:block"
              >
                <span className="flex h-[89px] w-[84px] justify-center rounded-[50px] bg-white pt-[21px] text-sky shadow-[0_3px_7px_0_rgba(0,0,0,0.1)]">
                  <HeadSideMaskIcon className="h-[42px] w-[42px]" />
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CovidTicker />

      {/* ---------------- About ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row lg:items-center lg:gap-5 lg:py-0 lg:pb-36 lg:pt-28">
            <div className="w-full px-4 py-12 lg:w-[640px] lg:pr-20">
              <Reveal variant="fadeInDown">
                <div className="flex items-end">
                  <span className="mr-[17px] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcf6f7]">
                    <DocumentAltIcon className="h-7 w-[24.6px] text-sky" />
                  </span>
                  <span className="mb-[17px] font-manrope text-[18px] font-semibold leading-[1.3] text-heading-alt">
                    About Southern Clinic
                  </span>
                </div>
                <Reveal variant="fadeInDown" delay={100}>
                  <h1 className="h-display mt-5 text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
                    Comprehensive Healthcare for All
                  </h1>
                </Reveal>
                <p className="copy mt-5">
                  Southern Clinic has been a trusted pillar of family-oriented healthcare, serving
                  patients in Clovelly Park and the surrounding areas since 1950.
                </p>
              </Reveal>
              <div className="mt-[47px] flex flex-wrap items-center gap-5 lg:grid lg:grid-cols-2 lg:items-start lg:justify-items-start">
                <Reveal variant="fadeInLeft" delay={300}>
                  <Link href="/about-us" className="btn btn-primary btn-icon-right">
                    About Clinic
                    <span className="flex h-[18px] w-[17px] items-center justify-center">
                      <RightArrowIcon className="h-[11.3px] w-4" />
                    </span>
                  </Link>
                </Reveal>
                <Link href="/fees-and-charges" className="btn btn-outline-dark">
                  Check Fees
                </Link>
              </div>
            </div>
            <Reveal variant="zoomIn" className="w-full lg:w-[620px]">
              <div className="rounded-[14px] border border-[#b2f6f8] bg-white/[0.17]">
                <Image
                  src="/images/home-comprehensive-healthcare-1.jpg.webp"
                  alt="health-care"
                  width={1280}
                  height={853}
                  className="h-auto w-full rounded-[14px] object-cover lg:h-[560px] lg:w-[618px] lg:translate-x-8 lg:translate-y-8"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Patient Centered Care ---------------- */}
      <section className="mb-[50px] mt-[5px] bg-pale p-[10px]">
        <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row lg:gap-5">
          <div className="w-full px-6 pb-12 pt-16 lg:w-[460px] lg:px-0 lg:pb-[45px] lg:pl-[50px] lg:pt-[90px]">
            <div className="flex items-center">
              <span className="mr-[14px] flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[rgba(22,193,204,0.15)]">
                <ShieldCheckIcon className="h-[33px] w-[30.3px] text-sky" />
              </span>
              <span
                className="text-[18px] font-light leading-[1.3] text-black"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Our Clinic Services
              </span>
            </div>
            <Reveal variant="fadeInDown" delay={100} className="mt-5">
              <h1 className="h-display h-alt text-[28px] leading-[1.2] lg:text-[35px] lg:leading-[45px]">
                Patient Centered Care
              </h1>
            </Reveal>
            <p className="copy mt-5">
              At Southern Clinic, we take pride in delivering compassionate, patient-centered care.
              Our modern facilities and dedicated team ensure that you receive the highest quality
              medical services in a comfortable and welcoming environment.
            </p>
            <Reveal variant="fadeInLeft" delay={300} className="mt-[47px]">
              <Link href="/services" className="btn btn-primary btn-icon-right">
                all Treatments
                <span className="flex h-[18px] w-[17px] items-center justify-center">
                  <RightArrowIcon className="h-[11.3px] w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="w-full px-6 pb-16 lg:w-[920px] lg:px-0 lg:pb-0 lg:pt-[90px]">
            <ServicesCarousel />
          </div>
        </div>
      </section>

      {/* ---------------- We help you get well sooner ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-16 lg:flex-row-reverse lg:items-center lg:gap-x-[90px] lg:py-0 lg:pb-16 lg:pt-28">
            <div className="w-full px-4 py-12 lg:w-[599px] lg:pr-20">
              <Reveal variant="fadeInDown">
                <div className="flex items-end">
                  <span className="mr-[17px] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcf6f7]">
                    <DocumentAltIcon className="h-7 w-[24.6px] text-sky" />
                  </span>
                  <span className="mb-[17px] font-manrope text-[18px] font-semibold leading-[1.3] text-heading-alt">
                    Modern technologies
                  </span>
                </div>
                <Reveal variant="fadeInDown" delay={100}>
                  <h1 className="h-display h-alt mt-5 text-[30px] leading-[1.15] lg:text-[40px] lg:leading-[45px]">
                    We help you get well sooner!
                  </h1>
                </Reveal>
                <p className="copy mt-5">
                  We value each and every human life placed in our hands and constantly work towards
                  meeting the expectations of our customers.
                </p>
              </Reveal>
              <Reveal variant="fadeInLeft" delay={300} className="mt-[47px]">
                <Link href="/contact" className="btn btn-primary btn-gap-16">
                  <span className="flex h-[19px] w-4 items-center justify-center">
                    <PhoneVolumeIcon className="h-4 w-4" />
                  </span>
                  tel: {CLINIC.phone}
                </Link>
              </Reveal>
            </div>
            <Reveal variant="zoomIn" className="w-full lg:w-[591px]">
              <div className="rounded-[14px] border border-[#b2f6f8] bg-white/[0.17]">
                <Image
                  src="/images/home-get-well-soon-1.jpg.webp"
                  alt=""
                  width={1280}
                  height={853}
                  className="h-auto w-full rounded-[14px] object-cover lg:h-[560px] lg:w-[589px] lg:translate-x-8 lg:translate-y-8"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Our Qualified Doctors ----------------
          The live site paints this band with Frame-3.png — a purely vertical
          pink-to-white wash, drawn `cover` so only its middle 30–70% shows.
          Reproduced here as the equivalent gradient. */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #fdf3f6 0%, #fdf5f8 25%, #fdf8fa 50%, #fefafb 75%, #fefcfc 100%)",
        }}
      >
        <div className="container-1280">
          <div className="px-8 pt-8">
            <div className="mx-auto max-w-[600px] py-8">
              <Reveal variant="fadeInDown" delay={100}>
                <h1 className="h-display text-center text-[30px] leading-[1.2] lg:text-[40px] lg:leading-[69px]">
                  Our Qualified Doctors
                </h1>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-1280">
          <Reveal
            variant="fadeIn"
            className="grid grid-cols-1 gap-5 pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-4 lg:pb-28"
          >
            {HOME_DOCTORS.map((doctor, i) => (
              <div
                key={doctor.name}
                className={`flex flex-col items-center rounded-[13px] px-4 py-8 shadow-[0_0_10px_0_rgba(0,0,0,0.5)] ${
                  i === 0 ? "bg-white" : ""
                }`}
              >
                <div className="group/photo relative h-[180px] w-[180px] overflow-hidden rounded-full shadow-[0_3px_7px_0_rgba(0,0,0,0.1)]">
                  <Image
                    src={doctor.thumb}
                    alt=""
                    width={180}
                    height={180}
                    className="h-[180px] w-[180px] object-cover"
                  />
                  {/* Tint slides up over the photo on hover (ElementsKit team card) */}
                  <span className="pointer-events-none absolute inset-x-0 top-full h-full bg-[rgba(30,6,14,0.3)] transition-all delay-[200ms] duration-[400ms] group-hover/photo:top-0 group-hover/photo:delay-0" />
                </div>
                <span className="mt-5 block h-8 font-montserrat text-[18px] font-semibold leading-[25.2px] text-heading">
                  {doctor.name}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- Book online ---------------- */}
      <section>
        <div className="container-1280">
          <div className="py-[10px]">
            <HighlightHeadline href={CLINIC.hotdoc} />
          </div>
        </div>
      </section>
    </>
  );
}
