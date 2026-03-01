"use client";

import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";
import { motion } from "motion/react";

const bulletPoints = [
  {
    text: (
      <>
        My journey began at <b>Balihans Software Pvt. Ltd.</b>, where I helped
        develop an <b>online school management system</b> using{" "}
        <b>Java, Spring, HTML, CSS, and Bootstrap</b>.
      </>
    ),
  },
  {
    text: (
      <>
        I then joined <b>Primesoft IP Solutions Pvt. Ltd.</b> as a{" "}
        <b>Software Engineer</b>, contributing to banking and enterprise
        projects using <b>Angular 5, Ionic 3, and React.js</b>.
      </>
    ),
  },
  {
    text: (
      <>
        At <b>Valtech India Pvt. Ltd.</b>, I worked on the{" "}
        <b>Zee5 OTT platform</b>, one of India&#39;s top streaming services,
        leveraging <b>React, Redux and vanilla JS</b> to deliver high-quality
        user experiences.
      </>
    ),
  },
  {
    text: (
      <>
        Currently, I&#39;m with <b>Sabre Travel Technologies</b>, where I&apos;m
        building a <b>web-based airline ticket booking system</b> using{" "}
        <b>React, Redux</b>, and other modern web technologies.
      </>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const About = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;

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
        className="absolute top-[-6rem] right-[-4rem] w-[20rem] h-[20rem] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(45, 212, 191, 0.08)" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-[2fr_1fr] gap-16 items-center">
        <div className="flex flex-col">
          <SectionHeading
            headingPrimary="Me"
            headingAccent="About"
            subHeading="Whoami"
            accentFirst
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl space-y-6 mt-2"
            style={{ color: "#94a3b8" }}
          >
            <motion.p variants={itemVariants}>
              Hello! My name is{" "}
              <b className="text-white">Aniket Mandal</b>. I&#39;m a passionate{" "}
              <b className="text-white">Frontend Developer</b> with{" "}
              <b className="text-white">
                {experience}+ years of professional experience
              </b>
              , building responsive, user-focused web applications.
            </motion.p>
            <ul className="space-y-4">
              {bulletPoints.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-2 w-4 h-4 rounded-full shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff4f6e, #2dd4bf)",
                      boxShadow: "0 0 8px rgba(255, 79, 110, 0.3)",
                    }}
                  />
                  <span>
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.p variants={itemVariants}>
              I enjoy turning complex problems into simple, elegant solutions and
              I&apos;m always excited to learn, grow, and contribute to impactful
              digital experiences.
            </motion.p>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-2xl blur-lg opacity-30"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 79, 110, 0.4), rgba(45, 212, 191, 0.3))",
            }}
          />
          <Image
            aria-hidden
            src="/about_dp.png"
            alt="about me image"
            height={400}
            width={500}
            className="relative z-10 object-cover rounded-2xl"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
