import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CLINIC, FEES_HEAD, FEES_ROWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fees – The Southern Clinic",
};

export default function FeesPage() {
  return (
    <>
      <PageHero title="Fees & Charges" subtitle="Cancellation Policy included" />

      {/* ---------------- Intro copy ---------------- */}
      <section>
        <div className="container-1280">
          <div className="space-y-6 py-[50px] font-inter text-[16px] leading-[1.4] text-muted">
            <p>
              Please note: We are NOT a Bulk Billing clinic unless you have one of the following
              cards.
              <br />
              <b className="font-bold">
                Health Care Card, Concession Card, Commonwealth Seniors Card.
              </b>
            </p>
            <p>
              At Southern Clinic we bulk bill all children 15 years and Under.&nbsp;
              <span>(* Gap: Out of Pocket)</span>
            </p>
            <p>
              Below is a list of our current consultation fees as of <strong>1st&nbsp;</strong>
              <strong>July&nbsp;</strong>
              <strong>2025</strong>.&nbsp;
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Fees table ---------------- */}
      <section>
        <div className="container-1280">
          <div className="overflow-x-auto">
            <table className="fees-table">
              <thead>
                <tr>
                  {FEES_HEAD.map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEES_ROWS.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- Cancellation policy ---------------- */}
      <section>
        <div className="container-1280">
          <div className="flex flex-col py-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/cancellation-policy.jpg"
                alt=""
                width={1280}
                height={853}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="w-full px-4 py-12 lg:w-1/2 lg:pl-8 lg:pr-4">
              <h2 className="font-manrope text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-heading lg:text-[39px]">
                Cancellation Policy
              </h2>
              <div className="mt-6 space-y-4 font-inter text-[16px] leading-[1.4] text-muted">
                <p>
                  Our cancellation policy mandates a minimum of two hours’ notice for appointment
                  cancellations.
                </p>
                <p>Failure to adhere to this requirement may result in a charge.</p>
                <p>
                  Additionally, if you miss your appointment without prior notification, a
                  non-refundable fee may be applied, not covered by Medicare.
                </p>
                <p>
                  Your cooperation is vital; kindly inform us if you cannot attend your appointment.
                </p>
                <p>
                  Providing at least two hours’ notice allows us to accommodate other patients. As
                  part of our practice policy, we will notify you in the event of a missed
                  appointment. We appreciate your understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="bg-cta">
        <div className="container-1280">
          <div className="mx-auto max-w-[700px] py-16 text-center">
            <p className="font-inter text-[22px] leading-[1.4] text-muted">
              Please feel free to contact our friendly reception staff with any medical enquiry or
              call{" "}
              <a href={CLINIC.phoneHref} className="hover:text-sky">
                {CLINIC.phone}
              </a>
            </p>
            <Link
              href="/contact"
              className="btn btn-primary mt-8 text-[14px] font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
