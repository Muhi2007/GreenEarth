import { BrainCircuit, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Technology() {
  return (
    <section className="py-24 bg-bg-white border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="mb-16">
          <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Biomimetic Engineering
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-3 uppercase tracking-tight max-w-3xl">
            AquaClot™ Technology: How Liquid Becomes a Seal
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-brand-green mb-6" />
          <p className="text-lg text-text-muted max-w-2xl font-serif italic leading-relaxed">
            AquaClot mimics the human body's blood-clotting mechanism — a liquid that flows freely until it finds the leak, then hardens instantly to seal it. No digging. No waiting. No waste.
          </p>
        </div>

        <div className="h-px bg-border w-full mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div className="card-interactive bg-accent-cream p-8 md:p-12 rounded-lg border border-transparent">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
              <BrainCircuit className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 uppercase tracking-tighter">
              AI-Driven Leak Localization
            </h3>
            <p className="text-text-muted text-base leading-relaxed">
              Our KNN algorithm integrates with existing SCADA systems or temporary pressure sensors, mapping hydraulic anomalies to pinpoint the exact leaking pipe segment with 97% accuracy. No underground sensors required.
            </p>
          </div>

          <div className="card-interactive bg-accent-cream p-8 md:p-12 rounded-lg border border-transparent">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
              <Droplet className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 uppercase tracking-tighter">
              Biomimetic Fluidic Sealing
            </h3>
            <p className="text-text-muted text-base leading-relaxed">
              A food-grade suspension of Sodium Alginate and Nanocellulose flows through your pipe and self-seals upon contact with calcium in surrounding concrete — forming a 50 kPa hydrogel plug in under 5 seconds.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-border-dark text-text-primary btn">
            <Link to="/technology">Explore the Full Technology →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
