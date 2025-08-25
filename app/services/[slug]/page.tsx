import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import type { ReactElement } from "react";

type Service = {
	slug: string;
	title: string;
	description: string[];
};

const services: Service[] = [
	{
		slug: "criminal-law",
		title: "Criminal Law",
		description: [
			"Robust defence across a wide range of criminal matters.",
			"Tailored strategies and representation at all stages.",
		],
	},
	{
		slug: "commercial-law",
		title: "Commercial Law",
		description: [
			"Practical advice for businesses, from contracts to compliance.",
			"Negotiation, risk management, and ongoing advisory support.",
		],
	},
	{
		slug: "immigration-nationality-law",
		title: "Immigration & Nationality Law",
		description: [
			"Visas, settlement, and citizenship applications.",
			"Support for individuals and businesses on immigration compliance.",
		],
	},
	{
		slug: "property-conveyancing",
		title: "Property & Conveyancing",
		description: [
			"Residential and commercial transactions, leases, and transfers.",
			"Diligent handling to ensure smooth completion.",
		],
	},
	{
		slug: "wills-probate",
		title: "Wills & Probate",
		description: [
			"Estate planning, drafting wills, probate and administration.",
			"Sensitive guidance tailored to your family’s needs.",
		],
	},
	{
		slug: "civil-litigation",
		title: "Civil Litigation",
		description: [
			"Dispute resolution, mediation, and court representation.",
			"Focused on efficient, results-driven outcomes.",
		],
	},
	{
		slug: "family-law",
		title: "Family Law",
		description: [
			"Divorce, child arrangements, and family agreements.",
			"Compassionate support with clear, practical advice.",
		],
	},
	{
		slug: "oil-gas",
		title: "Oil & Gas",
		description: [
			"Upstream and downstream advisory and regulatory compliance.",
			"Sector-specific expertise and transactional support.",
		],
	},
];

export function generateStaticParams() {
	return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) return {};
	return {
		title: service.title,
		description: service.description[0],
	};
}

export default function ServicePage({ params }: { params: { slug: string } }) {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) return notFound();

	const richContentBySlug: Record<string, ReactElement> = {
		"criminal-law": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Criminal Law</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">Our criminal solicitors have been providing our clients with legal defence in the UK for several years, and have acted in some landmark cases in the UK.</p>
						<p className="muted">We have specialisations in all areas of criminal law, from minor offences to serious crimes such as murder, fraud and conspiracies. We can offer representation to our clients from Police Station arrests, Court appearances, Appeals and Prison law. We cover cases throughout London and all of the UK on serious matters.</p>
						<p className="muted">Mordi & Co Solicitors accept criminal cases from private clients, and also from clients who cannot afford private legal advice. Our reputation is to leave no stone unturned in investigating our client&rsquo;s case. Our criminal lawyers forcefully defend our clients, both against the Police and the CPS.</p>

						<h2 className="text-2xl font-semibold tracking-tight mt-8">Fees</h2>
						<p className="muted">As part of our services in Criminal Law, we provide advice representation at the Magistrates court in relation to road traffic offences. Such work is provided with an average fee of £1,200.00 to cover initial instructions; considering disclosure and advice on likely sentence. The fee excludes the instruction of an expert and any appeal work.</p>

						<h3 className="text-xl font-semibold tracking-tight mt-6">Fee earners</h3>
						<ul className="list-disc pl-6 space-y-2">
							<li className="muted"><span className="font-medium">Anthony Mordi</span> - A Solicitor and Partner. He was admitted in 2000 with over 23 years post qualification experience. Current hourly rate is £350.00.</li>
							<li className="muted"><span className="font-medium">Michael Okogwu</span> - A Solicitor and Partner. He was admitted in 2007 with over 16 years post qualification experience. Current hourly rate is £350.00.</li>
							<li className="muted"><span className="font-medium">Khalid  Peerbux</span> - A Solicitor admitted in 2011 with over 13 years post qualification experience. Current hourly rate is £250.00.</li>
						</ul>

						<div className="mt-6 p-4 rounded-xl border border-black/10 dark:border-white/15">
							<p className="text-sm">Having an emergency? <span className="font-semibold">24 Hour Emergency Line:</span> <a href="tel:07956923482" className="underline">07956 923 482</a></p>
						</div>
					</div>
				</div>
			</section>
		),
		"commercial-law": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Commercial Law</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">Our seasoned Commercial law team at Mordi & Co Solicitors, advises business owners, directors, clients and customers on nearly every aspect of business and commerce. From structural and ownership matters to warranties, commercial fraud and asset recovery. We advise corporate and individual clients on the most suitable and cost-effective strategy and tactics to achieve their goals and safeguard their businesses, assets and reputations.</p>
						<p className="muted">We provide expert legal services tailored to your business needs. From contracts to dispute resolution, we ensure your interests are protected and your transactions run smoothly. We provide a dedicated service for the commercial client advising on commercial agreements including:</p>
						<ul className="list-disc pl-6 space-y-1">
							<li className="muted">Agency, distribution</li>
							<li className="muted">Licensing and Franchising agreements</li>
							<li className="muted">Leasing and finance agreements</li>
							<li className="muted">Non circumvention / Non-disclosure agreements</li>
							<li className="muted">Commercial disputes Injunction & Equitable remedies</li>
							<li className="muted">Arbitration & Mediation</li>
						</ul>
					</div>
				</div>
			</section>
		),
		"immigration-nationality-law": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Immigration & Nationality Law</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">We are specialists in all aspects of UK immigration and will therefore be able to ensure the whole process runs smoothly for you. We offer clients a personal and comprehensive solution to their immigration and British nationality needs.</p>
						<p className="muted">With the benefit of our extensive experience, we are able to understand your needs and advise on the prospects of success and potential pitfalls in pursuing an application. Working together, we will use our experience to find a solution that matches your needs wherever possible.</p>
						<p className="muted">At the outset you will be allocated a partner who will oversee all of your immigration requirements. We will advise you at all stages, collate your materials, prepare and lodge your application and follow up with UK Border Force to ensure that your application is processed as quickly as possible.</p>
						<p className="muted">Our team of solicitors is here to help you with any problems you may have about entering, or settling in the UK. Whether you want to enter the UK to work, to set up your own business, to seek political asylum, to take a university course or to settle with a partner, the best advice is only a phone call away.</p>
						<h3 className="text-xl font-semibold tracking-tight mt-4">Our Expertise includes:</h3>
						<ul className="list-disc pl-6 space-y-1">
							<li className="muted">Visa Applications</li>
							<li className="muted">Permanent Residence</li>
							<li className="muted">Business Immigration</li>
							<li className="muted">Human Rights & Protection Claims</li>
							<li className="muted">Immigration Appeals & Judicial Reviews</li>
							<li className="muted">Detention & Removal Cases</li>
							<li className="muted">General Immigration Advice</li>
						</ul>
					</div>
				</div>
			</section>
		),
		"property-conveyancing": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Property & Conveyancing</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">Buying or selling a property can be a confusing and sometimes frustrating process. However, some people complain that lawyers do not take the time to explain the purpose of delays etc. At Mordi & Co, we believe that a client who understands the process is more likely to be a satisfied client.</p>
						<p className="muted">Many people who find solicitors on the internet are attracted by promises of cheap fees and high levels of customer service, only to find that the small print nearly triples the &ldquo;fee&rdquo; they have been quoted, and that the &ldquo;customer service&rdquo; they have been promised is a little more than a call centre conveyer belt. Lawyers should be seen as professionals and integrity should be more important than marketing tricks.</p>
						<p className="muted">We will always be competitive on price, and we pride ourselves on not being a conveyer belt operation. We are a real law firm, with lawyers, not call centres. We provide a service which concentrates on price and value and endeavour to explain all charges at the outset. We have clients throughout England and Wales.</p>
					</div>
				</div>
			</section>
		),
		"wills-probate": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Wills & Probate</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">We believe that every client of ours should have made a Will. It is one of the most important things in putting your affairs in order. Without a Will, the law will decide what happens to your money and home when you die. There can be some unpleasant surprises when this happens.</p>
						<p className="muted">When a person dies, their assets must be valued and collected and their liabilities and taxes assessed and paid. The person responsible for this is the Executor appointed by the Will, or the Administrator when there is no Will. It can be a simple matter when there are few assets and no tax to pay. In other cases, it can become extremely involved.</p>
						<p className="muted">We recognise that this can be a major worry at a sad and stressful time for the family of the deceased and we strive to be sympathetic and understanding: we believe we can often relieve the family of a great deal of worry.</p>
					</div>
				</div>
			</section>
		),
		"civil-litigation": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Civil Litigation</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">Dealing with a dispute, whether it’s small or large, can be a particularly stressful experience, especially if you are unsure about the costs and procedures involved. Our litigation team regularly handle a wide range of disputes and we can provide practical and specialist advice with the aim of resolving your dispute quickly and cost-effectively. The clear and concise advice of our litigation solicitors is aimed at reducing unnecessary stress and worry. If we believe we can resolve your dispute through mediation, we will tell you.</p>
						<p className="muted">Our litigation solicitors have covered a range of Civil, County and High Court legal disputes and defences. Our supportive, flexible and cost effective approach means we can adapt to the individual needs of our clients, seeking swift and positive resolutions. We will never risk a speculative action that has little chance of success. Our advice to you will be objective and even-handed, enabling you to make a fully informed decision.</p>
						<h3 className="text-xl font-semibold tracking-tight mt-4">We handle:</h3>
						<ul className="list-disc pl-6 space-y-1">
							<li className="muted">Contract and business disputes</li>
							<li className="muted">International and domestic commercial disputes</li>
							<li className="muted">Cross border asset tracing and fraud</li>
							<li className="muted">Shareholder and partnership disputes</li>
							<li className="muted">Arbitrations & alternative dispute resolutions</li>
							<li className="muted">Enforcement of security and related banking litigation</li>
							<li className="muted">Professional negligence</li>
							<li className="muted">Commercial debt recovery</li>
						</ul>
					</div>
				</div>
			</section>
		),
		"family-law": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Family Law</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">The breakdown of a relationship can be one of the most traumatic periods of anyone&rsquo;s life. Naturally, you will be concerned about your current financial and property arrangements and how it will affect any children you may have. Our Family law solicitors specialise in advising and representing clients in divorce cases.</p>
						<h3 className="text-xl font-semibold tracking-tight mt-4">Grounds for divorce</h3>
						<ul className="list-disc pl-6 space-y-1">
							<li className="muted">Your husband or wife has committed adultery</li>
							<li className="muted">Unreasonable behaviour means you cannot reasonably be expected to live with them</li>
							<li className="muted">Desertion for at least two years</li>
							<li className="muted">Two years&rsquo; separation with consent</li>
							<li className="muted">Five years&rsquo; separation</li>
						</ul>
						<h3 className="text-xl font-semibold tracking-tight mt-4">The Divorce Process</h3>
						<p className="muted">The legal formality for getting a divorce is a relatively straightforward process. What is generally much less straightforward is sorting out the practical issues associated with a divorce, such as where each person will live, who gets what, and arrangements for any children. Before agreeing matters, it is wise to seek advice about your rights and the options available to you.</p>
						<h3 className="text-xl font-semibold tracking-tight mt-4">Divorce Petition</h3>
						<p className="muted">If you are applying for the divorce we will usually start the process by writing a letter to your husband or wife to tell them that you are planning to start divorce action and recommend that they get independent legal advice. We will then send a divorce petition to the court. The court will send a copy to your spouse or their solicitor to reply within seven days. Once they have replied to the petition, you will confirm your intention to go ahead by a sworn statement or &lsquo;affidavit&rsquo;. Your application is then lodged with the court with the original marriage certificate and the court fee which is presently £300.</p>
					</div>
				</div>
			</section>
		),
		"oil-gas": (
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-3xl font-semibold tracking-tight">Oil & Gas</h1>
					<div className="mt-4 space-y-4">
						<p className="muted">At Mordi & Co, our Oil & Gas team provides comprehensive legal services tailored to the dynamic energy sector. We partner closely with our clients to navigate the complex regulatory landscape and capitalize on opportunities. Our lawyers bring extensive experience advising on upstream oil and gas projects, from exploration and production agreements to joint venture formations and financing.</p>
						<p className="muted">We guide clients through midstream and downstream transactions involving transportation, storage, refining and marketing of oil, gas and petroleum products. Our expertise spans energy sector regulations, operational agreements, environmental compliance, tax issues and dispute resolution.</p>
						<h3 className="text-xl font-semibold tracking-tight mt-4">Our experience includes advising on:</h3>
						<h4 className="text-base font-semibold mt-2">Upstream: all contractual and fiscal aspects</h4>
						<ul className="list-disc pl-6 space-y-1">
							<li className="muted">Production Sharing contracts (PSCs)</li>
							<li className="muted">Joint Venture Agreements (JVAs)</li>
							<li className="muted">Joint Operating Agreements (JOAs)</li>
							<li className="muted">Unitizations, drilling and development contracts</li>
						</ul>
						<h4 className="text-base font-semibold mt-3">Downstream (including Petrochemicals)</h4>
						<ul className="list-disc pl-6 space-y-1">
							<li className="muted">Project development, acquisitions (including privatization)</li>
							<li className="muted">Disposals, joint ventures, asset swaps</li>
							<li className="muted">Environmental & planning issues</li>
							<li className="muted">Antitrust and regulatory aspects, trade dispute</li>
							<li className="muted">Due Diligence</li>
						</ul>
					</div>
				</div>
			</section>
		),
	};

	if (richContentBySlug[params.slug]) {
		return (
			<>
				<PageHero title={service.title} />
				{richContentBySlug[params.slug]}
			</>
		);
	}

	return (
		<>
			<PageHero title={service.title} />
			<section>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
					<div className="mt-4 space-y-4">
						{service.description.map((p, i) => (
							<p className="muted" key={i}>{p}</p>
						))}
					</div>
				</div>
			</section>
		</>
	);
}


