import { PageHero } from "@/components/sections/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      metric: "20% Reduction",
      title: "Optimized nitrogen application, saving $40/acre while maintaining identical yields in corn.",
      crop: "Corn",
      region: "Midwest, USA"
    },
    {
      metric: "100% Protection",
      title: "Identified hidden pathogen risks, saving the upcoming high-value cash crop from sudden death syndrome.",
      crop: "Soybeans",
      region: "Brazil"
    },
    {
      metric: "Validated Efficacy",
      title: "Proved the efficacy of a new biostimulant, leading to a successful global launch.",
      crop: "Grapes",
      region: "Spain"
    },
    {
      metric: "30% Increase",
      title: "Demonstrated a 30% increase in natural phosphorus mobilization across differing climates.",
      crop: "Wheat",
      region: "European Union"
    }
  ];

  return (
    <div className="bg-bg-white relative">
      <PageHero 
        eyebrow="Case Studies"
        heading="Real results from the field"
        subheading="See how farmers, advisors, and manufacturers are using biological intelligence to transform agriculture."
        image="https://images.unsplash.com/photo-1592982537447-6f2c6e61208a?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-bg-section">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white p-8 md:p-12 border border-border shadow-sm flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-semibold mb-6 self-start">
                  {study.metric}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex-grow">
                  {study.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-8 text-sm font-semibold text-text-muted">
                  <span className="bg-bg-section px-3 py-1 rounded-sm">{study.crop}</span>
                  <span className="bg-bg-section px-3 py-1 rounded-sm">{study.region}</span>
                </div>
                <Link to="#" className="text-base font-semibold text-brand-green group-hover:text-brand-green-dark transition-colors flex items-center gap-2">
                  Read Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
