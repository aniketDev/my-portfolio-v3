import Image from "next/image";

export const Home = () => {
  return (
    <div className="flex flex-row justify-start items-start h-[calc(100vh-7rem)] w-full">
      <div className="flex justify-center items-center w-1/2 h-full">
        <Image
          aria-hidden
          src="/dp.jpg"
          alt="profile pic"
          height={700}
          width={500}
          className="h-full w-full object-cover rounded-lg pr-8"
          // fill={true}
          // style={{ objectFit: "contain" }}
          // sizes="(max-height: 768px) 100vh, 33vh"
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
          <div className="flex gap-4">
            {/*<Image*/}
            {/*  aria-hidden*/}
            {/*  src="/contact1.png"*/}
            {/*  alt="contact icon"*/}
            {/*  height={70}*/}
            {/*  width={70}*/}
            {/*  // className="h-full w-full object-cover rounded-lg pr-8"*/}
            {/*  // fill={true}*/}
            {/*  // style={{ objectFit: "contain" }}*/}
            {/*  // sizes="(max-height: 768px) 100vh, 33vh"*/}
            {/*/>*/}
            {/*<h3 className="text-lg">Contact me</h3>*/}
            <button className="rounded-xl bg-accent py-3 px-8 text-white">
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
