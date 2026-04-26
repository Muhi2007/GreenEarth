import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const applyScrollEffect = () => {
      if (!heroRef.current) return;
      
      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;
      
      // Pause updates when hero is completely off-screen
      if (scrollY > heroHeight) return;

      // Safe guard against NaN
      const progress = heroHeight > 0 ? Math.min(scrollY / heroHeight, 1) : 0;
      
      const scale = 1 + 0.12 * progress;
      const translateY = -60 * progress;
      const overlayAlpha = 0.55 + 0.27 * progress;

      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
      if (overlayRef.current) {
        overlayRef.current.style.opacity = overlayAlpha.toString();
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          applyScrollEffect();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize correct state if user refreshes mid-page
    applyScrollEffect();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bg-dark shrink-0" role="banner">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src="/images/hero-bg.mp4"
        className="absolute inset-0 w-full h-full object-cover origin-center"
        style={{ willChange: "transform" }}
        aria-hidden="true"
        poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Dark overlay — opacity controlled by scroll */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none" 
        style={{ opacity: 0.55, willChange: "opacity" }}
      />

      <div className="container relative z-10 mx-auto px-5 mt-16 max-w-4xl text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] tracking-tighter uppercase"
        >
          We Heal Pipes.<br className="hidden sm:block" /> Not Walls.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-text-inverse mb-10 max-w-2xl mx-auto font-normal leading-relaxed text-balance italic font-serif"
        >
          Autonomous fluidic repair technology that seals embedded leaks in under 5 seconds — no excavation, no downtime, no demolition.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto px-8 border border-white !bg-transparent !text-white hover:!bg-white hover:!text-bg-dark transition-colors btn">
            See How It Works
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:text-white hover:bg-white/10 w-full sm:w-auto px-8 group btn">
            Partner With Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
