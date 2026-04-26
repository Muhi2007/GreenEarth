import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Audiences() {
  const audiences = [
    {
      title: "Farmers",
      body: "Understand your soil's unique biological fingerprint to address uncertain crop yields, reduce disease outbreaks, and optimize input costs.",
      image: "https://images.unsplash.com/photo-1599818817296-658b4daed653?q=80&w=600&auto=format&fit=crop",
      href: "/farmers"
    },
    {
      title: "Advisors & Retailers",
      body: "Predict disease risks, identify biological bottlenecks, and provide precision farm recommendations backed by deep data. Become a certified BeCrop advisor.",
      image: "https://images.unsplash.com/photo-1581579207000-a6e2e50523be?q=80&w=600&auto=format&fit=crop",
      href: "/advisors"
    },
    {
      title: "Manufacturers",
      body: "Generate baseline field data through independent trials to validate the performance of biological inputs with data-driven efficacy reports.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=600&auto=format&fit=crop",
      href: "/manufacturer"
    }
  ];

  return (
    <section className="py-24 bg-bg-section border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.2em] mb-4">Empowering the Ecosystem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 uppercase tracking-tight">Tailored Solutions</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto italic font-serif">
            Bringing biological intelligence to every stage of agricultural production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((aud, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-bg-white flex flex-col lg:first:col-span-1 md:first:col-span-2 lg:[&:nth-child(n)]:col-span-1 overflow-hidden"
            >
              <div className="h-[220px] md:h-[360px] w-full overflow-hidden">
                <img 
                  src={aud.image} 
                  alt={aud.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400 ease-out grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-bg-white border-x border-b border-border shadow-sm group-hover:bg-brand-green transition-colors duration-400">
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-white uppercase tracking-tighter">{aud.title}</h3>
                <p className="text-base text-text-muted mb-8 leading-relaxed flex-grow group-hover:text-white/80">{aud.body}</p>
                <Link to={aud.href} className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-brand-green group-hover:text-accent-gold transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
