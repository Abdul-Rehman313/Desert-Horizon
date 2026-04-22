"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "A. Al Mansoori",
    text: "The team transformed our villa exterior beyond what we imagined. Execution quality was exceptional.",
  },
  {
    name: "M. Rahman",
    text: "From design stage to handover, the communication was clear and the timeline stayed realistic and reliable.",
  },
  {
    name: "S. Patel",
    text: "Their pool and pergola integration made our property feel like a private resort. Craftsmanship is top-tier.",
  },
  {
    name: "R. Al Nuaimi",
    text: "Professional, detail-focused, and highly respectful on-site. Desert Horizon delivered a flawless finish.",
  },
  {
    name: "L. Fernandes",
    text: "We appreciated their authority-compliant planning and strong technical coordination through every phase.",
  },
  {
    name: "K. Abbas",
    text: "Excellent value for luxury work. The materials, structure, and final polish were exactly what we asked for.",
  },
  {
    name: "N. Siddiqui",
    text: "They turned a basic backyard into a complete lifestyle zone with pool, lighting, and entertainment areas.",
  },
  {
    name: "T. George",
    text: "Very organized process and no hidden surprises. Their family-owned attention to detail really shows.",
  },
  {
    name: "H. Mahmood",
    text: "Our padel court project was delivered beautifully. The team understands premium recreational builds.",
  },
  {
    name: "F. Al Mazrouei",
    text: "One of the few contractors we would confidently recommend for high-end residential transformations.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-charcoal py-20 text-offwhite sm:py-24">
      <div className="luxury-container">
        <div className="max-w-3xl">
          <p className="section-kicker">Testimonials</p>
          <h2 className="mt-4 font-[var(--font-playfair)] text-3xl sm:text-4xl">
            What Clients Say About Desert Horizon
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-sand/25 bg-[#202020] p-7 sm:p-9">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="max-w-4xl font-[var(--font-playfair)] text-xl leading-relaxed text-offwhite sm:text-2xl">
                &ldquo;{testimonials[active].text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
                {testimonials[active].name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name + index}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition ${
                  active === index
                    ? "w-10 bg-sand"
                    : "w-2.5 bg-offwhite/30 hover:bg-offwhite/45"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
