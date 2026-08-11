import type { Metadata } from "next";
import { FaqIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ – The Southern Clinic",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" subtitle="Common Questions Answered" />

      <section>
        {/* This page sits in a narrower 1000px container than the rest of the site */}
        <div className="mx-auto w-full max-w-[1000px] px-[10px] py-16 lg:px-0 lg:py-16">
          <div className="flex flex-col gap-5 p-4">
            <div className="flex items-end">
              <span className="mr-[17px] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcf6f7]">
                <FaqIcon className="h-7 w-[32.6px] text-sky" />
              </span>
              <h3 className="mb-[17px] font-manrope text-[18px] font-semibold leading-[1.3] text-heading-alt">
                Basic information for patients
              </h3>
            </div>
            <h1 className="h-display text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
              Frequently asked questions
            </h1>
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
