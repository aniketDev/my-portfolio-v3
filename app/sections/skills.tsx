"use client";

import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";
import { motion, type Variants } from "motion/react";

export const Skills = () => {
  const categorizedSkills = [
    {
      title: "Frontend Core & Ecosystem",
      skills: [
        { name: "JavaScript", description: "Modern JS (ES6+), async/await, DOM manipulation.", icon: "javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", description: "Static typing, interfaces, advanced types.", icon: "typescript.svg", url: "https://www.typescriptlang.org/" },
        { name: "React", description: "Hooks, Context API, dynamic UIs.", icon: "react.svg", url: "https://react.dev/" },
        { name: "Next.js", description: "App Router, SSR, SSG, robust routing.", icon: "nextjs.svg", url: "https://nextjs.org/" },
        { name: "HTML5", description: "Semantic markup, accessibility standards.", icon: "html5.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS3", description: "Flexbox, Grid, animations, variables.", icon: "css3.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Tailwind", description: "Utility-first CSS, responsive styling.", icon: "tailwind.svg", url: "https://tailwindcss.com/" },
        { name: "Sass", description: "Mixins, variables, modular styling.", icon: "sass.svg", url: "https://sass-lang.com/" },
      ]
    },
    {
      title: "Mobile & State Management",
      skills: [
        { name: "React Native", description: "Cross-platform mobile UI components.", icon: "react-native.svg", url: "https://reactnative.dev/" },
        { name: "Expo", description: "Rapid native app development lifecycle.", icon: "expo.svg", url: "https://expo.dev/" },
        { name: "Redux", description: "Global state, RTK Query, middlewares.", icon: "redux.svg", url: "https://redux.js.org/" },
      ]
    },
    {
      title: "Tools & Quality Assurance",
      skills: [
        { name: "Git", description: "Version control, branching strategies.", icon: "git.svg", url: "https://git-scm.com/" },
        { name: "Jest", description: "Test suites, mocks, snapshots.", icon: "jest.svg", url: "https://jestjs.io/" },
        { name: "RTL", description: "Component testing, simulating user events.", icon: "react-testing-library.svg", url: "https://testing-library.com/docs/react-testing-library/intro/" },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden" id="skills">
      {/* Decorative background blur blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left mb-16">
          <SectionHeading
            headingPrimary="Technical"
            headingAccent="Skills"
            subHeading="My Stack"
            description="A categorized overview of the technologies and tools I utilize to engineer scalable web and mobile applications."
          />
        </div>

        <motion.div
          className="flex flex-col gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categorizedSkills.map((category, catIdx) => (
            <motion.div key={catIdx} variants={itemVariants} className="w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 pl-4 border-l-4 border-accent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8 justify-items-center sm:justify-items-start lg:justify-items-center">
                {category.skills.map((skill, index) => (
                  <motion.a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group border border-white/60 flex flex-col items-center justify-center p-6 bg-white/50 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/70 transition-all duration-300 w-full max-w-[190px] aspect-square relative overflow-hidden cursor-pointer"
                  >
                    {/* Hover gradient background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex flex-col items-center gap-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center relative transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                        <Image
                          src={`/skills/${skill.icon}`}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-md sm:text-lg text-gray-800 font-semibold text-center group-hover:text-accent transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>

                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
