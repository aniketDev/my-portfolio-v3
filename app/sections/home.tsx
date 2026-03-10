import Image from "next/image";
import "@/app/sections/styles/home.scss";
import { Button } from "@/app/components/button";

export const Home = () => {
  return (
    <section className="flex flex-row justify-start items-start h-[calc(100vh-7rem)] w-full relative bg-[url('/home_bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center w-1/2 h-full">
        <Image
          src="/about_dp.png"
          alt="Aniket - Profile Picture"
          priority
          height={700}
          width={500}
          className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center relative z-10 p-8 lg:p-16">
        <div className="w-full max-w-2xl">
          <div className="flex flex-col gap-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-wide uppercase w-max mb-2">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              Hello, I&#39;m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-500">
                Aniket
              </span>
            </h1>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-700 leading-snug">
              Professional Front-end Web & Mobile App Developer
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Currently based in Bangalore, with a focus on creating beautiful,
              responsive, and user-friendly applications. I love turning ideas
              into reality with code.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 items-center">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-r from-accent to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                <div className="relative">
                  <Button text="Say Hello" />
                </div>
              </div>
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full font-semibold text-gray-700 bg-white border border-gray-200 hover:border-accent hover:text-accent shadow-sm hover:shadow-md transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
