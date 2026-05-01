"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  const parsed = value.match(/^(\d+)(.*)$/);
  const target = parsed ? parseInt(parsed[1], 10) : null;
  const suffix = parsed ? parsed[2] : "";

  const [display, setDisplay] = useState(target !== null ? `0${suffix.replace(/^0+/, "")}` : value);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          if (p < 1) {
            setDisplay(`${Math.round(eased * target)}${suffix}`);
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
