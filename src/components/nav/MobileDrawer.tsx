import { X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNavItem, NavLink } from "./MobileNavItem";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export function MobileDrawer({ isOpen, onClose, navLinks }: MobileDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[998] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[360px] z-[999]
          bg-white shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link to="/" onClick={onClose} className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
            <Leaf className="w-6 h-6 text-brand-green fill-brand-green" />
            <span>BioSoil</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links — scrollable */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          {navLinks.map((link) => (
            <MobileNavItem key={link.label} link={link} onClose={onClose} />
          ))}
        </nav>

        {/* CTA buttons pinned to bottom */}
        <div className="px-6 py-6 border-t border-gray-100 flex flex-col gap-3">
          <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark w-full">
            <Link to="/get-started" onClick={onClose}>Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="border-border text-gray-800 hover:bg-gray-50 w-full">
            <Link to="/login" onClick={onClose}>Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
