import { Hero } from "@/components/home/Hero";
import { FarmBanner } from "@/components/home/FarmBanner";
import { Mission } from "@/components/home/Mission";
import { Stats } from "@/components/home/Stats";
import { LogoStrip } from "@/components/home/LogoStrip";
import { Audiences } from "@/components/home/Audiences";
import { Technology } from "@/components/home/Technology";
import { ProductsTabs } from "@/components/home/ProductsTabs";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Initiatives } from "@/components/home/Initiatives";
import { WorldMap, FooterCTA } from "@/components/home/WorldMap";

export function Home() {
  return (
    <div className="min-h-screen bg-bg-white relative">
      <Hero />
      <FarmBanner />
      <Mission />
      <Stats />
      <LogoStrip />
      <Audiences />
      <Technology />
      <ProductsTabs />
      <CaseStudies />
      <Initiatives />
      <WorldMap />
      <FooterCTA />
    </div>
  );
}

