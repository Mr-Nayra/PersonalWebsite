import { Button } from "@/components/ui/Button";
import { AtomBackground } from "@/components/ui/AtomBackground";

const stats = [
  { 
    metric: "20+", 
    label: "Projects delivered", 
    description: "Successfully shipped high-performance solutions." 
  },
  { 
    metric: "Global", 
    label: "Clients served", 
    description: "Partnering with founders in India and worldwide." 
  },
  { 
    metric: "5", 
    label: "Core services", 
    description: "AI, SEO, Web, Automation, and Consulting." 
  },
  { 
    metric: "100%", 
    label: "Milestone-based", 
    description: "Transparent, predictable, and fair pricing." 
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden border-y border-border">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <AtomBackground className="left-full lg:left-3/4 -translate-x-1/2 w-[200vw] h-[200vw] md:w-[800px] md:h-[800px] lg:w-[1200px] lg:h-[1200px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Context & CTA */}
          <div className="space-y-6">
            <h2 id="social-proof-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Proven results,{" "}
              <br className="hidden lg:block" />
              <span className="gradient-text">predictable delivery.</span>
            </h2>
            <p id="social-proof-description" className="text-text-secondary text-lg leading-relaxed max-w-lg">
              I partner with businesses to deliver scalable, high-performance technical solutions. 
              No guesswork—just a clear, milestone-driven approach that ensures quality at every step.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Button href="/contact" variant="primary" size="lg">
                Start a project
              </Button>
              <div className="flex items-center gap-3 text-text-muted text-sm font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Currently taking on new projects
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid of Stats */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {stats.map((item) => (
              <div 
                key={item.label} 
                className="card-hover p-6 rounded-2xl bg-bg-elevated border border-border relative overflow-hidden group"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/5 group-hover:to-accent-secondary/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="font-mono font-bold text-4xl text-text-primary mb-3">
                    {item.metric.includes('+') ? (
                      <>
                        {item.metric.replace('+', '')}
                        <span className="text-accent-primary">+</span>
                      </>
                    ) : item.metric.includes('%') ? (
                       <>
                        {item.metric.replace('%', '')}
                        <span className="text-accent-primary">%</span>
                      </>
                    ) : (
                      item.metric
                    )}
                  </div>
                  <h3 className="font-medium text-text-primary mb-1 text-lg">{item.label}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
