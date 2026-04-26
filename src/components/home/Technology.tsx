import { ArrowRight, Database, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Technology() {
  return (
    <section className="py-24 bg-bg-white border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="mb-16">
          <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-4">BeCrop® Technology</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 uppercase tracking-tight max-w-3xl">
            The Global Standard for Soil Health
          </h2>
          <p className="text-lg text-text-muted max-w-2xl font-serif italic leading-relaxed">
            Our proprietary technology decodes soil biology using advanced DNA sequencing and machine learning, translating complex microbiological data into actionable agronomic indices.
          </p>
        </div>

        <div className="h-px bg-border w-full mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div className="bg-accent-cream p-8 md:p-12 rounded-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
              <Database className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 uppercase tracking-tighter">Largest Database</h3>
            <p className="text-text-muted text-lg leading-relaxed">
              Leverage insights from over 55 million microorganisms classified and functionally modeled from agricultural soils worldwide.
            </p>
          </div>

          <div className="bg-accent-cream p-8 md:p-12 rounded-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 uppercase tracking-tighter">Independent Platform</h3>
            <p className="text-text-muted text-lg leading-relaxed">
              An unbiased, scientific approach to evaluating soil health. BeCrop® provides reliable, third-party validation for sustainable farming inputs.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-border-dark text-text-primary">
            Check out BeCrop® Technology
          </Button>
        </div>
      </div>
    </section>
  );
}
