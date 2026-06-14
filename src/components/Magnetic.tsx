import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  strength?: number;
  [key: string]: unknown;
}

/**
 * Wraps an element and gently pulls it toward the cursor on hover,
 * springing back on leave. Desktop (fine pointer) only.
 */
export function Magnetic({ children, as: Tag = "div", className = "", strength = 0.35, ...rest }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    };

    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <Tag ref={ref} className={`inline-block transition-transform duration-300 ease-out-expo will-change-transform ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
