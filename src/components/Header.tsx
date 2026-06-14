import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
            <Magnetic key={link.to} strength={0.4}>
              <Link
                to={link.to}
                className={`group relative text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-[#9D8A6C] ${textClass}`}
                activeProps={{ className: "text-[#9D8A6C]" }}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#9D8A6C] transition-all duration-300 ease-out-expo group-hover:w-full" />
              </Link>
            </Magnetic>
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
        <div className="fixed inset-0 bg-[#F7F5F2] z-40 flex flex-col justify-center px-8 animate-reveal-mask">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="group flex items-baseline gap-4 py-3 border-b border-[#1C1E1A]/10 animate-fade-up active:translate-x-1 transition-transform"
                style={{ animationDelay: `${i * 60}ms` }}
                activeProps={{ className: "text-[#9D8A6C]" }}
              >
                <span className="font-mono text-[10px] text-[#9D8A6C]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-4xl text-[#1C1E1A] group-hover:text-[#9D8A6C] group-hover:translate-x-2 transition-all duration-300 inline-block">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
          <div
            className="mt-12 flex justify-between text-[10px] uppercase tracking-[0.3em] text-[#8A8580] animate-fade-up"
            style={{ animationDelay: `${navLinks.length * 60 + 100}ms` }}
          >
            <span>Ahmedabad — India</span>
            <span>Est. 2011</span>
          </div>
        </div>
      )}
    </header>
  );
}
