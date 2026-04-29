import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { PageType } from "../App";

const navLinks = [
  { label: "Home", href: "#home", page: "home" as PageType },
  { label: "About Us", href: "#about", page: null },
  { label: "Polyurethane", href: "#polyurethane", page: null },
  {
    label: "Products",
    href: "#products",
    page: null,
    dropdown: [
      "All Products",
      "PU Flip Flow Screens",
      "PU Dewatering Screens",
      "Pipe Cleaning PIGs",
      "Polyurethane Rollers",
      "Polyurethane Wheels",
      "Polyurethane Scrapers",
      "PU Seals & HydroCyclones",
    ],
  },
  { label: "Careers", href: "#careers", page: "careers" as PageType },
  { label: "Blog", href: "#blog", page: "blog" as PageType },
  { label: "Contact Us", href: "#contact", page: null },
];

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: (typeof navLinks)[0]) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (link.page) {
      onNavigate(link.page);
    } else {
      if (currentPage !== "home") {
        onNavigate("home");
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="flex flex-col leading-tight text-left"
            data-ocid="nav.link"
          >
            <span className="font-display text-xl lg:text-2xl text-pu-red font-bold tracking-tight">
              VAM POLY PLAST
            </span>
            <span className="text-xs text-pu-accent font-body font-medium tracking-widest uppercase">
              Architects of Polyurethane
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-pu-red transition-colors rounded"
                    data-ocid="nav.dropdown_menu"
                    type="button"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-56 bg-card shadow-lg rounded-md border border-border py-1 z-50">
                      {link.dropdown.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleLinkClick(link)}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-pu-red transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleLinkClick(link)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                    link.page && currentPage === link.page
                      ? "text-pu-red font-semibold"
                      : "text-foreground hover:text-pu-red"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => onNavigate("quote")}
              className="border-2 border-pu-red text-pu-red font-semibold px-5 py-2 rounded-sm transition-all duration-200 hover:bg-pu-red hover:text-white hover:scale-105 bg-transparent font-body text-sm"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground hover:text-pu-red"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            type="button"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLinkClick(link)}
                className={`text-left py-2.5 px-2 text-sm font-medium border-b border-border last:border-0 transition-colors ${
                  link.page && currentPage === link.page
                    ? "text-pu-red"
                    : "text-foreground hover:text-pu-red"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onNavigate("quote");
                }}
                className="block w-full text-center border-2 border-pu-red text-pu-red font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 hover:bg-pu-red hover:text-white bg-transparent font-body"
                data-ocid="nav.primary_button"
              >
                Get a Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
