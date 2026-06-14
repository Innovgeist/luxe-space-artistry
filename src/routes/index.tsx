import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Showreel } from "@/components/Showreel";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { TiltCard } from "@/components/TiltCard";

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
      {/* Cinematic Hero Showreel */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-end overflow-hidden"
      >
        <Showreel
          slides={[
            { src: "/images/hero-main.jpg", alt: "Luxury villa courtyard, Ahmedabad" },
            { src: "/images/showreel-1.jpg", alt: "Travertine living room with bronze pendant" },
            { src: "/images/showreel-2.jpg", alt: "Walnut dining room with brass chandelier" },
            { src: "/images/project-penthouse.jpg", alt: "Penthouse terrace at twilight" },
            { src: "/images/showreel-3.jpg", alt: "Master bedroom in linen and oak" },
          ]}
        />
        <div className="relative z-10 px-6 md:px-12 pb-32 md:pb-40 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-8 block animate-fade-up">
            Ahmedabad — Interior Architecture
          </span>
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-tighter text-balance animate-fade-up text-[#F7F5F2]">
            Quietude in <br />
            Architectural <span className="font-light not-italic">Form.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up delay-200">
            <p className="max-w-md text-sm md:text-base leading-relaxed text-pretty text-[#F7F5F2]/80">
              An Ahmedabad-based interior studio crafting sensory environments that balance monumental scale with intimate detail.
            </p>
            <div className="flex gap-4">
              <Magnetic strength={0.25}>
                <Link
                  to="/projects"
                  className="group relative px-10 py-5 border border-[#F7F5F2]/40 overflow-hidden inline-block text-center"
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-medium text-[#F7F5F2] group-hover:text-[#1C1E1A] transition-colors duration-500">
                    View Collection
                  </span>
                  <div className="absolute inset-0 bg-[#F7F5F2] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-[#F7F5F2] text-[#1C1E1A] hover:bg-[#9D8A6C] hover:text-[#F7F5F2] transition-colors duration-500 text-[10px] uppercase tracking-[0.3em] font-medium inline-block"
                >
                  Begin a Project
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Floating recognition strip */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-10 hidden lg:flex flex-col items-center gap-6 text-[#F7F5F2]/60">
          <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
            Est. 2011 — Ahmedabad
          </span>
          <div className="w-px h-24 bg-[#F7F5F2]/30 relative overflow-hidden">
            <div className="absolute w-full h-1/2 bg-[#9D8A6C] animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* Marquee credentials */}
      <section className="border-y border-[#1C1E1A]/10 py-6 overflow-hidden bg-[#F7F5F2]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "IIA Award 2019",
            "Architectural Digest India",
            "Featured in Elle Decor",
            "Design Awards 2023",
            "Wallpaper* Recognized",
            "120+ Commissions",
            "Ahmedabad — Mumbai — Udaipur — Dubai",
            "IIA Award 2019",
            "Architectural Digest India",
            "Featured in Elle Decor",
            "Design Awards 2023",
            "Wallpaper* Recognized",
            "120+ Commissions",
            "Ahmedabad — Mumbai — Udaipur — Dubai",
          ].map((item, i) => (
            <span key={i} className="font-serif italic text-2xl md:text-3xl text-[#1C1E1A] px-8 flex items-center gap-8">
              {item}
              <span className="w-2 h-2 rounded-full bg-[#9D8A6C]" />
            </span>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        <Reveal className="md:col-span-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
            01 / Ethos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#1C1E1A]">
            We believe in spaces that breathe through silence.
          </h2>
          <p className="text-[#8A8580] text-sm leading-relaxed mt-8 max-w-md">
            For fourteen years, Vivanta has shaped interiors that age with their inhabitants. Each commission begins not with a drawing, but with a walk through the site at dawn — listening to how light enters, how stone holds warmth, how a room wants to breathe.
          </p>
          <Link to="/about" className="group inline-flex items-center gap-4 mt-10 text-[10px] uppercase tracking-[0.3em] text-[#1C1E1A]">
            <span className="border-b border-[#1C1E1A] pb-1 group-hover:text-[#9D8A6C] group-hover:border-[#9D8A6C] transition-colors">The Studio</span>
            <span className="w-8 h-px bg-[#9D8A6C] group-hover:w-16 transition-all duration-500" />
          </Link>
        </Reveal>
        <Reveal className="md:col-span-7 relative" delay={200}>
          <img
            src="/images/about-detail.jpg"
            alt="Material texture study with lime wash and bronze"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
            style={{ transform: `translateY(${scrollY * -0.04}px)` }}
          />
          <div className="absolute -bottom-8 -left-8 bg-[#F7F5F2] p-8 border border-[#1C1E1A]/10 hidden lg:block">
            <p className="font-serif italic text-2xl text-[#1C1E1A]">
              "Texture is the <br />only decoration."
            </p>
          </div>
          <img
            src="/images/texture-detail.jpg"
            alt="Layered materials detail"
            loading="lazy"
            className="hidden lg:block absolute -top-12 -right-12 w-48 h-64 object-cover border-8 border-[#F7F5F2] shadow-2xl"
          />
        </Reveal>
      </section>

      {/* Full-bleed parallax interlude */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/images/project-exterior.jpg"
          alt="Contemporary villa exterior at golden hour"
          loading="lazy"
          className="absolute inset-0 w-full h-[120%] object-cover"
          style={{ transform: `translateY(${Math.min(scrollY * 0.15 - 200, 0)}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1E1A]/40 via-transparent to-[#1C1E1A]/60" />
        <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-16 max-w-7xl mx-auto">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#F7F5F2]/70 mb-4 block">
              The Riverfront Pavilion — Ahmedabad
            </span>
            <h3 className="font-serif italic text-4xl md:text-6xl text-[#F7F5F2] leading-[0.95]">
              Light is the first <br /> material we draw with.
            </h3>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-[#EDEAE5]/50">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal className="flex justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-4 block">
                02 / Works
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-[#1C1E1A] leading-[0.95]">
                Select <span className="italic">Commissions</span>
              </h2>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8580] hidden md:block">
              2020 — 2025
            </span>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
            {/* Project 1 */}
            <Reveal as={Link} to="/projects/riverfront-pavilion" className="group cursor-pointer block">
              <TiltCard className="relative overflow-hidden aspect-[16/10] mb-6" max={4}>
                <img
                  src="/images/project-riverfront.jpg"
                  alt="The Riverfront Pavilion - Residential"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </TiltCard>
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
            </Reveal>

            {/* Project 2 */}
            <Reveal as={Link} to="/projects/aurum-collective" className="group cursor-pointer block md:mt-20" delay={100}>
              <TiltCard className="relative overflow-hidden aspect-[10/12] mb-6" max={4}>
                <img
                  src="/images/project-aurum.jpg"
                  alt="Aurum Collective - Commercial"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </TiltCard>
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
            </Reveal>

            {/* Project 3 */}
            <Reveal as={Link} to="/projects/sand-house" className="group cursor-pointer block" delay={200}>
              <TiltCard className="relative overflow-hidden aspect-[3/4] mb-6" max={4}>
                <img
                  src="/images/project-sand-house.jpg"
                  alt="The Sand House - Residential"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </TiltCard>
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
            </Reveal>

            {/* Project 4 */}
            <Reveal as={Link} to="/projects/equinox-hub" className="group cursor-pointer block md:mt-20" delay={300}>
              <TiltCard className="relative overflow-hidden aspect-[3/4] mb-6" max={4}>
                <img
                  src="/images/project-equinox.jpg"
                  alt="Equinox Corporate Hub - Commercial"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </TiltCard>
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
            </Reveal>
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/projects" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#1C1E1A]">
              <span className="w-12 h-px bg-[#1C1E1A] group-hover:w-24 group-hover:bg-[#9D8A6C] transition-all duration-500" />
              <span className="group-hover:text-[#9D8A6C] transition-colors">Full Portfolio — 24 Works</span>
              <span className="w-12 h-px bg-[#1C1E1A] group-hover:w-24 group-hover:bg-[#9D8A6C] transition-all duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Materials & craft band */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal className="grid md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-4 block">
              Materiality
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1E1A] leading-tight">
              Sourced by hand. <br />
              <span className="italic">Specified with reverence.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-sm md:text-base text-[#8A8580] leading-relaxed">
              Travertine cut from a single Italian block. Oak veneer chosen with our atelier in Belgium. Bronze hand-aged in Jaipur over six weeks. Every surface in a Vivanta interior is selected in person — never from a catalogue.
            </p>
          </div>
        </Reveal>
        <Reveal className="grid md:grid-cols-3 gap-4 md:gap-6" delay={200}>
          <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden group">
            <img src="/images/materials-flatlay.jpg" alt="Luxury material samples flat lay" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </div>
          <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden group">
            <img src="/images/detail-bathroom.jpg" alt="Travertine bathtub detail" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </div>
        </Reveal>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
              03 / Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1E1A] leading-tight">
              Full-Spectrum <br />
              <span className="italic">Curation.</span>
            </h2>
            <img src="/images/detail-dressing.jpg" alt="Dressing room detail" loading="lazy" className="hidden md:block mt-12 w-full aspect-[3/4] object-cover" />
          </Reveal>
          <div className="md:col-span-8">
            <div className="divide-y divide-[#1C1E1A]/10">
              {[
                { name: "Residential Sanctuaries", tag: "Villas & Penthouses" },
                { name: "Commercial Landscapes", tag: "Showrooms & Hotels" },
                { name: "Executive Suites", tag: "Bespoke Workspaces" },
                { name: "Turnkey Execution", tag: "Concept to Keys" },
              ].map((service, i) => (
                <Reveal
                  key={service.name}
                  as={Link}
                  to="/services"
                  className="py-10 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer"
                  delay={i * 100}
                >
                  <span className="text-2xl font-serif italic text-[#1C1E1A]">
                    {service.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8580] group-hover:text-[#9D8A6C] transition-colors mt-2 md:mt-0">
                    {service.tag}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="bg-[#EDEAE5]/40 py-24 md:py-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
                04 / Process
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1E1A] leading-tight">
                Six stages, <br /><span className="italic">no compromise.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 self-end">
              <p className="text-sm md:text-base text-[#8A8580] leading-relaxed">
                From the first dawn walk through your site to the bound documentation handed over with your keys, every Vivanta project is shepherded through six deliberate stages — never rushed, never delegated.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-6 gap-px bg-[#1C1E1A]/10">
            {[
              { num: "01", title: "Discovery" },
              { num: "02", title: "Planning" },
              { num: "03", title: "Concept" },
              { num: "04", title: "Material" },
              { num: "05", title: "Execution" },
              { num: "06", title: "Handover" },
            ].map((s, i) => (
              <Reveal key={s.num} className="bg-[#F7F5F2] p-8 group hover:bg-[#1C1E1A] transition-colors duration-500" delay={(i % 4) * 100}>
                <span className="font-mono text-[#9D8A6C] text-xs block mb-6 group-hover:text-[#9D8A6C]">{s.num}</span>
                <h4 className="font-serif text-xl text-[#1C1E1A] group-hover:text-[#F7F5F2] transition-colors">{s.title}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="bg-[#1C1E1A] text-[#F7F5F2] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <Reveal className="space-y-4">
              <span className="font-mono text-[#9D8A6C] text-4xl block">14+</span>
              <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                Years of Refinement
              </h4>
              <p className="text-sm leading-relaxed opacity-50">
                A decade spent perfecting the balance between structural integrity and aesthetic grace.
              </p>
            </Reveal>
            <Reveal className="space-y-4 md:border-l md:border-[#F7F5F2]/10 md:pl-16" delay={100}>
              <span className="font-mono text-[#9D8A6C] text-4xl block">120</span>
              <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                Unique Commissions
              </h4>
              <p className="text-sm leading-relaxed opacity-50">
                Each project is a singular response to site, light, and client lifestyle.
              </p>
            </Reveal>
            <Reveal className="space-y-4 md:border-l md:border-[#F7F5F2]/10 md:pl-16" delay={300}>
              <span className="font-mono text-[#9D8A6C] text-4xl block">09</span>
              <h4 className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                Design Awards
              </h4>
              <p className="text-sm leading-relaxed opacity-50">
                Recognized internationally for our commitment to minimalist architectural excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonial with editorial image */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        <Reveal className="md:col-span-5 relative">
          <img src="/images/project-hospitality.jpg" alt="The Olive Hotel — Udaipur lobby" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          <div className="absolute bottom-6 left-6 bg-[#F7F5F2] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#1C1E1A]">
            The Olive Hotel — Udaipur
          </div>
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-7" delay={200}>
          <span className="text-[#9D8A6C] text-5xl font-serif mb-8 block font-light leading-none">&ldquo;</span>
          <blockquote className="font-serif text-3xl md:text-4xl leading-snug text-[#1C1E1A] mb-10">
            Vivanta transformed our Ahmedabad residence into a gallery of light. Their restraint is their greatest strength; they know exactly when to let a material speak for itself.
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="w-16 h-px bg-[#9D8A6C]" />
            <div>
              <cite className="not-italic text-sm font-medium text-[#1C1E1A] block">
                Arjun Mehta
              </cite>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                Founder, AM Capital
              </span>
            </div>
          </div>
          <Link to="/testimonials" className="group inline-flex items-center gap-4 mt-12 text-[10px] uppercase tracking-[0.3em] text-[#1C1E1A]">
            <span className="border-b border-[#1C1E1A] pb-1 group-hover:text-[#9D8A6C] group-hover:border-[#9D8A6C] transition-colors">All Client Stories</span>
            <span className="w-8 h-px bg-[#9D8A6C] group-hover:w-16 transition-all duration-500" />
          </Link>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <img src="/images/project-penthouse.jpg" alt="Luxury penthouse terrace at dusk" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1C1E1A]/60" />
        <Reveal as="div" className="relative z-10 text-center px-6 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-8 block">
            05 / Begin
          </span>
          <h2 className="font-serif italic text-5xl md:text-7xl text-[#F7F5F2] leading-[0.95] mb-10">
            Your space <br /> is already <br /> listening.
          </h2>
          <p className="text-[#F7F5F2]/70 leading-relaxed mb-12 max-w-md mx-auto">
            We accept twelve commissions a year. Conversations begin with a single meeting at our atelier or your site.
          </p>
          <Magnetic strength={0.25}>
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-[#F7F5F2] text-[#1C1E1A] hover:bg-[#9D8A6C] hover:text-[#F7F5F2] transition-colors duration-500 text-[10px] uppercase tracking-[0.3em] font-medium"
            >
              Request a Consultation
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </main>
  );
}
