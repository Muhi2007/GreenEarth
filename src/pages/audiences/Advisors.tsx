import { AudiencePageTemplate, AudiencePageData } from "@/components/templates/AudiencePageTemplate";

const advisorsData: AudiencePageData = {
  hero: {
    heading: "Precise farm management recommendations",
    subheading: "Differentiate your agronomic services with the world's most advanced soil biological database.",
    image: "https://images.unsplash.com/photo-1581579207000-a6e2e50523be?q=80&w=2000&auto=format&fit=crop",
  },
  painPoints: [
    {
      title: "Client Retention",
      body: "Farmers demand results. If a recommended program fails due to unseen soil issues, it risks the advisory relationship."
    },
    {
      title: "Incomplete Diagnostics",
      body: "Standard chemical soil tests only tell half the story. You need biological context to explain nutrient lock-up."
    },
    {
      title: "Trial and Error",
      body: "Recommending new biologicals without predicting how they will interact with native soil flora is risky."
    }
  ],
  solution: {
    heading: "Elevate your agronomic expertise.",
    body: "Equip yourself with BeCrop data to offer precision recommendations that consistently succeed. See the complete biological, chemical, and physical picture.",
  },
  products: [
    {
      eyebrow: "BeCrop Test",
      name: "Diagnostic Deep Dive",
      description: "Uncover hidden diseases and nutrient pathways.",
      href: "/becrop-test",
      image: ""
    }
  ],
  testimonial: {
    quote: "With BeCrop data, I don't just guess what biologicals to apply; I prescribe them based on hard data.",
    author: "Sarah Jenkins",
    role: "Certified Crop Advisor",
    image: ""
  },
  caseStudy: {
    headline: "Increased client retention by providing proactive disease management strategies.",
    result: "100% Retention",
    href: "/case-studies"
  },
  cta: {
    heading: "Become a certified BeCrop Advisor.",
    buttonLabel: "Join the BCA Program",
    href: "/contact"
  }
};

export function Advisors() {
  return <AudiencePageTemplate data={advisorsData} />;
}
