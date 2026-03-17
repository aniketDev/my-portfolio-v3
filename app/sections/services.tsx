import { SectionHeading } from "@/app/components/sectionHeading";
import { FiLayout, FiCode, FiSmartphone } from "react-icons/fi";

export const Services = () => {
  const data = [
    {
      title: "Web Development",
      description:
        "Building responsive, high-performance, and scalable web applications using modern technologies like React, Next.js, and Node.js.",
      icon: <FiCode className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      shadow: "shadow-blue-500/20",
    },
    {
      title: "Front-end Development",
      description:
        "Crafting beautiful, pixel-perfect user interfaces with smooth animations and an exceptional user experience that delights.",
      icon: <FiLayout className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-teal-500/20",
    },
    {
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile apps for iOS and Android, ensuring native-like performance and a seamless responsive design.",
      icon: <FiSmartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden" id="services">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <SectionHeading
            headingPrimary="My"
            headingAccent="Expertise"
            subHeading="What I can do"
            description="I offer a wide range of technical services to help you build your next digital product."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 mt-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start p-8 sm:p-10 bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/80 transition-all duration-500 hover:-translate-y-3"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
              }}
            >
              {/* Background gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

              {/* Abstract decorative shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-[2] transition-transform duration-700 ease-in-out opacity-60"></div>

              {/* Icon Container */}
              <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg ${item.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out mb-8`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Animated bottom line */}
              <div className="w-full mt-8 overflow-hidden rounded-full bg-gray-100 h-1.5 flex">
                <div className={`h-full w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-700 ease-out`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
