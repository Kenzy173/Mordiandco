import Link from "next/link";
import Image from "next/image";
import ServiceIcon from "@/components/ServiceIcon";
import AnimatedHero from "@/components/AnimatedHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
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
  return (
    <>
      <AnimatedHero />

      
      <section id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-sm opacity-80 uppercase tracking-[0.2em]">Our Services</p>
          <h2 className="section-title mt-2">Let’s get you the right legal help</h2>
          <p className="mt-3 muted max-w-3xl mx-auto">From start-up advice to complex litigation, explore trending areas below or view all services.</p>
          <ScrollReveal>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              {services.slice(0,5).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <ServiceIcon name={s.title} plain />
                  <span>{s.title}</span>
                </Link>
              ))}
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-[color:var(--color-foreground)] text-[color:var(--color-background)] hover:opacity-90">
                <span>All services -&gt;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 md:gap-12 md:grid-cols-2">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <div className="mt-4 space-y-4 muted">
                <p>Welcome to Mordi & Co Solicitors, a highly reputable law firm dedicated to providing quality legal services to clients across a wide range of sectors. Established in 2002, our firm has garnered a stellar reputation for delivering exceptional results through our unwavering commitment to excellence and our client-focused approach.</p>
                <p>At Mordi & Co, we take immense pride in offering bespoke solutions meticulously tailored to address the distinct requirements of each client we serve, be they individuals or businesses. Our team of seasoned legal professionals possess a wealth of expertise honed through decades of experience, enabling us to navigate even the most intricate legal landscapes with remarkable dexterity.</p>
              </div>
              <Link href="/about" className="mt-6 btn btn-primary">Read more</Link>
            </div>
            <div>
              <h2 className="section-title">Our Values</h2>
              <div className="mt-6 card-grid">
                <div className="card-elevated">
                  <h3 className="font-medium">Transparency</h3>
                  <p className="mt-3 muted">We act with honesty, transparency and accountability.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Professionalism</h3>
                  <p className="mt-3 muted">Technically excellent people delivering world-class service.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Excellence</h3>
                  <p className="mt-3 muted">Relentless focus on quality and continuous improvement.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Client-Centered Approach</h3>
                  <p className="mt-3 muted">Your goals guide tailored, practical solutions.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Collaboration</h3>
                  <p className="mt-3 muted">Teamwork across diverse strengths delivers better outcomes.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Respect</h3>
                  <p className="mt-3 muted">We value every person and foster an inclusive culture.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Community Engagement</h3>
                  <p className="mt-3 muted">We support our communities through service and pro bono.</p>
                </div>
                <div className="card-elevated">
                  <h3 className="font-medium">Collaborations</h3>
                  <p className="mt-3 muted">We collaborate with clients and partners to achieve meaningful outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-sm opacity-80">Why Choose Us</h2>
          <h2 className="section-title mt-2">Excellence in Legal Services</h2>
          <ScrollReveal>
            <div className="mt-12 md:mt-16 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="font-medium">Expertise and Experience</h3>
                <p className="mt-2 muted">Our team has 200+ years&rsquo; combined experience providing diverse legal advice.</p>
              </div>
              <div>
                <h3 className="font-medium">Commitment to Excellence</h3>
                <p className="mt-2 muted">We deliver exceptional legal services, striving for excellence in all we do.</p>
              </div>
              <div>
                <h3 className="font-medium">Tailored Solutions</h3>
                <p className="mt-2 muted">We craft personalized solutions for each client&rsquo;s unique needs and circumstances.</p>
              </div>
              <div>
                <h3 className="font-medium">Professionalism and Integrity</h3>
                <p className="mt-2 muted">We prioritize honesty, transparency, and accountability in all interactions.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      

      

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="card-elevated">
                <h3 className="font-semibold">Our Vision</h3>
                <p className="mt-3 muted">At Mordi and Co Solicitors, our vision is to provide first class legal services and to be recognized as a trusted leader in providing legal solutions.</p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold">Our Mission</h3>
                <p className="mt-3 muted">At Mordi and Co Solicitors, we strive to deliver exceptional legal services designed to meet the unique needs of our clients. Through our dedication to professionalism, innovation, and continuous learning, we aim to provide effective solutions, uphold the principles of justice, and foster long-lasting relationships built on trust and respect.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>



      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="section-title">Our Partnerships</h2>
          <ScrollReveal y={12}>
            <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="h-16 rounded-xl border border-black/10 dark:border-white/15 grid place-items-center text-sm opacity-80">
                  Partner Logo
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
