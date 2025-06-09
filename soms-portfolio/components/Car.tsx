"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Car() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      style={{ position: "absolute", bottom: "10%", left: `${scrollY % 100}%` }}
      className="car"
    >
      <Image
        src="/car.jpg"
        alt="Car"
        width={64}
        height={64}
        priority
      />
    </motion.div>
  );
}
