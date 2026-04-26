import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { AreaChart, Eye, LayoutDashboard } from "lucide-react";

const farmData: ProductPageData = {
  hero: {
    eyebrow: "BeCrop® Farm",
    heading: "Maximize the potential of every acre",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "Actionable crop intelligence at scale",
    body: "BeCrop Farm empowers farmers to connect the dots between soil biology and crop performance. Our dashboard translates complex microbiological data into practical, field-level recommendations.",
  },
  features: [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Interactive Dashboard",
      body: "Visualize functional soil data across multiple fields and compare crop performance side-by-side."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Predictive Insights",
      body: "Anticipate disease risks and nutrient deficiencies before they impact your yield."
    },
    {
      icon: <AreaChart className="w-8 h-8" />,
      title: "Precision Recommendations",
      body: "Optimize input applications based on the actual biological needs of your soil."
    }
  ],
  steps: [
    {
      number: "1",
      title: "Sample",
      body: "Collect robust soil samples from your fields using our standardized kits."
    },
    {
      number: "2",
      title: "Analyze",
      body: "Sequencing and machine learning uncover the unique biological profile of your soil."
    },
    {
      number: "3",
      title: "Act",
      body: "Access the BeCrop Farm dashboard to view insights and application recommendations."
    }
  ],
  caseStudy: {
    headline: "Reduced fertilizer input by 20% while maintaining yield through precision biological insights.",
    result: "20% Reduction",
    href: "/case-studies"
  },
  cta: {
    heading: "Ready to unlock the potential of your farm?",
    buttonLabel: "Get Started with BeCrop® Farm",
    href: "/contact"
  }
};

export function BeCropFarm() {
  return <ProductPageTemplate data={farmData} />;
}
