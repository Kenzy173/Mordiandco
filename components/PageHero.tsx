"use client";

import { ReactNode, useEffect } from "react";
import { gsap } from "./useGsap";
import { useGsapRef } from "./useGsap";
// removed background image for banner

type Props = {
	title: string;
	subtitle?: string;
	children?: ReactNode;
};

export default function PageHero({ title, subtitle, children }: Props) {
	const ref = useGsapRef<HTMLElement>();
	useEffect(() => {
		if (!ref.current) return;
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.from("h1", { y: 16, opacity: 0, duration: 0.55, ease: "power2.out" })
				.from(".hero-text", { y: 12, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.25");
		}, ref);
		return () => ctx.revert();
	}, []);

	return (
		<section className="relative isolate overflow-hidden" ref={ref}>
			<div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
				<div className="absolute -right-32 -top-24 h-56 w-56 rounded-full animate-float-slow animate-pulse-glow" style={{ background: "radial-gradient(closest-side, var(--color-brand), transparent)" }} />
				<div className="absolute -left-32 top-24 h-56 w-56 rounded-full animate-float-slow" style={{ background: "radial-gradient(closest-side, var(--color-accent), transparent)", animationDelay: "-3s" }} />
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-48 grid gap-4 place-items-center text-center">
				<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
				{subtitle && <p className="hero-text muted max-w-2xl">{subtitle}</p>}
				{children}
			</div>
		</section>
	);
}


