import type { Metadata } from "next";
import { FileText } from "lucide-react";
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
        <div className="container-1280">
          <div className="py-16 lg:py-24">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-heading-alt" strokeWidth={1.75} />
              <h3 className="font-manrope text-[18px] font-semibold text-heading-alt">
                Basic information for patients
              </h3>
            </div>
            <h1 className="h-display mb-10 text-[32px] leading-[1.15] lg:text-[45px] lg:leading-[50px]">
              Frequently asked questions
            </h1>
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
