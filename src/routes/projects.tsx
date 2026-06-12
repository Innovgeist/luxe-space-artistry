import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

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

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans pt-24">
      {/* Page Header */}
      <section className="px-6 md:px-12 pt-12 pb-12 md:pt-20 md:pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          Portfolio
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-[#1C1E1A]">
          Selected <br />
          Commissions.
        </h1>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 pb-8 max-w-7xl mx-auto">
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
            <Link
              key={project.slug}
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className={`group cursor-pointer block ${i % 2 === 1 ? "md:mt-20" : ""}`}
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
