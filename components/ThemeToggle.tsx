"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		setMounted(true);
		const stored = (typeof window !== "undefined" && window.localStorage.getItem("theme")) as "light" | "dark" | null;
		const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		applyTheme(initial);
	}, []);

	function applyTheme(next: "light" | "dark") {
		setTheme(next);
		const html = document.documentElement;
		if (next === "dark") {
			html.setAttribute("data-theme", "dark");
			html.classList.add("dark");
		} else {
			html.setAttribute("data-theme", "light");
			html.classList.remove("dark");
		}
		window.localStorage.setItem("theme", next);
	}

	if (!mounted) return null;

	return (
		<button
			aria-label="Toggle theme"
			onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
			className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 p-2 hover:bg-black/5"
		>
			<span className="sr-only">Toggle theme</span>
			{theme === "dark" ? (
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			) : (
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<circle cx="12" cy="12" r="4"></circle>
					<path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.64-6.36 1.41 1.41M4.22 19.78l1.41-1.41m0-12.73L4.22 7.05M19.78 19.78l-1.41-1.41"></path>
				</svg>
			)}
		</button>
	);
}


