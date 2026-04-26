import { AudiencePageTemplate, AudiencePageData } from "@/components/templates/AudiencePageTemplate";

const manufacturerData: AudiencePageData = {
  hero: {
    heading: "Baseline field data for biological input development",
    subheading: "Validate the performance of your agricultural inputs with scientific, standardized biological trials.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2000&auto=format&fit=crop",
  },
  painPoints: [
    {
      title: "Proving Efficacy",
      body: "Market adoption of biologicals requires proof. Vague claims aren't enough for discerning farmers and regulatory bodies."
    },
    {
      title: "Inconsistent Performance",
      body: "A product works in one region but fails in another. Without biological data, it's impossible to know why."
    },
    {
      title: "Mechanism of Action",
      body: "Understanding exactly how your product affects soil ecology is critical for marketing and product iteration."
    }
  ],
  solution: {
    heading: "Independent validation powered by the largest global database.",
    body: "Use BeCrop Trials to scientifically demonstrate the specific mechanisms of your product, validate claims, and build absolute trust in the market.",
  },
  products: [
    {
      eyebrow: "BeCrop Trials",
      name: "Efficacy Validation",
      description: "Prove exactly how your product works.",
      href: "/becrop-trials",
      image: ""
    }
  ],
  testimonial: {
    quote: "BeCrop provided the undeniable data we needed to successfully launch our new bio-fungicide in European markets.",
    author: "Elena Rodriguez",
    role: "VP of Product, AgBioTech",
    image: ""
  },
  caseStudy: {
    headline: "Demonstrated a 30% increase in natural phosphorus mobilization across differing climates.",
    result: "30% Increase",
    href: "/case-studies"
  },
  cta: {
    heading: "Validate your agricultural inputs today.",
    buttonLabel: "Explore BeCrop® Trials",
    href: "/contact"
  }
};

export function Manufacturer() {
  return <AudiencePageTemplate data={manufacturerData} />;
}
