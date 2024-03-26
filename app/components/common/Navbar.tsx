import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="md:flex hidden">
      <div className="border border-black flex justify-center items-center px-[11px] lg:py-4 py-3">
        <Image
          src={"/assets/logo.svg"}
          priority
          alt="logo"
          width={0}
          height={0}
          className="lg:w-[134px] w-[110px]"
        />
      </div>
      <div className="border-t border-b border-b-black border-t-black flex flex-1 justify-center lg:gap-5 gap-2 items-center px-2">
        <p className="text-[#000] font-kanit-light lg:text-[16px] text-sm uppercase text-center">
          Flights to Degen Island{" "}
          <span className="font-black font-kanit">Degen Island,</span> are Now{" "}
          <span className="font-black font-kanit">Boarding</span>
        </p>
        <Image
          src={"/assets/arrow_right.svg"}
          alt="arrow"
          height={0}
          width={0}
          className="h-auto lg:w-[48px] w-[24px]"
        />
      </div>
      <div className="border border-black flex justify-center items-center p-2 lg:pr-[35.75px] pr-6">
        <button className="font-kanit font-bold lg:text-[17px] text-[15px] relative flex justify-center items-center gap-0.5">
          Start trading
          <span className="block lg:w-[25px] w-4 lg:h-[5px] h-0.5 bg-black absolute top-1/2 -translate-y-1/2 lg:right-[-29px] -right-5"></span>
        </button>
      </div>
    </nav>
  );
};
