import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FarmBanner() {
  return (
    <section className="bg-bg-dark py-14 px-5 text-center relative border-b border-border-dark">
      <div className="absolute inset-0 bg-brand-green-dark/10 mix-blend-overlay" />
      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center gap-4">
        <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.2em]">
          Now available in Baku
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase">
          Stop breaking walls to fix a 5mm crack.
        </h3>
        <Link
          to="/contact"
          className="text-brand-green-light hover:text-white transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2 group"
        >
          Request a Pilot Repair{" "}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
