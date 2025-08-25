import PageHero from "@/components/PageHero";
// @ts-nocheck
import ScrollReveal from "@/components/ScrollReveal";
export const metadata = {
	title: "Our Team",
	description: "Meet our experienced legal team with 200+ years' combined experience.",
};

const team = [
	{ name: "Senior Partner", role: "Principal Solicitor", blurb: "Seasoned advocate with extensive courtroom experience and client-first ethos." },
	{ name: "Partner", role: "Head of Immigration", blurb: "Decades of experience in complex immigration and nationality matters." },
	{ name: "Partner", role: "Head of Commercial", blurb: "Business-focused advisor across transactions and compliance." },
];

export default function TeamPage() {
	return (
		<>
			<PageHero title="Our Team" subtitle="Dedicated professionals with 200+ years' combined experience" />
			<section>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-semibold tracking-tight">Our Team</h1>
				<p className="mt-3 muted max-w-prose">Our team has 200+ years&rsquo; combined experience providing diverse legal advice.</p>
				<ScrollReveal>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{team.map((m, i) => (
						<div key={i} className="card card-hover">
							<div className="h-14 w-14 rounded-full bg-black/10 dark:bg-white/10" />
							<h2 className="text-lg font-medium mt-4">{m.name}</h2>
							<p className="text-sm opacity-80">{m.role}</p>
							<p className="text-sm muted mt-2">{m.blurb}</p>
						</div>
					))}
				</div>
				</ScrollReveal>
			</div>
			</section>
		</>
	);
}


