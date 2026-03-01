"use client";

import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";
import { motion } from "motion/react";

const data = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: "contact.png",
  },
  {
    title: "Front-end Application Development",
    description:
      "Creating cross-platform mobile applications with React Native, ensuring a seamless user experience on both iOS and Android.",
    icon: "logo.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native, ensuring a seamless user experience on both iOS and Android.",
    icon: "contact.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export const Services = () => {
  return (
    <section
      className="py-24 px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #162032 50%, #0f172a 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-[-6rem] left-[-4rem] w-[20rem] h-[20rem] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(45, 212, 191, 0.07)" }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          headingPrimary="My"
          headingAccent="Expertise"
          subHeading="What I can do"
        />
        <div className="flex flex-row gap-8 mt-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-5 p-8 rounded-2xl flex-1 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.07)";
                e.currentTarget.style.borderColor =
                  "rgba(255, 79, 110, 0.25)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(255, 79, 110, 0.08)";
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
                  background:
                    "linear-gradient(135deg, rgba(255, 79, 110, 0.15), rgba(45, 212, 191, 0.1))",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  aria-hidden
                  src={`/${item.icon}`}
                  alt="image"
                  height={35}
                  width={35}
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-lg" style={{ color: "#94a3b8" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
