"use client";

import { Timelines } from "@/app/components/timelines";
import { SectionHeading } from "@/app/components/sectionHeading";

export const Academics = () => {
  const academics = [
    {
      leftTitle: "Masters in Computer Science",
      rightTitle: "Maulana Abul Kalam Azad University of Technology, Kolkata",
      leftTimeline: "Jun 2018 - Dec 2019",
      leftDuration: "1 years",
      color: "bg-amber-500",
      rightDescription:
        "Designed and implemented responsive web interfaces using HTML, CSS, and JavaScript, enhancing user engagement.",
    },
    {
      rightTitle: "Software Engineer",
      leftTitle: "Primesoft IP Solutions Pvt. Ltd.",
      leftTimeline: "Jan 2018 - May 2018",
      leftDuration: "1 years",
      color: "bg-blue-500",
      rightDescription:
        "Assisted in developing a mobile application using React Native, contributing to the project's success.",
    },
    {
      rightTitle: "Junior Software Developer",
      leftTitle: "Balihans Software Pvt. Ltd.",
      leftTimeline: "Jun 2018 - Dec 2019",
      leftDuration: "1 years",
      color: "bg-accent",
      rightDescription:
        "Single-handedly designing and developing the front-end part of the company's own product which is a web application software called Qnabu, leading career management and school automation tool.",
    },
  ];

  return (
    <section
      className="py-24 px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #162032 50%, #0f172a 100%)",
      }}
    >
      <div
        className="absolute top-[-4rem] left-1/3 w-[16rem] h-[16rem] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(45, 212, 191, 0.06)" }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          headingPrimary="My"
          headingAccent="Academics"
          subHeading="Education history"
        />
        <div className="mt-8 p-8">
          <Timelines timelines={academics} />
        </div>
      </div>
    </section>
  );
};
