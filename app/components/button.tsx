"use client";

import React from "react";

interface ButtonPropTypes {
  type?: "primary" | "secondary" | "tertiary";
  text?: string;
  iconName?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  type = "primary",
  text = "Button",
  iconName,
  onClick,
  disabled = false,
  children,
}: ButtonPropTypes) => {
  return (
    <button
      className="rounded-xl text-white font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #ff4f6e, #e63d5a)",
        boxShadow: "0 6px 20px rgba(255, 79, 110, 0.3)",
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 10px 28px rgba(255, 79, 110, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 6px 20px rgba(255, 79, 110, 0.3)";
      }}
    >
      {children ? (
        children
      ) : (
        <div className="flex items-center justify-center gap-2">
          {iconName && (
            <span className="px-8 py-3">
              <i className={`icon-${iconName} text-xl`}></i>
            </span>
          )}
          <span className="px-8 py-3">{text}</span>
        </div>
      )}
    </button>
  );
};
