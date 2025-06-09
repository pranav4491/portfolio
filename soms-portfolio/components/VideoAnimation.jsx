"use client";

import { useEffect, useRef } from "react";

export default function VideoAnimation() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            console.error("Autoplay failed:", err);
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // play when 50% of container is in view
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-black flex items-center justify-center px-4"
    >
      <video
        ref={videoRef}
        src="/front0001-0120.mp4"
        preload="auto"
        className="w-full h-auto max-w-none object-cover"
        style={{ maxHeight: "100vh", width: "100%" }}
      />
    </section>
  );
}
