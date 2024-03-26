"use client";
import Image from "next/image";
import {
  Button,
  Footer,
  HeadingText,
  Navbar,
  RoadmapSlider,
  TicketsSlider,
} from "./components";
import "swiper/css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="lg:p-6 md:p-4 overflow-x-hidden">
      <Navbar />
      {/* hero sec */}
      <section className="relative overflow-visible lg:w-[calc(100%+48px)] md:w-[calc(100%+32px)] lg:-mx-6 md:-mx-4 lg:px-6 md:px-4">
        <Image
          src={"/assets/plane.png"}
          alt="plane"
          width={0}
          height={0}
          sizes="4xl"
          className={`hidden w-[159.3px] h-auto absolute -top-3 right-0 z-10 mx-auto lg:block transition-all duration-700 ${
            scroll
              ? "desktop:top-[780px] xl:top-[700px] top-[640px] desktop:right-[19%] right-[22%] desktop:w-[280px] w-[220px]"
              : ""
          }`}
        />
        <div className=" lg:mb-[92px] mb-20">
          <div className="w-full lg:mt-[27px] md:mt-4 xl:mb-[43px] lg:mb-5 mb-0">
            <Image
              src={"/assets/hero_img.png"}
              priority
              alt="hero"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto max-h-[783px] max-md:h-[624px] object-cover object-center"
            />
          </div>

          <div className="md:pt-[27px] pt-3 flex items-center md:flex-row flex-col md:justify-between justify-center max-md:px-[14px]">
            <div className="max-[1440px]:max-w-[861px] 2xl:basis-[55%] w-full capitalize">
              <h3 className="font-medium font-kanit-light text-[15px] leading-[120%] m-0">
                Welcome to Degen Island
              </h3>
              <h1 className="text-[#000] font-kanit-bold font-bold text-[36px] leading-[100%] mt-0">
                What is Degen Island?
              </h1>
              <p className="lg:text-[24px] md:text-[18px] text-[16px] leading-[120%] font-[400] font-kanit-light lg:mt-[36px] mt-[24px] mb-6">
                Degen Island is the hub of the meme ecosystem.
                <br /> Our founding fathers came to the realization that
                ultimately, all degens, whether seasoned Web3 natives or
                normies, are in the space to &quot;make it&quot; to their own
                personal slice of paradise.
              </p>
              <ul className="lg:text-[24px] md:text-[18px] text-[16px] leading-[120%] font-kanit-light list-disc pl-6 mb-6">
                <li>
                  The reality is, the path to valhalla is full of pitfalls -
                  serial ruggers, dumpers, bad actors, etc
                </li>
                <li>
                  Our goal is to help mitigate that by creating a safe meme
                  Launchpad, that:
                </li>
                <li>
                  Develops an ecosystem and create an &quot;alpha&quot; hub
                </li>
                <li>Vets and scores projects based on core criteria</li>
                <li>
                  Implements a sustainable and profitable economic model that
                  allows for meme-cubation
                </li>
              </ul>
              <p className="lg:text-[24px] md:text-[18px] text-[16px] leading-[120%] font-kanit-light mb-6">
                With the goal to give a wide range of market participants from
                degens to normies a safe place to ape
              </p>
            </div>
            <Image
              src={"/assets/chill_frog.png"}
              alt="character"
              sizes="4xl"
              width={0}
              height={0}
              className="h-auto desktop:w-[475px] lg:w-[420px] md:w-[280px] w-[293.8px] max-md:-mt-5"
            />
          </div>
        </div>
        {/* banner */}
        <div className="lg:w-[calc(100%+48px)] md:w-[calc(100%+32px)] lg:-mx-6 md:-mx-4">
          <Image
            src={"/assets/vacation.png"}
            alt="vacation"
            priority
            width={0}
            height={0}
            sizes="4xl"
            className="w-full h-auto max-h-[1089px] max-md:h-[624px] object-cover object-center mx-auto"
          />
        </div>
      </section>
      {/* tickets slider */}
      <TicketsSlider />
      {/* banner */}
      <section className="lg:w-[calc(100%+48px)] md:w-[calc(100%+32px)] lg:-mx-6 md:-mx-4 md:mb-[84px] mb-[34px]">
        <Image
          src={"/assets/island_theme.png"}
          priority
          alt="island_theme"
          width={0}
          height={0}
          sizes="4xl"
          className="w-full h-auto max-h-[902px] max-md:h-[624px] object-cover object-center mx-auto"
        />
      </section>
      {/* ROADMAP */}
      <section className="max-w-[1324px] w-full mx-auto mb-[73px]">
        <HeadingText className="text-[35px] text-center text-stroke-blue">
          DEGEN ISLAND ROADMAP
        </HeadingText>

        {/* <div className="flex gap-4 items-center mt-[34px] w-[1324px] overflow-x-hidden">
          <span className="block md:w-[57.6px] w-[40vw] h-[4px] bg-gradient-to-r to-[#5A8D3E] from-[#a4d0d9]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[231.6px] h-[4px] bg-[#5A8D3E]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[231.6px] h-[4px] bg-[#5A8D3E]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[231.6px] h-[4px] bg-[#5A8D3E]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[170px] h-[4px] bg-gradient-to-r from-[#5A8D3E] to-[#a4d0d9]"></span>
        </div> */}

        <RoadmapSlider />

        <div className="py-6 px-4">
          <div className="flex items-center md:flex-row flex-col w-full md:gap-[28px] gap-5 relative">
            <Image
              src={"/assets/palm_leaf.svg"}
              alt="leaf"
              width={0}
              height={0}
              sizes="2xl"
              className="w-[111px] h-auto max-h-[111px] object-center absolute md:top-[-55px] top-[-75px] md:left-[-55px] left-0"
            />
            <HeadingText className="text-[26px] text-center text-stroke-green !text-[#2D459B] text-balance">
              We&apos;re here to build community, vibe
            </HeadingText>
            <Image
              src={"/assets/frog_cash.png"}
              alt="frog_cash"
              width={0}
              height={0}
              sizes="2xl"
              className="w-[297px] h-auto max-h-[257px] object-center"
            />
            <HeadingText className="text-[26px] text-center text-stroke-green !text-[#2D459B]">
              and help degens launch safu projects
            </HeadingText>

            <Image
              src={"/assets/palm_leaf.svg"}
              alt="leaf"
              width={0}
              height={0}
              sizes="2xl"
              className="w-[111px] h-auto max-h-[111px] object-center absolute bottom-[-55px] md:right-[-55px] right-[-30px] rotate-180"
            />
          </div>

          <Button
            className="text-[16px] text-[#6dcb37] py-2 px-5 font-[900] font-roboto"
            parentClassName="mx-auto mt-[13px]"
          >
            TRADE
          </Button>
        </div>
      </section>
      {/* banner */}
      <section className="lg:w-[calc(100%+48px)] md:w-[calc(100%+32px)] lg:-mx-6 md:-mx-4 mb-[67px]">
        <Image
          src={"/assets/degenisland.png"}
          alt="degenisland"
          priority
          width={0}
          height={0}
          sizes="4xl"
          className="w-full h-auto max-h-[869px] max-md:h-[624px] object-cover object-center mx-auto"
        />
      </section>
      {/* Tokenomics sec */}
      <section className="max-w-[1200px] w-full mx-auto">
        <HeadingText className="lg:text-[64px] text-5xl text-center text-stroke-blue">
          Tokenomics
        </HeadingText>

        <div className="flex w-full flex-wrap justify-center items-center xl:gap-[92px] lg:gap-10 gap-[33px] md:flex-row flex-col mt-11 mb-[114px]">
          <div className="flex-col flex lg:gap-[14px] gap-3 justify-center items-center">
            <h1 className="clip-bg-text text-[100px] font-kanit-bold bg-[linear-gradient(#00000030,#00000030),url(/assets/boarding.png)]  bg-no-repeat bg-cover bg-[90%]">
              40%
            </h1>
            <h3 className="font-kanit-bold text-[35px] leading-[111.4%] uppercase text-center">
              Airdrop/Presale
            </h3>
          </div>
          <div className="flex-col flex lg:gap-[14px] gap-3 justify-center items-center">
            <h1 className="clip-bg-text text-[100px] font-kanit-bold bg-[linear-gradient(#00000030,#00000030),url(/assets/vacation.png)]  bg-no-repeat bg-cover bg-[90%]">
              40%
            </h1>
            <h3 className="font-kanit-bold text-[35px] leading-[111.4%] uppercase text-center">
              LP
            </h3>
          </div>
          <div className="flex-col flex lg:gap-[14px] gap-3 justify-center items-center">
            <h1 className="clip-bg-text text-[100px] font-kanit-bold bg-[linear-gradient(#00000030,#00000030),url(/assets/boarding.png)]  bg-no-repeat bg-cover bg-[90%]">
              13%
            </h1>
            <h3 className="font-kanit-bold text-[35px] leading-[111.4%] uppercase text-center">
              Exchanges
            </h3>
          </div>
          <div className="flex-col flex lg:gap-[14px] gap-3 justify-center items-center">
            <h1 className="clip-bg-text text-[100px] font-kanit-bold bg-[linear-gradient(#00000030,#00000030),url(/assets/vacation.png)]  bg-no-repeat bg-cover bg-[90%]">
              7%
            </h1>
            <h3 className="font-kanit-bold text-[35px] leading-[111.4%] uppercase text-center">
              Marketing
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center xl:gap-20 lg:gap-10 gap-7 mb-[106px] md:flex-row flex-col">
          <div className="flex items-center gap-[20px]">
            <span className="flex gap-1 items-center">
              <Image
                src={"/assets/bunny.svg"}
                alt="bunny"
                width={0}
                height={0}
                sizes="xl"
                className="w-[26px] h-auto max-h-[26px]"
              />
              <p className="text-[22px] leading-[109.091%] font-kanit-black uppercase">
                pancake Swap
              </p>
            </span>
            <Image
              src={"/assets/arrow_right.svg"}
              alt="arrow_right"
              width={0}
              height={0}
              sizes="xl"
              className="w-[48px] h-auto max-h-[33px] mr-1"
            />
          </div>
          <div className="flex items-center gap-[20px]">
            <span className="flex gap-1 items-center">
              <Image
                src={"/assets/unicorn.svg"}
                alt="unicorn"
                width={0}
                height={0}
                sizes="xl"
                className="w-[32px] h-auto max-h-[32px]"
              />
              <p className="text-[22px] leading-[109.091%] font-kanit-black uppercase">
                UNISWAP
              </p>
            </span>
            <Image
              src={"/assets/arrow_right.svg"}
              alt="arrow_right"
              width={0}
              height={0}
              sizes="xl"
              className="w-[48px] h-auto max-h-[33px] mr-1"
            />
          </div>
        </div>
      </section>
      {/* How to buy */}
      <section className="lg:w-[calc(100%+48px)] md:w-[calc(100%+32px)] lg:-mx-6 md:-mx-4 mb-[47px] relative h-auto">
        <Image
          src={"/assets/boarding.png"}
          alt="boarding"
          priority
          width={0}
          height={0}
          sizes="4xl"
          className="w-full desktop:h-[806px] max-lg:h-[800px] object-cover object-center mx-auto"
        />

        <div className="bg-[#000000cc] min-[1439px]:w-[847px] max-md:w-11/12 w-[calc(100%-32px)] min-[1439px]:p-20 md:p-12 p-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-[#ADD8EB] 2xl:text-[35px] text-[32px] font-kanit font-[700] leading-[111.4%] mb-[14px]">
            How to Buy $DEGEN
          </h1>
          <p className="text-[#ADD8EB] 2xl:text-[24px] lg:text-[18px] text-[16px] font-kanit-extra-light leading-[130%]">
            Buying $DEGEN is so simple even a retard can do it - so everyone can
            get their hands on some! You can buy $DEGEN on Uniswap. As we speak,
            the $DEGEN team is working on centralized exchange listings to tap
            into the wider crypto market, so you’re just in time to be an early
            adopter!
          </p>
          <h3 className="text-[#ADD8EB] font-kanit font-bold 2xl:text-[24px] lg:text-[18px] text-[16px] leading-[130%] mt-6 mb-1">
            Basic Steps:
          </h3>
          <ul className="list-decimal list-outside ps-5">
            <li className="text-[#ADD8EB] 2xl:text-[24px] lg:text-[18px] text-[16px] font-kanit-extra-light leading-[130%] lg:mb-6 md:mb-4 mb-3">
              Set up a crypto wallet on the Base network using Coinbase Wallet.
              If you&apos;re using a different wallet like MetaMask, follow
              these steps to connect to Base.
            </li>
            <li className="text-[#ADD8EB] 2xl:text-[24px] lg:text-[18px] text-[16px] font-kanit-extra-light leading-[130%] lg:mb-6 md:mb-4 mb-3">
              Transfer Ethereum (ETH) directly to your Base network wallet or
              send it to your Ethereum wallet and bridge ETH to Base via the
              offical Coinbase bridge or the Orbiter Finance bridge.
            </li>
            <li className="text-[#ADD8EB] 2xl:text-[24px] lg:text-[18px] text-[16px] font-kanit-extra-light leading-[130%] lg:mb-6 md:mb-4 mb-3">
              Visit Uniswap, and input the Degen Island contract address. Ensure
              your wallet is connected to the Base network
            </li>
          </ul>
        </div>
      </section>
      {/* last sec */}
      <section className="mb-[103px]">
        <Image
          src={"/assets/swim_frog.svg"}
          alt="swim_frog"
          width={0}
          height={0}
          sizes="4xl"
          className="w-full h-auto max-h-[229px] mx-auto"
        />
        <div className="flex items-center md:flex-row flex-col justify-center lg:gap-10 md:gap-3">
          <HeadingText className="xxl:text-[112px] lg:text-[72px] text-[64px] !text-[#add8eb] text-stroke-black-lg font-[500] !font-roboto">
            TRADE
          </HeadingText>
          <Image
            src={"/assets/logo.svg"}
            alt="logo"
            priority
            width={0}
            height={0}
            sizes="4xl"
            className="h-auto xxl:w-[416px] lg:w-[380px] w-[226px]"
          />
          <span className="flex">
            <HeadingText className="xxl:text-[112px] lg:text-[72px] text-[64px] !text-[#add8eb] text-stroke-black-lg font-[500]">
              TODAY
            </HeadingText>
            <HeadingText className="xxl:text-[112px] lg:text-[72px] text-[64px] !text-[#6dcb37] text-stroke-black-lg font-[500]">
              !
            </HeadingText>
          </span>
        </div>

        <div className="flex gap-[32px] justify-center mt-8">
          <Link href="https://twitter.com/degenisles" target="_blank">
            <Button
              className="lg:py-4 py-[11px] lg:px-10 px-[22px]"
              parentClassName="p-1"
            >
              <Image
                src={"/assets/twitter.svg"}
                alt="twitter"
                width={0}
                height={0}
                sizes="4xl"
                className="h-auto xl:w-[80px] lg:w-[55px] w-[35.95px]"
              />
            </Button>
          </Link>
          <Link href="https://t.me/degenislandportal" target="_blank">
            <Button
              className="lg:py-4 py-[11px] lg:px-10 px-[22px]"
              parentClassName="p-1"
            >
              <Image
                src={"/assets/telegram.svg"}
                alt="telegram"
                width={0}
                height={0}
                sizes="4xl"
                className="h-auto xl:w-[80px] lg:w-[55px] w-[35.95px]"
              />
            </Button>
          </Link>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </main>
  );
}
