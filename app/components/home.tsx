import Image from "next/image";
import "./styles/home.scss";

export const Home = () => {
  return (
    <section className="flex flex-row justify-start items-start h-[calc(100vh-7rem)] w-full relative bg-[url('/home_bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center w-1/2 h-full">
        <Image
          aria-hidden
          src="/about_dp.png"
          alt="profile pic"
          height={700}
          width={500}
          className="h-full object-cover rounded-lg pr-8"
        />
      </div>
      <div className="flex w-1/2">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl font-bold text-accent">
            Hello, I&#39;m Aniket
          </h1>
          <h2 className="text-7xl font-bold text-gray-700 leading-[1.1]">
            Professional <br /> Front-end Web <br />& Mobile App Developer
          </h2>
          <p className="text-xl text-gray-700">
            Currently based in Bangalore, with a focus on creating beautiful,
            responsive, and user-friendly applications. I love turning ideas
            into reality with code.
          </p>
          <div className="flex gap-4 justify-between">
            <div>
              <button className="rounded-xl bg-accent py-3 px-8 text-white">
                Say Hello
              </button>
            </div>
            <div className="absolute bottom-8 right-2">
              <div className="scrolldown"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
