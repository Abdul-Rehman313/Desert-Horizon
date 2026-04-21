"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2003",
    title: "The Foundation",
    detail: "Established as a boutique contracting partner focused on premium craftsmanship."
  },
  {
    year: "2014",
    title: "Service Expansion",
    detail: "Launched a full-service pool and landscaping division for integrated luxury projects."
  },
  {
    year: "20+",
    title: "Years of Trust",
    detail: "Delivering timeless residential and lifestyle spaces across Dubai and the Northern Emirates."
  }
];

export default function Legacy() {
  return (
    <section className="luxury-container py-20 sm:py-24" id="legacy">
      <div className="max-w-3xl">
        <p className="section-kicker">Legacy</p>
        <h2 className="section-title mt-4 font-[var(--font-playfair)]">A Legacy Built Since 2003</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {milestones.map((milestone, index) => (
          <motion.article
            key={milestone.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
            className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-luxury"
          >
            <p className="text-3xl font-semibold text-sand">{milestone.year}</p>
            <h3 className="mt-3 font-[var(--font-playfair)] text-2xl text-charcoal">{milestone.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{milestone.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
