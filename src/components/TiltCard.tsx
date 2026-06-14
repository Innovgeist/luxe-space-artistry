import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  max?: number;
  [key: string]: unknown;
}

/**
 * Subtle 3D tilt on hover, following the cursor position. Desktop
 * (fine pointer) only; inert elsewhere so mobile layout is untouched.
 */
export function TiltCard({ children, as: Tag = "div", className = "", max = 6, ...rest }: TiltCardProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * max * 2;
      const rotateX = (0.5 - py) * max * 2;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const onLeave = () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <Tag ref={ref} className={`transition-transform duration-300 ease-out-expo will-change-transform [transform-style:preserve-3d] ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
