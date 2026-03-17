import { Button } from "@/components/ui/Button";

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

      {/* 2D Atom Background Animation */}
      <div className="absolute top-1/2 right-0 translate-x-[20%] lg:translate-x-[30%] -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1200px] lg:h-[1200px] pointer-events-none opacity-40 select-none flex items-center justify-center">
        
        {/* Nucleus */}
        <div className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gray-500/20 rounded-full blur-[8px]" />
        <div className="absolute w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gray-600 rounded-full shadow-[0_0_20px_rgba(75,85,99,0.8)]" />

        {/* Orbit 1 */}
        <div className="absolute w-[20%] h-[20%] border-[1px] border-text-muted/30 rounded-full">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s', animationTimingFunction: 'linear' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 -ml-[4px] -mt-[4px] md:-ml-[5px] md:-mt-[5px] lg:-ml-[6px] lg:-mt-[6px] bg-accent-primary rounded-full shadow-[0_0_8px_var(--accent-primary)]" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 -ml-[4px] -mb-[4px] md:-ml-[5px] md:-mb-[5px] lg:-ml-[6px] lg:-mb-[6px] bg-accent-primary rounded-full shadow-[0_0_8px_var(--accent-primary)]" />
          </div>
        </div>

        {/* Orbit 2 */}
        <div className="absolute w-[36%] h-[36%] border-[1px] border-text-muted/30 rounded-full">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '14s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}>
            {[0, 120, 240].map(deg => (
              <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
                <div className="absolute top-0 left-1/2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 -ml-[5px] -mt-[5px] md:-ml-[6px] md:-mt-[6px] lg:-ml-[8px] lg:-mt-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Orbit 3 */}
        <div className="absolute w-[52%] h-[52%] border-[1px] border-text-muted/30 rounded-full">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s', animationTimingFunction: 'linear' }}>
            {[0, 90, 180, 270].map(deg => (
              <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
                <div className="absolute top-0 left-1/2 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 -ml-[5px] -mt-[5px] md:-ml-[6px] md:-mt-[6px] lg:-ml-[8px] lg:-mt-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Orbit 4 */}
        <div className="absolute w-[68%] h-[68%] border-[1px] border-text-muted/30 rounded-full">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '26s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}>
            {[0, 72, 144, 216, 288].map(deg => (
              <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 -ml-[6px] -mt-[6px] md:-ml-[7px] md:-mt-[7px] lg:-ml-[8px] lg:-mt-[8px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Orbit 5 */}
        <div className="absolute w-[84%] h-[84%] border-[1px] border-text-muted/30 rounded-full">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '32s', animationTimingFunction: 'linear' }}>
            {[0, 60, 120, 180, 240, 300].map(deg => (
              <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 -ml-[6px] -mt-[6px] md:-ml-[7px] md:-mt-[7px] lg:-ml-[10px] lg:-mt-[10px] bg-accent-primary rounded-full shadow-[0_0_10px_var(--accent-primary)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Context & CTA */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Proven results,{" "}
              <br className="hidden lg:block" />
              <span className="gradient-text">predictable delivery.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-lg">
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
                className="card-hover p-6 rounded-2xl bg-bg-elevated border border-border/50 relative overflow-hidden group"
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
