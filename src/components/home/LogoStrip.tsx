export function LogoStrip() {
  const logos = [
    "EPANET", "SCADA", "Food-Grade Certified", "Municipal Water Authority",
    "ISO 9001", "ADB", "World Bank",
    "EPANET", "SCADA", "Food-Grade Certified", "Municipal Water Authority",
    "ISO 9001", "ADB", "World Bank",
  ];

  return (
    <section className="py-10 bg-bg-white border-b border-border overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 mb-4 text-center">
        <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em]">
          Trusted By &amp; Built Upon
        </p>
      </div>
      <div className="container mx-auto max-w-7xl px-5 relative">
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-16 md:gap-24 animate-marquee min-w-max">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="font-bold text-xl tracking-tighter text-text-muted hover:text-text-primary opacity-55 hover:opacity-100 transition-all duration-300 whitespace-nowrap cursor-pointer uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-white to-transparent" />
      </div>
    </section>
  );
}
