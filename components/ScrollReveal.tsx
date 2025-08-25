"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "./useGsap";
import { useGsapRef } from "./useGsap";

type Props = {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
};

export default function ScrollReveal({ children, y = 20, duration = 0.6, delay = 0, stagger = 0.08 }: Props) {
  const ref = useGsapRef<HTMLDivElement>();

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current!.children, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        } as ScrollTrigger.Vars,
      });
    }, ref);
    return () => ctx.revert();
  }, [y, duration, delay, stagger]);

  return <div ref={ref}>{children}</div>;
}


