"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const SportsEntertainment = dynamic(() => import("./SportsEntertainment"), {
  ssr: false,
  loading: () => (
    <section className="luxury-container py-20 sm:py-24">
      <div className="h-44 animate-pulse rounded-2xl border border-sand/30 bg-white/70" />
    </section>
  ),
});

export default function LazySportsEntertainment() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sentinelRef}>
      {shouldRender ? (
        <SportsEntertainment />
      ) : (
        <section className="luxury-container py-20 sm:py-24">
          <div className="h-44 rounded-2xl border border-sand/30 bg-white/70" />
        </section>
      )}
    </div>
  );
}
