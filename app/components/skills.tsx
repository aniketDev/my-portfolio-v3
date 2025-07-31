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
      name: "Tailwind CSS",
      description:
        "Proficient in using Tailwind CSS for utility-first styling and responsive design.",
      icon: "tailwind.svg",
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
      name: "Tailwind CSS",
      description:
        "Proficient in using Tailwind CSS for utility-first styling and responsive design.",
      icon: "tailwind.svg",
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
      name: "Tailwind CSS",
      description:
        "Proficient in using Tailwind CSS for utility-first styling and responsive design.",
      icon: "tailwind.svg",
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
      name: "Tailwind CSS",
      description:
        "Proficient in using Tailwind CSS for utility-first styling and responsive design.",
      icon: "tailwind.svg",
    },
  ];

  const rows = [skills.slice(0, 5), skills.slice(5, 9), skills.slice(9, 12)];

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
