import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function ProductsTabs() {
  const [activeTab, setActiveTab] = useState("detect");

  const products = [
    {
      id: "detect",
      name: "Pi-Patch™ Detect",
      tagline: "Find It Before You Fix It",
      description:
        "Digital twin simulation via EPANET combined with KNN machine learning pinpoints the exact leaking segment across your pipe network — without a single physical underground sensor.",
      href: "/pi-patch-detect",
    },
    {
      id: "seal",
      name: "Pi-Patch™ Seal",
      tagline: "The 5-Second Repair",
      description:
        "Our bio-sealant liquid is injected into the live, wet pipe. It flows normally until it exits the crack, where external calcium triggers instant cross-linking into a pressure-resistant hydrogel plug.",
      href: "/pi-patch-seal",
    },
    {
      id: "validate",
      name: "Pi-Patch™ Validate",
      tagline: "Proof, Not Promises",
      description:
        "Every repair concludes with an automated 15-minute hydrostatic pressure test. Mathematical proof that the line is sealed — logged, timestamped, and delivered to you.",
      href: "/pi-patch-validate",
    },
    {
      id: "report",
      name: "Pi-Patch™ Report",
      tagline: "Transparent Impact Documentation",
      description:
        "Full repair documentation including pre/post pressure data, material usage logs, and environmental compliance certification — ready for insurance, auditors, or municipal reporting.",
      href: "/pi-patch-report",
    },
  ];

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section className="py-24 bg-bg-section border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary uppercase tracking-tight">
            The Pi-Patch™ Suite
          </h2>
        </div>

        {/* Tab Bar */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-border mb-12">
          <div className="flex min-w-max mx-auto px-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={cn(
                  "relative px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap",
                  activeTab === product.id
                    ? "text-brand-green"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {product.name}
                {activeTab === product.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel */}
        <div className="max-w-4xl mx-auto min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-bg-white p-8 md:p-12 border border-border shadow-sm"
            >
              <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-3">
                {activeProduct.tagline}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 uppercase tracking-tighter">
                {activeProduct.name}
              </h3>
              <p className="text-lg text-text-muted mb-8 leading-relaxed font-serif italic">
                {activeProduct.description}
              </p>
              <Link
                to={activeProduct.href}
                className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-brand-green hover:text-brand-green-dark transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
