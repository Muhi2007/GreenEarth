import { Link } from "react-router-dom";
import { Droplet, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BurgerButton } from "./nav/BurgerButton";
import { MobileDrawer } from "./nav/MobileDrawer";
import type { NavLink } from "./nav/MobileNavItem";

const navLinks: NavLink[] = [
  { label: "Technology", href: "/technology" },
  {
    label: "Solutions",
    dropdown: {
      items: [
        { label: "Pi-Patch™ Detect",   href: "/pi-patch-detect" },
        { label: "Pi-Patch™ Seal",     href: "/pi-patch-seal" },
        { label: "Pi-Patch™ Validate", href: "/pi-patch-validate" },
        { label: "Pi-Patch™ Report",   href: "/pi-patch-report" },
        { label: "Property Managers",  href: "/property-managers" },
        { label: "Facility Operators", href: "/facility-operators" },
        { label: "Municipal Partners", href: "/municipal-partners" },
      ],
    },
  },
  {
    label: "Resources",
    dropdown: {
      items: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Resources",    href: "/resources" },
        { label: "About Us",     href: "/about" },
        { label: "Contact",      href: "/contact" },
      ],
    },
  },
  { label: "Company", href: "/company" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when drawer open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menuId: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menuId);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  // Dynamic nav text color based on background
  const navTextColor = scrolled ? "text-text-inverse" : "text-text-primary";
  const logoColor = scrolled ? "text-white" : "text-text-primary";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center",
          scrolled
            ? "bg-bg-dark/97 backdrop-blur-[12px] shadow-[0_1px_0_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-5 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={cn("flex items-center gap-2 font-bold text-xl tracking-tight z-50", logoColor)}>
            <Droplet className="w-6 h-6 text-brand-green-light fill-brand-green-light" />
            <span className="hidden sm:inline tracking-tight">Pi-Patch</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={cn("nav-desktop hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide", navTextColor)}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 hover:text-brand-green-light transition-colors py-2">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "nav-arrow transition-transform duration-200",
                        openMenu === link.label ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  {openMenu === link.label && (
                    <div className="mega-menu-panel absolute top-full left-0 mt-1 min-w-[220px] bg-bg-dark border border-border-dark rounded-md shadow-xl py-2 z-[999]">
                      {link.dropdown.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpenMenu(null)}
                          className="block px-4 py-2.5 text-sm text-white hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href ?? '/'}
                  className="hover:text-brand-green-light transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/login"
              className={cn("text-sm font-semibold hover:text-brand-green-light transition-colors", navTextColor)}
            >
              Login
            </Link>
            <Button asChild className="bg-brand-green text-white hover:bg-brand-green-dark btn">
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Burger */}
          <BurgerButton isOpen={drawerOpen} onClick={() => setDrawerOpen((v) => !v)} />
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
