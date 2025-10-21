import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";

export const About = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;

  return (
    <section className="about grid grid-cols-[2fr_1fr] gap-16 bg-[url('/about_bg.png')] bg-cover bg-center bg-no-repeat px-8">
      <div className="flex flex-col">
        <SectionHeading
          headingPrimary="Me"
          headingAccent="About"
          subHeading="Whoami"
          accentFirst
        />
        <div className="text-xl text-gray-700 space-y-6 mt-2">
          <p>
            Hello! My name is <b>Aniket Mandal</b>. I&#39;m a passionate
            <b> Front-end Developer</b> with
            <b> {experience}+ years of professional experience</b>, building
            responsive, user-focused web applications.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-4 h-4 rounded-full border-2 border-teal-500 flex-shrink-0"></span>
              <span>
                My journey began at <b>Balihans Software Pvt. Ltd.</b>, where I
                helped develop an <b>online school management system</b> using
                <b> Java, Spring, HTML, CSS, and Bootstrap</b>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-4 h-4 rounded-full border-2 border-teal-500 flex-shrink-0"></span>
              <span>
                I then joined <b>Primesoft IP Solutions Pvt. Ltd.</b> as a
                <b> Software Engineer</b>, contributing to banking and
                enterprise projects using
                <b> Angular 5, Ionic 3, and React.js</b>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-4 h-4 rounded-full border-2 border-teal-500 flex-shrink-0"></span>
              <span>
                At <b>Valtech India Pvt. Ltd.</b>, I worked on the
                <b> Zee5 OTT platform</b>, one of India&#39;s top streaming
                services, leveraging <b>React, Redux and vanilla JS</b> to
                deliver high-quality user experiences.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-4 h-4 rounded-full border-2 border-teal-500 flex-shrink-0"></span>
              <span>
                Currently, I&#39;m with <b>Sabre Travel Technologies</b>, where
                I’m building a <b>web-based airline ticket booking system</b>{" "}
                using <b>React, Redux</b>, and other modern web technologies.
              </span>
            </li>
          </ul>
          <p>
            I enjoy turning complex problems into simple, elegant solutions and
            I’m always excited to learn, grow, and contribute to impactful
            digital experiences.
          </p>
        </div>
      </div>
      <div>
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
