"use client";

import { motion } from "motion/react";

interface Timeline {
  leftTitle: string;
  leftTimeline?: string;
  leftDuration?: string;
  rightTitle: string;
  rightDescription?: string;
  color?: string;
}

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export const Timelines = ({ timelines }: { timelines: Timeline[] }) => {
  return (
    <div className="flex flex-col">
      {timelines.map((timeline, index) => {
        const {
          leftTitle,
          leftTimeline,
          leftDuration,
          rightTitle,
          rightDescription,
          color,
        }: Timeline = timeline;
        return (
          <motion.div
            key={index}
            custom={index}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-[1fr_auto_1.5fr] gap-8 group"
          >
            {/* Left column */}
            <div className="flex flex-col gap-2 text-right pr-4">
              <h2 className="text-2xl font-bold text-white">{leftTitle}</h2>
              <p style={{ color: "#94a3b8" }}>{leftTimeline}</p>
              <p style={{ color: "#64748b" }}>{leftDuration}</p>
            </div>

            {/* Timeline dot + connector */}
            <div className="flex justify-self-end items-start relative">
              <div
                className="flex p-3 rounded-full justify-center"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  position: "relative",
                }}
              >
                <span
                  className="h-5 w-5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #ff4f6e, #2dd4bf)",
                    boxShadow: "0 0 12px rgba(255, 79, 110, 0.4)",
                  }}
                />
                {/* Connector line */}
                {index < timelines.length - 1 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      top: "45px",
                      width: "2px",
                      height: "calc(100% + 1rem)",
                      background:
                        "linear-gradient(180deg, rgba(255, 79, 110, 0.4), rgba(45, 212, 191, 0.2))",
                    }}
                  />
                )}
              </div>
            </div>

            {/* Right column */}
            <div
              className="flex flex-col gap-3 rounded-2xl p-5 mb-4 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.borderColor = "rgba(255, 79, 110, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.06)";
              }}
            >
              <h2 className="text-2xl font-bold text-white">{rightTitle}</h2>
              <p className="text-lg" style={{ color: "#94a3b8" }}>
                {rightDescription}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
