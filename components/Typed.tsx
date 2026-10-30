"use client";
// Text that types itself once, without reflow: the untyped rest is laid out in transparent ink,
// so lines break where they will end. Screen readers and no-script visitors get the whole text.
import { useEffect, useState } from "react";

export default function Typed({ text, speed = 32, delay = 500, className = "" }: { text: string; speed?: number; delay?: number; className?: string }) {
  const [n, setN] = useState(text.length);
  const [live, setLive] = useState(false);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0, id = 0, start = 0;
    // Rewind on the first frame: the server sent the whole text, CSS keeps it invisible till now.
    const raf = requestAnimationFrame(() => {
      setLive(true);
      if (reduce) return;
      setN(0);
      start = window.setTimeout(() => {
        id = window.setInterval(() => { setN(++i); if (i >= text.length) window.clearInterval(id); }, speed);
      }, delay);
    });
    return () => { cancelAnimationFrame(raf); window.clearTimeout(start); window.clearInterval(id); };
  }, [text, speed, delay]);
  return (
    <span className={`typed ${className}`} data-live={live || undefined}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        <span className="typed-a">{text.slice(0, n)}</span>
        {n < text.length && live && <span className="caret" />}
        <span className="text-transparent">{text.slice(n)}</span>
      </span>
    </span>
  );
}
