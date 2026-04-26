export function LogoStrip() {
  const logos = [
    "SYNGENTA", "BASF", "BAYER", "CORTEVA", "UPL",
    "FMC", "NUTECH", "YARA", "MONSANTO", "PIONEER",
    "SYNGENTA", "BASF", "BAYER", "CORTEVA", "UPL"
  ];

  return (
    <section className="py-12 bg-bg-white border-b border-border overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5 relative">
        <div className="flex w-full overflow-hidden">
          {/* Marquee Wrapper */}
          <div className="flex gap-16 md:gap-24 animate-marquee min-w-max">
            {logos.map((logo, i) => (
              <span 
                key={i} 
                className="font-bold text-2xl tracking-tighter text-text-muted hover:text-text-primary grayscale hover:grayscale-0 opacity-55 hover:opacity-100 transition-all duration-300 whitespace-nowrap cursor-pointer uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-white to-transparent" />
      </div>
    </section>
  );
}
