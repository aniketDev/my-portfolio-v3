"use client";

import Image from "next/image";
import "@/app/sections/styles/home.scss";
import { Button } from "@/app/components/button";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <section
      className="flex flex-row justify-start items-start min-h-[calc(100vh-4.5rem)] w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #162032 40%, #0f172a 100%)",
      }}
    >
      {/* Decorative glow orbs */}
      <div
        className="absolute top-[-10rem] right-[-8rem] w-[35rem] h-[35rem] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(255, 79, 110, 0.12)" }}
      />
      <div
        className="absolute bottom-[-8rem] left-[-6rem] w-[25rem] h-[25rem] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(45, 212, 191, 0.1)" }}
      />

      {/* Profile image */}
      <div className="flex justify-center items-center w-1/2 h-full px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-40"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 79, 110, 0.3), rgba(45, 212, 191, 0.2))",
            }}
          />
          <Image
            aria-hidden
            src="/about_dp.png"
            alt="profile pic"
            height={700}
            width={500}
            className="relative z-10 h-full object-cover rounded-2xl"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          />
        </motion.div>
      </div>

      {/* Text content */}
      <div className="flex w-1/2 items-center min-h-[calc(100vh-4.5rem)] pr-16">
        <div className="flex flex-col gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-accent"
          >
            Hello, I&#39;m Aniket
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-7xl font-bold text-white leading-[1.1]"
          >
            Professional <br />
            Front-end Web <br />& Mobile App Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl"
            style={{ color: "#94a3b8" }}
          >
            Currently based in Bangalore, with a focus on creating beautiful,
            responsive, and user-friendly applications. I love turning ideas into
            reality with code.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 items-center"
          >
            <Button text="Say Hello" />
            <div className="absolute bottom-8 right-8">
              <div className="scrolldown"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
