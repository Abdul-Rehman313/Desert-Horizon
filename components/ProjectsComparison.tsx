"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SafeImage from "./SafeImage";

type Project = {
  title: string;
  before: string;
  after: string;
};

const projects: Project[] = [
  {
    title: "Palm Villa Courtyard",
    before:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fm=webp&q=85&w=1600",
    after:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fm=webp&q=85&w=1600",
  },
  {
    title: "Al Barsha Poolscape",
    before:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fm=webp&q=85&w=1600",
    after:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fm=webp&q=85&w=1600",
  },
  {
    title: "Padel Court Compound",
    before:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fm=webp&q=85&w=1600",
    after:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fm=webp&q=85&w=1600",
  },
  {
    title: "Ajman Garden Upgrade",
    before:
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fm=webp&q=85&w=1600",
    after:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fm=webp&q=85&w=1600",
  },
  {
    title: "Sharjah Facade Renewal",
    before:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fm=webp&q=85&w=1600",
    after:
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fm=webp&q=85&w=1600",
  },
  {
    title: "Meydan Outdoor Lounge",
    before:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fm=webp&q=85&w=1600",
    after:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fm=webp&q=85&w=1600",
  },
];

function ComparisonCard({ project, index }: { project: Project; index: number }) {
  const [position, setPosition] = useState(50);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="rounded-2xl border border-charcoal/10 bg-white p-4 shadow-luxury"
    >
      <h3 className="mb-4 font-[var(--font-playfair)] text-2xl text-charcoal">
        {project.title}
      </h3>

      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-charcoal/10">
        <SafeImage
          src={project.before}
          alt={`${project.title} before renovation`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-full">
            <SafeImage
              src={project.after}
              alt={`${project.title} after renovation`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute left-4 top-4 rounded-md bg-white/70 px-4 py-2 text-sm font-semibold text-charcoal backdrop-blur-sm">
          Before
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-md bg-white/70 px-4 py-2 text-sm font-semibold text-charcoal backdrop-blur-sm">
          After
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-[3px] bg-white/90"
          style={{ left: `calc(${position}% - 1.5px)` }}
        />
        <div
          className="pointer-events-none absolute top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-charcoal/20 bg-white text-xs font-bold text-charcoal shadow-lg"
          style={{ left: `calc(${position}% - 22px)` }}
        >
          <span>{"< >"}</span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="compare-range absolute inset-0 z-30 h-full w-full cursor-ew-resize appearance-none bg-transparent touch-pan-x"
          aria-label={`Before and after slider for ${project.title}`}
        />
      </div>
    </motion.article>
  );
}

export default function ProjectsComparison() {
  return (
    <section id="projects" className="bg-white/80 py-20 sm:py-24">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Our Projects</p>
          <h2 className="section-title mt-4 font-[var(--font-playfair)]">
            Before and After Transformation Stories
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ComparisonCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
