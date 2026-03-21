import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { delay = 0, direction = "up" } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translate =
      direction === "left"
        ? "translateX(-24px)"
        : direction === "right"
        ? "translateX(24px)"
        : "translateY(20px)";

    el.style.opacity = "0";
    el.style.transform = translate;
    el.style.filter = "blur(4px)";
    el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          el.style.filter = "blur(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return ref;
}

export function useStaggerReveal(count: number, baseDelay = 0, stagger = 80) {
  return Array.from({ length: count }, (_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollReveal({ delay: baseDelay + i * stagger })
  );
}
