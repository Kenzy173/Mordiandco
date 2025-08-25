"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Props = { children: React.ReactNode };

export default function RouteTransition({ children }: Props) {
  const keyRef = useRef<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById("__route_root");
    if (!root) return;
    // Reset classes
    root.classList.remove("route-fade-enter-active");
    root.classList.add("route-fade-enter");
    // Next tick to allow transition
    const id = requestAnimationFrame(() => {
      root.classList.add("route-fade-enter-active");
      root.classList.remove("route-fade-enter");
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // Use pathname to change key implicitly if needed
  keyRef.current = pathname || "root";

  return (
    <div id="__route_root" key={keyRef.current}>
      {children}
    </div>
  );
}


