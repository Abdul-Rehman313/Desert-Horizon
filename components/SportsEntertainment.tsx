"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const offerings = [
  {
    title: "Tennis & Padel Courts",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fm=webp&q=85&w=1400",
    alt: "Padel tennis court construction"
  },
  {
    title: "Football Courts",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fm=webp&q=85&w=1400",
    alt: "Private football field with artificial turf"
  },
  {
    title: "Integrated Sound Systems",
    image:
      "https://images.unsplash.com/photo-1520170350707-b2da59970118?auto=format&fm=webp&q=85&w=1400",
    alt: "Outdoor entertainment sound system"
  },
  {
    title: "Private Zoos",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fm=webp&q=85&w=1400",
    alt: "Specialized landscaping for private zoo enclosures"
  }
];

export default function SportsEntertainment() {
  return (
    <section className="luxury-container py-20 sm:py-24" id="sports-entertainment">
      <div className="max-w-3xl">
        <p className="section-kicker">Sports & Entertainment</p>
        <h2 className="section-title mt-4 font-[var(--font-playfair)]">
          Lifestyle Infrastructure Beyond the Ordinary
        </h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {offerings.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.09 }}
            className="overflow-hidden rounded-2xl border border-sand/25 bg-white"
          >
            <div className="relative h-56">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="bg-charcoal px-5 py-4">
              <h3 className="font-[var(--font-playfair)] text-xl text-offwhite">{item.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
