import Image from "next/image";

export const Services = () => {
  const data = [
    {
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: "contact.png",
    },
    {
      title: "Front-end Application Development",
      description:
        "Creating cross-platform mobile applications with React Native, ensuring a seamless user experience on both iOS and Android.",
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
    <div className="flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <span className="w-7 border-2 border-accent"></span>
        <span className="text-xl">What I can do</span>
      </div>
      <h1 className="text-5xl font-bold">
        My <span className="text-accent">Expertise</span>
      </h1>
      <div className="flex flex-row gap-8 mt-8 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              aria-hidden
              src={`/${item.icon}`}
              alt="image"
              height={70}
              width={70}
              className="object-cover"
            />
            <h2 className="text-3xl font-semibold">{item.title}</h2>
            <p className="text-lg text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
