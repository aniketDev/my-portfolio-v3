import Image from "next/image";
import { SectionHeading } from "@/app/components/sectionHeading";

export const Services = () => {
  const data = [
    {
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: "contact.png", // keeping original icon path but can be updated later
    },
    {
      title: "Front-end Development",
      description:
        "Creating beautiful, interactive user interfaces with pixel-perfect precision and smooth animations for robust web applications.",
      icon: "logo.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications with React Native, ensuring a seamless user experience on both iOS and Android.",
      icon: "contact.png",
    },
  ];
  return (
    <section className="w-full py-24 bg-gradient-to-tr from-gray-50 via-white to-gray-100 relative overflow-hidden" id="services">
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <SectionHeading
            headingPrimary="My"
            headingAccent="Expertise"
            subHeading="What I can do"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-6 p-8 md:p-10 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm flex items-center justify-center p-3 group-hover:border-accent/30 transition-colors">
                <Image
                  aria-hidden
                  src={`/${item.icon}`}
                  alt={item.title}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="space-y-4 relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative accent line */}
              <div className="w-0 h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full group-hover:w-16 transition-all duration-500 mt-auto pt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
