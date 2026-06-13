import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Studio" },
    { to: "/projects", label: "Portfolio" },
    { to: "/services", label: "Services" },
    { to: "/process", label: "Process" },
    { to: "/journal", label: "Journal" },
    { to: "/contact", label: "Inquiry" },
  ];

  const isSolid = scrolled || mobileOpen;
  const textClass = isSolid ? "text-[#1C1E1A]" : "text-[#F7F5F2]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isSolid
          ? "bg-[#F7F5F2]/90 backdrop-blur-md border-b border-[#1C1E1A]/5"
          : "bg-gradient-to-b from-[#1C1E1A]/45 to-transparent border-b border-transparent"
      }`}
    >
      <div className="px-6 md:px-12 py-6 flex justify-between items-center">
        <Link
          to="/"
          className={`font-serif italic text-2xl tracking-tighter transition-colors duration-500 ${textClass}`}
        >
          VIVANTA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-[#9D8A6C] ${textClass}`}
              activeProps={{ className: "text-[#9D8A6C]" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className={`text-[10px] uppercase tracking-widest opacity-50 transition-colors duration-500 ${textClass}`}>
            Ahmedabad
          </span>
          <div className={`w-8 h-px transition-colors duration-500 ${isSolid ? "bg-[#1C1E1A]/40" : "bg-[#F7F5F2]/40"}`} />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 transition-colors duration-500 ${textClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#F7F5F2] z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-[#1C1E1A] hover:text-[#9D8A6C] transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
