import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DOCTORS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Doctors – The Southern Clinic",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero title="Doctors" subtitle="Trusted Doctors and Specialists" />

      {DOCTORS.map((doctor) => (
        <section key={doctor.fullName}>
          <div className="container-1280">
            <div className="flex flex-col py-12 lg:flex-row lg:pb-16 lg:pt-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src={doctor.photo}
                  alt={doctor.fullName}
                  width={479}
                  height={600}
                  className="mx-auto h-auto w-full max-w-[479px] object-cover"
                />
              </div>
              <div className="w-full px-4 py-12 lg:w-1/2 lg:pl-0 lg:pr-4">
                <h2 className="font-manrope text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-heading lg:text-[39px]">
                  {doctor.fullName}
                </h2>
                <p className="mt-2 font-inter text-[16px] text-muted">{doctor.role}</p>
                <div className="mt-6 space-y-6">
                  {doctor.bio.map((paragraph) => (
                    <p key={paragraph} className="copy text-body-dark">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
