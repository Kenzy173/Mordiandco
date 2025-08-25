"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 glass-header">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-4">
						<Link href="/" className="text-lg font-semibold tracking-tight">
							<span className="text-[color:var(--color-brand)]">Mordi & Co</span> <span className="opacity-80">Solicitors</span>
						</Link>
					</div>
					<nav className="hidden md:flex items-center gap-6 text-base font-medium">
						<Link href="/" className="hover:opacity-80">Home</Link>
						<div className="relative group">
							<Link href="/services" className="hover:opacity-80 inline-flex items-center gap-1">
								<span>Our Services</span>
								<svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</Link>
							<div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block group-focus-within:block">
								<div className="card p-2 w-64">
									<ul className="grid gap-1">
										<li><Link href="/services/criminal-law" className="block px-2 py-1.5 rounded hover:bg-black/5">Criminal Law</Link></li>
										<li><Link href="/services/commercial-law" className="block px-2 py-1.5 rounded hover:bg-black/5">Commercial Law</Link></li>
										<li><Link href="/services/immigration-nationality-law" className="block px-2 py-1.5 rounded hover:bg-black/5">Immigration & Nationality Law</Link></li>
										<li><Link href="/services/property-conveyancing" className="block px-2 py-1.5 rounded hover:bg-black/5">Property & Conveyancing</Link></li>
										<li><Link href="/services/wills-probate" className="block px-2 py-1.5 rounded hover:bg-black/5">Wills & Probate</Link></li>
										<li><Link href="/services/civil-litigation" className="block px-2 py-1.5 rounded hover:bg-black/5">Civil Litigation</Link></li>
										<li><Link href="/services/family-law" className="block px-2 py-1.5 rounded hover:bg-black/5">Family Law</Link></li>
										<li><Link href="/services/oil-gas" className="block px-2 py-1.5 rounded hover:bg-black/5">Oil & Gas</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<Link href="/about" className="hover:opacity-80">About us</Link>
						<Link href="/team" className="hover:opacity-80">Our Team</Link>
						<Link href="/contact" className="hover:opacity-80">Contact</Link>
						<Link href="/contact" className="ml-2 btn btn-primary">Do you need help?</Link>
						<div className="ml-2"><ThemeToggle /></div>
					</nav>
					{/* Mobile controls group */}
					<div className="md:hidden flex items-center gap-2">
						<ThemeToggle />
						<button
							className="inline-flex items-center justify-center p-2 rounded-md border border-black/10 dark:border-white/15"
							aria-label="Toggle menu"
							onClick={() => setIsOpen((v) => !v)}
						>
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="3" y1="12" x2="21" y2="12"></line>
								<line x1="3" y1="6" x2="21" y2="6"></line>
								<line x1="3" y1="18" x2="21" y2="18"></line>
							</svg>
						</button>
					</div>
				</div>
				{isOpen && (
					<div className="md:hidden py-3 space-y-2 border-t border-black/5 dark:border-white/10">
						<div className="grid gap-2 text-sm">
							<Link href="/" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Home</Link>
							<button
								className="w-full px-1 py-1.5 rounded hover:bg-black/5 inline-flex items-center justify-between"
								aria-expanded={mobileServicesOpen}
								aria-controls="mobile-services-group"
								onClick={() => setMobileServicesOpen((v) => !v)}
							>
								<span>Our Services</span>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</button>
							{mobileServicesOpen && (
								<div id="mobile-services-group" className="pl-2 grid gap-1">
									<Link href="/services/criminal-law" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Criminal Law</Link>
									<Link href="/services/commercial-law" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Commercial Law</Link>
									<Link href="/services/immigration-nationality-law" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Immigration & Nationality Law</Link>
									<Link href="/services/property-conveyancing" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Property & Conveyancing</Link>
									<Link href="/services/wills-probate" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Wills & Probate</Link>
									<Link href="/services/civil-litigation" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Civil Litigation</Link>
									<Link href="/services/family-law" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Family Law</Link>
									<Link href="/services/oil-gas" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Oil & Gas</Link>
								</div>
							)}
							<Link href="/about" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>About us</Link>
							<Link href="/team" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Our Team</Link>
							<Link href="/contact" className="px-1 py-1.5 hover:bg-black/5 rounded" onClick={() => setIsOpen(false)}>Contact</Link>
						</div>
						<Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2 btn btn-primary">Do you need help?</Link>
					</div>
				)}
			</div>
		</header>
	);
}


