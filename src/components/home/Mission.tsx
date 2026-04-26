import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Mission() {
  return (
    <section className="py-24 bg-bg-white border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-6">
              The Problem With Pipe Repair Today
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold text-text-primary mb-8 leading-[1.1] uppercase tracking-tighter">
              Cities lose billions of litres of water every year. The cure shouldn't cost more than the leak.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark btn">
                <Link to="/technology">How It Works</Link>
              </Button>
              <Button asChild variant="outline" className="text-text-primary hover:bg-bg-section btn">
                <Link to="/technology">Our Technology</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-serif italic mb-6">
              78% of urban water leaks come from micro-fissures in embedded pipes — behind bathroom tiles, under concrete slabs, beneath city streets. Today's fix is a sledgehammer. Ours is a liquid.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Traditional excavation costs anywhere from $500 to $15,000+ and causes days of operational downtime. Current trenchless solutions require bone-dry pipes, take 24 hours to cure, and cannot navigate 90-degree bends in indoor plumbing. We built Pi-Patch to change that — permanently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
