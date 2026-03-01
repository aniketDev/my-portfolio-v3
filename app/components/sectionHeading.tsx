"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  headingPrimary?: string;
  headingAccent?: string;
  subHeading?: string;
  accentFirst?: boolean;
}

export const SectionHeading = ({
  headingPrimary,
  headingAccent,
  subHeading,
  accentFirst = false,
}: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="flex flex-col gap-4 mb-8"
  >
    <div className="flex items-center gap-3">
      <Image src="/terminal_icon.svg" alt="logo" width={30} height={30} />
      <span className="text-xl" style={{ color: "#94a3b8" }}>
        {subHeading}
      </span>
    </div>
    <h1 className="text-5xl font-bold text-white">
      {accentFirst ? (
        <Fragment>
          <span className="text-accent">{headingAccent}</span> {headingPrimary}
        </Fragment>
      ) : (
        <Fragment>
          {headingPrimary}{" "}
          <span className="text-accent">{headingAccent}</span>
        </Fragment>
      )}
    </h1>
    {/* Gradient accent bar */}
    <div
      className="w-16 h-1 rounded-full"
      style={{
        background: "linear-gradient(90deg, #ff4f6e, #2dd4bf)",
      }}
    />
  </motion.div>
);
