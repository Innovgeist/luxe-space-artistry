import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Design Process | Vivanta Interior Architecture" },
      { name: "description", content: "Our six-stage design process — from discovery to handover — ensures every Vivanta project achieves uncompromising excellence." },
      { property: "og:title", content: "Design Process | Vivanta Interior Architecture" },
      { property: "og:description", content: "Our six-stage design process ensures every project achieves uncompromising excellence." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    num: "01",
    title: "Discovery",
    image: "/images/studio-team.jpg",
    desc: "Every project begins with deep listening. We immerse ourselves in the site, the light, and the lives that will inhabit the space. Through interviews, site walks at different times of day, and mood studies, we build a comprehensive understanding of what the project needs to become.",
    detail: "Typically 2–4 weeks. Includes site survey, client interviews, lifestyle analysis, and precedent research.",
  },
  {
    num: "02",
    title: "Planning",
    image: "/images/project-exterior.jpg",
    desc: "Spatial choreography begins. Our architecture team develops floor plans, circulation flows, and structural considerations that form the invisible skeleton of the design. We test multiple configurations, always prioritizing light, air, and human movement.",
    detail: "Typically 3–5 weeks. Includes spatial planning, structural coordination, and initial MEP integration.",
  },
  {
    num: "03",
    title: "Concept Design",
    image: "/images/showreel-1.jpg",
    desc: "The vision takes form. Material palettes, mood boards, and 3D visualizations bring the project into tangible reality for client review. This is where the emotional character of the space is defined — the colors, textures, and atmosphere that will define daily life.",
    detail: "Typically 4–6 weeks. Includes material boards, 3D renders, lighting concepts, and furniture direction.",
  },
  {
    num: "04",
    title: "Material Selection",
    image: "/images/materials-flatlay.jpg",
    desc: "We source every surface personally. From Rajasthan sandstone quarries to Belgian linen mills, we visit suppliers, examine samples in natural light, and select materials that meet our exacting standards for beauty, durability, and sustainability.",
    detail: "Typically 4–8 weeks. Includes quarry visits, sample procurement, and material testing.",
  },
  {
    num: "05",
    title: "Execution",
    image: "/images/texture-detail.jpg",
    desc: "Our on-site team manages every detail with the same rigor as the design phase. Weekly site visits, detailed quality checks, and close coordination with contractors ensure that the built reality matches — and often exceeds — the design vision.",
    detail: "Typically 6–18 months depending on scale. Includes construction management, procurement, and installation oversight.",
  },
  {
    num: "06",
    title: "Handover",
    image: "/images/showreel-3.jpg",
    desc: "The final walk-through, object styling, and a hand-bound book documenting every material and decision in your space. We don't simply deliver keys — we ensure every light switch, every drawer pull, and every shadow feels exactly as it should.",
    detail: "Typically 2–4 weeks. Includes final styling, photography, documentation, and a one-year maintenance review.",
  },
];

function ProcessPage() {
  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      <section className="relative h-[80vh] overflow-hidden flex items-end">
        <img src="/images/detail-bathroom.jpg" alt="Travertine bathroom detail" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-transparent to-[#1C1E1A]/30" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-6 block">
            Process
          </span>
          <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#F7F5F2]">
            From Silence <br /> to Space.
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#1C1E1A]/10 md:-translate-x-px" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative grid md:grid-cols-2 gap-8 md:gap-16 py-16 ${
                i !== steps.length - 1 ? "border-b border-[#1C1E1A]/5" : ""
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 top-16 md:-translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-[#9D8A6C] ring-4 ring-[#F7F5F2]" />
              </div>

              {/* Left content (odd steps) */}
              <div
                className={`pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"
                }`}
              >
                <span className="font-mono text-[#9D8A6C] text-4xl block mb-4">
                  {step.num}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1C1E1A] mb-6">
                  {step.title}
                </h2>
                <img src={step.image} alt={step.title} loading="lazy" className="w-full aspect-[4/3] object-cover mt-6" />
              </div>

              {/* Right content (even steps) */}
              <div
                className={`pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"
                }`}
              >
                <p className="text-sm text-[#8A8580] leading-relaxed mb-4">
                  {step.desc}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#9D8A6C]">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-[#1C1E1A] text-[#F7F5F2] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
            Our Commitment
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            We accept only what we can perfect.
          </h2>
          <p className="text-[#F7F5F2]/60 max-w-2xl mx-auto leading-relaxed text-pretty">
            To maintain the quality and attention each project deserves, we limit our active commissions to twelve per year. This ensures our team can be present on site, our designers can personally review every material sample, and no detail is delegated to chance.
          </p>
        </div>
      </section>
    </main>
  );
}
