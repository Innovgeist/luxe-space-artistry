import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[#1C1E1A]/10">
      {/* CTA Section */}
      <div className="px-6 md:px-12 py-24 md:py-32 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-10 text-[#1C1E1A]">
          Begin the dialogue.
        </h2>
        <p className="text-[#8A8580] max-w-md mx-auto mb-12 text-pretty text-sm leading-relaxed">
          We accept a limited number of projects each year to ensure uncompromising focus on every detail.
        </p>
        <Link
          to="/contact"
          className="inline-block px-12 py-6 bg-[#1C1E1A] text-[#F7F5F2] text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-[#9D8A6C] transition-colors duration-500"
        >
          Schedule Consultation
        </Link>
      </div>

      {/* Footer Grid */}
      <div className="px-6 md:px-12 py-16 border-t border-[#1C1E1A]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-serif italic text-3xl tracking-tighter block mb-6 text-[#1C1E1A]">
              VIVANTA
            </span>
            <p className="text-sm text-[#8A8580] max-w-xs leading-relaxed">
              Architectural interiors for the discerning. Based in the heart of Ahmedabad, working globally.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-[#1C1E1A]">
              Studio
            </h5>
            <ul className="space-y-4 text-sm text-[#8A8580]">
              <li>
                <Link to="/about" className="hover:text-[#1C1E1A] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#1C1E1A] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#1C1E1A] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-[#1C1E1A] transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-[#1C1E1A]">
              Connect
            </h5>
            <ul className="space-y-4 text-sm text-[#8A8580]">
              <li>
                <a href="#" className="hover:text-[#1C1E1A] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1C1E1A] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1C1E1A] transition-colors">
                  Inquiries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1C1E1A] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-8 border-t border-[#1C1E1A]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest opacity-40 text-[#1C1E1A]">
            &copy; 2025 Vivanta Interior Architecture
          </span>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40 text-[#1C1E1A]">
            <Link to="#" className="hover:text-[#9D8A6C] transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-[#9D8A6C] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
