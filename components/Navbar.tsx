"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 90) {
        setVisible(true);
      } else {
        setVisible(currentY < lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-sand/25 bg-charcoal/90 backdrop-blur"
    >
      <div className="luxury-container flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-[var(--font-playfair)] text-2xl font-bold tracking-wide text-sand sm:text-3xl"
        >
          Desert Horizon <span className="text-white/70">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-offwhite/85 transition hover:text-sand"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:0552699742"
            className="grid h-10 w-10 place-items-center rounded-full border border-sand text-sand transition hover:bg-sand hover:text-charcoal"
            aria-label="Call Desert Horizon Contracting"
          >
            <Phone size={16} />
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full border border-sand/40 text-offwhite"
            aria-label="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-sand/20 bg-charcoal px-5 py-4 lg:hidden"
        >
          <div className="luxury-container flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-offwhite/90 transition hover:text-sand"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
