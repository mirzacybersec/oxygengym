import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-obsidian/90 backdrop-blur-xl border-b border-steel/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#home");
              }}
              className="flex items-center gap-3"
            >
              <img
                src="/public/oxygen-logo.png"
                alt="Oxygen Gym"
                className="h-10 w-10 object-contain"
              />
              <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
                OXYGEN <span className="text-oxygen-blue">GYM</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-frost/80 hover:text-oxygen-blue text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-oxygen-blue transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#pricing");
                }}
                className="bg-oxygen-blue text-obsidian px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#33DDFF] hover:shadow-glow transition-all duration-250 hover:-translate-y-0.5"
              >
                JOIN NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-obsidian/98 backdrop-blur-xl transition-all duration-400 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-white text-2xl font-semibold hover:text-oxygen-blue transition-colors"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                transform: mobileOpen ? "translateX(0)" : "translateX(40px)",
                opacity: mobileOpen ? 1 : 0,
                transition: "all 0.3s ease-out",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#pricing");
            }}
            className="mt-4 bg-oxygen-blue text-obsidian px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-glow transition-all"
            style={{
              transitionDelay: mobileOpen ? "250ms" : "0ms",
              transform: mobileOpen ? "translateX(0)" : "translateX(40px)",
              opacity: mobileOpen ? 1 : 0,
              transition: "all 0.3s ease-out",
            }}
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </>
  );
}
