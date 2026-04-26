import { Link } from "react-router-dom";
import { Droplet } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark text-text-inverse py-16 md:py-24">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-6">
              <Droplet className="w-8 h-8 text-brand-green-light fill-brand-green-light" />
              <span>Pi-Patch</span>
            </Link>
            <p className="text-text-muted text-base mb-4 max-w-sm leading-relaxed">
              Autonomous fluidic pipe healing. We don't break walls. We heal them.
            </p>
            <p className="text-text-muted text-sm mb-8">
              <span className="text-white">contact@pi-patch.az</span>
              <br />
              Baku, Azerbaijan
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-green-dark btn">
                <Link to="/contact">Request a Pilot Repair</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border-dark text-white hover:bg-white hover:text-bg-dark btn">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-text-inverse mb-6 text-base tracking-wide">Products</h4>
            <ul className="space-y-4 text-sm font-medium text-text-muted">
              <li><Link to="/pi-patch-detect" className="hover:text-white transition-colors">Pi-Patch™ Detect</Link></li>
              <li><Link to="/pi-patch-seal"   className="hover:text-white transition-colors">Pi-Patch™ Seal</Link></li>
              <li><Link to="/pi-patch-validate" className="hover:text-white transition-colors">Pi-Patch™ Validate</Link></li>
              <li><Link to="/pi-patch-report"  className="hover:text-white transition-colors">Pi-Patch™ Report</Link></li>
            </ul>
          </div>

          {/* Solutions For */}
          <div>
            <h4 className="font-semibold text-text-inverse mb-6 text-base tracking-wide">Solutions For</h4>
            <ul className="space-y-4 text-sm font-medium text-text-muted">
              <li><Link to="/property-managers"  className="hover:text-white transition-colors">Property Managers</Link></li>
              <li><Link to="/facility-operators" className="hover:text-white transition-colors">Facility Operators</Link></li>
              <li><Link to="/municipal-partners" className="hover:text-white transition-colors">Municipal Partners</Link></li>
              <li><Link to="/contact"            className="hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-inverse mb-6 text-base tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-text-muted">
              <li><Link to="/about"        className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/resources"    className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/careers"      className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact"      className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Pi-Patch. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
