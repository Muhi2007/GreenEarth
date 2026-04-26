import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { ProductCTA } from "@/components/sections/ProductCTA";
import { BrainCircuit, Droplet, ClipboardCheck } from "lucide-react";

export function Technology() {
  return (
    <div className="bg-bg-white relative">
      <PageHero
        eyebrow="Our Technology"
        heading="The Science Behind the Seal"
        subheading="Two-phase biomimetic engineering: AI localization + autonomous fluidic repair. No excavation required."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          How AquaClot™ Works
        </h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          AquaClot mimics the human body's blood-clotting mechanism. A food-grade bio-sealant flows freely through your pipe under normal pressure — until it exits through a micro-fissure, where contact with calcium in surrounding concrete triggers instant cross-linking into a 50 kPa hydrogel plug. In under 5 seconds.
        </p>
      </section>

      <section className="py-16 md:py-24 bg-bg-section border-y border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Phase 1: The Brain</h3>
              <p className="text-text-muted leading-relaxed">
                Our KNN algorithm integrates with EPANET digital twin simulations to pinpoint the exact leaking segment with 97% accuracy — without any underground sensors.
              </p>
            </div>

            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <Droplet className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Phase 2: The Cure</h3>
              <p className="text-text-muted leading-relaxed">
                Sodium Alginate + Nanocellulose suspension is injected into the live pipe. It flows freely until it exits the crack, then cross-links into a hydrogel plug in under 5 seconds.
              </p>
            </div>

            <div className="flex flex-col text-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green mb-6 shadow-sm">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Phase 3: Proof</h3>
              <p className="text-text-muted leading-relaxed">
                A 15-minute hydrostatic pressure test validates the seal before we leave. Pre/post pressure data, material logs, and compliance certificate delivered within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyHighlight
        headline="Bathroom pipe leak sealed in 2.5 hours — no demolition, no tile removal."
        result="2.5 hr Repair"
        href="/case-studies"
      />

      <ProductCTA
        heading="See the science in action."
        buttonLabel="Request a Technology Briefing"
        href="/contact"
      />
    </div>
  );
}
