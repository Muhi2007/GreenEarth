import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ─── Map point data ──────────────────────────────────────────────
const mapPoints = [
  { id: 1, city: "Baku, Azerbaijan",  x: 59.5, y: 28.5, status: "active" as const },
  { id: 2, city: "Istanbul, Turkey",  x: 56.0, y: 27.0, status: "active" as const },
  { id: 3, city: "Dubai, UAE",        x: 61.5, y: 34.5, status: "pilot"  as const },
  { id: 4, city: "London, UK",        x: 48.5, y: 22.0, status: "pilot"  as const },
  { id: 5, city: "Berlin, Germany",   x: 51.5, y: 21.5, status: "pilot"  as const },
  { id: 6, city: "New York, USA",     x: 25.0, y: 27.5, status: "target" as const },
  { id: 7, city: "São Paulo, Brazil", x: 31.0, y: 58.0, status: "target" as const },
  { id: 8, city: "Singapore",         x: 76.5, y: 44.5, status: "target" as const },
];

const statusColors: Record<string, string> = {
  active: "#2D6A4F",
  pilot:  "#D4A853",
  target: "rgba(255,255,255,0.5)",
};

// ─── MapPoint sub-component ──────────────────────────────────────
interface MapPointProps {
  point: typeof mapPoints[0];
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

function MapPoint({ point, index, isActive, onEnter, onLeave }: MapPointProps) {
  const color = statusColors[point.status];
  return (
    <div
      className="absolute"
      style={{ left: `${point.x}%`, top: `${point.y}%`, transform: "translate(-50%,-50%)", zIndex: 10 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Pulse ring */}
      <div
        className="absolute rounded-full animate-ping"
        style={{
          width: "20px", height: "20px",
          top: "-6px", left: "-6px",
          backgroundColor: color,
          opacity: 0.3,
          animationDuration: `${1.8 + index * 0.3}s`,
        }}
      />
      {/* Invisible mobile tap zone */}
      <div
        className="absolute md:hidden"
        style={{ width: "32px", height: "32px", top: "-12px", left: "-12px" }}
        onTouchStart={onEnter}
        onTouchEnd={onLeave}
      />
      {/* Core dot */}
      <div
        className="relative rounded-full cursor-pointer"
        style={{
          width: "8px", height: "8px",
          backgroundColor: color,
          boxShadow: `0 0 8px 2px ${color}`,
          animation: `floatPoint ${2.4 + index * 0.2}s ease-in-out infinite`,
          animationDelay: `${index * 0.15}s`,
        }}
      />
      {/* Tooltip */}
      {isActive && (
        <div
          className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2
                     bg-white text-gray-900 text-xs font-medium
                     px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
          style={{ zIndex: 20 }}
        >
          {point.city}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
        </div>
      )}
    </div>
  );
}

// ─── Legend item ─────────────────────────────────────────────────
function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <span className="text-text-muted text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

// ─── WorldMap ─────────────────────────────────────────────────────
export function WorldMap() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bg-white border-b border-border text-center overflow-hidden">
      <div className="container mx-auto px-5 max-w-5xl relative z-10 flex flex-col items-center">
        <p className="text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-4">Global Reach</p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 uppercase tracking-tight max-w-3xl leading-[1.1]">
          AquaClot™ Technology is Active All Over the World.
        </h2>

        {/* Map container */}
        <div className="relative w-full max-w-4xl mx-auto mb-6 select-none">
          <img
            src="/images/world-map.png"
            alt="AquaClot global deployment map"
            className="w-full h-auto"
            draggable={false}
          />
          {/* Gradient fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-white via-transparent to-bg-white pointer-events-none" />

          {/* Point layer */}
          {mapPoints.map((point, index) => (
            <MapPoint
              key={point.id}
              point={point}
              index={index}
              isActive={activePoint === point.id}
              onEnter={() => setActivePoint(point.id)}
              onLeave={() => setActivePoint(null)}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 justify-center mt-2">
          <LegendItem color="#2D6A4F" label="Active Deployment" />
          <LegendItem color="#D4A853" label="Pilot Program" />
          <LegendItem color="rgba(100,100,100,0.6)" label="Target Market" />
        </div>
      </div>
    </section>
  );
}

// ─── FooterCTA ────────────────────────────────────────────────────
export function FooterCTA() {
  return (
    <section className="bg-bg-dark text-text-inverse py-20 px-5 border-b border-border-dark">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-dark">
          <div className="p-8 md:pr-16 md:pl-0 flex flex-col items-start justify-center">
            <h5 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-white">
              Ready to stop breaking walls?
            </h5>
            <p className="font-serif italic text-text-muted mb-8 text-lg">
              Whether you manage a single apartment or a city's water grid — we have a solution.
            </p>
            <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark btn">
              <Link to="/contact">Request a Pilot Repair</Link>
            </Button>
          </div>

          <div className="p-8 md:pl-16 md:pr-0 flex flex-col items-start justify-center">
            <h5 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4 text-white">
              Investors &amp; Partners
            </h5>
            <p className="font-serif italic text-text-muted mb-8 text-lg">
              We're disrupting a $14B market. Let's build it together.
            </p>
            <Button asChild variant="outline" className="border-border-dark text-white hover:bg-white hover:text-bg-dark btn">
              <Link to="/contact">Investor Relations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
