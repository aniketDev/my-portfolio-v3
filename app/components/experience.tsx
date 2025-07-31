import { Timelines } from "@/app/components/timelines";
import { SectionHeading } from "@/app/components/sectionHeading";

export const Experience = () => {
  const experiences = [
    {
      rightTitle: "Frontend Developer",
      leftTitle: "Valtech Solutions Pvt. Ltd.",
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
        "Assisted in developing a mobile application using React Native, contributing to the project’s success.",
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
    <section className="experience">
      <SectionHeading
        headingPrimary="My Work"
        headingAccent="Experience"
        subHeading="Professional history"
      />
      <div className="mt-8 p-8">
        <Timelines timelines={experiences} />
      </div>
    </section>
  );
};
