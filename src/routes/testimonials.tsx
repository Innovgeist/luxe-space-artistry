import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Vivanta Interior Architecture" },
      { name: "description", content: "Read what our clients say about working with Vivanta — stories of transformation, trust, and the creation of spaces that truly feel like home." },
      { property: "og:title", content: "Testimonials | Vivanta Interior Architecture" },
      { property: "og:description", content: "Client stories from Ahmedabad and beyond — luxury interior design that transforms." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    quote: "Vivanta transformed our Ahmedabad residence into a gallery of light. Their restraint is their greatest strength; they know exactly when to let a material speak for itself.",
    name: "Arjun Mehta",
    title: "Founder, AM Capital",
    location: "Ahmedabad",
    project: "The Riverfront Pavilion",
    type: "Residential",
  },
  {
    quote: "The resulting space is not just a home; it is a profound silence that speaks volumes about our family's values.",
    name: "Ananya Parekh",
    title: "Founder, Parekh & Co",
    location: "Ahmedabad",
    project: "The Sand House",
    type: "Residential",
  },
  {
    quote: "Working with Vivanta felt less like hiring a design firm and more like commissioning a piece of art. The attention to detail is extraordinary — every joint, every shadow, every transition has been considered.",
    name: "Vikram Shah",
    title: "CEO, Equinox Technologies",
    location: "GIFT City",
    project: "Equinox Corporate Hub",
    type: "Commercial",
  },
  {
    quote: "Our showroom was a blank concrete shell. Vivanta turned it into a space where clients don't just buy jewelry — they experience it. Sales increased 40% in the first quarter.",
    name: "Priya Malhotra",
    title: "Creative Director, Aurum Collective",
    location: "Mumbai",
    project: "Aurum Collective",
    type: "Commercial",
  },
  {
    quote: "The team understood that a boutique hotel is a series of private moments. Each room feels like a personal sanctuary, yet the whole property flows with a consistent, unmistakable character.",
    name: "Rajendra Singh",
    title: "Owner, The Olive Hotel",
    location: "Udaipur",
    project: "The Olive Hotel",
    type: "Hospitality",
  },
  {
    quote: "We had lived in our home for twenty years and thought we knew every corner. Vivanta showed us spaces we never knew existed — not by adding, but by revealing.",
    name: "Meera & Sanjay Gupta",
    title: "Retired — Former Professors, IIM Ahmedabad",
    location: "Ahmedabad",
    project: "Heritage Apartment Renovation",
    type: "Residential",
  },
];

function TestimonialsPage() {
  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <img src="/images/project-hospitality.jpg" alt="Olive Hotel lobby" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-transparent to-[#1C1E1A]/30" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-6 block">
            Voices
          </span>
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#F7F5F2]">
            Words from <br /> Those We Serve.
          </h1>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="px-6 md:px-12 pt-24 pb-16 max-w-7xl mx-auto">
        <Reveal className="bg-[#1C1E1A] text-[#F7F5F2] p-12 md:p-20">
          <span className="text-[#9D8A6C] text-5xl font-serif block mb-8">&ldquo;</span>
          <blockquote className="font-serif text-3xl md:text-5xl leading-snug mb-12 max-w-4xl">
            The resulting space is not just a home; it is a profound silence that speaks volumes about our family's values.
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="w-12 h-px bg-[#9D8A6C]" />
            <div>
              <span className="text-sm font-medium block">Ananya Parekh</span>
              <span className="text-[10px] uppercase tracking-widest text-[#F7F5F2]/50">
                Founder, Parekh & Co — The Sand House
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-[#1C1E1A]/10">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              className="bg-[#F7F5F2] p-10 md:p-14 group hover:bg-[#EDEAE5]/50 transition-colors duration-500"
              delay={(i % 4) * 100}
            >
              <span className="text-[#9D8A6C] text-3xl font-serif block mb-6">&ldquo;</span>
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-[#1C1E1A] mb-8">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#9D8A6C]" />
                <div>
                  <span className="text-xs font-medium block text-[#1C1E1A]">{t.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                    {t.title}
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#1C1E1A]/5 flex justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
                  {t.project}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#9D8A6C]">
                  {t.type}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
