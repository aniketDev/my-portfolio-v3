import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";

export const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      description:
        "Proficient in modern JavaScript (ES6+), including async/await, promises, and modules.",
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
        "Experienced in building dynamic user interfaces with React, including hooks and context API.",
      icon: "react.svg",
    },
    {
      name: "Next.js",
      description:
        "Skilled in server-side rendering and static site generation with Next.js.",
      icon: "nextjs.svg",
    },
    {
      name: "Redux",
      description:
        "Experienced in state management with Redux, including redux toolkit and middleware like Thunk.",
      icon: "redux.svg",
    },
    {
      name: "HTML5",
      description:
        "Proficient in modern HTML5, including semantic elements and accessibility best practices.",
      icon: "html5.svg",
    },
    {
      name: "CSS3",
      description:
        "Experienced in CSS3, including Flexbox, Grid, and responsive design techniques.",
      icon: "css3.svg",
    },
    {
      name: "Sass",
      description:
        "Skilled in using Sass for writing maintainable and modular CSS.",
      icon: "sass.svg",
    },
    {
      name: "Tailwind CSS",
      description:
        "Proficient in using Tailwind CSS for utility-first styling and responsive design.",
      icon: "tailwind.svg",
    },
    {
      name: "React Native",
      description:
        "Experienced in building cross-platform mobile applications using React Native.",
      icon: "react-native.svg",
    },
    {
      name: "Expo",
      description:
        "Skilled in using Expo for rapid development and deployment of React Native applications.",
      icon: "expo.svg",
    },
    {
      name: "Git",
      description:
        "Proficient in version control using Git, including branching and merging strategies.",
      icon: "git.svg",
    },
    {
      name: "Jest",
      description:
        "Skilled in unit testing and integration testing with Jest and React Testing Library.",
      icon: "jest.svg",
    },
    {
      name: "RTL",
      description:
        "Experienced in testing React components with React Testing Library for making applications more reliable and error free.",
      icon: "react-testing-library.svg",
    },
  ];

  const rows = [
    skills.slice(0, 5),
    skills.slice(5, 9),
    skills.slice(9, 12),
    skills.slice(12, 14),
  ];

  return (
    <div className="flex flex-col w-full">
      <SectionHeading
        headingPrimary="Technical"
        headingAccent="Skills"
        subHeading="My skills"
      />

      <div className="flex flex-col gap-8 mt-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-8">
            {row.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-40"
              >
                <Image
                  src={`/skills/${skill.icon}`}
                  alt={skill.name}
                  height={70}
                  width={70}
                  className="object-cover"
                />
                <p className="text-xl text-gray-600 font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
