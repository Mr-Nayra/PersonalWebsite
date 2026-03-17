import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AskAIButton } from "@/components/ui/AskAIButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beyond the Work — Aryan Rawther",
  description:
    "The books, gym, and travel that shape how Aryan Rawther thinks, builds, and shows up. The person behind the consultant.",
  alternates: { canonical: "/about/beyond-work" },
  openGraph: {
    title: "Beyond the Work — Aryan Rawther",
    description: "The books, gym, and travel that shape how Aryan Rawther thinks.",
  },
};

const books = [
  {
    title: "[TODO: Book title]",
    author: "[Author Name]",
    note: "[1-2 sentences on why this book mattered and what it changed in how you think.]",
  },
  {
    title: "[TODO: Book title]",
    author: "[Author Name]",
    note: "[1-2 sentences on why this book mattered.]",
  },
  {
    title: "[TODO: Book title]",
    author: "[Author Name]",
    note: "[1-2 sentences on why this book mattered.]",
  },
  {
    title: "[TODO: Currently reading]",
    author: "[Author Name]",
    note: "[What drew you to this one right now?]",
    current: true,
  },
];

export default function BeyondWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg pt-32 pb-16">
        <div className="container relative z-10">
          <Breadcrumb
            items={[
              { name: "About", url: "/about" },
              { name: "Beyond the Work", url: "/about/beyond-work" },
            ]}
          />
          <div className="mt-8 max-w-2xl">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Beyond the Work
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed">
              The things that shape how I think, build, and show up.
            </p>
          </div>

          {/* Hero photo collage */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="aspect-[4/3] rounded-card border border-border relative overflow-hidden">
              <Image src="/images/beyond-work/gym-primary.webp" alt="Gym" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="aspect-[4/3] rounded-card border border-border relative overflow-hidden">
              <Image src="/images/beyond-work/street-dogs-petting.webp" alt="Street Dogs" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="aspect-[4/3] rounded-card bg-bg-elevated border border-border flex items-center justify-center">
              <p className="text-text-muted text-xs">[Books photo]</p>
            </div>
            <div className="aspect-[4/3] rounded-card border border-border relative overflow-hidden">
              <Image src="/images/beyond-work/travel-city.webp" alt="Travel" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-2xl">
          {/* AskAI */}
          <div className="mb-10">
            <AskAIButton pageUrl="/about/beyond-work" pageType="about" />
          </div>

          {/* Reading */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Reading</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                [TODO: 3–5 paragraphs about your reading habits. What genres do you read? How has reading shaped your thinking about business, technology, or people? What&apos;s your reading routine? Be specific — specific authors or specific ideas land better than vague appreciation for books.]
              </p>
              <p>
                [TODO: Write about a specific book that changed how you see your work. What did it teach you that you apply directly in client engagements or product decisions?]
              </p>
            </div>

            {/* Bookshelf */}
            <div className="mt-8">
              <h3 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">Favourites & recent reads</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {books.map((book, i) => (
                  <div
                    key={i}
                    className="rounded-card border border-border bg-bg-surface p-4 flex gap-4"
                  >
                    <div className="w-10 h-14 rounded bg-accent-primary/10 border border-accent-primary/20 flex-shrink-0 flex items-center justify-center">
                      <span className="text-accent-primary text-xs font-bold">📖</span>
                    </div>
                    <div>
                      {book.current && (
                        <span className="text-xs text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/20 px-1.5 py-0.5 rounded-full mb-1 inline-block">
                          Currently reading
                        </span>
                      )}
                      <p className="font-medium text-text-primary text-sm">{book.title}</p>
                      <p className="text-text-muted text-xs mb-1">{book.author}</p>
                      <p className="text-text-muted text-xs leading-relaxed">{book.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gym */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Fitness & Gym</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-6 max-w-xl">
              <div className="aspect-[4/5] sm:aspect-square rounded-card border border-border relative overflow-hidden">
                <Image src="/images/beyond-work/gym-primary.webp" alt="Gym primary" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="aspect-[4/5] sm:aspect-square rounded-card border border-border relative overflow-hidden">
                <Image src="/images/beyond-work/gym-workout.webp" alt="Gym Workout" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                [TODO: 2–3 paragraphs about 3 years of consistent gym work. What does showing up every day teach you about delayed gratification and consistency? How does the discipline translate to client work — or does it? Be direct and personal, not inspirational-poster vague.]
              </p>
              <p>
                [TODO: What specifically do you train? Powerlifting, bodybuilding, general fitness? Any specific milestone or number you hit that felt significant? Concrete detail makes this real.]
              </p>
            </div>
          </div>

          {/* Street Dogs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Dogs</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                I was once eating food in the college canteen when a stray dog came and sat next to me. I decided to give him some of my chicken, and the immense satisfaction I got from that simple act shifted something in me. From that day on, I started feeding all the street dogs I came across.
              </p>
              <p>
                Today, it&apos;s a core part of my life outside of work. I&apos;ve named a few of my favourite regulars — Dawg, Penny, and Brover. I don&apos;t just feed them; I spend time playing with them and even teaching them basics like &quot;sit&quot;. In a world that&apos;s hyper-optimised, digital, and constantly moving, taking the time to care for these dogs gives me an incredible sense of groundedness and perspective.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 max-w-xl">
              <div className="aspect-[4/5] sm:aspect-square rounded-card border border-border relative overflow-hidden">
                <Image
                  src="/images/beyond-work/street-dogs-puppies.webp"
                  alt="Feeding street puppies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="aspect-[4/5] sm:aspect-square rounded-card border border-border relative overflow-hidden">
                <Image
                  src="/images/beyond-work/street-dogs-petting.webp"
                  alt="Petting a street dog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Travel */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Travel</h2>
            <div className="space-y-8">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  [TODO: 2–3 paragraphs about travel. Where specifically have you been? What changed about how you see problems, markets, or people after a particular trip? The best travel writing names specific places and specific insights — &quot;Dubai showed me X&quot; is better than &quot;travel broadens the mind.&quot;]
                </p>
              </div>

              {/* Travel photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 max-w-xl">
                <div className="aspect-[4/5] sm:aspect-square rounded-card border border-border relative overflow-hidden">
                  <Image src="/images/beyond-work/travel-city.webp" alt="Travel City" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="aspect-[4/5] sm:aspect-square rounded-card border border-border relative overflow-hidden">
                  <Image src="/images/beyond-work/travel-mountain.webp" alt="Travel Mountain" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  [TODO: Write about one specific trip in more detail — where, what happened, what it changed for you professionally or personally.]
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="border-t border-border pt-10">
            <p className="text-text-primary text-xl font-medium leading-relaxed mb-8">
              Everything I do outside of work makes me sharper at what I do inside it.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Want to work with someone like this? →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
