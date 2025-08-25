import PageHero from "@/components/PageHero";
// @ts-nocheck
export const metadata = {
	title: "Contact",
	description: "Get in touch with Mordi & Co Solicitors.",
};

export default function ContactPage() {
	return (
		<>
			<PageHero title="Contact" subtitle="We're here to help. Reach out anytime." />
			<section>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-2">
				<div>
					<h1 className="text-4xl font-semibold tracking-tight">Do you need help?</h1>
					<p className="mt-3 muted">We are here to help. Reach us via phone, email, or the quick message form.</p>
					<ul className="mt-6 space-y-2 text-sm">
						<li>Tel: (020) 7619 9666</li>
						<li>Fax: (020) 8275 0594</li>
						<li>Email: info@mordiandco.com</li>
						<li>Address: Ground Floor Rear, 143 High Street, Barnet, EN5 5UZ</li>
					</ul>
					<div className="mt-6 flex items-center gap-3">
						<a aria-label="LinkedIn" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.98 8.98H14v2.05h.07c.7-1.33 2.4-2.73 4.93-2.73 5.27 0 6.24 3.47 6.24 7.98V24h-5v-6.62c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V24h-5V8.98z"/></svg>
						</a>
						<a aria-label="X" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M18.244 2H21l-7.5 8.568L22 22h-6.844l-5.36-6.299L3.6 22H1l8.043-9.187L2 2h6.844l4.86 5.7L18.244 2zm-1.2 18h1.8L7.2 4h-1.8l11.644 16z"/></svg>
						</a>
						<a aria-label="Facebook" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04h-2.7V12h2.7V9.8c0-2.66 1.58-4.13 4-4.13 1.16 0 2.37.21 2.37.21v2.6h-1.34c-1.32 0-1.73.82-1.73 1.66V12h2.95l-.47 2.91h-2.48v7.04A10 10 0 0 0 22 12z"/></svg>
						</a>
						<a aria-label="Instagram" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm4.5-.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>
						</a>
					</div>
				</div>
				<form className="card grid gap-4" action="#" method="post">
					<div>
						<label className="block text-sm font-medium">Name</label>
						<input className="input mt-1" name="name" required />
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium">Email</label>
							<input type="email" className="input mt-1" name="email" required />
						</div>
						<div>
							<label className="block text-sm font-medium">Phone</label>
							<input type="tel" className="input mt-1" name="phone" />
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium">Message</label>
						<textarea className="textarea mt-1" name="message" rows={5} required />
					</div>
					<button className="btn btn-primary" type="submit">Send message</button>
				</form>
			</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
					<div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/15">
						<iframe
							className="w-full h-72 md:h-96"
							loading="lazy"
							allowFullScreen
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.831521789595!2d-0.207!3d51.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c8b4c7b9a1f%3A0x0000000000000000!2s143%20High%20St%2C%20Barnet%20EN5%205UZ%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000"
						></iframe>
					</div>
				</div>
			</section>
		</>
	);
}


