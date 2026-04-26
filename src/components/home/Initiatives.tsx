import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Initiatives() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "100% Biodegradable",
      headline: "Unlike epoxy resins, our bio-sealant is agriculturally derived and legally safe for municipal sewer disposal.",
      body: "Sodium Alginate (seaweed extract) and Nanocellulose (agricultural waste). Zero toxic byproduct. Zero environmental liability. We submit full material safety data sheets to every municipal partner before any deployment.",
      cta: { label: "Read the Science →", href: "/technology" },
    },
    {
      label: "Radical Transparency",
      headline: "We tell you exactly where our technology works — and where it doesn't.",
      body: "Pi-Patch is governed by the Bingham Plastic yield-stress model. We operate exclusively on pinholes and micro-fissures in embedded environments. We openly publish our limitations so that every client can make a fully informed decision.",
      cta: { label: "See Our Constraints →", href: "/technology" },
    },
    {
      label: "$14 Billion Market",
      headline: "We're disrupting a global market that hasn't changed its methods in 50 years.",
      body: "From aging Soviet-era apartment blocks to modern commercial towers, the demand for non-destructive pipe repair is global, urgent, and massively underserved. Pi-Patch is positioned to lead the infrastructure healing category.",
      cta: { label: "Investor Relations →", href: "/contact" },
    },
  ];

  return (
    <section className="py-24 bg-bg-white border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="mb-16">
          <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary uppercase tracking-tight max-w-3xl">
            Three reasons Pi-Patch changes everything.
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-brand-green mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Tab buttons */}
          <div className="flex flex-row lg:flex-col overflow-x-auto no-scrollbar lg:w-[280px] shrink-0 border-b lg:border-b-0 lg:border-r border-border">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "px-6 py-5 text-left text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap lg:whitespace-normal border-b border-border last:border-b-0",
                  activeTab === i
                    ? "bg-brand-green text-white"
                    : "text-text-muted hover:text-text-primary hover:bg-bg-section"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="flex-1 p-8 md:p-12 bg-bg-section">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 leading-snug">
              {tabs[activeTab].headline}
            </h3>
            <p className="text-text-muted leading-relaxed mb-8 font-serif italic text-lg">
              {tabs[activeTab].body}
            </p>
            <Link
              to={tabs[activeTab].cta.href}
              className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-brand-green hover:text-brand-green-dark transition-colors"
            >
              {tabs[activeTab].cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
