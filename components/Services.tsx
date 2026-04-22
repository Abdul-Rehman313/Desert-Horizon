"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

const serviceBlocks = [
  {
    title: "Construction",
    description:
      "High-end residential and lifestyle construction delivered with strict quality controls and premium finishes.",
    points: ["Luxury exterior builds", "Pool and landscape execution", "Material-led quality assurance"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fm=webp&q=85&w=1400",
    alt: "Construction work on a luxury villa"
  },
  {
    title: "Planning",
    description:
      "Technical planning and 2D/3D pre-visualization to align engineering decisions with design intent.",
    points: ["2D and 3D concept planning", "Budget and timeline coordination", "Permit-aligned documentation"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fm=webp&q=85&w=1400",
    alt: "Construction planning and design documents"
  },
  {
    title: "Structural",
    description:
      "Robust structural works engineered for safety, durability, and seamless integration with luxury architecture.",
    points: ["Foundation and steel works", "Load-focused engineering", "Site-specific structural detailing"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fm=webp&q=85&w=1400",
    alt: "Structural engineering and modern building framework"
  },
  {
    title: "Building Control",
    description:
      "Inspection-ready site control covering compliance, handover quality, and long-term operational performance.",
    points: ["Authority compliance checks", "Milestone inspection workflows", "Final handover assurance"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fm=webp&q=85&w=1600",
    alt: "Building control and professional project supervision"
  }
];

export default function Services() {
  return (
    <section className="bg-white/80 py-20 sm:py-24" id="services">
      <div className="luxury-container">
        <div className="max-w-3xl">
          <p className="section-kicker">Boutique Services</p>
          <h2 className="section-title mt-4 font-[var(--font-playfair)]">Precision Services, Boutique Delivery</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceBlocks.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-offwhite shadow-luxury"
            >
              <div className="relative h-56 overflow-hidden">
                <SafeImage
                  src={service.image}
                  alt={service.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[var(--font-playfair)] text-2xl text-charcoal">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {/* <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sand transition group-hover:gap-3"
                >
                  Learn More <ArrowRight size={16} />
                </a> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
