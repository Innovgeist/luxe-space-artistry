import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${getProjectTitle(params.slug)} | Vivanta Portfolio` },
      { name: "description", content: `View the ${getProjectTitle(params.slug)} project by Vivanta Interior Architecture — luxury design in Ahmedabad and beyond.` },
      { property: "og:title", content: `${getProjectTitle(params.slug)} | Vivanta Portfolio` },
      { property: "og:description", content: `Luxury interior design by Vivanta.` },
    ],
  }),
  component: ProjectDetailPage,
});

function getProjectTitle(slug: string): string {
  const titles: Record<string, string> = {
    "riverfront-pavilion": "The Riverfront Pavilion",
    "aurum-collective": "Aurum Collective",
    "sand-house": "The Sand House",
    "equinox-hub": "Equinox Corporate Hub",
    "basalt-pavilion": "Basalt Pavilion & Arts",
    "the-olive-hotel": "The Olive Hotel",
  };
  return titles[slug] || "Project Detail";
}

const projectData: Record<string, {
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  heroImage: string;
  images: string[];
  overview: string;
  challenge: string;
  concept: string;
  materials: string[];
  related: string[];
}> = {
  "riverfront-pavilion": {
    title: "The Riverfront Pavilion",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    area: "12,000 sq ft",
    heroImage: "/images/project-riverfront.jpg",
    images: ["/images/project-riverfront.jpg", "/images/project-sand-house.jpg", "/images/about-detail.jpg"],
    overview: "A four-bedroom residence on the Sabarmati riverfront, designed as a sanctuary of light and shadow. The client — a fourth-generation industrialist family — sought a home that would honor their legacy while embracing contemporary minimalism.",
    challenge: "The riverfront site presented dual challenges: managing the intense Ahmedabad summer heat while maximizing views of the water. The family also required distinct zones for three generations without sacrificing visual cohesion.",
    concept: "We conceived the house as a series of horizontal layers — stone plinth, glass mid-level, and floating roof — each mediating between the interior and the river beyond. A central courtyard draws cool air through the living spaces using traditional Gujarati cross-ventilation principles, reinterpreted through modern architecture.",
    materials: ["Kota stone from Rajasthan", "Belgian linen upholstery", "Reclaimed teak from Gujarat", "Hand-troweled lime plaster", "Bronze window frames", "Cane weaving by local artisans"],
    related: ["aurum-collective", "sand-house"],
  },
  "aurum-collective": {
    title: "Aurum Collective",
    category: "Commercial",
    location: "Mumbai, Maharashtra",
    year: "2023",
    area: "8,500 sq ft",
    heroImage: "/images/project-aurum.jpg",
    images: ["/images/project-aurum.jpg", "/images/project-basalt.jpg", "/images/project-equinox.jpg"],
    overview: "A luxury jewelry showroom and private salon in Mumbai's Bandra Kurla Complex, designed to feel more like a private gallery than a retail space.",
    challenge: "The client needed to display high-value pieces while creating an environment of intimacy and trust. Security requirements had to be seamlessly integrated into the aesthetic.",
    concept: "The design draws from the idea of a treasure vault reimagined as a contemporary salon. Warm travertine floors, soft recessed lighting, and velvet seating areas invite clients to linger. Each display case is positioned as a sculptural element within the larger spatial composition.",
    materials: ["Italian travertine", "Brushed brass fixtures", "Deep olive velvet", "Fluted glass partitions", "Integrated LED cove lighting", "Blackened steel frames"],
    related: ["equinox-hub", "the-olive-hotel"],
  },
  "sand-house": {
    title: "The Sand House",
    category: "Residential",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    area: "6,200 sq ft",
    heroImage: "/images/project-sand-house.jpg",
    images: ["/images/project-sand-house.jpg", "/images/project-riverfront.jpg", "/images/about-detail.jpg"],
    overview: "A compact yet deeply considered family home in Ahmedabad's Bopal neighborhood, built around the idea that luxury need not require scale.",
    challenge: "The compact urban plot demanded creative spatial solutions. The client wanted a home that felt open and connected to nature despite being surrounded by neighboring buildings.",
    concept: "We designed the house around a double-height central atrium topped with a operable skylight. Every room opens onto this lightwell, creating a sense of spaciousness and natural ventilation. Earthy materials — sandstone, jute, raw silk — echo the surrounding desert landscape.",
    materials: ["Dholpur sandstone", "Raw jute carpets", "Handwoven silk textiles", "Natural oak flooring", "Terracotta tiles", "Woven cane screens"],
    related: ["riverfront-pavilion", "basalt-pavilion"],
  },
  "equinox-hub": {
    title: "Equinox Corporate Hub",
    category: "Commercial",
    location: "GIFT City, Gujarat",
    year: "2024",
    area: "22,000 sq ft",
    heroImage: "/images/project-equinox.jpg",
    images: ["/images/project-equinox.jpg", "/images/project-aurum.jpg", "/images/project-basalt.jpg"],
    overview: "The headquarters for a leading fintech company in Gujarat International Finance Tec-City, designed to project authority while fostering creative collaboration.",
    challenge: "The client needed a space that would impress international investors while feeling approachable to a young, diverse workforce. The design had to accommodate rapid growth without feeling temporary.",
    concept: "We created a monolithic core of dark walnut and basalt — boardrooms, private offices, server rooms — surrounded by light, flexible collaboration zones. The contrast between heavy and light materials creates visual rhythm and wayfinding without signage.",
    materials: ["Dark walnut veneer", "Basalt stone cladding", "Acoustic felt panels", "Frosted glass partitions", "Polished concrete floors", "Custom leather seating"],
    related: ["aurum-collective", "basalt-pavilion"],
  },
  "basalt-pavilion": {
    title: "Basalt Pavilion & Arts",
    category: "Commercial",
    location: "Ahmedabad, Gujarat",
    year: "2022",
    area: "15,000 sq ft",
    heroImage: "/images/project-basalt.jpg",
    images: ["/images/project-basalt.jpg", "/images/project-aurum.jpg", "/images/project-equinox.jpg"],
    overview: "A private art gallery and cultural space in Ahmedabad's Sarkhej area, designed to showcase contemporary Indian art within an architectural frame of quiet authority.",
    challenge: "The space needed to be versatile — capable of hosting intimate private viewings, large-scale installations, and cultural events — while maintaining a consistent architectural identity.",
    concept: "We embraced a gallery-as-temple approach. Basalt floors, white plaster walls, and dramatic skylights create a neutral yet powerful backdrop for art. Movable walls and adjustable lighting systems allow the space to transform for each exhibition.",
    materials: ["Indian basalt stone", "White lime plaster", "Anodized aluminum track lighting", "Oak hardwood accents", "Textured linen drapes", "Steel and glass doors"],
    related: ["aurum-collective", "equinox-hub"],
  },
  "the-olive-hotel": {
    title: "The Olive Hotel",
    category: "Hospitality",
    location: "Udaipur, Rajasthan",
    year: "2023",
    area: "35,000 sq ft",
    heroImage: "/images/project-hotel.jpg",
    images: ["/images/project-hotel.jpg", "/images/project-sand-house.jpg", "/images/project-riverfront.jpg"],
    overview: "A 24-room boutique hotel on the edge of Lake Pichola in Udaipur, designed as a contemporary interpretation of Rajasthani palace architecture.",
    challenge: "The site sits within Udaipur's historic core, subject to strict heritage regulations. We needed to honor the city's architectural identity while creating a fresh, modern guest experience.",
    concept: "We distilled Rajasthani design to its essence: deep arches, carved stone screens, and water features. These elements are reimagined in clean, contemporary forms using local materials. Each room opens onto a private terrace with lake views, creating a sense of personal sanctuary.",
    materials: ["Makrana marble", "Udaipur green stone", "Hand-blocked Rajasthani textiles", "Brass and copper accents", "Sheesham wood furniture", "Traditional mirrorwork panels"],
    related: ["sand-house", "riverfront-pavilion"],
  },
};

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = projectData[slug] || projectData["riverfront-pavilion"];

  const relatedProjects = project.related.map((r) => projectData[r]).filter(Boolean);

  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans pt-24">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-[#1C1E1A]/30" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-4 block">
              {project.category}
            </span>
            <h1 className="font-serif italic text-5xl md:text-7xl text-[#F7F5F2] leading-[0.9]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="px-6 md:px-12 py-10 border-b border-[#1C1E1A]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-2">Location</span>
            <span className="text-sm">{project.location}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-2">Year</span>
            <span className="text-sm">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-2">Area</span>
            <span className="text-sm">{project.area}</span>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-2">Category</span>
            <span className="text-sm">{project.category}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-16">
            <div>
              <h2 className="font-serif text-3xl mb-6 text-[#1C1E1A]">Project Overview</h2>
              <p className="text-[#8A8580] leading-relaxed text-pretty">{project.overview}</p>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-6 text-[#1C1E1A]">The Challenge</h2>
              <p className="text-[#8A8580] leading-relaxed text-pretty">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-6 text-[#1C1E1A]">Design Concept</h2>
              <p className="text-[#8A8580] leading-relaxed text-pretty">{project.concept}</p>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="sticky top-32">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
                Materials
              </h3>
              <ul className="space-y-3">
                {project.materials.map((m) => (
                  <li key={m} className="text-sm text-[#8A8580] border-b border-[#1C1E1A]/5 pb-3">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 pb-16 max-w-7xl mx-auto">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          Gallery
        </h2>
        <div className="grid gap-6">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} — image ${i + 1}`}
              loading="lazy"
              className="w-full object-cover"
              style={{ aspectRatio: i === 0 ? "16/9" : "3/4", maxHeight: i === 0 ? "70vh" : "80vh" }}
            />
          ))}
        </div>
      </section>

      {/* Related Projects */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto border-t border-[#1C1E1A]/10">
        <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-10 block">
          Related Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {relatedProjects.map((rp) => (
            <Link
              key={rp.title}
              to="/projects/$slug"
              params={{ slug: rp.related?.[0] || "riverfront-pavilion" }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={rp.heroImage}
                  alt={rp.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-[#1C1E1A]">{rp.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                {rp.category} — {rp.location}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
