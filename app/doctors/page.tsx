import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DOCTORS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Doctors – The Southern Clinic",
};

const TRAILING_SPACE = ["Dr. Rubina Munir", "Dr. Tejbir Sidhu"];

export default function DoctorsPage() {
  return (
    <>
      <PageHero title="Doctors" subtitle="Trusted Doctors and Specialists" />

      {DOCTORS.map((doctor) => (
        <section key={doctor.fullName}>
          <div className="container-1280">
            <div className="flex flex-col py-12 lg:flex-row lg:gap-5 lg:pb-16 lg:pt-20">
              <div className="flex w-full flex-col items-center gap-7 lg:w-[630px]">
                <Reveal variant="bounceIn">
                  <Image
                    src={doctor.photo}
                    alt={doctor.fullName}
                    width={479}
                    height={600}
                    className="mx-auto h-auto w-full max-w-[479px] rounded-[14px] object-cover lg:h-[600px] lg:w-[479px]"
                  />
                </Reveal>
              </div>
              <div className="flex w-full flex-col gap-5 px-4 py-12 lg:w-[630px] lg:pl-0 lg:pr-4">
                <h2 className="font-montserrat text-[28px] font-semibold leading-[50.7px] text-heading lg:text-[39px]">
                  {doctor.fullName}
                </h2>
                {/* Elementor pulls the specialty line up flush under the name */}
                <p className="-mt-5 mb-[25.6px] font-inter text-[16px] leading-[1.4] text-muted">
                  {doctor.role}
                </p>
                <div>
                  {doctor.bio.map((paragraph) => (
                    <p key={paragraph} className="copy copy-dark mb-[27.2px]">
                      {paragraph}
                    </p>
                  ))}
                  {/* Dr. Munir and Dr. Tejbir carry an empty 32px block after their
                      bio on the live site — kept so the sections line up. */}
                  {TRAILING_SPACE.includes(doctor.fullName) && <div className="h-8" />}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
