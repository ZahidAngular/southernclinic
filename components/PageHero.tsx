import { Reveal } from "@/components/Reveal";

/** Inner-page banner: doctor photo background, title + subtitle on the left. */
export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/doctor-bg-about.jpg)" }}
    >
      <div className="container-1280">
        <div className="flex py-20">
          <div className="w-full p-8 lg:w-1/2">
            <Reveal variant="fadeInLeft">
              <h1 className="h-display text-[30px] leading-[1.4] lg:text-[48px]">{title}</h1>
            </Reveal>
            <Reveal variant="fadeInLeft">
              <h4 className="mt-5 font-montserrat text-[18px] font-semibold leading-[1.2] text-heading lg:text-[25px]">
                {subtitle}
              </h4>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
