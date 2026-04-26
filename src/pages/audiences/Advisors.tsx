import { AudiencePageTemplate, AudiencePageData } from "@/components/templates/AudiencePageTemplate";

const facilityOperatorsData: AudiencePageData = {
  hero: {
    heading: "Repair Around Your Schedule.",
    subheading: "HVAC lines, cooling loops, and foundation pipes repaired with zero operational downtime. We work around your business hours, not against them.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  },
  painPoints: [
    {
      title: "Operational Disruption",
      body: "Shutting down an HVAC system or cooling loop for days to allow excavation and epoxy curing is simply not an option for most commercial facilities."
    },
    {
      title: "Hidden Infrastructure",
      body: "Commercial pipe networks run behind finished ceilings, under concrete slabs, and through structural columns. Traditional access means expensive, destructive work."
    },
    {
      title: "Compliance Liability",
      body: "Water damage from undetected micro-fissures can trigger mold remediation requirements, insurance claims, and regulatory penalties."
    }
  ],
  solution: {
    heading: "Zero downtime. Full documentation. Complete peace of mind.",
    body: "Pi-Patch integrates with your SCADA system or deploys temporary pressure sensors to localize the leak segment. Our bio-sealant is injected into the live pipe during off-peak hours — no shutdown required. A 15-minute hydrostatic test validates the seal before we leave.",
  },
  products: [
    {
      eyebrow: "Pi-Patch™ Seal",
      name: "Repair the Pipe, Not the Building",
      description: "Live-pipe injection of food-grade Sodium Alginate + Nanocellulose — seals in 5 seconds.",
      href: "/pi-patch-seal",
      image: ""
    }
  ],
  testimonial: {
    quote: "Pi-Patch repaired our HVAC chilled water loop overnight. Operations resumed the next morning without a single complaint.",
    author: "Rauf Mammadov",
    role: "Facilities Director, Commercial Tower, Baku",
    image: ""
  },
  caseStudy: {
    headline: "HVAC cooling line repaired beneath a commercial slab in 4 hours — reducing a 3-day shutdown to zero.",
    result: "3-day → 4hr",
    href: "/case-studies"
  },
  cta: {
    heading: "Repair infrastructure without stopping operations.",
    buttonLabel: "Book a Commercial Assessment",
    href: "/contact"
  }
};

export function Advisors() {
  return <AudiencePageTemplate data={facilityOperatorsData} />;
}
