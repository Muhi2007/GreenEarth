import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Mission() {
  return (
    <section className="py-24 bg-bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Supporting the Future of Sustainable Agriculture
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold text-text-primary mb-8 leading-[1.1] uppercase tracking-tighter">
              A Global Foundation For Soil Recovery.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-green text-white hover:bg-brand-green-dark">
                About Biome Makers
              </Button>
              <Button variant="outline" className="text-text-primary hover:bg-bg-section">
                Our Initiatives
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-serif italic mb-6">
              Biome Makers is a global AgTech company measuring soil health and biological activity through DNA sequencing and advanced ecological computing. 
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              We integrate the largest taxonomic database of microorganisms with advanced machine learning to provide you with a comprehensive understanding of your soil's biological functions, paving the way for more resilient and productive farming practices worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
