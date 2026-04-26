import { Button } from "@/components/ui/button";

export function WorldMap() {
  return (
    <section className="py-24 bg-bg-white border-b border-border text-center overflow-hidden">
      <div className="container mx-auto px-5 max-w-5xl relative z-10 flex flex-col items-center">
        <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-4">Global Reach</p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 uppercase tracking-tight max-w-3xl leading-[1.1]">
          BioSoil's BeCrop® Technology is Used All Over the World.
        </h2>
        
        <div className="relative w-full aspect-[2/1] max-w-4xl mx-auto mb-16 opacity-60 grayscale">
            <img
              src="/images/world-map.png"
              alt="World map showing global usage of BeCrop technology"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-white via-transparent to-bg-white pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export function FooterCTA() {
  return (
    <section className="bg-bg-dark text-text-inverse py-20 px-5 border-b border-border-dark">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-dark">
          
          <div className="p-8 md:pr-16 md:pl-0 flex flex-col items-start justify-center">
            <h5 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-white">Get in Touch</h5>
            <p className="font-serif italic text-text-muted mb-8 text-lg">We are happy to answer any questions you have about our technology or pricing.</p>
            <Button variant="outline" className="border-border-dark text-white hover:bg-white hover:text-bg-dark">
              Get in Touch
            </Button>
          </div>

          <div className="p-8 md:pl-16 md:pr-0 flex flex-col items-start justify-center">
            <h5 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-white">Request a Demo</h5>
            <p className="font-serif italic text-text-muted mb-8 text-lg">See the benefits of integrating biological soil data into your agronomic operations.</p>
            <Button className="bg-brand-green text-white hover:bg-brand-green-dark border border-brand-green">
              Request a Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
