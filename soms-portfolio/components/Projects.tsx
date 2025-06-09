"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const projectData = [
  {
    title: "Lamborghini Huracan",
    description: "A hard surface model of the Huracan done in Maya substance painter and blender",
    image: "/project1.jpg",
    link: "https://www.artstation.com/artwork/6L2NGw",
  },
  {
    title: "Casio",
    description: "casio watch modeled in Maya, rendered in Maya arnold.",
    image: "/project2.jpg",
    link: "https://www.artstation.com/artwork/6L8W60",
  },
  {
    title: "Still Life",
    description: "Made in Maya, a study table from medieval era.",
    image: "/project3.jpg",
    link: "https://www.artstation.com/artwork/obNPkq",
  },
  {
    title: "Emergency Lever",
    description: "Made in Maya and Substance Painter, this is a emergency lever asset.",
    image: "/project4.jpg",
    link: "https://www.artstation.com/artwork/49Gz48",
  },
];

export default function Projects() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controlsLeft.start("visible");
      controlsRight.start("visible");
    } else {
      controlsLeft.start("hidden");
      controlsRight.start("hidden");
    }
  }, [inView, controlsLeft, controlsRight]);

  const boxVariants = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black text-white px-4 py-16 flex flex-col items-center"
      suppressHydrationWarning
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* First Column */}
        <motion.div
          className="bg-[#8B0000] rounded-2xl p-6 shadow-lg flex flex-col gap-6"
          initial="hidden"
          animate={controlsLeft}
          variants={boxVariants("left")}
        >
          {projectData.slice(0, 2).map((project, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 relative flex-shrink-0"
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg cursor-pointer"
                  />
                </div>
              </a>
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second Column */}
        <motion.div
          className="bg-[#8B0000] rounded-2xl p-6 shadow-lg flex flex-col gap-6"
          initial="hidden"
          animate={controlsRight}
          variants={boxVariants("right")}
        >
          {projectData.slice(2, 4).map((project, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-24 h-24 relative flex-shrink-0"
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg cursor-pointer"
                  />
                </div>
              </a>
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
