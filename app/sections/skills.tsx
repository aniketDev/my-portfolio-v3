import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";

export const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      description:
        "Proficient in modern JavaScript (ES6+), including async/await.",
      icon: "javascript.svg",
    },
    {
      name: "TypeScript",
      description:
        "Skilled in TypeScript for building robust and type-safe applications.",
      icon: "typescript.svg",
    },
    {
      name: "React",
      description:
        "Experienced in building dynamic user interfaces with React.",
      icon: "react.svg",
    },
    {
      name: "Next.js",
      description:
        "Skilled in SSR and static site generation with Next.js.",
      icon: "nextjs.svg",
    },
    {
      name: "Redux",
      description:
        "Experienced in state management with Redux and Redux Toolkit.",
      icon: "redux.svg",
    },
    {
      name: "HTML5",
      description:
        "Proficient in modern HTML5, semantics and accessibility.",
      icon: "html5.svg",
    },
    {
      name: "CSS3",
      description:
        "Experienced in CSS3, Flexbox, Grid, and responsive design.",
      icon: "css3.svg",
    },
    {
      name: "Sass",
      description:
        "Skilled in using Sass for writing modular CSS.",
      icon: "sass.svg",
    },
    {
      name: "Tailwind",
      description:
        "Proficient in using Tailwind CSS for utility-first styling.",
      icon: "tailwind.svg",
    },
    {
      name: "React Native",
      description:
        "Experienced in building cross-platform mobile apps.",
      icon: "react-native.svg",
    },
    {
      name: "Expo",
      description:
        "Skilled in using Expo for rapid React Native app development.",
      icon: "expo.svg",
    },
    {
      name: "Git",
      description:
        "Proficient in version control using Git.",
      icon: "git.svg",
    },
    {
      name: "Jest",
      description:
        "Skilled in unit testing with Jest.",
      icon: "jest.svg",
    },
    {
      name: "RTL",
      description:
        "Experienced in testing with React Testing Library.",
      icon: "react-testing-library.svg",
    },
  ];

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
          />
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto md:mx-0">
            A comprehensive list of technologies I work with to build high-performance, scalable web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 w-full max-w-[180px] aspect-square relative overflow-hidden cursor-default"
            >
              {/* Hover gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center relative transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
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

              {/* Tooltip on hover (desktop only) */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-[-10px] group-hover:bottom-2 left-0 right-0 text-center px-2 pointer-events-none hidden lg:block">
                <div className="bg-gray-900/90 text-white text-[10px] leading-tight px-3 py-2 rounded-lg backdrop-blur-sm shadow-xl transform scale-95 group-hover:scale-100 transition-transform origin-bottom duration-300 mx-auto max-w-[140px]">
                  {skill.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
