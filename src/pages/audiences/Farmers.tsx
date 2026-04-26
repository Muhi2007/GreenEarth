import { AudiencePageTemplate, AudiencePageData } from "@/components/templates/AudiencePageTemplate";

const farmersData: AudiencePageData = {
  hero: {
    heading: "Address crop uncertainty with soil intelligence",
    subheading: "Understand your soil's unique biological fingerprint to reduce risks, optimize inputs, and secure your livelihood.",
    image: "https://images.unsplash.com/photo-1599818817296-658b4daed653?q=80&w=2000&auto=format&fit=crop",
  },
  painPoints: [
    {
      title: "Input Costs",
      body: "Fertilizer and chemical prices fluctuate, making it difficult to maintain margins. Are you applying exactly what the soil needs, or guessing?"
    },
    {
      title: "Disease Guesswork",
      body: "Waiting for symptoms to appear is too late. Unseen pathogens in the soil can devastate yield before you even know they exist."
    },
    {
      title: "Yield Stagnation",
      body: "Despite doing everything right, sometimes yield plateaus. Often, the missing link is understanding nutrient lock-up in the soil biome."
    }
  ],
  solution: {
    heading: "Data to see what's hidden, confidence to take action.",
    body: "Biome Makers provides the deepest look into your soil's living ecosystem. We tell you what nutrients are available, what diseases are lurking, and exactly what your field needs to perform at its peak.",
  },
  products: [
    {
      eyebrow: "BeCrop Farm",
      name: "Total Farm Management",
      description: "Manage multiple fields and understand spatial variation.",
      href: "/becrop-farm",
      image: ""
    }
  ],
  testimonial: {
    quote: "Since using BeCrop, we've caught disease risks months before symptoms would show, saving our entire harvest.",
    author: "John Smith",
    role: "Row Crop Farmer, Iowa",
    image: ""
  },
  caseStudy: {
    headline: "Optimized nitrogen application, saving $40/acre while maintaining identical yields.",
    result: "$40/Acre Saved",
    href: "/case-studies"
  },
  cta: {
    heading: "Take control of your soil's potential.",
    buttonLabel: "Contact our Agronomy Team",
    href: "/contact"
  }
};

export function Farmers() {
  return <AudiencePageTemplate data={farmersData} />;
}
