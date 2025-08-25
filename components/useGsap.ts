"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsapRegister() {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
  }, []);
}

/**
 * Utility to create a stable ref and return it along with gsap.
 */
export function useGsapRef<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useGsapRegister();
  return ref;
}

export { gsap, ScrollTrigger };


