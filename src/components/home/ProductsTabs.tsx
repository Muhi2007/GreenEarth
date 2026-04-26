import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function ProductsTabs() {
  const [activeTab, setActiveTab] = useState('farm');

  const products = [
    {
      id: 'farm',
      name: 'BeCrop® Farm',
      logo: 'https://images.unsplash.com/photo-1599818817296-658b4daed653?q=80&w=100&auto=format&fit=crop',
      headline: 'Maximize the Potential of Every Acre',
      description: 'BeCrop® Farm equips farmers and retailers with an intuitive dashboard to manage plots, compare functional performance, and make precise agronomic decisions across their entire operation.',
      href: '/becrop-farm'
    },
    {
      id: 'test',
      name: 'BeCrop® Test',
      logo: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=100&auto=format&fit=crop',
      headline: 'Advanced Soil Testing standard',
      description: 'The global standard for soil biological reporting. Get detailed insights on biodiversity, nutrient cycling, disease risk, and stress adaptation from a single soil sample.',
      href: '/becrop-test'
    },
    {
      id: 'trials',
      name: 'BeCrop® Trials',
      logo: 'https://images.unsplash.com/photo-1581579207000-a6e2e50523be?q=80&w=100&auto=format&fit=crop',
      headline: 'Functional Analysis for Inputs',
      description: 'Independent, scientific evaluation of agricultural input efficacy. Validate how your biological products impact soil health and articulate their true value to the market.',
      href: '/becrop-trials'
    },
    {
      id: 'rate',
      name: 'BeCrop® Rate',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=100&auto=format&fit=crop',
      headline: 'Sustainable Land Management Tool',
      description: 'A singular, powerful metric quantifying the sustainability of agricultural management practices, enabling verified green marketing and carbon market integration.',
      href: '/becrop-rate'
    }
  ];

  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <section className="py-24 bg-bg-section border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.2em] mb-4">The BeCrop® Suite</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary uppercase tracking-tight">Our Core Products</h2>
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
                  activeTab === product.id ? "text-brand-green" : "text-text-muted hover:text-text-primary"
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
        <div className="max-w-4xl mx-auto min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-bg-white p-8 md:p-12 border border-border shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-accent-cream hidden md:block">
                <img src={activeProduct.logo} alt="" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 uppercase tracking-tighter">{activeProduct.headline}</h3>
                <p className="text-lg text-text-muted mb-8 leading-relaxed font-serif italic">{activeProduct.description}</p>
                <Link to={activeProduct.href} className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-brand-green hover:text-brand-green-dark transition-colors">
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
