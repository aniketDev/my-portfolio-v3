import Image from "next/image";
import { Button } from "@/app/components/button";

export const Header = () => {
  return (
    <header className="header flex flex-row gap-4 justify-between w-full pt-8 pb-8">
      <div className="flex justify-center">
        {/* <Image aria-hidden src="/logo.jpeg" alt="Logo" width={60} height={60} /> */}
      </div>
      <div className="flex justify-center">
        <nav className="flex items-center gap-10 font-medium text-gray-500 text-lg">
          {[
            "Home",
            "About",
            "Services",
            "Skills",
            "Experience",
            "Academics",
            "Contact",
          ].map((item) => (
            <a key={item} className="relative group cursor-pointer">
              <span className="absolute left-[-0.5em] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 text-pink-600 select-none">
                &lt;
              </span>
              <span className="transition-colors duration-300 group-hover:text-pink-600">
                {item}
              </span>
              <span className="absolute right-[-1em] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-amber-400 select-none">
                /&gt;
              </span>
            </a>
          ))}
        </nav>
      </div>
      <Button text="Download CV" />
    </header>
  );
};
