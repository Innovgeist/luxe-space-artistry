import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Vivanta Interior Architecture" },
      { name: "description", content: "Get in touch with Vivanta for luxury interior design inquiries, consultations, and project discussions. Based in Ahmedabad, working globally." },
      { property: "og:title", content: "Contact | Vivanta Interior Architecture" },
      { property: "og:description", content: "Schedule a consultation with Vivanta — luxury interior design studio based in Ahmedabad." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans">
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <img src="/images/showreel-3.jpg" alt="Vivanta atelier" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-transparent to-[#1C1E1A]/30" />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#F7F5F2]/70 mb-6 block">
            Inquiry — By Appointment
          </span>
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[#F7F5F2]">
            Begin the <br /> Dialogue.
          </h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        {/* Contact Info */}
        <Reveal className="md:col-span-4">
          <div className="sticky top-32 space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-[#1C1E1A]">
                Studio
              </h3>
              <p className="text-sm text-[#8A8580] leading-relaxed">
                Vivanta Interior Architecture<br />
                14, Riverfront Walk<br />
                Near Sabarmati Riverfront<br />
                Ahmedabad, Gujarat 380001
              </p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-[#1C1E1A]">
                Contact
              </h3>
              <p className="text-sm text-[#8A8580] leading-relaxed space-y-2">
                <a href="mailto:hello@vivanta.studio" className="block hover:text-[#9D8A6C] transition-colors">
                  hello@vivanta.studio
                </a>
                <a href="tel:+917926543210" className="block hover:text-[#9D8A6C] transition-colors">
                  +91 79 2654 3210
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-[#1C1E1A]">
                Connect
              </h3>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-[#8A8580] hover:text-[#9D8A6C] transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-sm text-[#8A8580] hover:text-[#9D8A6C] transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-sm text-[#8A8580] hover:text-[#9D8A6C] transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-[#1C1E1A]">
                Hours
              </h3>
              <p className="text-sm text-[#8A8580] leading-relaxed">
                Monday — Saturday<br />
                10:00 AM — 6:00 PM IST<br />
                <span className="text-[#9D8A6C]">By appointment only</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="md:col-span-7 md:col-start-6" delay={100}>
          {submitted ? (
            <div className="bg-[#EDEAE5]/50 p-12 md:p-16 text-center">
              <span className="text-[#9D8A6C] text-5xl font-serif block mb-6">&ldquo;</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#1C1E1A]">
                Thank you for reaching out.
              </h2>
              <p className="text-sm text-[#8A8580] leading-relaxed max-w-md mx-auto">
                We have received your inquiry and will be in touch within 48 hours. In the meantime, feel free to explore our portfolio or follow us on Instagram for a glimpse into our studio life.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-base md:text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-base md:text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-base md:text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-3">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-base md:text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-3">
                  Estimated Budget (INR)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-base md:text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
                >
                  <option value="">Select range...</option>
                  <option value="50L-1Cr">50 Lakhs — 1 Crore</option>
                  <option value="1-3Cr">1 — 3 Crores</option>
                  <option value="3-5Cr">3 — 5 Crores</option>
                  <option value="5-10Cr">5 — 10 Crores</option>
                  <option value="10Cr+">10 Crores +</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#8A8580] block mb-3">
                  Tell us about your project
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-base md:text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors resize-none"
                  placeholder="Share your vision, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="px-12 py-5 bg-[#1C1E1A] text-[#F7F5F2] text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-[#9D8A6C] transition-colors duration-500"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </Reveal>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <Reveal className="relative w-full h-[500px] overflow-hidden">
          <img src="/images/project-exterior.jpg" alt="Studio location, Ahmedabad" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1C1E1A]/40" />
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#F7F5F2]/70 block mb-3">
                The Atelier — Ahmedabad
              </span>
              <span className="font-serif italic text-4xl md:text-5xl text-[#F7F5F2] block mb-6">
                23.0225° N, 72.5714° E
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sabarmati+Riverfront+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-3 border border-[#F7F5F2]/40 text-[#F7F5F2] hover:bg-[#F7F5F2] hover:text-[#1C1E1A] transition-colors text-[10px] uppercase tracking-[0.3em]"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
