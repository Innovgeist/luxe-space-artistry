import { useEffect, useRef, useState } from "react";

/**
 * Premium custom cursor: a small dot plus a trailing ring that lags
 * behind and expands over interactive elements. Disabled on touch
 * devices and when the user prefers reduced motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]",
      );
      setHovering(!!interactive);
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-[#9D8A6C] transition-transform duration-100 ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border mix-blend-difference transition-[width,height,opacity] duration-300 ease-out-expo ${
          hovering
            ? "h-14 w-14 border-[#F7F5F2] bg-[#F7F5F2]/10"
            : "h-8 w-8 border-[#F7F5F2]/60"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
        aria-hidden="true"
      />
    </>
  );
}
