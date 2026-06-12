import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivanta Interior Architecture | Luxury Design Studio Ahmedabad" },
      { name: "description", content: "Ahmedabad's premier luxury interior design and architecture studio. Crafting contemplative spaces for residential, commercial, and hospitality projects." },
      { property: "og:title", content: "Vivanta Interior Architecture | Luxury Design Studio Ahmedabad" },
      { property: "og:description", content: "Crafting contemplative spaces that balance raw materiality with refined comfort." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-end overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-main.jpg"
            alt="Luxury villa courtyard with travertine stone"
            className="w-full h-full object-cover animate-scale-in"
            style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F2]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#1C1E1A]/20" />
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-20 max-w-7xl mx-auto w-full">
          <h1 className="font-serif italic text-5xl md:text-[7vw] lg:text-[6vw] leading-[0.85] tracking-tighter text-balance animate-fade-up text-[#F7F5F2]">
            Quietude in <br />
            Architectural <span className="font-light not-italic">Form.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up delay-200">
            <p className="max-w-md text-sm md:text-base leading-relaxed text-pretty text-[#F7F5F2]/80">
              An Ahmedabad-based interior studio crafting sensory environments that balance monumental scale with intimate detail.
            </p>
            <Link
              to="/projects"
              className="group relative px-10 py-5 border border-[#F7F5F2]/30 overflow-hidden inline-block text-center"
            >
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-medium text-[#F7F5F2]">
                View Collection
              </span>
              <div className="absolute inset-0 bg-[#1C1E1A] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-[10px] uppercase tracking-[0.3em] font-medium text-[#F7F5F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Collection
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-[#F7F5F2]/30 relative overflow-hidden">
            <div className="absolute w-full h-1/2 bg-[#9D8A6C] animate-scroll-line" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#F7F5F2]/50 [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
            01 / Ethos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#1C1E1A]">
            We believe in spaces that breathe through silence.
          </h2>
        </div>
        <div className="md:col-span-7 relative">
          <img
            src="/images/about-detail.jpg"
            alt="Material texture study with lime wash and bronze"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-8 -left-8 bg-[#F7F5F2] p-8 border border-[#1C1E1A]/10 hidden lg:block">
            <p className="font-serif italic text-2xl text-[#1C1E1A]">
              "Texture is the <br />only decoration."
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-[#EDEAE5]/50">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-4 block">
                02 / Works
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1E1A]">
                Select Commissions
              </h2>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8580] hidden md:block">
              2020 — 2025
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
            {/* Project 1 */}
            <Link to="/projects/riverfront-pavilion" className="group cursor-pointer block">
              <div className="relative overflow-hidden aspect-[16/10] mb-6">
                <img
                  src="/images/project-riverfront.jpg"
                  alt="The Riverfront Pavilion - Residential"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1E1A] mb-1">
                    The Riverfront Pavilion
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                    Residential — Ahmedabad
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#9D8A6C]">01</span>
              </div>
            </Link>

            {/* Project 2 */}
            <Link to="/projects/aurum-collective" className="group cursor-pointer block md:mt-20">
              <div className="relative overflow-hidden aspect-[10/12] mb-6">
                <img
                  src="/images/project-aurum.jpg"
                  alt="Aurum Collective - Commercial"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1E1A] mb-1">
                    Aurum Collective
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                    Commercial — Mumbai
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#9D8A6C]">02</span>
              </div>
            </Link>

            {/* Project 3 */}
            <Link to="/projects/sand-house" className="group cursor-pointer block">
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src="/images/project-sand-house.jpg"
                  alt="The Sand House - Residential"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1E1A] mb-1">
                    The Sand House
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                    Residential — Ahmedabad
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#9D8A6C]">03</span>
              </div>
            </Link>

            {/* Project 4 */}
            <Link to="/projects/equinox-hub" className="group cursor-pointer block md:mt-20">
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src="/images/project-equinox.jpg"
                  alt="Equinox Corporate Hub - Commercial"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1E1A] mb-1">
                    Equinox Corporate Hub
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                    Commercial — GIFT City
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#9D8A6C]">04</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
              03 / Expertise
            </span>
            <h2 className="font-serif text-4xl text-[#1C1E1A]">
              Full-Spectrum <br />
              Curation
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-[#1C1E1A]/10">
              {[
                { name: "Residential Sanctuaries", tag: "Villas & Penthouses" },
                { name: "Commercial Landscapes", tag: "Showrooms & Hotels" },
                { name: "Executive Suites", tag: "Bespoke Workspaces" },
                { name: "Turnkey Execution", tag: "Concept to Keys" },
              ].map((service) => (
                <Link
                  key={service.name}
                  to="/services"
                  className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer"
                >
                  <span className="text-2xl font-serif italic text-[#1C1E1A]">
                    {service.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8580] group-hover:text-[#9D8A6C] transition-colors mt-2 md:mt-0">
                    {service.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="bg-[#1C1E1A] text-[#F7F5F2] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="font-mono text-[#9D8A6C] text-4xl block">14+</span>
              <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                Years of Refinement
              </h4>
              <p className="text-sm leading-relaxed opacity-50">
                A decade spent perfecting the balance between structural integrity and aesthetic grace.
              </p>
            </div>
            <div className="space-y-4 md:border-l md:border-[#F7F5F2]/10 md:pl-16">
              <span className="font-mono text-[#9D8A6C] text-4xl block">120</span>
              <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                Unique Commissions
              </h4>
              <p className="text-sm leading-relaxed opacity-50">
                Each project is a singular response to site, light, and client lifestyle.
              </p>
            </div>
            <div className="space-y-4 md:border-l md:border-[#F7F5F2]/10 md:pl-16">
              <span className="font-mono text-[#9D8A6C] text-4xl block">09</span>
              <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                Design Awards
              </h4>
              <p className="text-sm leading-relaxed opacity-50">
                Recognized internationally for our commitment to minimalist architectural excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[#9D8A6C] text-4xl font-serif mb-8 block font-light">
          &ldquo;
        </span>
        <blockquote className="font-serif text-3xl md:text-4xl leading-snug text-[#1C1E1A] mb-12">
          Vivanta transformed our Ahmedabad residence into a gallery of light. Their restraint is their greatest strength; they know exactly when to let a material speak for itself.
        </blockquote>
        <cite className="not-italic text-[10px] uppercase tracking-widest font-medium text-[#8A8580]">
          &mdash; Arjun Mehta, Founder of AM Capital
        </cite>
      </section>
    </main>
  );
}
