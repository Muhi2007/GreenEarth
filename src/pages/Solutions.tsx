import { PageHero } from "@/components/sections/PageHero";
import { Link } from "react-router-dom";
import { ScanSearch, Droplet, ClipboardCheck, FileArchive, ArrowRight } from "lucide-react";

export function Solutions() {
  const products = [
    {
      name: "Pi-Patch™ Detect",
      desc: "Digital twin simulation + KNN machine learning pinpoints the exact leaking pipe segment with 97% accuracy. No underground sensors.",
      icon: <ScanSearch className="w-6 h-6" />,
      href: "/pi-patch-detect"
    },
    {
      name: "Pi-Patch™ Seal",
      desc: "Food-grade bio-sealant injected into the live pipe. Seals in under 5 seconds on contact with surrounding calcium. No shutdown needed.",
      icon: <Droplet className="w-6 h-6" />,
      href: "/pi-patch-seal"
    },
    {
      name: "Pi-Patch™ Validate",
      desc: "Automated 15-minute hydrostatic pressure test validates every repair. Timestamped, logged, and certified before we leave the site.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      href: "/pi-patch-validate"
    },
    {
      name: "Pi-Patch™ Report",
      desc: "Full repair documentation — pre/post pressure data, material safety logs, environmental compliance certificate — ready for auditors.",
      icon: <FileArchive className="w-6 h-6" />,
      href: "/pi-patch-report"
    }
  ];

  return (
    <div className="bg-bg-white relative">
      <PageHero
        eyebrow="Solutions"
        heading="Stop Breaking Walls. Start Healing Pipes."
        subheading="Four integrated products. One seamless repair protocol. Zero demolition."
        image="https://images.unsplash.com/photo-1518600506278-4e844b207e3c?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-bg-section border-y border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="card-interactive bg-white p-8 md:p-12 border border-border shadow-sm flex flex-col h-full group"
              >
                <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-lg flex items-center justify-center mb-8">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{p.name}</h3>
                <p className="text-text-muted text-base mb-10 leading-relaxed flex-grow">{p.desc}</p>
                <Link
                  to={p.href}
                  className="text-sm font-semibold text-brand-green group-hover:text-brand-green-dark transition-colors flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
