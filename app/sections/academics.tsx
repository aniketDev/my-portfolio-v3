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
    <section className="w-full py-24 bg-gradient-to-tr from-gray-100 via-white to-gray-50 relative overflow-hidden" id="academics">
      {/* Decorative background blur blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-16">
          <SectionHeading
            headingPrimary="My"
            headingAccent="Academics"
            subHeading="Education history"
          />
        </div>
        <div className="mt-8 max-w-5xl mx-auto">
          <Timelines timelines={academics} />
        </div>
      </div>
    </section>
  );
};
