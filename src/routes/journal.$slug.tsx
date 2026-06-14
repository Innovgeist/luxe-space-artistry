import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${getArticleTitle(params.slug)} | Vivanta Journal` },
      { name: "description", content: `Read ${getArticleTitle(params.slug)} — insights from Vivanta Interior Architecture.` },
    ],
  }),
  component: JournalArticlePage,
});

function getArticleTitle(slug: string): string {
  const titles: Record<string, string> = {
    "the-art-of-limewash": "The Art of Limewash",
    "designing-for-generations": "Designing for Generations",
    "light-as-material": "Light as Material",
    "sourcing-stone-rajasthan": "From Quarry to Living Room",
    "office-design-post-pandemic": "The Post-Pandemic Office",
    "bronze-in-interiors": "The Warmth of Bronze",
  };
  return titles[slug] || "Journal Article";
}

const articles: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}> = {
  "the-art-of-limewash": {
    title: "The Art of Limewash: Why This Ancient Finish Is Having a Moment",
    category: "Materials",
    date: "March 2025",
    readTime: "6 min read",
    image: "/images/about-detail.jpg",
    content: [
      "Limewash is one of the oldest surface finishes known to architecture. The Romans used it. The Renaissance masters perfected it. And today, in an age of synthetic paints and industrial coatings, limewash is experiencing a remarkable renaissance of its own.",
      "What makes limewash special is not just its aesthetic — though its soft, chalky, slightly uneven surface is undeniably beautiful. It is the material's fundamental honesty. Limewash is simply slaked lime mixed with water and natural pigments. It contains no petrochemicals, no VOCs, no hidden ingredients.",
      "In Ahmedabad's climate, limewash offers particular advantages. Its high pH naturally inhibits mold and bacteria. Its breathability allows walls to manage humidity, preventing the damp issues common in concrete construction. And as it ages, it develops a patina that no factory finish can replicate.",
      "At Vivanta, we have used limewash in projects ranging from a restored haveli in the Old City to a contemporary penthouse overlooking the Sabarmati. In each case, the material adapted to its context — warmer tones in north-facing rooms, cooler shades where sunlight was abundant.",
      "The application requires skill. Our craftsmen train for months to achieve the characteristic 'cloudy' effect — layers of thin wash applied with broad brushes, each layer slightly different from the last. The result is a surface that appears to glow from within, changing subtly with the day's shifting light.",
      "For those considering limewash for their own homes, we recommend starting with a single feature wall. The effect is immediate and transformative. And unlike conventional paint, if you grow tired of the color, you can simply apply a new limewash layer over the old — no sanding, no stripping, no waste.",
    ],
  },
  "designing-for-generations": {
    title: "Designing for Generations: Creating Homes That Age Beautifully",
    category: "Residential",
    date: "February 2025",
    readTime: "8 min read",
    image: "/images/project-sand-house.jpg",
    content: [
      "The most successful homes we design are not those that impress on day one, but those that continue to reveal themselves over decades. A home that serves a young family, then teenagers, then empty-nesters, then grandparents — without ever feeling dated or inadequate.",
      "This requires a fundamentally different approach to design. Instead of designing for a specific moment in a family's life, we design for evolution. Flexible room configurations, adaptable lighting systems, and durable material choices that look better with age.",
      "One technique we use is the 'room within a room' concept. A large, open space that can be divided with sliding panels when privacy is needed, or opened completely for gatherings. This allows the same footprint to serve multiple purposes over time.",
      "Materials play a crucial role. We favor surfaces that develop character through use — leather that softens and darkens, stone that acquires a subtle polish, brass that develops a rich patina. These materials tell the story of a life lived in the space.",
      "The homes we are proudest of are those where children who grew up in them now bring their own children to visit. Where the same kitchen table has hosted forty years of family meals. Where the same window frames a changing view of a growing garden.",
      "That is the ultimate measure of our work: not whether a space photographs well, but whether it lives well. Whether it becomes, over time, not just a house, but a home.",
    ],
  },
  "light-as-material": {
    title: "Light as Material: How We Design with Sunlight in Ahmedabad",
    category: "Architecture",
    date: "January 2025",
    readTime: "5 min read",
    image: "/images/project-riverfront.jpg",
    content: [
      "In Ahmedabad, sunlight is not a gentle presence — it is a force. Summer temperatures regularly exceed 40 degrees Celsius, and the sun is relentless from March through June. Designing with this reality rather than against it is fundamental to our practice.",
      "We begin every project with a light study. Using specialized software, we model how sunlight enters the space at different times of day and year. This informs every decision — from window placement to wall thickness to the orientation of outdoor spaces.",
      "Deep overhangs are a hallmark of our residential work. Inspired by traditional Gujarati courtyard houses, we create generous roof projections that shade walls and windows during the hottest hours while allowing winter sun to penetrate deeply.",
      "Internal courtyards serve as thermal regulators. Cool air enters at ground level, warms and rises through the day, and exits through high-level vents. This stack effect creates natural ventilation without mechanical systems.",
      "Material choices also manage light. We use light-colored lime plaster on exterior walls to reflect heat. Inside, we sometimes use darker surfaces in north-facing rooms to absorb and redistribute what light is available.",
      "The goal is not to eliminate sunlight but to choreograph it. To create spaces where light is a presence that shifts and changes throughout the day — a living element of the architecture itself.",
    ],
  },
  "sourcing-stone-rajasthan": {
    title: "From Quarry to Living Room: Sourcing Natural Stone in Rajasthan",
    category: "Materials",
    date: "December 2024",
    readTime: "7 min read",
    image: "/images/project-basalt.jpg",
    content: [
      "Every stone surface in a Vivanta project has a story. It begins deep underground, millions of years ago, and continues through quarry, workshop, and installation until it becomes part of a client's daily life.",
      "Our stone sourcing journeys take us across Rajasthan — to the famous Makrana quarries that supplied marble for the Taj Mahal, to the golden sandstone mines of Jaisalmer, to the Kota stone fields where uniform blue-grey slabs emerge from the earth.",
      "We select stone personally, visiting quarries to examine blocks before they are cut. We look for character — subtle veining, fossil inclusions, color variations — that will give each surface its unique identity.",
      "The finishing process is equally important. A stone can be polished to a mirror finish, honed to a soft sheen, or bush-hammered for a rough, tactile surface. Each treatment transforms the material's character completely.",
      "We are increasingly drawn to reclaimed stone — slabs salvaged from demolished buildings, whose surfaces carry the patina of decades or centuries of use. This stone cannot be manufactured; it can only be discovered.",
      "For clients, we provide a 'stone passport' — a document tracing each significant stone surface from quarry to installation. It is part of the hand-bound book we deliver at project completion, a permanent record of the materials that surround them.",
    ],
  },
  "office-design-post-pandemic": {
    title: "The Post-Pandemic Office: Designing for Presence, Not Presence",
    category: "Commercial",
    date: "November 2024",
    readTime: "6 min read",
    image: "/images/project-equinox.jpg",
    content: [
      "The pandemic forced a global experiment in remote work, and the results are clear: many tasks are performed better at home. This raises a profound question for office design: what is the office actually for?",
      "Our answer: the office is for the things that cannot happen on Zoom. Spontaneous encounters. Cross-pollination between departments. The energy of shared purpose. The subtle cues of body language and presence that build trust over time.",
      "This redefinition changes everything about how we design workplaces. Instead of rows of identical desks, we create a landscape of distinct spaces — each optimized for a specific type of interaction.",
      "Focus rooms for deep individual work. Phone booths for private calls. Open lounges for informal meetings. Workshop spaces for collaborative creation. A large table where the whole company can gather for lunch.",
      "The material palette reinforces this purpose. Warm, tactile surfaces — wood, leather, fabric — create a sense of comfort and belonging that encourages people to linger. Plants and natural elements connect the interior to the world outside.",
      "The most successful post-pandemic offices we have designed share one quality: they are places people choose to be. Not because they must, but because the experience of being there is genuinely better than the alternative.",
    ],
  },
  "bronze-in-interiors": {
    title: "The Warmth of Bronze: Integrating Metal Into Quiet Spaces",
    category: "Materials",
    date: "October 2024",
    readTime: "4 min read",
    image: "/images/project-aurum.jpg",
    content: [
      "Bronze occupies a unique position among metals. It is precious without being ostentatious. Warm without being brassy. Durable without being cold. In the restrained interiors we favor, bronze is often the single metallic accent — and it carries the weight of the entire palette.",
      "We use bronze in three primary applications: hardware, lighting, and sculptural elements. Each requires a different approach to specification and integration.",
      "For hardware — door handles, cabinet pulls, faucet fittings — we favor hand-cast pieces with visible casting marks and slight irregularities. These imperfections are what distinguish artisanal bronze from mass-produced alternatives.",
      "Bronze lighting fixtures develop particularly beautiful patinas over time. We specify fixtures with exposed bronze interiors that reflect warm, honey-toned light, creating an atmosphere no other material can replicate.",
      "As sculptural elements, bronze can anchor a room. A single large bronze vessel on a stone plinth. A bronze screen dividing two spaces. These elements become focal points without competing with the architecture.",
      "The key to using bronze successfully is restraint. In most of our projects, bronze appears in no more than five or six locations. Each instance is deliberate, considered, and essential. Less is not just more — less is everything.",
    ],
  },
};

function JournalArticlePage() {
  const { slug } = Route.useParams();
  const article = articles[slug] || articles["the-art-of-limewash"];

  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-[#1C1E1A]/30" />
      </section>

      {/* Article Header */}
      <section className="px-6 md:px-12 pt-12 pb-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C]">
            {article.category}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#8A8580]">
            {article.date} — {article.readTime}
          </span>
        </div>
        <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1C1E1A]">
          {article.title}
        </h1>
      </section>

      {/* Article Content */}
      <article className="px-6 md:px-12 pb-24 md:pb-32 max-w-3xl mx-auto">
        <div className="space-y-8">
          {article.content.map((paragraph, i) => (
            <Reveal key={i} as="p" className="text-[#8A8580] leading-relaxed text-base md:text-lg text-pretty" delay={(i % 4) * 100}>
              {paragraph}
            </Reveal>
          ))}
        </div>

        {/* Share */}
        <Reveal className="mt-16 pt-8 border-t border-[#1C1E1A]/10">
          <span className="text-[10px] uppercase tracking-widest text-[#8A8580] mb-4 block">
            Share this article
          </span>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "WhatsApp"].map((label) => (
              <Magnetic key={label} strength={0.5}>
                <a href="#" className="text-sm text-[#8A8580] hover:text-[#9D8A6C] transition-colors">
                  {label}
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </article>
    </main>
  );
}
