import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal | Vivanta Interior Architecture" },
      { name: "description", content: "Insights on interior design trends, material guides, space planning ideas, and luxury living inspiration from the Vivanta studio." },
      { property: "og:title", content: "Journal | Vivanta Interior Architecture" },
      { property: "og:description", content: "Insights on interior design trends, material guides, and luxury living inspiration." },
    ],
  }),
  component: JournalPage,
});

const articles = [
  {
    slug: "the-art-of-limewash",
    title: "The Art of Limewash: Why This Ancient Finish Is Having a Moment",
    excerpt: "From Roman villas to contemporary Ahmedabad homes, limewash has endured for millennia. We explore why this breathable, organic finish is the choice of discerning designers worldwide.",
    category: "Materials",
    date: "March 2025",
    readTime: "6 min read",
    image: "/images/about-detail.jpg",
  },
  {
    slug: "designing-for-generations",
    title: "Designing for Generations: Creating Homes That Age Beautifully",
    excerpt: "How to design spaces that serve a family today while anticipating the needs of tomorrow. Our approach to flexible, timeless residential design.",
    category: "Residential",
    date: "February 2025",
    readTime: "8 min read",
    image: "/images/project-sand-house.jpg",
  },
  {
    slug: "light-as-material",
    title: "Light as Material: How We Design with Sunlight in Ahmedabad",
    excerpt: "In a city of intense sun, managing natural light is both a challenge and an opportunity. We share our techniques for harnessing, diffusing, and celebrating daylight.",
    category: "Architecture",
    date: "January 2025",
    readTime: "5 min read",
    image: "/images/project-riverfront.jpg",
  },
  {
    slug: " sourcing-stone-rajasthan",
    title: "From Quarry to Living Room: Sourcing Natural Stone in Rajasthan",
    excerpt: "A journey through the stone quarries of Makrana, Jaisalmer, and Dholpur — and how we select each slab that becomes part of our clients' homes.",
    category: "Materials",
    date: "December 2024",
    readTime: "7 min read",
    image: "/images/project-basalt.jpg",
  },
  {
    slug: "office-design-post-pandemic",
    title: "The Post-Pandemic Office: Designing for Presence, Not Presence",
    excerpt: "As companies rethink physical workspace, we explore how to create offices that employees actually want to return to — spaces of focus, connection, and identity.",
    category: "Commercial",
    date: "November 2024",
    readTime: "6 min read",
    image: "/images/project-equinox.jpg",
  },
  {
    slug: "bronze-in-interiors",
    title: "The Warmth of Bronze: Integrating Metal Into Quiet Spaces",
    excerpt: "Bronze ages gracefully, developing a patina that tells the story of a home. We examine how to use this noble metal without overwhelming a restrained interior.",
    category: "Materials",
    date: "October 2024",
    readTime: "4 min read",
    image: "/images/project-aurum.jpg",
  },
];

const categories = ["All", "Materials", "Residential", "Commercial", "Architecture"];

function JournalPage() {
  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <img src="/images/texture-detail.jpg" alt="Material study" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-transparent to-[#1C1E1A]/30" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-6 block">
            Journal — The Editorial
          </span>
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#F7F5F2]">
            Thoughts on <br /> Space &amp; Light.
          </h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <Reveal as={Link} to="/journal/the-art-of-limewash" className="group block">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
              <img
                src="/images/about-detail.jpg"
                alt="Limewash texture study"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="bg-[#1C1E1A] text-[#F7F5F2] p-10 md:p-16 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-4 block">
                Featured — Materials
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                The Art of Limewash: Why This Ancient Finish Is Having a Moment
              </h2>
              <p className="text-[#F7F5F2]/60 text-sm leading-relaxed mb-8">
                From Roman villas to contemporary Ahmedabad homes, limewash has endured for millennia. We explore why this breathable, organic finish is the choice of discerning designers worldwide.
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#9D8A6C]">
                March 2025 — 6 min read
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Articles Grid */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {articles.slice(1).map((article, i) => (
            <Reveal
              key={article.slug}
              as={Link}
              to={`/journal/${article.slug}`}
              className="group cursor-pointer block"
              delay={(i % 3) * 100}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] uppercase tracking-widest text-[#9D8A6C]">
                  {article.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                  {article.date}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#1C1E1A] mb-3 leading-tight group-hover:text-[#9D8A6C] transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-[#8A8580] leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                {article.readTime}
              </span>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
