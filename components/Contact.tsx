"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="luxury-container py-20 sm:py-24" id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-luxury"
        >
          <p className="section-kicker">Lead Generation</p>
          <h2 className="mt-4 font-[var(--font-playfair)] text-3xl text-charcoal">Let&apos;s Build Your Vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
            Share your project brief and preferred style direction. Our team will schedule a private
            consultation with design and execution specialists.
          </p>
          <a
            href="tel:0552699742"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-sand px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-sand transition hover:bg-sand hover:text-charcoal"
            aria-label="Call Desert Horizon Contracting"
          >
            <Phone size={15} />
            Call
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55 }}
          className="rounded-2xl border border-sand/35 bg-gradient-to-b from-white to-[#f6f2e8] p-7 shadow-luxury"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-charcoal">
              Full Name
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium text-charcoal">
              Phone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
                placeholder="05XXXXXXXX"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-charcoal">
            Service Interest
            <select
              name="service"
              className="mt-2 w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Luxury Pool Construction</option>
              <option>Landscape & Irrigation</option>
              <option>Pergolas / Outdoor Construction</option>
              <option>Sports & Entertainment Zones</option>
            </select>
          </label>
          <label className="mt-4 block text-sm font-medium text-charcoal">
            Project Brief
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
              placeholder="Tell us about your property, project scope, and ideal timeline."
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full border border-sand bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal transition hover:bg-charcoal hover:text-offwhite"
          >
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
