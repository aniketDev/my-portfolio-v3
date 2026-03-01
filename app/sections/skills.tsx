"use client";

import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";
import { motion } from "motion/react";

const skills = [
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
  { name: "Redux", icon: "redux.svg" },
  { name: "HTML5", icon: "html5.svg" },
  { name: "CSS3", icon: "css3.svg" },
  { name: "Sass", icon: "sass.svg" },
  { name: "Tailwind CSS", icon: "tailwind.svg" },
  { name: "React Native", icon: "react-native.svg" },
  { name: "Expo", icon: "expo.svg" },
  { name: "Git", icon: "git.svg" },
  { name: "Jest", icon: "jest.svg" },
  { name: "RTL", icon: "react-testing-library.svg" },
];

const rows = [
  skills.slice(0, 5),
  skills.slice(5, 9),
  skills.slice(9, 12),
  skills.slice(12, 14),
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" },
  }),
};

export const Skills = () => {
  return (
    <section
      className="py-24 px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1a2940 50%, #0f172a 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-[-8rem] left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(255, 79, 110, 0.06)" }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          headingPrimary="Technical"
          headingAccent="Skills"
          subHeading="My skills"
        />

        <div className="flex flex-col gap-8 mt-10">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-6">
              {row.map((skill, index) => {
                const globalIndex =
                  rows
                    .slice(0, rowIndex)
                    .reduce((acc, r) => acc + r.length, 0) + index;
                return (
                  <motion.div
                    key={skill.name}
                    custom={globalIndex}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center gap-4 p-5 rounded-2xl w-40 transition-all duration-300 cursor-default"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 79, 110, 0.3)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(255, 79, 110, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.04)";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <Image
                        src={`/skills/${skill.icon}`}
                        alt={skill.name}
                        height={40}
                        width={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-lg text-white font-medium text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
