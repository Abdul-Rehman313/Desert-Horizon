"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need a permit for pool or major landscaping work in Dubai?",
    a: "Yes. Most structural or utility-impacting outdoor works in Dubai require approvals from relevant authorities. Our team prepares permit-ready drawings and coordinates with consultants to keep submissions compliant.",
  },
  {
    q: "How long does authority approval usually take?",
    a: "For standard residential scopes, initial review cycles can range from a few working days to a few weeks depending on project complexity, documentation quality, and whether revisions are requested.",
  },
  {
    q: "What is the typical project timeline after approvals?",
    a: "Boutique projects usually move through mobilization, structural works, MEP, finishing, and testing. Most high-quality villa outdoor transformations are delivered within 8 to 20 weeks based on scope and materials.",
  },
  {
    q: "How are costs estimated for luxury construction projects?",
    a: "We issue detailed estimates tied to drawings, site conditions, and finish levels. Pricing is broken into clear work packages so clients can understand value drivers and optimize choices before execution.",
  },
  {
    q: "Can I phase the project to match budget planning?",
    a: "Yes. We can structure delivery in phases such as structural shell, water systems, hardscape, and final luxury finishes. This supports budget control while preserving design consistency.",
  },
  {
    q: "Do you support design revisions after kickoff?",
    a: "Yes, within practical limits. We document all revisions with impact on timeline and cost so decisions remain transparent and site quality is not compromised.",
  },
  {
    q: "Are materials selected for UAE climate durability?",
    a: "Absolutely. We prioritize UV-resistant, heat-tolerant, and corrosion-conscious material specifications suitable for UAE weather and long-term maintenance expectations.",
  },
  {
    q: "Do you provide post-handover support and maintenance guidance?",
    a: "Yes. At handover, we provide operation and maintenance guidance, warranty outlines, and recommended service intervals for pool systems, lighting, irrigation, and external finishes.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="faq" className="luxury-container py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title mt-4 font-[var(--font-playfair)]">
          Construction Questions, Clearly Answered
        </h2>
      </motion.div>

      <div className="mt-10 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.article
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className={`rounded-xl border bg-white/80 p-4 shadow-luxury backdrop-blur sm:p-5 ${
                isOpen
                  ? "border-sand/45 border-l-[3px]"
                  : "border-charcoal/8 border-l-[3px] border-l-transparent"
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="font-[var(--font-playfair)] text-lg font-medium text-charcoal/90 sm:text-xl">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-sand transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                    className="mt-3 overflow-hidden text-sm font-normal leading-relaxed text-charcoal/70"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
