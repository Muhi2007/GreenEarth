import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

function AnimatedCounter({ value, duration = 1500 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Ease out quad
        const easeOut = percentage * (2 - percentage);
        setCount(Math.floor(easeOut * value));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const stats = [
    { value: 55, suffix: "M", label: "Microorganisms", sublabel: "The largest taxonomic database." },
    { value: 60, suffix: "K", label: "Farmers", sublabel: "Have improved soil health." },
    { value: 200, suffix: "+", label: "Crops", sublabel: "Analyzed." },
    { value: 56, suffix: "+", label: "Countries", sublabel: "Uncovering global soil intelligence." },
  ];

  return (
    <section className="bg-bg-dark border-t border-border-dark relative z-20">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border-dark">
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-12 px-6 flex flex-col items-center">
              <div className="text-5xl font-bold text-accent-gold mb-2 tracking-tighter">
                <AnimatedCounter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-text-inverse font-semibold mb-1 text-base uppercase tracking-widest">{stat.label}</div>
              <div className="text-text-muted text-sm max-w-[200px] mt-2 italic font-serif leading-relaxed">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
