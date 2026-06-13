import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Portfolio | Vivanta Interior Architecture" },
      { name: "description", content: "Explore Vivanta's curated portfolio of luxury residential, commercial, and hospitality interiors across Ahmedabad, Mumbai, and beyond." },
      { property: "og:title", content: "Portfolio | Vivanta Interior Architecture" },
      { property: "og:description", content: "Explore our curated portfolio of luxury residential, commercial, and hospitality interiors." },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const projects = [
  {
    slug: "riverfront-pavilion",
    title: "The Riverfront Pavilion",
    category: "Residential",
    location: "Ahmedabad",
    year: "2024",
    image: "/images/project-riverfront.jpg",
    aspect: "16/10",
  },
  {
    slug: "aurum-collective",
    title: "Aurum Collective",
    category: "Commercial",
    location: "Mumbai",
    year: "2023",
    image: "/images/project-aurum.jpg",
    aspect: "10/12",
  },
  {
    slug: "sand-house",
    title: "The Sand House",
    category: "Residential",
    location: "Ahmedabad",
    year: "2023",
    image: "/images/project-sand-house.jpg",
    aspect: "3/4",
  },
  {
    slug: "equinox-hub",
    title: "Equinox Corporate Hub",
    category: "Commercial",
    location: "GIFT City",
    year: "2024",
    image: "/images/project-equinox.jpg",
    aspect: "3/4",
  },
  {
    slug: "basalt-pavilion",
    title: "Basalt Pavilion & Arts",
    category: "Commercial",
    location: "Ahmedabad",
    year: "2022",
    image: "/images/project-basalt.jpg",
    aspect: "3/4",
  },
  {
    slug: "the-olive-hotel",
    title: "The Olive Hotel",
    category: "Hospitality",
    location: "Udaipur",
    year: "2023",
    image: "/images/project-hotel.jpg",
    aspect: "3/4",
  },
];

const extraProjects = [
  {
    slug: "riverfront-pavilion",
    title: "Skyline Penthouse",
    category: "Residential",
    location: "Ahmedabad",
    year: "2025",
    image: "/images/project-penthouse.jpg",
    aspect: "16/10",
  },
  {
    slug: "the-olive-hotel",
    title: "Mansingh Heritage Lobby",
    category: "Hospitality",
    location: "Jaipur",
    year: "2024",
    image: "/images/project-hospitality.jpg",
    aspect: "10/12",
  },
  {
    slug: "aurum-collective",
    title: "Maison Aether Showroom",
    category: "Commercial",
    location: "Delhi",
    year: "2025",
    image: "/images/project-showroom.jpg",
    aspect: "16/10",
  },
  {
    slug: "sand-house",
    title: "Sabarmati Villa",
    category: "Residential",
    location: "Ahmedabad",
    year: "2024",
    image: "/images/project-exterior.jpg",
    aspect: "3/4",
  },
];
const allProjects = [...projects, ...extraProjects];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      {/* Editorial hero */}
      <section className="relative h-[80vh] overflow-hidden flex items-end">
        <img src="/images/project-exterior.jpg" alt="Luxury villa exterior" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-transparent to-[#1C1E1A]/30" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-6 block">
            Portfolio — 120+ Works
          </span>
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#F7F5F2]">
            Selected <br /> Commissions.
          </h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 pt-16 pb-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 border-b border-[#1C1E1A]/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                activeFilter === cat
                  ? "text-[#1C1E1A]"
                  : "text-[#8A8580] hover:text-[#1C1E1A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {filtered.map((project, i) => (
            <Reveal
              key={`${project.slug}-${i}`}
              as={Link}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className={`group cursor-pointer block ${i % 2 === 1 ? "md:mt-20" : ""}`}
              delay={(i % 4) * 100}
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ aspectRatio: project.aspect }}
                />
                <div className="absolute inset-0 bg-[#3E4437]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-2xl text-[#1C1E1A] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                    {project.category} — {project.location}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#9D8A6C]">
                  {project.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
