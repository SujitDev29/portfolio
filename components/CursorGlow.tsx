"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--cx", `${lastX}px`);
        el.style.setProperty("--cy", `${lastY}px`);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] hidden lg:block"
      style={{
        background:
          "radial-gradient(520px circle at var(--cx, -999px) var(--cy, -999px), rgba(249,115,22,0.06), transparent 50%)",
      }}
    />
  );
}
