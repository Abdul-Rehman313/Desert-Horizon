import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsComparison from "@/components/ProjectsComparison";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <AboutUs />
        <Services />
        <ProjectsComparison />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <ServiceAreas />
        <Contact />
      </main>

      <footer className="border-t border-sand/25 bg-charcoal text-offwhite">
        <div className="luxury-container py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <p className="section-kicker">Desert Horizon</p>
              <h3 className="mt-4 font-[var(--font-playfair)] text-3xl text-sand sm:text-4xl">
                Premium Construction Since 2003
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-offwhite/80 sm:text-base">
                We design and build private pools, landscaped gardens, pergolas, and
                luxury outdoor living spaces for homes and hospitality projects across the
                UAE.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                {["Dubai", "Sharjah", "Ajman"].map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-sand/40 px-3 py-1 text-sand"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/90">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm text-offwhite/85">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Projects", href: "#projects" },
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a className="transition hover:text-sand" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand/90">
                Contact Details
              </p>
              <div className="mt-4 space-y-4">
                <a
                  href="tel:+971552699742"
                  className="flex items-start gap-3 rounded-xl border border-sand/30 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]"
                >
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-sand/15 text-sand">
                    <Phone size={16} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-sand/90">
                      Phone
                    </span>
                    <span className="text-sm text-offwhite/90">+971 55 269 9742</span>
                  </span>
                </a>

                <a
                  href="https://wa.me/971552699742"
                  className="flex items-start gap-3 rounded-xl border border-sand/30 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]"
                >
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-sand/15 text-sand">
                    <Smartphone size={16} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-sand/90">
                      WhatsApp
                    </span>
                    <span className="text-sm text-offwhite/90">+971 55 269 9742</span>
                  </span>
                </a>

                <a
                  href="mailto:deserthorizoncontracting@gmail.com"
                  className="flex items-start gap-3 rounded-xl border border-sand/30 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]"
                >
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-sand/15 text-sand">
                    <Mail size={16} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-sand/90">
                      Email
                    </span>
                    <span className="text-sm text-offwhite/90">
                      deserthorizoncontracting@gmail.com
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3 rounded-xl border border-sand/30 bg-white/[0.03] p-3">
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-sand/15 text-sand">
                    <MapPin size={16} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-sand/90">
                      Location
                    </span>
                    <span className="text-sm text-offwhite/90">
                      Dubai, United Arab Emirates
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-sand/20 pt-6 text-center text-xs tracking-[0.08em] text-offwhite/70">
            &copy; {year} Desert Horizon Contracting. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
