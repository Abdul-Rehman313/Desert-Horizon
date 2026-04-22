"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden pt-20">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 7.2, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0"
      >
        <SafeImage
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fm=webp&q=85&w=2200"
          alt="Luxury villa outdoor pool in Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/65 to-charcoal/30" />
      <div className="luxury-container relative z-10 flex min-h-[88vh] items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Dubai Boutique Construction</p>
          <h1 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight text-offwhite sm:text-5xl lg:text-6xl">
            Ready to Extend Your Home? Let&apos;s Talk
          </h1>
          <p className="mt-5 max-w-2xl text-base text-offwhite/85 sm:text-lg">
            <span className="font-extrabold text-offwhite">
              Desert Horizon Contracting
            </span>{" "}
            crafts elevated outdoor living spaces, premium pools, and signature lifestyle
            developments for private clients across the UAE.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="shimmer-btn rounded-full border border-sand bg-sand px-7 py-3 text-sm font-bold uppercase tracking-wider text-charcoal transition hover:bg-[#b89242]"
            >
              Request Consultation
            </a>
            <a
              href="tel:0552699742"
              className="inline-flex items-center gap-2 rounded-full border border-offwhite/70 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-offwhite transition hover:border-sand hover:text-sand"
            >
              <Phone size={15} />
              Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
