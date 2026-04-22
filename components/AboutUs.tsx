"use client";

import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

const paragraphs = [
  "For over 20 years, Desert Horizon Contracting has delivered premium construction and exterior transformations across the UAE, combining regional heritage with modern design intelligence.",
  "As a family-owned firm, we work with hands-on precision at every phase, from concept alignment to final handover, ensuring every finish reflects boutique-level craftsmanship.",
  "Our mission is simple: transform ordinary properties into signature lifestyle spaces through elegant engineering, disciplined project delivery, and timeless material quality.",
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-20 h-56 bg-gradient-to-r from-sand/12 via-sand/6 to-transparent blur-2xl" />
      <div className="luxury-container relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">About Us</p>
          <h2 className="section-title mt-4 font-[var(--font-playfair)]">
            Two Decades of UAE Heritage, Crafted for Modern Luxury
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-3xl border border-sand/25 bg-white/85 p-7 shadow-luxury"
          >
            <div className="absolute right-4 top-4 rounded-full border border-sand/35 bg-sand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sand">
              Since 2003
            </div>
            <div className="space-y-5 mt-2 text-sm leading-relaxed text-charcoal/80 sm:text-base">
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="grid gap-5"
          >
            <div className="relative h-52 overflow-hidden rounded-2xl border border-charcoal/10 shadow-luxury sm:h-60">
              <SafeImage
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fm=webp&q=85&w=1600"
                alt="Luxury villa exterior at sunset"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-charcoal/10 bg-charcoal p-5 text-offwhite shadow-luxury">
                <p className="text-xs uppercase tracking-[0.22em] text-sand">
                  Projects Delivered
                </p>
                <p className="mt-2 font-[var(--font-playfair)] text-3xl">300+</p>
              </div>
              <div className="rounded-2xl border border-sand/25 bg-gradient-to-br from-white to-[#f7f1e4] p-5 shadow-luxury">
                <p className="text-xs uppercase tracking-[0.22em] text-charcoal/65">
                  Client Retention
                </p>
                <p className="mt-2 font-[var(--font-playfair)] text-3xl text-sand">92%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
