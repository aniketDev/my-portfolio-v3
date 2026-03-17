import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";

export const About = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;

  return (
    <section
      className="w-full py-24 bg-linear-to-tl from-gray-100 via-white to-gray-50 relative overflow-hidden"
      id="about"
    >
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          headingPrimary="Me"
          headingAccent="About"
          subHeading="Whoami"
          accentFirst
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-md aspect-4/5 lg:aspect-square">
              {/* Glassmorphic decorative card behind image */}
              <div className="absolute -inset-4 bg-white/50 backdrop-blur-xl rounded-3xl transform rotate-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60"></div>
              <div className="absolute -inset-4 bg-linear-to-tr from-accent/20 to-purple-200/20 rounded-3xl transform -rotate-2"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/workspace.png"
                  alt="Aniket's Workspace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col order-1 lg:order-2">
            <div className="mt-8 bg-white/70 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Hello! My name is{" "}
                <span className="font-bold text-gray-900 border-b-2 border-accent/30 tracking-wide">
                  Aniket Mandal
                </span>
                . I&#39;m a passionate{" "}
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-500">
                  Front-end Developer
                </span>{" "}
                with{" "}
                <span className="font-bold text-gray-900 bg-accent/10 px-2 py-0.5 rounded-md">
                  {experience}+ years of professional experience
                </span>
                , building responsive, user-focused web applications.
              </p>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent pl-8">
                {/* Timeline Items */}
                <div className="relative flex items-center justify-between md:justify-normal group md:mb-6">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-white bg-accent shadow absolute left-[-2.15rem] group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-full bg-white/60 hover:bg-white/90 transition-colors backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md">
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      My journey began at{" "}
                      <strong className="text-gray-800">
                        Balihans Software Pvt. Ltd.
                      </strong>
                      , developing an online school management system using{" "}
                      <strong className="text-accent">
                        Java, Spring, HTML, CSS, and Bootstrap
                      </strong>
                      .
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal group md:mb-6">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-white bg-purple-500 shadow absolute left-[-2.15rem] group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-full bg-white/60 hover:bg-white/90 transition-colors backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md text-left">
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      Joined{" "}
                      <strong className="text-gray-800">
                        Primesoft IP Solutions Pvt. Ltd.
                      </strong>{" "}
                      as a Software Engineer, contributing to banking &
                      enterprise projects using{" "}
                      <strong className="text-purple-500">
                        Angular 5, Ionic 3, and React.js
                      </strong>
                      .
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal group md:mb-6">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-white bg-accent shadow absolute left-[-2.15rem] group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-full bg-white/60 hover:bg-white/90 transition-colors backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md">
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      Worked at{" "}
                      <strong className="text-gray-800">
                        Valtech India Pvt. Ltd.
                      </strong>{" "}
                      on the{" "}
                      <strong className="text-gray-800">
                        Zee5 OTT platform
                      </strong>{" "}
                      using{" "}
                      <strong className="text-accent">
                        React, Redux and vanilla JS
                      </strong>{" "}
                      to deliver high-quality UX.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal group text-left">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-white bg-purple-500 shadow absolute left-[-2.15rem] group-hover:scale-125 transition-transform duration-300 shrink-0 animate-pulse"></div>
                  <div className="w-full bg-linear-to-br from-white to-gray-50 border-l-4 border-purple-500 p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all">
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      Currently at{" "}
                      <strong className="text-gray-800">
                        Sabre Travel Technologies
                      </strong>
                      , building a web-based airline ticket booking system using{" "}
                      <strong className="text-purple-500">React, Redux</strong>,
                      and modern tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 ml-2">
              <p className="text-lg text-gray-500 italic border-l-4 border-accent pl-4">
                I enjoy turning complex problems into simple, elegant solutions
                and I’m always excited to learn, grow, and contribute to
                impactful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
