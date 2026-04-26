import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { ProductCTA } from "@/components/sections/ProductCTA";
import { Database, Cpu, Network } from "lucide-react";

export function Technology() {
  return (
    <div className="bg-bg-white relative">
      <PageHero 
        eyebrow="Technology"
        heading="The global standard for soil health"
        subheading="Powered by the world's largest microorganism database and advanced machine learning models."
        image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          How BeCrop® Works
        </h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          We use next-generation DNA sequencing to identify all the bacteria and fungi in your soil. 
          Then, our proprietary ecological computing pipeline models how these organisms interact with each other and their environment.
        </p>
      </section>

      <section className="py-16 md:py-24 bg-bg-section border-y border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">55M Microorganisms</h3>
              <p className="text-text-muted leading-relaxed">The largest proprietary taxonomic database of soil biology on the planet.</p>
            </div>
            
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Ecological Networks</h3>
              <p className="text-text-muted leading-relaxed">We map the functional interactions between species, not just their presence.</p>
            </div>

            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">AI-Driven Insights</h3>
              <p className="text-text-muted leading-relaxed">Machine learning algorithms translate complex biological data into practical agronomic indices.</p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyHighlight 
        headline="Predicting potato common scab risk before planting."
        result="98% Accuracy"
        href="/case-studies"
      />

      <ProductCTA 
        heading="Experience the power of BeCrop®"
        buttonLabel="Request a Demo"
        href="/contact"
      />
    </div>
  );
}
