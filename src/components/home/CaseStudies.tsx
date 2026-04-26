import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CaseStudies() {
  const caseStudies = [
    {
      headline: "22K Savings/Year and Increased Yield and Quality",
      href: "/case-studies/strawberry-yield"
    },
    {
      headline: "108 Bushels/Acre for 5th Generation Farmer",
      href: "/case-studies/corn-yield"
    },
    {
      headline: "170% ROI for California Vine Grower",
      href: "/case-studies/vineyard-roi"
    }
  ];

  return (
    <section className="py-24 bg-bg-dark border-b border-border-dark">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight max-w-2xl">
            Success Stories from the Field
          </h2>
          <Link to="/case-studies" className="text-sm font-bold tracking-widest uppercase text-brand-green-light hover:text-white flex items-center gap-2 transition-colors shrink-0">
            Check Out Our Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <Link 
              key={i} 
              to={study.href}
              className="block bg-bg-dark p-8 border border-border-dark hover:border-brand-green hover:shadow-[0_4px_24px_rgba(45,106,79,0.15)] transition-all duration-300 group"
            >
              <span className="inline-block px-3 py-1 rounded bg-brand-green-dark text-brand-green-light text-[10px] font-bold uppercase tracking-widest mb-6">
                Case Study
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8 group-hover:text-brand-green-light transition-colors leading-snug">
                {study.headline}
              </h3>
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full border border-border-dark bg-transparent group-hover:bg-brand-green flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
