import { AudiencePageTemplate, AudiencePageData } from "@/components/templates/AudiencePageTemplate";

const municipalPartnersData: AudiencePageData = {
  hero: {
    heading: "Infrastructure Healed From Inside.",
    subheading: "Metro cooling lines, subterranean networks, and public infrastructure sealed without stopping operations or excavating streets.",
    image: "https://images.unsplash.com/photo-1518600506278-4e844b207e3c?q=80&w=2000&auto=format&fit=crop",
  },
  painPoints: [
    {
      title: "Scale & Complexity",
      body: "Municipal pipe networks span hundreds of kilometers with countless branch junctions, pressure zones, and embedded segments beneath city streets."
    },
    {
      title: "Public Disruption",
      body: "Excavating city streets to repair a water main causes traffic chaos, business disruption, and public backlash — at a cost to the municipality far exceeding the pipe repair itself."
    },
    {
      title: "Aging Infrastructure",
      body: "Soviet-era and early-construction pipes were not built for modern water pressures. Micro-fissures compound silently until catastrophic failure."
    }
  ],
  solution: {
    heading: "Seal networks at scale. No trenches. No traffic stops. Full audit trail.",
    body: "Pi-Patch's KNN model integrates with EPANET-based digital twin simulations of your entire network, identifying the highest-priority leak segments first. Our bio-sealant is food-grade certified and compliant with municipal sewer disposal regulations. Every repair is documented and ready for regulatory reporting.",
  },
  products: [
    {
      eyebrow: "Pi-Patch™ Report",
      name: "Compliance-Ready Documentation",
      description: "Full pre/post pressure logs, material safety data, and environmental certification per repair.",
      href: "/pi-patch-report",
      image: ""
    }
  ],
  testimonial: {
    quote: "Pi-Patch sealed three subterranean segments in our district cooling network without a single street closure.",
    author: "Municipal Infrastructure Authority",
    role: "Baku, Azerbaijan",
    image: ""
  },
  caseStudy: {
    headline: "Subterranean pipe network sealed across 3 segments — zero operational downtime, zero street excavation.",
    result: "Zero Downtime",
    href: "/case-studies"
  },
  cta: {
    heading: "Partner with us to heal your city's infrastructure.",
    buttonLabel: "Municipal Partnership Inquiry",
    href: "/contact"
  }
};

export function Manufacturer() {
  return <AudiencePageTemplate data={municipalPartnersData} />;
}
