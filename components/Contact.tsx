"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Phone } from "lucide-react";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");
  const [toast, setToast] = useState<ToastState>(null);
  const webAppUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEB_APP_URL?.trim();

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToast(null);
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!webAppUrl) {
      setToast({
        type: "error",
        message:
          "Form is unavailable right now. Please contact support to configure the endpoint.",
      });
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const sanitizedPhone = String(formData.get("phone") || "")
      .replace(/\D/g, "")
      .trim();
    const serviceInterest = String(formData.get("serviceInterest") || "").trim();
    const projectBrief = String(formData.get("projectBrief") || "").trim();

    if (!sanitizedPhone) {
      setToast({
        type: "error",
        message: "Please enter a valid phone number.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Apps Script can save successfully while browser blocks the response via CORS.
      // no-cors allows the POST without failing the UI flow.
      await fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name,
          phone: sanitizedPhone,
          serviceInterest,
          // Keeping legacy key for compatibility with existing Google Apps Script mapping.
          serviceIntrest: serviceInterest,
          projectBrief,
        }),
      });

      form.reset();
      setPhone("");
      setToast({
        type: "success",
        message: "Inquiry submitted successfully. Our team will contact you soon.",
      });
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong while submitting. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="mt-4 font-[var(--font-playfair)] text-3xl text-charcoal">
            Let&apos;s Build Your Vision
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
            Share your project brief and preferred style direction. Our team will schedule
            a private consultation with design and execution specialists.
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
          onSubmit={handleSubmit}
          className="rounded-2xl border border-sand/35 bg-gradient-to-b from-white to-[#f6f2e8] p-7 shadow-luxury"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-charcoal">
              Full Name
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
                placeholder="Your name"
              />
            </label>
            <label className="text-sm font-medium text-charcoal">
              Phone
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(event) => {
                  const digitsOnly = event.target.value.replace(/\D/g, "");
                  setPhone(digitsOnly);
                }}
                required
                inputMode="numeric"
                className="mt-2 w-full rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
                placeholder="Enter phone number"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-charcoal">
            Service Interest
            <select
              name="serviceInterest"
              required
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
              name="projectBrief"
              rows={5}
              required
              className="mt-2 w-full resize-none rounded-xl border border-charcoal/20 bg-white px-4 py-3 text-sm outline-none ring-sand/30 transition focus:ring-4"
              placeholder="Tell us about your property, project scope, and ideal timeline."
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 w-full rounded-full border border-sand bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal transition hover:bg-charcoal hover:text-offwhite"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </motion.form>
      </div>
      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-5 right-5 z-50 max-w-sm rounded-xl border px-4 py-3 shadow-xl backdrop-blur-sm ${
              toast.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-rose-200 bg-rose-50 text-rose-900"
            }`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-2">
              {toast.type === "success" ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              ) : (
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              )}
              <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
