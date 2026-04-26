import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { CircleDot, FlaskConical, Target } from "lucide-react";

const trialsData: ProductPageData = {
  hero: {
    eyebrow: "BeCrop® Trials",
    heading: "Performance validation for biological inputs",
    image: "https://images.unsplash.com/photo-1581579207000-a6e2e50523be?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "Data-driven efficacy reporting",
    body: "BeCrop Trials provides independent, scientific validation of agricultural inputs. Demonstrate the exact biological mechanisms and performance of your products on soil health.",
  },
  features: [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Standardized Methodology",
      body: "Ensure consistency across global fields with our scientifically rigorous trial protocols."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mechanism of Action",
      body: "Prove exactly how your product affects soil biology, nutrient pathways, and specific pathogen suppression."
    },
    {
      icon: <CircleDot className="w-8 h-8" />,
      title: "Market Access",
      body: "Use verified data to support regulatory claims and build trust with distributors and farmers."
    }
  ],
  steps: [
    {
      number: "1",
      title: "Design",
      body: "Work with our experts to design a trial protocol that isolates the effect of your input."
    },
    {
      number: "2",
      title: "Execute",
      body: "Run field or greenhouse trials, sampling treated and untreated zones."
    },
    {
      number: "3",
      title: "Analyze",
      body: "Receive a comprehensive BeCrop Trials Report validating product efficacy."
    }
  ],
  caseStudy: {
    headline: "Proved the efficacy of a new biostimulant, leading to a successful global launch.",
    result: "Verified Efficacy",
    href: "/case-studies"
  },
  cta: {
    heading: "Ready to validate your biological product?",
    buttonLabel: "Get Started with BeCrop® Trials",
    href: "/contact"
  }
};

export function BeCropTrials() {
  return <ProductPageTemplate data={trialsData} />;
}
