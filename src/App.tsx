/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { BeCropFarm } from "./pages/products/BeCropFarm";
import { BeCropTest } from "./pages/products/BeCropTest";
import { BeCropTrials } from "./pages/products/BeCropTrials";
import { BeCropRate } from "./pages/products/BeCropRate";
import { Farmers } from "./pages/audiences/Farmers";
import { Advisors } from "./pages/audiences/Advisors";
import { Manufacturer } from "./pages/audiences/Manufacturer";
import { Technology } from "./pages/Technology";
import { Solutions } from "./pages/Solutions";
import { CaseStudies } from "./pages/CaseStudies";
import { Resources } from "./pages/Resources";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

// Placeholder component for unimplemented routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-bg-section">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">{title}</h1>
      <p className="text-text-muted">This page is under construction.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="technology" element={<Technology />} />
          <Route path="solutions" element={<Solutions />} />

          {/* Legacy product routes (preserved) */}
          <Route path="becrop-farm"   element={<BeCropFarm />} />
          <Route path="becrop-test"   element={<BeCropTest />} />
          <Route path="becrop-trials" element={<BeCropTrials />} />
          <Route path="becrop-rate"   element={<BeCropRate />} />

          {/* AquaClot product routes */}
          <Route path="aquaclot-detect"   element={<BeCropFarm />} />
          <Route path="aquaclot-seal"     element={<BeCropTest />} />
          <Route path="aquaclot-validate" element={<BeCropTrials />} />
          <Route path="aquaclot-report"   element={<BeCropRate />} />

          {/* Legacy audience routes (preserved) */}
          <Route path="farmers"      element={<Farmers />} />
          <Route path="advisors"     element={<Advisors />} />
          <Route path="manufacturer" element={<Manufacturer />} />

          {/* AquaClot audience routes */}
          <Route path="property-managers"  element={<Farmers />} />
          <Route path="facility-operators" element={<Advisors />} />
          <Route path="municipal-partners" element={<Manufacturer />} />

          <Route path="resources"    element={<Resources />} />
          <Route path="company"      element={<About />} />
          <Route path="about"        element={<About />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="careers"      element={<Placeholder title="Careers" />} />
          <Route path="contact"      element={<Contact />} />
          <Route path="get-started"  element={<Placeholder title="Get Started" />} />
          <Route path="login"        element={<Placeholder title="Login" />} />
          <Route path="*"            element={<Placeholder title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}
