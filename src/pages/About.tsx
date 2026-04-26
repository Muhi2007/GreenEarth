import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";

export function About() {
  return (
    <div className="bg-bg-white relative">
      <PageHero 
        eyebrow="About Us"
        heading="On a mission to decode soil biology"
        subheading="We believe that understanding the soil microbiome is the key to sustainable, productive agriculture."
        image="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          A global AgTech company
        </h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          Founded in 2015, Biome Makers has grown into the leading biological soil informatics company in the world. 
          By combining DNA sequencing and machine learning, we've created the largest taxonomic database of soil microorganisms, 
          empowering farmers around the world to make data-driven agronomic decisions.
        </p>
      </section>

      {/* Stats/Milestones could go here */}

      <CaseStudyHighlight 
        headline="Join us in restoring the ecological health of agricultural soils worldwide."
        result="Fields4Ever"
        href="/about/initiatives"
      />
    </div>
  );
}
