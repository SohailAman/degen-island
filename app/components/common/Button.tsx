import React, { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  parentClassName?: string;
  children: ReactNode | string | number;
}

export const Button: FC<ButtonProps> = ({
  className = "",
  parentClassName = "",
  children,
}) => {
  return (
    <button
      className={`bg-gradient-to-r to-[#2d459b] from-[#97cde7] p-0.5 flex justify-center items-center rounded-lg ${parentClassName}`}
    >
      <span
        className={`flex justify-center items-center w-full h-full rounded-lg bg-[#ADD8EB] ${className}`}
      >
        {children}
      </span>
    </button>
  );
};
