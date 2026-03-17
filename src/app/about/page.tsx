import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/site-data";
import { personSchema } from "@/lib/schemas";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Aryan Rawther — AI Consultant & Founder of Apex Mind LLP, Bengaluru",
  description:
    "Aryan Rawther is an AI automation consultant, technical SEO specialist, and full-stack SaaS developer based in Bengaluru, India. Founder of Apex Mind LLP. Working with startups, SaaS companies, and enterprises across India and globally.",
  alternates: { canonical: "/about" },
  keywords: [
    "Aryan Rawther",
    "Apex Mind LLP founder",
    "AI consultant Bengaluru",
    "AI automation consultant India",
    "technical SEO specialist India",
    "SaaS developer India",
  ],
  openGraph: {
    title: "About Aryan Rawther — AI Consultant & Founder of Apex Mind LLP",
    description:
      "AI automation consultant, technical SEO specialist, and SaaS developer. Founder of Apex Mind LLP, Bengaluru.",
  },
};

const servicesShowcase = [
  {
    name: "AI Automation Consulting",
    href: "/services/ai-automation-consulting",
    description:
      "LLM integrations, AI agent workflows, and process automation — helping businesses scale intelligently.",
    icon: "🤖",
  },
  {
    name: "SEO Services",
    href: "/services/seo-services",
    description:
      "Technical SEO, content strategy, and GEO optimisation for organic growth and AI visibility.",
    icon: "📈",
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    description:
      "Modern full-stack development using Next.js, FastAPI, and React — built to perform and scale.",
    icon: "💻",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />

      {/* Hero */}
      <section className="aurora-bg pt-32 pb-20">
        <div className="container relative z-10">
          <Breadcrumb items={[{ name: "About", url: "/about" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Aryan Rawther
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed mb-8">
              Founder of Apex Mind LLP. I work at the intersection of AI automation, technical SEO, and software engineering — helping businesses build systems that actually scale. Based in Bengaluru, working with clients across India and globally.
            </p>
            <div className="flex gap-4">
              <Button href="/contact" variant="primary">
                Let&apos;s build something together →
              </Button>
              <Button href="/case-studies" variant="secondary">
                See my work →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo + Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Primary headshot */}
                <div className="aspect-[3/4] rounded-card overflow-hidden relative border border-border mb-4">
                  <Image
                    src="/images/aryan/aryan-rawther-headshot.webp"
                    alt="Aryan Rawther"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Quick facts */}
                <div className="rounded-card border border-border bg-bg-surface p-5 space-y-3">
                  {[
                    { label: "Location", value: "Bengaluru, India" },
                    { label: "Entity", value: "Apex Mind LLP" },
                    { label: "Markets", value: "India + Global" },
                    { label: "Availability", value: "Open to projects" },
                  ].map((fact) => (
                    <div key={fact.label} className="flex justify-between">
                      <span className="text-text-muted text-sm">{fact.label}</span>
                      <span className="text-text-primary text-sm font-medium">{fact.value}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border flex gap-3">
                    <a
                      href={siteData.person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-primary text-sm transition-colors"
                    >
                      LinkedIn →
                    </a>
                    <a
                      href={siteData.person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-primary text-sm transition-colors"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* My Story */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">My Story</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I was always the kid who loved computers a little too much. While my classmates were still getting comfortable with Python and Java, I&apos;d already gone further than the syllabus. Programming made sense to me in a way that few things did — the logic, the feedback loop, the feeling of building something from nothing. By the time I got to PES University to study Computer Science, I wasn&apos;t starting from zero. I was starting from ahead.
                  </p>
                  <p>
                    But knowing how to code and knowing what to build with it are two different things. In my first year, I was convinced I was going to be a dropshipper. I had the idea, the drive, and no budget to pay anyone to build a site. So I built it myself. That decision — practical, unglamorous, born out of constraint — turned out to be one of the most important I ever made.
                  </p>
                  <p>
                    <strong>Word travels fast when you&apos;re good at something.</strong><br />
                    By my second year, people were noticing. A referral connected me with Growthspree, a digital growth agency where I spent most of my college years doing real work for real clients. This is where frontend development stopped being academic and became something I could do at a professional level — fast, clean, SEO-conscious, built to perform. I didn&apos;t just build websites. I built websites that ranked, loaded fast, and brought in customers. Marketing and SEO stopped being things I read about and became things I understood from having done them.
                  </p>
                  <p>
                    <strong>By my final year, I was working across three organisations simultaneously. I planned it that way.</strong><br />
                    I&apos;d made a deliberate decision early on: before I built something of my own, I wanted as much real-world experience as I could get my hands on — across different types of companies, different scales, different problems.
                  </p>
                  <p>
                    At PESU Venture Labs, I was a full-stack lead — building products, making architectural decisions, and mentoring peers in web development. Those were the days before AI could answer your debugging questions at 2am. You figured things out.
                  </p>
                  <p>
                    At UpTrain, a Y Combinator-backed AI company, I built the entire dashboard single-handedly. But what made that experience genuinely formative wasn&apos;t just the engineering — it was being in the room with the marketing team, the design team, the executives. I learned that the best engineers aren&apos;t the ones who stay in their lane. They&apos;re the ones who understand what lane they&apos;re in and why it matters to everyone else.<br />
                    Three organisations, overlapping, in final year. Hard? Yes. Worth it? Completely.
                  </p>
                  <p>
                    <strong>Then I went to Egnyte — deliberately, for a different kind of education.</strong><br />
                    I&apos;d spent years in startup environments and I knew how they worked. What I didn&apos;t know was how large companies operated — the hierarchies, the processes, the way decisions get made at scale with thousands of people and enterprise clients depending on you. Egnyte gave me that.
                  </p>
                  <p>
                    In the year I spent there, I worked on systems that served serious enterprise clients. I understood what engineering rigour looked like beyond the startup &quot;move fast&quot; mindset. And at one point, I found myself in a conversation with the CEO of Egnyte. Among the various things I asked him, I asked him directly: &quot;What drives you to push that hard?&quot; The answer stayed with me.
                  </p>
                  <p>
                    <strong>CombineHealth was where every thread came together.</strong><br />
                    The AI boom was happening. The fire in me to build something of my own had never gone quiet, and startup culture was calling again — louder than ever. I joined CombineHealth and made a deliberate choice from day one: I was not going to stay in a box.
                  </p>
                  <p>
                    Infrastructure, frontend, backend, AI systems, growth, SEO, marketing — I contributed across every domain I could. When hiring came up, I recommended candidates. When there was a problem outside my official remit, I walked toward it rather than past it.
                  </p>
                  <p>
                    Two areas pulled me in deepest. The first was the eligibility and automation work — taking manual, time-consuming healthcare workflows and replacing them with AI systems that actually worked. Watching AI do real, meaningful work in a domain that affects people&apos;s lives made something click into place for me. This wasn&apos;t theoretical anymore. The second was growth — making sure the frontend was fast, the SEO was sharp, and that clients were finding us.
                  </p>
                  <p>
                    <strong>Now it&apos;s time.</strong><br />
                    Five years. An agency, a VC lab, a Y Combinator startup, a global enterprise, a healthcare AI company. Frontend developer, full-stack lead, AI engineer, growth contributor — and always, underneath all of it, someone who wanted to build something of their own.
                  </p>
                  <p>
                    AI has changed the economics of building software. What used to require a large team and significant capital can now be done leaner, faster, and smarter. I&apos;ve spent years accumulating the experience to know what good looks like across every layer of a product. The timing is right. The skills are there. And the ambition that&apos;s been running quietly in the background since those school computer labs has never been louder.
                  </p>
                  <p>
                    That&apos;s what Apex Mind LLP is. I&apos;d like you to be part of what comes next.
                  </p>
                </div>

                {/* Story Image */}
                <div className="mt-8 rounded-card border border-border overflow-hidden">
                  <Image
                    src="/images/aryan/aryan-working-candid.jpeg"
                    alt="Life begins at the end of your comfort zone"
                    width={822}
                    height={350}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                  />
                </div>
              </div>

              {/* What I Do */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">What I Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {servicesShowcase.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group block rounded-card border border-border bg-bg-surface p-5 card-hover"
                    >
                      <div className="text-2xl mb-3">{service.icon}</div>
                      <h3 className="font-semibold text-text-primary text-sm mb-2 group-hover:text-accent-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-text-muted text-xs leading-relaxed">{service.description}</p>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-text-muted text-sm">
                  <Link href="/services" className="text-accent-primary hover:underline">
                    See all services →
                  </Link>
                </p>
              </div>

              {/* The Team */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">The Team</h2>
                <div className="rounded-card border border-border bg-bg-surface p-6">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    I work with a small, trusted team of specialists to deliver end-to-end results. Depending on the project, this includes designers, copywriters, and domain specialists — all hand-picked and briefed for your specific engagement.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "AI Automation Consulting",
                      "Technical SEO",
                      "Web Development",
                      "SaaS Development",
                      "AI/ML Engineering",
                      "Frontend Development",
                    ].map((role) => (
                      <div
                        key={role}
                        className="text-center py-3 px-4 rounded-btn bg-bg-elevated border border-border"
                      >
                        <span className="text-text-secondary text-xs font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Values / Philosophy */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">How I Work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteData.values.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-card border border-border bg-bg-surface p-5"
                    >
                      <h3 className="font-semibold text-text-primary mb-2">{value.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-text-muted text-sm">
                  <Link href="/process" className="text-accent-primary hover:underline">
                    See exactly how I work →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section-padding bg-bg-surface border-y border-border">
        <div className="container">
          <h2 className="text-2xl font-bold text-text-primary mb-12 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Work teaser */}
      <section className="section-padding">
        <div className="container">
          <div className="rounded-card border border-border bg-bg-surface p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  There&apos;s more to me than code and spreadsheets.
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Ten years of consistent gym work, a stack of books that never gets shorter, and travel that&apos;s changed how I see problems and markets. These aren&apos;t hobbies — they&apos;re where a lot of how I think comes from.
                </p>
                <Link
                  href="/about/beyond-work"
                  className="text-accent-primary font-medium hover:underline"
                >
                  Read more about who I am outside of work →
                </Link>
              </div>
              {/* Lifestyle photos grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="aspect-square rounded-card border border-border relative overflow-hidden group">
                  <Image src="/images/beyond-work/gym-primary.webp" alt="Gym" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 33vw, 16vw" />
                </div>
                <div className="aspect-square rounded-card border border-border relative overflow-hidden group">
                  <Image src="/images/beyond-work/travel-city.webp" alt="Travel" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 33vw, 16vw" />
                </div>
                <div className="aspect-square rounded-card border border-border relative overflow-hidden group">
                  <Image src="/images/beyond-work/street-dogs-petting.webp" alt="Street Dogs" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 33vw, 16vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding aurora-bg relative">
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-text-secondary mb-8">
            Whether you&apos;re exploring options or ready to start — I&apos;m happy to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch →
            </Button>
            <Button href="/testimonials" variant="secondary" size="lg">
              Read what clients say →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
