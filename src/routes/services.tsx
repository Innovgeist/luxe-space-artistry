import { createFileRoute } from "@tanstack/react-router";

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
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans pt-24">
      {/* Page Header */}
      <section className="px-6 md:px-12 pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          Services
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-[#1C1E1A]">
          Full-Spectrum <br />
          Curation.
        </h1>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="border-t border-[#1C1E1A]/10 py-16 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-[#9D8A6C] text-3xl">{service.num}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-serif text-3xl md:text-4xl text-[#1C1E1A] mb-2">
                  {service.title}
                </h2>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                  {service.tagline}
                </span>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm text-[#8A8580] leading-relaxed mb-6">{service.overview}</p>
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
