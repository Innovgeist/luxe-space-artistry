import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Vivanta Interior Architecture" },
      { name: "description", content: "Discover the story behind Vivanta — Ahmedabad's premier luxury interior design studio. Founded on principles of timeless elegance and material honesty." },
      { property: "og:title", content: "About Us | Vivanta Interior Architecture" },
      { property: "og:description", content: "Discover the story behind Vivanta — Ahmedabad's premier luxury interior design studio." },
    ],
  }),
  component: AboutPage,
});

const teamMembers = [
  {
    name: "Ravi Mehta",
    role: "Founder & Principal Designer",
    bio: "With over 18 years in architecture and interiors, Ravi founded Vivanta with a singular vision: to create spaces that age beautifully.",
  },
  {
    name: "Priya Sharma",
    role: "Design Director",
    bio: "Priya leads our creative team with an unwavering commitment to material research and spatial choreography.",
  },
  {
    name: "Karan Patel",
    role: "Head of Architecture",
    bio: "Karan brings deep structural expertise to every project, ensuring our interiors are as sound as they are beautiful.",
  },
  {
    name: "Ananya Desai",
    role: "Senior Interior Stylist",
    bio: "Ananya curates the final layer — textiles, art, and objects that transform a house into a deeply personal home.",
  },
];

const values = [
  {
    title: "Material Honesty",
    desc: "We never disguise what a material is. Every surface celebrates its natural texture, grain, and imperfection.",
  },
  {
    title: "Light as Medium",
    desc: "Architecture is the art of controlling light. We design how sunlight enters, moves through, and transforms each space.",
  },
  {
    title: "Generational Thinking",
    desc: "Our spaces are built to outlast trends. We design for decades, not seasons — sustainability through timelessness.",
  },
  {
    title: "Indian Craft, Global Standard",
    desc: "We work with master artisans across Gujarat and Rajasthan, elevating traditional craft into contemporary luxury.",
  },
];

const timeline = [
  { year: "2011", event: "Vivanta founded in a restored haveli workshop in the Old City" },
  { year: "2014", event: "First international commission — a private residence in Dubai" },
  { year: "2017", event: "Studio expands to a dedicated atelier near Sabarmati Riverfront" },
  { year: "2019", event: "Won the Indian Institute of Architects Award for Residential Design" },
  { year: "2021", event: "Launched the Vivanta Craft Foundation to support local artisans" },
  { year: "2023", event: "Completed our 100th unique commission — The Riverfront Pavilion" },
  { year: "2025", event: "Expanded services to include full architectural design alongside interiors" },
];

function AboutPage() {
  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans pt-24">
      {/* Page Header */}
      <section className="px-6 md:px-12 pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          The Studio
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-[#1C1E1A]">
          Architecture of <br /> silence.
        </h1>
      </section>

      {/* Founder Story */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5">
          <img
            src="/images/about-detail.jpg"
            alt="Material texture study"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 pt-4">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8 text-[#1C1E1A]">
            Founded on the principle that a room should feel like a deep breath.
          </h2>
          <div className="space-y-6 text-[#8A8580] text-sm leading-relaxed">
            <p>
              Vivanta was born from a simple conviction: that the most luxurious spaces are not the ones that shout, but the ones that whisper. In 2011, Ravi Mehta opened a small studio in a restored haveli in Ahmedabad&rsquo;s Old City, determined to prove that Indian interior design could be both rooted in heritage and unapologetically contemporary.
            </p>
            <p>
              Over fourteen years, that conviction has grown into a studio of twenty artisans, architects, and stylists — each selected not just for technical skill, but for a shared obsession with material honesty, spatial proportion, and the poetry of natural light.
            </p>
            <p>
              Today, Vivanta designs for clients who understand that true luxury is not about accumulation, but about curation. Every project begins with silence: a walk through the site at dawn, listening to how light enters, how wind moves, how the building already wants to breathe.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="bg-[#1C1E1A] text-[#F7F5F2] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
            Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[#F7F5F2]">
            Our guiding principles.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-[#F7F5F2]/10">
            {values.map((v, i) => (
              <div key={i} className="bg-[#1C1E1A] p-10 md:p-12 group hover:bg-[#3E4437] transition-colors duration-500">
                <span className="font-mono text-[#9D8A6C] text-[10px] uppercase tracking-widest mb-6 block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl mb-4 text-[#F7F5F2]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[#F7F5F2]/50">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          The Team
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[#1C1E1A]">
          People who build silence.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="border-t border-[#1C1E1A]/10 pt-8">
              <h3 className="font-serif text-2xl text-[#1C1E1A] mb-1">{member.name}</h3>
              <span className="text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-4 block">
                {member.role}
              </span>
              <p className="text-sm text-[#8A8580] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1C1E1A]/10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          Our Process
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[#1C1E1A]">
          From silence to space.
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { step: "01", title: "Discovery", desc: "We immerse ourselves in the site, the light, and the lives that will inhabit the space. Interviews, site walks, and mood studies." },
            { step: "02", title: "Planning", desc: "Spatial choreography begins. Floor plans, circulation flows, and structural considerations are refined with our architecture team." },
            { step: "03", title: "Concept Design", desc: "Material palettes, mood boards, and 3D visualizations bring the vision into tangible form for client review." },
            { step: "04", title: "Material Selection", desc: "We source every surface personally — from Rajasthan sandstone to Belgian linen — visiting quarries, mills, and ateliers." },
            { step: "05", title: "Execution", desc: "Our on-site team manages every detail with the same rigor as the design phase. Weekly site visits ensure perfection." },
            { step: "06", title: "Handover", desc: "A final walk-through, object styling, and a hand-bound book documenting every material and decision in your space." },
          ].map((p) => (
            <div key={p.step} className="group">
              <span className="font-mono text-[#9D8A6C] text-4xl block mb-4">{p.step}</span>
              <h3 className="font-serif text-2xl text-[#1C1E1A] mb-3">{p.title}</h3>
              <p className="text-sm text-[#8A8580] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#EDEAE5]/50 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
            Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[#1C1E1A]">
            The path so far.
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-4 md:gap-16 py-8 border-t border-[#1C1E1A]/10"
              >
                <span className="font-mono text-[#9D8A6C] text-xl md:w-20">{item.year}</span>
                <p className="text-[#1C1E1A] text-sm md:text-base leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
