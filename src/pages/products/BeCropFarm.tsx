import { ProductPageTemplate, ProductPageData } from "@/components/templates/ProductPageTemplate";
import { ScanSearch, Network, Zap } from "lucide-react";

const detectData: ProductPageData = {
  hero: {
    eyebrow: "AquaClot™ Detect",
    heading: "Find the Leak. Precisely.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  intro: {
    heading: "97% accurate leak localization. No physical sensors underground.",
    body: "AquaClot™ Detect uses a digital twin of your pipe network — built from EPANET hydraulic simulation — combined with a KNN machine learning algorithm trained on pressure anomaly signatures. We identify the leaking pipe segment without drilling a single access hole.",
  },
  features: [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Digital Twin Simulation",
      body: "We model your entire pipe network using EPANET hydraulic software, creating a pressure-behavior baseline unique to your infrastructure."
    },
    {
      icon: <ScanSearch className="w-8 h-8" />,
      title: "KNN Anomaly Detection",
      body: "Our K-Nearest Neighbors algorithm cross-references real-time pressure readings against the digital twin to identify which segment is leaking — with 97% accuracy."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "No Sensor Installation",
      body: "We integrate with your existing SCADA system or temporarily attach non-invasive pressure loggers. No underground drilling or sensor hardware required."
    }
  ],
  steps: [
    { number: "1", title: "Map Your Network", body: "We build or import a digital twin of your pipe network using your existing schematics or on-site measurements." },
    { number: "2", title: "Record Pressure Data", body: "Sensors attach non-invasively at access points and log pressure signatures for 30–60 minutes." },
    { number: "3", title: "Localize the Leak", body: "Our KNN model pinpoints the exact segment — delivered as a coordinate map, not a guess." },
  ],
  caseStudy: {
    headline: "Leak segment identified in 47 minutes across a 12-unit residential building — no drilling required.",
    result: "47 min Diagnosis",
    href: "/case-studies"
  },
  cta: {
    heading: "Know exactly where the problem is before you fix it.",
    buttonLabel: "Book a Detection Assessment",
    href: "/contact"
  }
};

export function BeCropFarm() {
  return <ProductPageTemplate data={detectData} />;
}
