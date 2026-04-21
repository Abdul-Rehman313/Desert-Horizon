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
import { Headphones, Mail, MapPin, Phone, Smartphone } from "lucide-react";

export default function Home() {
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
      <footer className="border-t border-charcoal/10 bg-[#f2f2f2] py-10 text-charcoal">
        <div className="luxury-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#112641] text-white">
                <Headphones size={20} />
              </div>
              <div>
                <p className="text-3xl font-medium text-[#5dcfc8]">Phone Number</p>
                <p className="text-2xl text-charcoal/90">0207 993 5070</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#112641] text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-3xl font-medium text-[#5dcfc8]">Mobile Number</p>
                <p className="text-2xl text-charcoal/90">07874 644 144</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#112641] text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-3xl font-medium text-[#5dcfc8]">Email</p>
                <p className="text-2xl text-charcoal/90">info@mattstoneprojects.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#112641] text-white">
                <Smartphone size={20} />
              </div>
              <div>
                <p className="text-3xl font-medium text-[#5dcfc8]">WhatsApp</p>
                <p className="text-2xl text-charcoal/90">07874644144</p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#112641] text-white">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-3xl font-medium text-[#5dcfc8]">Address</p>
                <p className="text-2xl text-charcoal/90">Aspect Place, Hersham, Walton-on-thames KT12 4ER</p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-lg font-medium text-charcoal">
            © 2026 Matstone Projects Limited - All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
