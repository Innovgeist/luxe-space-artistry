import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Vivanta Interior Architecture" },
      { name: "description", content: "Explore Vivanta's full range of luxury interior design services — residential, commercial, hospitality, turnkey, and bespoke furniture." },
      { property: "og:title", content: "Services | Vivanta Interior Architecture" },
      { property: "og:description", content: "Full-spectrum spatial curation for luxury residential, commercial, and hospitality projects." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    num: "01",
    title: "Residential Interior Design",
    tagline: "Bespoke Villas & Penthouses",
    image: "/images/showreel-1.jpg",
    overview: "From private villas to city penthouses, we create homes that reflect the personalities and lifestyles of those who inhabit them. Every detail is considered — from the way morning light falls on a bedroom wall to the tactile experience of a door handle.",
    benefits: [
      "Comprehensive spatial planning and interior architecture",
      "Custom furniture and millwork design",
      "Material palette curation and sourcing",
      "Art and object selection",
      "Lighting design integrated with architecture",
    ],
    process: "Discovery &rarr; Concept &rarr; Design Development &rarr; Documentation &rarr; Execution &rarr; Styling",
  },
  {
    num: "02",
    title: "Commercial Spaces",
    tagline: "Showrooms, Offices & Hotels",
    image: "/images/project-showroom.jpg",
    overview: "We design commercial environments that reinforce brand identity while creating productive, inspiring spaces for employees and memorable experiences for clients.",
    benefits: [
      "Workplace strategy and space planning",
      "Brand-aligned interior architecture",
      "Reception and public area design",
      "Meeting and collaboration spaces",
      "Sustainable design solutions",
    ],
    process: "Briefing &rarr; Analysis &rarr; Concept &rarr; Development &rarr; Construction &rarr; Handover",
  },
  {
    num: "03",
    title: "Luxury Villas",
    tagline: "Grand Residential Estates",
    image: "/images/project-exterior.jpg",
    overview: "Our villa projects are our most ambitious undertakings. We work from the ground up — often collaborating with architects — to create cohesive environments where interior and exterior merge seamlessly.",
    benefits: [
      "Full architectural interior coordination",
      "Landscape and pool integration",
      "Smart home and AV system planning",
      "Staff quarters and service area design",
      "Art collection curation and installation",
    ],
    process: "Site Analysis &rarr; Master Planning &rarr; Architecture &rarr; Interiors &rarr; Landscaping &rarr; Completion",
  },
  {
    num: "04",
    title: "Turnkey Projects",
    tagline: "Concept to Keys",
    image: "/images/project-penthouse.jpg",
    overview: "For clients who value a single point of accountability, our turnkey service handles everything from initial concept through final styling. You receive a fully finished space, ready to live or work in.",
    benefits: [
      "Single point of contact and accountability",
      "Fixed timeline and budget management",
      "End-to-end procurement and installation",
      "Quality control at every stage",
      "Post-completion support and maintenance",
    ],
    process: "Agreement &rarr; Design &rarr; Procurement &rarr; Construction &rarr; Installation &rarr; Handover",
  },
  {
    num: "05",
    title: "Renovation & Restoration",
    tagline: "Honoring Heritage",
    image: "/images/project-hospitality.jpg",
    overview: "We specialize in breathing new life into historic properties while respecting their original character. Our renovation work spans restored havelis, heritage apartments, and period homes.",
    benefits: [
      "Heritage-sensitive design approach",
      "Structural assessment and strengthening",
      "Traditional craft revival and documentation",
      "Modern amenity integration",
      "Conservation-grade material sourcing",
    ],
    process: "Assessment &rarr; Documentation &rarr; Conservation Plan &rarr; Design &rarr; Craft Coordination &rarr; Completion",
  },
  {
    num: "06",
    title: "Space Planning",
    tagline: "Optimized Spatial Choreography",
    image: "/images/showreel-3.jpg",
    overview: "Before a single surface is chosen, we analyze how a space will be used. Our space planning service optimizes flow, proportion, and functionality for any environment.",
    benefits: [
      "Occupancy and circulation analysis",
      "Furniture layout optimization",
      "Natural light and ventilation planning",
      "Future-proofing for growth or change",
      "Accessibility and inclusivity compliance",
    ],
    process: "Survey &rarr; Analysis &rarr; Concept Layout &rarr; Detailed Planning &rarr; Documentation",
  },
  {
    num: "07",
    title: "Furniture & Styling",
    tagline: "The Final Layer",
    image: "/images/detail-dressing.jpg",
    overview: "The objects in a room tell its story. Our styling team curates furniture, art, textiles, and accessories that complete the narrative of each space we design.",
    benefits: [
      "Bespoke furniture design and commissioning",
      "Art curation and placement",
      "Textile and soft furnishing selection",
      "Accessory and object styling",
      "Seasonal refresh and rotation services",
    ],
    process: "Mood Board &rarr; Sourcing &rarr; Custom Design &rarr; Procurement &rarr; Installation & Styling",
  },
];

function ServicesPage() {
  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      {/* Editorial hero */}
      <section className="relative h-[80vh] overflow-hidden flex items-end">
        <img src="/images/showreel-2.jpg" alt="Luxury dining room" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-transparent to-[#1C1E1A]/30" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-6 block">
            Services
          </span>
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#F7F5F2]">
            Full-Spectrum <br /> Curation.
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="space-y-0">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              as="div"
              className="border-t border-[#1C1E1A]/10 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12 items-start"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-[#9D8A6C] text-3xl">{service.num}</span>
              </div>
              <div className={`md:col-span-5 ${i % 2 === 0 ? "" : "md:order-3"}`}>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1C1E1A] mb-2">
                  {service.title}
                </h2>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                  {service.tagline}
                </span>
                <p className="text-sm text-[#8A8580] leading-relaxed mt-8 mb-8">{service.overview}</p>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#1C1E1A] font-medium mb-3 block">
                    What you receive
                  </span>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="text-sm text-[#8A8580] flex items-start gap-2">
                        <span className="text-[#9D8A6C] mt-1">&bull;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1C1E1A] font-medium mb-2 block">
                    Process
                  </span>
                  <p
                    className="text-xs text-[#8A8580]"
                    dangerouslySetInnerHTML={{ __html: service.process }}
                  />
                </div>
              </div>
              <div className="md:col-span-5 relative overflow-hidden group">
                <img src={service.image} alt={service.title} loading="lazy" className="w-full aspect-[4/5] object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="bg-[#1C1E1A] text-[#F7F5F2] py-24 md:py-32 px-6 md:px-12 text-center">
        <h2 className="font-serif italic text-4xl md:text-6xl mb-8 leading-tight">
          A service, <br />or a singular vision?
        </h2>
        <p className="text-[#F7F5F2]/60 max-w-xl mx-auto mb-12 leading-relaxed">
          Every Vivanta engagement is shaped to the commission, not the catalogue. Tell us what you are building.
        </p>
        <a href="/contact" className="inline-block px-12 py-5 bg-[#F7F5F2] text-[#1C1E1A] hover:bg-[#9D8A6C] hover:text-[#F7F5F2] transition-colors duration-500 text-[10px] uppercase tracking-[0.3em] font-medium">
          Begin a Dialogue
        </a>
      </Reveal>
    </main>
  );
}
