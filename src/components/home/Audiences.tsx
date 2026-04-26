import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Audiences() {
  const audiences = [
    {
      title: "Property Managers",
      body: "Seal leaks behind tiles and concrete walls without a single hammer strike. Cut repair costs by 70% and finish in hours, not days.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
      href: "/property-managers",
    },
    {
      title: "Facility Operators",
      body: "HVAC lines, cooling loops, and foundation pipes repaired with zero operational downtime. We work around your schedule, not against it.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
      href: "/facility-operators",
    },
    {
      title: "Municipal Partners",
      body: "Metro cooling lines, subterranean networks, and public infrastructure sealed without stopping operations or excavating streets.",
      image: "/images/partners.png",
      href: "/municipal-partners",
    },
  ];

  return (
    <section className="py-24 bg-bg-section border-b border-border">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-green-light font-bold text-xs uppercase tracking-[0.2em] mb-4">Who We Serve</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 uppercase tracking-tight">
            Built For Every Scale
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto italic font-serif">
            From a single cracked bathroom pipe to a city's underground network — Pi-Patch adapts.
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
              className="group bg-bg-white flex flex-col overflow-hidden"
            >
              <div className="h-[220px] md:h-[260px] w-full overflow-hidden">
                <img
                  src={aud.image}
                  alt={aud.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400 ease-out grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-bg-white border-x border-b border-border shadow-sm group-hover:bg-brand-green transition-colors duration-400">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-white uppercase tracking-tighter">
                  {aud.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted mb-8 leading-relaxed flex-grow group-hover:text-white/80">
                  {aud.body}
                </p>
                <Link
                  to={aud.href}
                  className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase text-brand-green group-hover:text-accent-gold transition-colors"
                >
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
