"use client";

import { useEffect, useRef, useState } from "react";
import { loadHeroVideo, subscribeHeroVideo } from "@/lib/hero-video";

/** The hero clip, fed from the shared download the splash counts up. */
export default function HeroVideo({ className = "" }: { className?: string }) {
  const [src, setSrc] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    loadHeroVideo();
    return subscribeHeroVideo((s) => {
      if (s.url) setSrc(s.url);
      setRevealed(s.revealed);
    });
  }, []);

  // Start from 0:00 only once the splash is gone, so the whole 10s is seen.
  useEffect(() => {
    const v = ref.current;
    if (!v || !src || !revealed) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [src, revealed]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      src={src ?? undefined}
      className={className}
    />
  );
}
