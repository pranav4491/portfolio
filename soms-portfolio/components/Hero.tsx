"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <section
      className="min-h-screen bg-black text-white flex items-center justify-center"
      ref={ref}
      suppressHydrationWarning // Prevent hydration mismatch warning here
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" },
          },
        }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I’m Sohum</h1>
        <p className="text-xl md:text-2xl text-gray-300">
          I am a 3D artist, focused on storytelling through form, light, and detail.
        </p>
      </motion.div>
    </section>
  );
}
