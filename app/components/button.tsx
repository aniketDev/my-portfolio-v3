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
      className="rounded-xl bg-accent"
      disabled={disabled}
      onClick={onClick}
    >
      {children ? (
        children
      ) : (
        <div className={`flex items-center justify-center gap-2`}>
          {iconName && (
            <span className="px-8 py-3 text-white">
              <i className={`icon-${iconName} text-xl`}></i>
            </span>
          )}
          <span className="px-8 py-3 font-semibold text-white rounded-lg shadow-md hover:bg-accent/90 transition">
            {text}
          </span>
        </div>
      )}
    </button>
  );
};
