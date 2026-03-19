import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { siteData } from "@/data/site-data";
import Image from "next/image";
export function AboutSection() {
  return (
    <section className="section-padding bg-bg-surface border-y border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-bg-elevated border border-border group">
              <Image 
                src="/images/aryan/aryan-rawther-headshot.webp"
                alt="Aryan Rawther - Professional Headshot"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent opacity-60 hidden dark:block" />
              <div className="absolute inset-0 rounded-2xl border-2 border-accent-primary/20 pointer-events-none transition-colors duration-500 group-hover:border-accent-primary/40" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent-primary opacity-60" />
              <span className="text-accent-primary text-sm font-mono tracking-wider uppercase">
                About me
              </span>
            </div>
            <h2 id="about-heading" className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Builder, consultant, and perpetual learner.
            </h2>
            <p id="about-description-1" className="text-text-secondary leading-relaxed mb-4">
              I&apos;m Aryan Rawther, founder of Apex Mind LLP. I work at the intersection of AI automation, technical SEO, and software engineering — helping businesses build systems that actually scale.
            </p>
            <p id="about-description-2" className="text-text-secondary leading-relaxed mb-6">
              With 20+ client projects delivered across India and globally, I specialise in taking complex technical challenges and turning them into measurable business outcomes. Not just consultant — I build things too.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteData.stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <Button href="/about" variant="primary" size="md">
                Learn more about me →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
