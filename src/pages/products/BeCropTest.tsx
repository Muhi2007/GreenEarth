import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { FileSearch, Microscope, ShieldCheck } from "lucide-react";

const testData: ProductPageData = {
  hero: {
    eyebrow: "BeCrop® Test",
    heading: "Predictive insights for crop productivity",
    image: "https://images.unsplash.com/photo-1530836369250-ef81a4b56314?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "The global standard for soil testing",
    body: "BeCrop Test is a comprehensive assessment of soil biological quality. Discover how your current practices affect nutrient cycling, disease risk, and biodiversity.",
  },
  features: [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Disease Risk Assessment",
      body: "Identify potential threats by analyzing the presence of pathogens and biocontrol agents."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Nutrient Cycling Pathways",
      body: "Understand the microbial pathways responsible for nitrogen, phosphorus, and potassium cycling."
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Actionable Reports",
      body: "Receive detailed, easy-to-read reports that highlight areas for immediate improvement."
    }
  ],
  steps: [
    {
      number: "1",
      title: "Sample",
      body: "Collect a soil sample using the BeCrop kit."
    },
    {
      number: "2",
      title: "Send",
      body: "Ship your sample to one of our global partner laboratories."
    },
    {
      number: "3",
      title: "Discover",
      body: "Receive a deeply informative soil biology report via the BeCrop portal."
    }
  ],
  caseStudy: {
    headline: "Identified hidden pathogen risks, saving the upcoming high-value cash crop.",
    result: "100% Protection",
    href: "/case-studies"
  },
  cta: {
    heading: "Understand your soil like never before.",
    buttonLabel: "Get Started with BeCrop® Test",
    href: "/contact"
  }
};

export function BeCropTest() {
  return <ProductPageTemplate data={testData} />;
}
