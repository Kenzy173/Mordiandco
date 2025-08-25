"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "./useGsap";
import { useGsapRef } from "./useGsap";

export default function AnimatedHero() {
  const rootRef = useGsapRef<HTMLDivElement>();

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-title", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" })
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .from(".hero-ctas > *", { y: 14, opacity: 0, duration: 0.45, ease: "power2.out", stagger: 0.08 }, "-=0.25");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative isolate overflow-hidden animate-fade-in" ref={rootRef}>
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full animate-float-slow animate-pulse-glow" style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent)" }} />
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full animate-float-slow" style={{ background: "radial-gradient(closest-side, var(--color-accent), transparent)", animationDelay: "-3s" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-56 grid gap-10 md:grid-cols-2 items-center justify-items-center md:justify-items-start">
        <div className="text-center md:text-left mx-auto relative z-10">
          <h1 className="hero-title font-black tracking-tight mt-2 text-[color:var(--color-foreground)] md:whitespace-nowrap">MORDI & CO</h1>
          <p className="hero-sub mt-2 text-lg sm:text-2xl font-semibold text-[color:var(--color-brand)] uppercase tracking-[0.3em] md:tracking-[0.6em]">Solicitors</p>
          <div className="hero-ctas mt-8 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <Link href="/contact" className="btn btn-primary">Do you need help?</Link>
            <Link href="/services" className="btn btn-outline">Explore our services</Link>
          </div>
        </div>
        <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 dark:border-white/15">
          <Image src={`https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop`} alt="Law firm meeting" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}


