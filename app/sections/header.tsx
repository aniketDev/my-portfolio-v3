"use client";

import Image from "next/image";
import { Button } from "@/app/components/button";

export const Header = () => {
  return (
    <header
      className="flex flex-row gap-4 justify-between w-full py-5 px-10 sticky top-0 z-50"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="flex items-center">
        <Image
          aria-hidden
          src="/logo.png"
          alt="Logo"
          width={45}
          height={45}
          className="rounded-full transition-all duration-300 hover:shadow-lg"
          style={{
            border: "2px solid rgba(255, 79, 110, 0.3)",
          }}
        />
      </div>
      <div className="flex justify-center">
        <nav className="flex items-center gap-10 font-medium text-lg">
          {[
            "Home",
            "About",
            "Services",
            "Skills",
            "Experience",
            "Academics",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              className="relative group cursor-pointer"
              style={{ color: "#94a3b8" }}
            >
              <span
                className="absolute left-[-0.5em] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 select-none"
                style={{ color: "#ff4f6e" }}
              >
                &lt;
              </span>
              <span className="transition-colors duration-300 group-hover:text-accent">
                {item}
              </span>
              <span
                className="absolute right-[-1em] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 select-none"
                style={{ color: "#2dd4bf" }}
              >
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
