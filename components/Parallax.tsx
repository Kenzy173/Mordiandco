"use client";

import { useLayoutEffect } from "react";
import { gsap } from "./useGsap";
import { useGsapRef } from "./useGsap";

type Props = {
	children: React.ReactNode;
	/** Total translateY over the scroll range in pixels */
	amount?: number;
	/** Optional custom start point for ScrollTrigger */
	start?: string;
	/** Optional custom end point for ScrollTrigger */
	end?: string;
	/** Reverse the parallax direction */
	invert?: boolean;
	/** Optional classes for the wrapper element */
	className?: string;
};

export default function Parallax({ children, amount = 60, start = "top bottom", end = "bottom top", invert = false, className }: Props) {
	const ref = useGsapRef<HTMLDivElement>();

	useLayoutEffect(() => {
		if (!ref.current) return;
		const mm = gsap.matchMedia();
		const ctx = gsap.context(() => {
			mm.add("(prefers-reduced-motion: no-preference)", () => {
				gsap.to(ref.current!, {
					y: (invert ? -1 : 1) * amount,
					force3D: true,
					ease: "none",
					scrollTrigger: {
						trigger: ref.current,
						start,
						end,
						scrub: 1.1,
					},
				});
			});
		}, ref);
		return () => {
			mm.revert();
			ctx.revert();
		};
	}, [amount, start, end, invert]);

	return (
		<div ref={ref} className={className} style={{ willChange: "transform" }}>
			{children}
		</div>
	);
}


