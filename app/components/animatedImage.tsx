"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const AnimatedImage = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Adjust these values based on your layout
  const y = useTransform(scrollY, [0, 750], [0, 800]); // Moves image down as you scroll
  const x = useTransform(scrollY, [0, 700], ["-50%", "140%"]); // Optional: adjust horizontal position
  const scale = useTransform(scrollY, [0, 700], [1, 1]); // Optional: scale down

  return (
    <motion.img
      ref={ref}
      src="/about_dp.png"
      alt="Animated"
      style={{
        position: "absolute",
        // top: 100,
        bottom: 0,
        left: "27%",
        x,
        y,
        scale,
        zIndex: 50,
        height: "85vh",
        objectFit: "contain",
        // width: "500px",
      }}
      className=""
    />
  );
};
