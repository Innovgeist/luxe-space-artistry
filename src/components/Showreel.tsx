import { useEffect, useState } from "react";

interface ShowreelProps {
  slides: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  intervalMs?: number;
}

export function Showreel({ slides, intervalMs = 5200 }: ShowreelProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const kenClasses = ["animate-ken-1", "animate-ken-2", "animate-ken-3"];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{ opacity: index === i ? 1 : 0 }}
          aria-hidden={index !== i}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-full object-cover ${kenClasses[i % kenClasses.length]}`}
            key={`${slide.src}-${index === i ? "active" : "idle"}`}
          />
        </div>
      ))}
      {/* Dual gradient overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E1A]/70 via-[#1C1E1A]/10 to-[#1C1E1A]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[#1C1E1A]/10 pointer-events-none" />

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className="h-px bg-[#F7F5F2]/40 overflow-hidden"
            style={{ width: "48px" }}
          >
            <div
              className="h-full bg-[#F7F5F2] transition-all ease-linear"
              style={{
                width: index === i ? "100%" : index > i ? "100%" : "0%",
                transitionDuration: index === i ? `${intervalMs}ms` : "300ms",
                opacity: index === i ? 1 : index > i ? 0.5 : 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Frame counter */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-[#F7F5F2]/70">
        {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}