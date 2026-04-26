import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { Droplet, Timer, ShieldCheck } from "lucide-react";

const sealData: ProductPageData = {
  hero: {
    eyebrow: "AquaClot™ Seal",
    heading: "Liquid In. Sealed Out.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "A food-grade suspension that seals the moment it finds the crack.",
    body: "AquaClot™ Seal is our core bio-sealant technology. A proprietary blend of Sodium Alginate and Nanocellulose flows freely through your live, pressurized pipe. The moment it exits through a crack and contacts calcium in surrounding concrete, it cross-links instantly into a 50 kPa hydrogel plug — in under 5 seconds.",
  },
  features: [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Biomimetic Chemistry",
      body: "Modeled on the human blood-clotting cascade — a liquid that flows freely in non-leaking zones and hardens only at the point of exit."
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "5-Second Cure",
      body: "Contact with calcium ions in surrounding concrete triggers instant cross-linking. No waiting 24 hours for epoxy to cure in a bone-dry pipe."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "50 kPa Hydrogel Plug",
      body: "The resulting hydrogel withstands standard residential and commercial pipe pressures. Lab-tested at 3× operational PSI."
    }
  ],
  steps: [
    { number: "1", title: "Inject", body: "Bio-sealant is injected at the nearest pipe access point. No pipe shutdown required — the system stays pressurized." },
    { number: "2", title: "Flow", body: "The liquid travels through your pipe network under normal pressure, unaffected by bends and junctions." },
    { number: "3", title: "Seal", body: "At the crack, contact with calcium triggers instant hydrogel formation. The pipe is sealed within seconds." },
  ],
  caseStudy: {
    headline: "Behind-tile bathroom pipe sealed without removing a single tile — repair completed in 2.5 hours.",
    result: "2.5 hr Repair",
    href: "/case-studies"
  },
  cta: {
    heading: "Ready to seal it without breaking anything?",
    buttonLabel: "Schedule a Seal Assessment",
    href: "/contact"
  }
};

export function BeCropTest() {
  return <ProductPageTemplate data={sealData} />;
}
