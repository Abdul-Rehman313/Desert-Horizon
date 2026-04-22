"use client";

import { Banknote, Clock, Gem, Settings, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Dedicated Team",
    description:
      "A committed in-house team coordinating design, execution, and delivery with one accountable voice.",
    icon: Users,
  },
  {
    title: "Budget Clarity",
    description:
      "Transparent commercial planning with smart material options and milestone-based cost visibility.",
    icon: Banknote,
  },
  {
    title: "On-Time Delivery",
    description:
      "Practical schedules with disciplined site control to keep luxury projects moving on time.",
    icon: Clock,
  },
  {
    title: "Technical Precision",
    description:
      "Engineering-led execution supported by detailed planning, supervision, and QA checkpoints.",
    icon: Settings,
  },
  {
    title: "Compliance Confidence",
    description:
      "Permit and authority-conscious workflows aligned with Dubai standards and safety requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Luxury Finish",
    description:
      "Boutique craftsmanship focused on refined details, premium materials, and lasting elegance.",
    icon: Gem,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="luxury-container py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="section-kicker">Why Choose Us</p>
        <h2 className="section-title mt-4 font-[var(--font-playfair)]">
          Built on Trust, Precision, and Luxury Standards
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group rounded-2xl border border-charcoal/10 bg-white p-6 shadow-luxury transition"
          >
            <div className="inline-flex rounded-full border border-sand/35 bg-sand/10 p-3 transition group-hover:bg-sand/20">
              <Icon size={24} className="text-sand" />
            </div>
            <h3 className="mt-4 font-[var(--font-playfair)] text-2xl text-charcoal">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
