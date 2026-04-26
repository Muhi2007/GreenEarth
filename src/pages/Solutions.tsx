import { PageHero } from "@/components/sections/PageHero";
import { Link } from "react-router-dom";
import { AreaChart, ShieldCheck, CircleDot, BarChart3, ArrowRight } from "lucide-react";

export function Solutions() {
  const products = [
    {
      name: "BeCrop® Farm",
      desc: "Comprehensive farm-level soil biology dashboard to manage plots and compare functional performance.",
      icon: <AreaChart className="w-6 h-6" />,
      href: "/becrop-farm"
    },
    {
      name: "BeCrop® Test",
      desc: "Standard soil test reporting on biodiversity, nutrient cycling, disease risk, and stress adaptation.",
      icon: <ShieldCheck className="w-6 h-6" />,
      href: "/becrop-test"
    },
    {
      name: "BeCrop® Trials",
      desc: "Independent, scientific evaluation of agricultural input efficacy on soil biology.",
      icon: <CircleDot className="w-6 h-6" />,
      href: "/becrop-trials"
    },
    {
      name: "BeCrop® Rate",
      desc: "A singular metric quantifying the sustainability of agricultural management practices on soil health.",
      icon: <BarChart3 className="w-6 h-6" />,
      href: "/becrop-rate"
    }
  ];

  return (
    <div className="bg-bg-white relative">
      <PageHero 
        eyebrow="Solutions"
        heading="Biological Intelligence for the entire ecosystem"
        subheading="Whether you are a farmer, advisor, or manufacturer, we have the right tools to unlock the potential of your soil."
        image="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-bg-dark text-text-inverse border-y border-border-dark">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-px bg-border-dark">
            {products.map((p, i) => (
              <div key={i} className="bg-bg-dark p-8 md:p-16 hover:bg-[#1A1A1A] transition-colors flex flex-col h-full border border-border-dark group">
                <div className="w-16 h-16 bg-brand-green/20 text-brand-green-light rounded-lg flex items-center justify-center mb-8">
                  {p.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{p.name}</h3>
                <p className="text-text-muted text-lg mb-12 leading-relaxed flex-grow">{p.desc}</p>
                <Link to={p.href} className="text-base font-semibold text-brand-green-light group-hover:text-white transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
