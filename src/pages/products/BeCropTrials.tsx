import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { ClipboardCheck, Gauge, FileText } from "lucide-react";

const validateData: ProductPageData = {
  hero: {
    eyebrow: "Pi-Patch™ Validate",
    heading: "Proof Built Into Every Repair.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "A 15-minute hydrostatic test closes every job. No proof, no invoice.",
    body: "Trust is built with data, not promises. After every Pi-Patch™ Seal deployment, we run an automated 15-minute hydrostatic pressure test on the sealed segment. The line must hold at 1.5× operational pressure before we declare the job complete. The result is logged, timestamped, and delivered to you.",
  },
  features: [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Hydrostatic Pressure Test",
      body: "We pressurize the sealed pipe segment to 1.5× operating pressure and hold for 15 minutes. Zero pressure loss = confirmed seal."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Automated Logging",
      body: "Pressure readings are logged every 30 seconds throughout the test window. The full dataset is attached to your repair report automatically."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Timestamped Certificate",
      body: "You receive a digitally signed validation certificate suitable for insurance claims, property records, and municipal compliance submissions."
    }
  ],
  steps: [
    { number: "1", title: "Seal", body: "Pi-Patch™ Seal completes the bio-sealant injection on the identified pipe segment." },
    { number: "2", title: "Pressurize", body: "The segment is isolated and pressurized to 1.5× operational PSI using our calibrated test equipment." },
    { number: "3", title: "Certify", body: "A 15-minute hold period with automated logging confirms the seal. A timestamped certificate is generated on-site." },
  ],
  caseStudy: {
    headline: "Every residential repair validated to 1.5× PSI before client sign-off — 100% first-pass seal rate to date.",
    result: "100% Pass Rate",
    href: "/case-studies"
  },
  cta: {
    heading: "Every repair we do comes with proof.",
    buttonLabel: "Book with Validation Included",
    href: "/contact"
  }
};

export function BeCropTrials() {
  return <ProductPageTemplate data={validateData} />;
}
