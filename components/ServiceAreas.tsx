export default function ServiceAreas() {
  return (
    <section className="bg-charcoal py-20 text-offwhite sm:py-24" id="areas">
      <div className="luxury-container grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="section-kicker">Service Areas</p>
          <h2 className="mt-4 font-[var(--font-playfair)] text-3xl leading-tight sm:text-4xl">
            Serving Dubai, Sharjah, and Ajman
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-offwhite/80 sm:text-base">
            Our teams execute end-to-end outdoor and lifestyle projects for
            discerning homeowners, developers, and hospitality clients across
            the UAE’s key northern hubs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Dubai", "Sharjah", "Ajman"].map((city) => (
              <span
                key={city}
                className="rounded-full border border-sand/60 bg-sand/10 px-4 py-2 text-sm text-sand"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-2xl border border-sand/35 bg-gradient-to-br from-[#202020] via-[#2b2b2b] to-[#111] p-6">
          <div className="absolute left-[22%] top-[28%] h-3 w-3 rounded-full bg-sand shadow-[0_0_0_8px_rgba(197,163,88,0.18)]" />
          <div className="absolute left-[53%] top-[40%] h-3 w-3 rounded-full bg-sand shadow-[0_0_0_8px_rgba(197,163,88,0.18)]" />
          <div className="absolute left-[40%] top-[58%] h-3 w-3 rounded-full bg-sand shadow-[0_0_0_8px_rgba(197,163,88,0.18)]" />
          <p className="font-[var(--font-playfair)] text-xl text-sand">
            Project Coverage Map
          </p>
          <p className="mt-2 text-sm text-offwhite/75">
            Dedicated execution teams in all three emirates.
          </p>
        </div>
      </div>
    </section>
  );
}
