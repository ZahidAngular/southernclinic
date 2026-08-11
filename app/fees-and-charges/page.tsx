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
          <div className="py-[50px] font-inter text-[16px] leading-[1.4] text-muted">
            <p className="mb-[25.6px]">
              Please note: We are NOT a Bulk Billing clinic unless you have one of the following
              cards.
              <br />
              <b className="font-bold">
                Health Care Card, Concession Card, Commonwealth Seniors Card.
              </b>
            </p>
            <p className="mb-[25.6px]">
              At The Southern Clinic we bulk bill all children 15 years and Under.&nbsp;
              <span>(* Gap: Out of Pocket)</span>
            </p>
            <p className="mb-[25.6px]">
              Below is a list of our current consultation fees as of <strong>1st&nbsp;</strong>
              <strong>July&nbsp;</strong>
              <strong>2025</strong>.&nbsp;
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Fees table ---------------- */}
      <section>
        {/* This table sits in a slightly wider container than the rest of the page */}
        <div className="mx-auto w-full max-w-[1300px] px-[10px] lg:px-0">
          <div className="overflow-x-auto">
            <table className="fees-table mb-6">
              <thead>
                <tr>
                  {FEES_HEAD.map((lines) => (
                    <th key={lines.join(" ")}>
                      {lines.map((line, i) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEES_ROWS.map((row) => (
                  <tr key={row[0][0]}>
                    {row.map((cell, i) => (
                      <td key={i}>
                        {cell.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </td>
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
          <div className="flex flex-col gap-5 py-12">
            <h2 className="font-montserrat text-[28px] font-semibold leading-[50.7px] text-heading lg:text-[39px]">
              Cancellation Policy
            </h2>
            <div className="font-inter text-[16px] leading-[1.4] text-muted [&>p]:mb-[25.6px]">
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
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="flex min-h-[300px] items-center bg-cta">
        <div className="mx-auto w-full max-w-[700px] p-[10px]">
          <p className="mb-5 text-center font-manrope text-[22px] leading-[36px] text-black">
            Please feel free to contact our friendly reception staff with any medical enquiry or
            call{" "}
            <a href={CLINIC.phoneHref} className="hover:text-sky">
              {CLINIC.phone}
            </a>
          </p>
          <div className="flex justify-center py-2">
            <Link href="/contact" className="btn btn-primary text-[14px] font-bold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
