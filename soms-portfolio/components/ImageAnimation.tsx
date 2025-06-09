"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function DiagonalImagesSection() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controlsLeft.start("visible");
      controlsRight.start("visible");
    } else {
      controlsLeft.start("hidden");
      controlsRight.start("hidden");
    }
  }, [inView, controlsLeft, controlsRight]);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-16 px-4 py-24"
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold text-white mb-8 text-center">
        Some of my work
      </h2>

      {/* Image Row */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          animate={controlsLeft}
          variants={{
            hidden: { x: "-100%", opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 1 },
            },
          }}
          className="relative w-full md:w-1/2 h-[400px] border-4 border-white rounded overflow-hidden"
        >
          <Image
            src="/image1.jpg"
            alt="Project 1"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          animate={controlsRight}
          variants={{
            hidden: { x: "100%", opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 1 },
            },
          }}
          className="relative w-full md:w-1/2 h-[400px] border-4 border-white rounded overflow-hidden"
        >
          <Image
            src="/image2.jpg"
            alt="Project 2"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
