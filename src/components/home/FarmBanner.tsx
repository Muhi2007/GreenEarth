import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FarmBanner() {
  return (
    <section className="bg-bg-dark py-12 px-5 text-center relative border-b border-border-dark">
      <div className="absolute inset-0 bg-brand-green-dark/10 mix-blend-overlay" />
      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <img src="https://images.unsplash.com/photo-1599818817296-658b4daed653?q=80&w=100&auto=format&fit=crop" alt="BeCrop Farm Logo" className="w-8 h-8 object-cover rounded-full grayscale" />
          <h2 className="text-white font-bold text-lg tracking-widest uppercase">BeCrop® Farm</h2>
          <span className="px-2 py-0.5 rounded-full bg-brand-green text-white text-[10px] font-bold uppercase tracking-widest ml-2">
            New
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight uppercase">
          Maximize the Potential of Every Acre
        </h3>
        <Link to="/becrop-farm" className="text-brand-green-light hover:text-white transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2 group">
          Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
