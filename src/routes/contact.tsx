import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
    <main className="bg-[#F7F5F2] text-[#1C1E1A] font-sans pt-24">
      {/* Page Header */}
      <section className="px-6 md:px-12 pt-12 pb-12 md:pt-20 md:pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9D8A6C] mb-6 block">
          Inquiry
        </span>
        <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-[#1C1E1A]">
          Begin the <br />
          Dialogue.
        </h1>
      </section>

      {/* Contact Grid */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        {/* Contact Info */}
        <div className="md:col-span-4">
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
        </div>

        {/* Form */}
        <div className="md:col-span-7 md:col-start-6">
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
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
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
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
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
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
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
                    className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
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
                  className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors"
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
                  className="w-full bg-transparent border-b border-[#1C1E1A]/20 py-3 text-sm focus:outline-none focus:border-[#9D8A6C] transition-colors resize-none"
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
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="w-full h-[400px] bg-[#EDEAE5] flex items-center justify-center">
          <div className="text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8580] block mb-2">
              Ahmedabad, Gujarat
            </span>
            <span className="font-serif text-2xl text-[#1C1E1A]">
              23.0225° N, 72.5714° E
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
