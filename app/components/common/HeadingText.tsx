import React, { FC, ReactNode } from "react";

interface HeadingTextProps {
  className?: string;
  children: string | ReactNode | number;
}

export const HeadingText: FC<HeadingTextProps> = ({
  className = "",
  children,
}) => {
  return (
    <h1
      className={`${className} font-rubik font-[500] leading-[130%] text-[#6dcb37]`}
    >
      {children}
    </h1>
  );
};
