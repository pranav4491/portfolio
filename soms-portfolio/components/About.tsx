"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const paragraph = "Hey, I’m Sohum Bhatnagar — a 3D artist specializing in hard surface modeling for props, vehicles, and machines.I work in Maya, Substance Painter, and Photoshop to create clean, production-ready assets with strong detail and edge flow.Curious, collaborative, and always learning — I bring both precision and creativity to every project.";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const words = paragraph.split(" ");

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <motion.div
          className="text-xl flex flex-wrap justify-center gap-2"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: {},
          }}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.5,
                    delay: idx * 0.1,
                  },
                },
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
