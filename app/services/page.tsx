import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import PageHero from "@/components/PageHero";

export const metadata = {
	title: "Our Services",
	description:
		"Comprehensive legal services: Criminal, Commercial, Immigration, Property, Wills & Probate, Civil Litigation, Family, Oil & Gas.",
};

const services = [
	{ slug: "criminal-law", title: "Criminal Law", summary: "Experienced defence across a wide range of criminal matters." },
	{ slug: "commercial-law", title: "Commercial Law", summary: "Business-focused legal support and contract advisory." },
	{ slug: "immigration-nationality-law", title: "Immigration & Nationality Law", summary: "Visas, citizenship, and immigration compliance." },
	{ slug: "property-conveyancing", title: "Property & Conveyancing", summary: "Residential and commercial property transactions." },
	{ slug: "wills-probate", title: "Wills & Probate", summary: "Estate planning, wills, probate and administration." },
	{ slug: "civil-litigation", title: "Civil Litigation", summary: "Dispute resolution and court representation." },
	{ slug: "family-law", title: "Family Law", summary: "Divorce, children matters, and family agreements." },
	{ slug: "oil-gas", title: "Oil & Gas", summary: "Sector-specific advisory and regulatory compliance." },
];

export default function ServicesPage() {
	return (
		<>
			<PageHero title="Our Services" subtitle="Explore our practice areas and how we can help" />
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((s) => (
							<Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover">
								<div className="flex items-center gap-3">
									<ServiceIcon name={s.title} />
									<h2 className="text-lg font-medium">{s.title}</h2>
								</div>
								<p className="text-sm muted mt-2">{s.summary}</p>
								<span className="text-sm mt-3 inline-block">Learn more →</span>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
}



