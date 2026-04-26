import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bg-dark shrink-0" role="banner">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay grayscale"
        aria-hidden="true"
        poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

      <div className="container relative z-10 mx-auto px-5 mt-16 max-w-4xl text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] tracking-tighter uppercase"
        >
          Decoding <br className="hidden sm:block" />Soil Biology
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-text-inverse mb-10 max-w-2xl mx-auto font-normal leading-relaxed text-balance italic font-serif"
        >
          Actionable soil intelligence optimizing crop yields and soil health through the world's most advanced agricultural microbiome data platform.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto px-8 border border-white !bg-transparent !text-white hover:!bg-white hover:!text-bg-dark transition-colors">
            Get a Demo
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:text-white hover:bg-white/10 w-full sm:w-auto px-8 group">
            Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
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
