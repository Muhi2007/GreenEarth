import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { FileArchive, Shield, BarChart3 } from "lucide-react";

const reportData: ProductPageData = {
  hero: {
    eyebrow: "AquaClot™ Report",
    heading: "Documentation That Builds Trust.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "Every repair delivered with a full audit trail — ready for insurance, regulators, and investors.",
    body: "AquaClot™ Report is the documentation layer that closes the loop on every repair. Pre and post-repair pressure data, material usage logs, environmental compliance certificates, and hydrostatic test results — all compiled automatically and delivered in a structured format built for auditability.",
  },
  features: [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pre/Post Pressure Data",
      body: "Before and after pressure profiles of the repaired segment, showing the quantified improvement in line integrity."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental Compliance Certificate",
      body: "Sodium Alginate and Nanocellulose material safety data sheets, confirming food-grade certification and municipal sewer disposal legality."
    },
    {
      icon: <FileArchive className="w-8 h-8" />,
      title: "Insurance-Ready Package",
      body: "Repair documentation formatted for property insurance claim submissions — timestamped, digitally signed, and structured for adjuster review."
    }
  ],
  steps: [
    { number: "1", title: "Detect & Seal", body: "AquaClot™ Detect and Seal complete the repair with automated data capture throughout." },
    { number: "2", title: "Validate", body: "AquaClot™ Validate generates the pressure test certificate and appends it to the report package." },
    { number: "3", title: "Deliver", body: "The full AquaClot™ Report is delivered digitally within 24 hours of repair completion." },
  ],
  caseStudy: {
    headline: "Municipal client received a full repair audit trail accepted by their infrastructure regulator on first submission.",
    result: "First-submission Accepted",
    href: "/case-studies"
  },
  cta: {
    heading: "Get repairs that come with proof you can use.",
    buttonLabel: "Request a Full Report Sample",
    href: "/contact"
  }
};

export function BeCropRate() {
  return <ProductPageTemplate data={reportData} />;
}
