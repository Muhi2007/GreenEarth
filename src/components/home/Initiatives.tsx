import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function Initiatives() {
  const [activeTab, setActiveTab] = useState('advisor');

  const initiatives = [
    {
      id: 'advisor',
      name: 'BeCrop® Advisor',
      image: 'https://images.unsplash.com/photo-1581579207000-a6e2e50523be?q=80&w=800&auto=format&fit=crop',
      headline: 'Join the BeCrop® Advisor Program',
      description: 'Become a certified expert in soil biology. Form part of a global network of agronomists and crop consultants leveraging the latest in soil intelligence to provide premium advice.',
      href: '/advisor-program'
    },
    {
      id: 'fields4ever',
      name: 'Fields4Ever',
      image: '/images/initiative-fields4ever.webp',
      headline: 'Global Soil Conservation Initiative',
      description: 'A worldwide, collaborative initiative aiming to sequence and preserve the biological data of soils to safeguard our agricultural future against climate change.',
      href: '/fields4ever'
    },
    {
      id: '2percent',
      name: '2%',
      image: '/images/initiative-2percent.webp',
      headline: 'The 2% Pledge',
      description: 'We commit 2% of our sequencing capacity to academic and non-profit research to further the collective understanding of soil microbiomes and global soil recovery.',
      href: '/2-percent'
    }
  ];

  const activeInitiative = initiatives.find(p => p.id === activeTab) || initiatives[0];

  return (
    <section className="py-24 bg-bg-section border-b border-border overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Commitment</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary uppercase tracking-tight">Global Initiatives</h2>
        </div>

        {/* Tab Bar */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-border/50 mb-12 justify-center">
          <div className="flex mx-auto">
            {initiatives.map((initiative) => (
              <button
                key={initiative.id}
                onClick={() => setActiveTab(initiative.id)}
                className={cn(
                  "relative px-6 sm:px-12 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap",
                  activeTab === initiative.id ? "text-brand-green" : "text-text-muted hover:text-text-primary"
                )}
              >
                {initiative.name}
                {activeTab === initiative.id && (
                  <motion.div
                    layoutId="activeInitiativeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel */}
        <div className="max-w-5xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-0 overflow-hidden shadow-lg border border-border"
            >
              <div className="h-[250px] lg:h-auto overflow-hidden">
                <img src={activeInitiative.image} alt="" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center bg-bg-white">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 uppercase tracking-tighter leading-tight bg-accent-cream inline-block p-2 self-start">{activeInitiative.headline}</h3>
                <p className="text-lg text-text-muted mb-8 leading-relaxed font-serif italic">{activeInitiative.description}</p>
                <Link to={activeInitiative.href} className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-brand-green hover:text-brand-green-dark transition-colors self-start">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
