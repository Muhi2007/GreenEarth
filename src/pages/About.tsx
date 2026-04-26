import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";

export function About() {
  return (
    <div className="bg-bg-white relative">
      <PageHero
        eyebrow="About AquaClot"
        heading="We Rebuild Infrastructure Without Breaking It."
        subheading="Founded to answer one question: why does fixing a 5mm pipe crack require a sledgehammer?"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          AquaClot was built on a simple premise: the cure for a micro-fissure should not cost more — financially or structurally — than the leak itself. We combine AI-driven leak localization with biomimetic fluidic chemistry to heal embedded pipes from the inside. Based in Baku, Azerbaijan, we are bringing non-destructive pipe repair technology to a global infrastructure market that has not fundamentally changed in 50 years.
        </p>
      </section>

      <CaseStudyHighlight
        headline="Join us in rebuilding the world's infrastructure — without breaking a single wall."
        result="Partner With Us"
        href="/contact"
      />
    </div>
  );
}
