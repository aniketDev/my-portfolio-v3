import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";

export const About = () => {
  return (
    <section className="about grid grid-cols-[2fr_1fr] gap-16 bg-[url('/about_bg.png')] bg-cover bg-center bg-no-repeat px-8">
      <div className="flex flex-col">
        <SectionHeading
          headingPrimary="Me"
          headingAccent="About"
          subHeading="Whoami"
          accentFirst
        />
        <p className="text-xl text-gray-700">
          Hello! My name is Aniket Mandal. I&#39;m a professional Front-end
          Developer with 7+ years of professional experience.
          <br />
          <br />
          After completing my M.Tech, I began my career as a Junior Software
          Developer at Balihans Software Pvt. Ltd., a startup where I was
          involved in designing and developing the company’s proprietary
          product—an online school management system—using technologies such as
          Java, Spring, HTML, CSS, and Bootstrap. Upon successfully delivering
          the project, I joined Primesoft IP Solutions Pvt. Ltd. as a Software
          Engineer. There, I contributed to a banking project and several other
          initiatives, working with frameworks and tools including Angular 5,
          Ionic 3, and React.js. Currently, I am employed at Valtech India Pvt.
          Ltd. as a Software Engineer, where I am part of the team working on
          the Zee5 project—one of India&#39;s leading OTT platforms—leveraging
          technologies such as React, Redux, and more.
          <br />
          <br />
          With experience in various programming languages and frameworks, I
          enjoy tackling challenges and building projects that make a
          difference.
        </p>
      </div>
      <div className="">
        <Image
          aria-hidden
          src="/about_dp.png"
          alt="about me image"
          height={400}
          width={500}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
