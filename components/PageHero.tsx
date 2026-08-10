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
            <h1 className="h-display text-[30px] lg:text-[48px] lg:leading-[1.2]">{title}</h1>
            <h4 className="mt-3 font-manrope text-[18px] font-semibold text-heading lg:text-[25px]">
              {subtitle}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
