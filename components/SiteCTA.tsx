"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteCTA() {
  const pathname = usePathname();

  if (pathname?.startsWith("/contact")) {
    return null;
  }

  return (
    <section className="section-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h2 className="section-title">Ready to get expert legal help?</h2>
        <p className="mt-3 muted max-w-2xl mx-auto">Speak with our team today for clear, practical advice tailored to your needs.</p>
        <div className="mt-6">
          <Link href="/contact" className="btn btn-primary">Do you need help?</Link>
        </div>
      </div>
    </section>
  );
}


