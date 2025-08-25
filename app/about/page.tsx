import PageHero from "@/components/PageHero";
export const metadata = {
	title: "About us",
	description:
		"Welcome to Mordi & Co Solicitors. Established in 2002, delivering bespoke legal solutions.",
};

export default function AboutPage() {
	return (
		<>
			<PageHero title="About Us" subtitle="Excellence in legal services since 2002" />
			<section>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-semibold tracking-tight">Who We Are</h1>
				<div className="mt-4 space-y-4">
					<p className="muted">Mordi and Co Solicitors is a reputable law firm dedicated to providing high-quality legal services to clients across various sectors. With a commitment to excellence and a focus on client satisfaction, we strive to deliver tailored solutions to meet the unique needs of each individual and business we serve.</p>
					<p className="muted">We are da friendly and multicultural firm based in the London Borough of Barnet. The firm was established in March 2002 as Kaj Mordi & Co and changed its name to Mordi & Co in April 2005. Mordi and Co Solicitors has built a strong reputation for professionalism, integrity, and expertise in legal matters.</p>
					<p className="muted">At Mordi and Co Solicitors, we understand that legal issues can be complex and stressful. That&rsquo;s why we take a client-centered approach, working closely with each client to understand their objectives, concerns, and priorities.</p>
					<p className="muted">Mordi & Co remains committed to publicly funded work for those on a low income, having been awarded a Legal Services Commission Specialist Help Quality Mark in Crime. We act for clients throughout the UK and are happy to consider all referrals. We operate nationally from our offices in Barnet High Street.</p>
				</div>
			</div>
			</section>
		</>
	);
}


