import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-8 md:pb-16 pb-4 md:px-0 px-4">
      <div className="flex justify-between items-center pb-2 border-b border-b-black">
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={0}
          height={0}
          sizes="4xl"
          priority
          className="w-[134px] h-auto"
        />

        <ul className="list-none flex gap-3">
          <li>
            <Link href={"https://t.me/degenislandportal"} target="_blank">
              <Image
                src={"/assets/facebook.svg"}
                alt="facebook"
                width={0}
                height={0}
                sizes="lg"
                className="size-[24px]"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://t.me/degenislandportal"} target="_blank">
              <Image
                src={"/assets/instagram.svg"}
                alt="instagram"
                width={0}
                height={0}
                sizes="lg"
                className="size-[24px]"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://twitter.com/degenisles"} target="_blank">
              <Image
                src={"/assets/twitter_old.svg"}
                alt="twitter_old"
                width={0}
                height={0}
                sizes="lg"
                className="size-[24px]"
              />
            </Link>
          </li>
          <li>
            <Link href={"https://t.me/degenislandportal"} target="_blank">
              <Image
                src={"/assets/linkedin.svg"}
                alt="linkedin"
                width={0}
                height={0}
                sizes="lg"
                className="size-[24px]"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap md:justify-center justify-start gap-6">
        <p className="font-roboto text-[14px] leading-[150%] font-[400] md:w-auto w-full">
          2024 DEGEN Island. All right reserved.
        </p>

        <Link
          href={"#"}
          className="font-roboto text-[14px] leading-[150%] font-[400] underline"
        >
          Privacy Policy
        </Link>
        <Link
          href={"#"}
          className="font-roboto text-[14px] leading-[150%] font-[400] underline"
        >
          Terms of Service
        </Link>
        <Link
          href={"#"}
          className="font-roboto text-[14px] leading-[150%] font-[400] underline"
        >
          Cookies Settings
        </Link>
      </div>
    </div>
  );
};
