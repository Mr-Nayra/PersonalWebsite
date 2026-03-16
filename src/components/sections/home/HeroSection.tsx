import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="aurora-bg min-h-screen flex items-center relative">
      <div className="container relative z-10 pt-40 pb-24 lg:py-40">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="w-full max-w-2xl lg:max-w-none">
            {/* Mobile Avatar Badge */}
            <div className="flex lg:hidden mb-8">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 blur-lg opacity-80" />
                <Image
                  src="/images/aryan/profile.png"
                  alt="Aryan Rawther"
                  fill
                  priority
                  sizes="(max-width: 1024px) 112px, 0px"
                  className="object-cover rounded-full border-2 border-border/50 bg-bg-surface object-top shadow-lg z-10"
                />
              </div>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent-secondary opacity-60" />
              <span className="text-accent-secondary text-sm font-mono tracking-widest uppercase">
                Apex Mind LLP
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6.5xl font-bold text-text-primary leading-[1.1] mb-6">
              I help businesses grow using{" "}
              <span className="gradient-text">AI, SEO, and modern web technology.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-text-secondary text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
              Aryan Rawther — AI automation consultant, technical SEO specialist, and full-stack developer. Based in Bengaluru, working with clients across India and globally.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Work with me →
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                See my work →
              </Button>
            </div>

            {/* Backed by */}
            <p className="mt-8 text-text-muted text-sm">
              Backed by{" "}
              <span className="text-text-secondary font-medium">Apex Mind LLP</span>
              {" "}— registered in India
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-end w-full relative">
            <div className="relative lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 blur-3xl opacity-60" />
              <Image
                src="/images/aryan/profile.png"
                alt="Aryan Rawther Profile"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 0px"
                className="object-cover rounded-full border-2 border-border/50 bg-bg-surface object-top shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted opacity-60 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
