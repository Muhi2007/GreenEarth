import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 h-[72px] lg:h-[72px] flex items-center",
        scrolled ? "bg-bg-dark shadow-sm py-0" : "bg-transparent py-0"
      )}
    >
      <div className="container mx-auto px-5 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight z-50">
          <Leaf className="w-6 h-6 text-brand-green-light fill-brand-green-light" />
          <span className="hidden sm:inline tracking-tight">BioSoil</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-text-inverse tracking-wide">
          <Link to="/technology" className="hover:text-brand-green-light transition-colors">Technology</Link>
          <Link to="/solutions" className="hover:text-brand-green-light transition-colors flex items-center gap-1">Solutions <span className="text-[10px]">▼</span></Link>
          <Link to="/resources" className="hover:text-brand-green-light transition-colors flex items-center gap-1">Resources <span className="text-[10px]">▼</span></Link>
          <Link to="/company" className="hover:text-brand-green-light transition-colors">Company</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/login" className="text-sm font-semibold text-text-inverse hover:text-brand-green-light transition-colors">Login</Link>
          <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark">
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>
        
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
}
