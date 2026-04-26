import { AudiencePageTemplate, AudiencePageData } from "@/components/templates/AudiencePageTemplate";

const propertyManagersData: AudiencePageData = {
  hero: {
    heading: "No Tiles Broken. Ever.",
    subheading: "Seal pipe leaks behind your bathroom walls and concrete slabs without a single hammer strike. Pi-Patch delivers results in hours, not days.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
  },
  painPoints: [
    {
      title: "Destruction Costs",
      body: "Traditional repairs require demolishing tile, concrete, and structural elements just to reach the pipe. The repair bill dwarfs the leak itself."
    },
    {
      title: "Tenant Downtime",
      body: "Excavation-based repairs take days to complete. Tenants are displaced, operations stop, and you bear the liability for every hour of disruption."
    },
    {
      title: "Hidden Micro-Fissures",
      body: "78% of water leaks are microscopic cracks invisible to the eye — detectable only through pressure analysis, not physical inspection."
    }
  ],
  solution: {
    heading: "Cut repair costs by 70%. Finish in hours, not days.",
    body: "Pi-Patch locates the exact pipe segment using AI-driven KNN simulation, then injects a food-grade bio-sealant that self-seals within 5 seconds of contacting the leak. No demolition, no disruption, no detectable trace on your surfaces.",
  },
  products: [
    {
      eyebrow: "Pi-Patch™ Detect",
      name: "Locate the Leak Precisely",
      description: "Digital twin + KNN localization pinpoints the cracked segment without physical probing.",
      href: "/pi-patch-detect",
      image: ""
    }
  ],
  testimonial: {
    quote: "The repair was done before my tenants even noticed a problem. No tiles removed, no dust, no workers for a week.",
    author: "Nigar Aliyeva",
    role: "Property Manager, Baku",
    image: ""
  },
  caseStudy: {
    headline: "Bathroom tile leak sealed in 2.5 hours — saving the owner $2,400 vs. traditional demolition quote.",
    result: "$2,400 Saved",
    href: "/case-studies"
  },
  cta: {
    heading: "Stop breaking walls. Start healing pipes.",
    buttonLabel: "Request a Pilot Repair",
    href: "/contact"
  }
};

export function Farmers() {
  return <AudiencePageTemplate data={propertyManagersData} />;
}
