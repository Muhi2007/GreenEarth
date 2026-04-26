import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { BarChart3, Leaf, Sprout } from "lucide-react";

const rateData: ProductPageData = {
  hero: {
    eyebrow: "BeCrop® Rate",
    heading: "The soil sustainability metric for supply chains",
    image: "https://images.unsplash.com/photo-1592982537447-6f2c6e61208a?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "Quantifying regenerative agriculture",
    body: "BeCrop Rate translates complex soil microbiome data into a singular, understandable sustainability metric. Track improvements across your supply chain over time.",
  },
  features: [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Actionable Metric",
      body: "A standardized score out of 100 that reflects biological health and sustainable management practices."
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Supply Chain Traceability",
      body: "Ensure your sourcing meets sustainability goals with verifiable, field-level ecological data."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Consumer Trust",
      body: "Communicate transparent, science-backed sustainability efforts to your consumers."
    }
  ],
  steps: [
    {
      number: "1",
      title: "Assess",
      body: "Establish a baseline of soil health across multiple supplying farms."
    },
    {
      number: "2",
      title: "Implement",
      body: "Work with growers to implement regenerative practices."
    },
    {
      number: "3",
      title: "Rate",
      body: "Measure changes over time to generate an updated BeCrop Rate score."
    }
  ],
  caseStudy: {
    headline: "A major CPG brand proved regenerative claims, boosting consumer trust.",
    result: "Verified Sustainability",
    href: "/case-studies"
  },
  cta: {
    heading: "Ready to measure sustainability accurately?",
    buttonLabel: "Get Started with BeCrop® Rate",
    href: "/contact"
  }
};

export function BeCropRate() {
  return <ProductPageTemplate data={rateData} />;
}
