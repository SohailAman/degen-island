"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeadingText } from "..";
import { Keyboard, Mousewheel } from "swiper/modules";

export const RoadmapSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      speed={350}
      freeMode={true}
      mousewheel={{ releaseOnEdges: true }}
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Mousewheel]}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      className="myRoadmapSwiper max-md:!ml-4 !pb-[108px]"
    >
      <SwiperSlide className="relative">
        <div className="flex gap-4 items-center mt-[34px]">
          <span className="block md:w-[57.6px] w-[40vw] h-[4px] bg-gradient-to-r to-[#5A8D3E] from-[#a4d0d9]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[261.6px] -mr-10 h-[4px] bg-[#5A8D3E]"></span>
        </div>
        <div className="mt-[19px]">
          <div className="flex flex-1 w-full flex-col gap-[32px]">
            <HeadingText className="text-[28.8px] text-left text-stroke-black">
              Phase 1
            </HeadingText>

            <ul className="list-outside list-disc ps-5">
              <li>Website Build</li>
              <li>Token Deployment</li>
              <li> Social Activation</li>
              <li> Begin Boarding for Degen Island</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="flex gap-4 items-center mt-[34px]">
          <span className="block md:w-[57.6px] w-[40vw] h-[4px] bg-gradient-to-r to-[#5A8D3E] from-[#5A8D3E]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[261.6px] -mr-10 h-[4px] bg-[#5A8D3E]"></span>
        </div>
        <div className="mt-[19px]">
          <div className="flex flex-1 w-full flex-col gap-[32px]">
            <HeadingText className="text-[28.8px] text-left text-stroke-black">
              Phase 2
            </HeadingText>

            <ul className="list-outside list-disc ps-5">
              <li>Token Launch</li>
              <li>CEX Listings</li>
              <li> Marketing Partnerships</li>
              <li> 10,000+ Citizens of Degen Island</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="flex gap-4 items-center mt-[34px]">
          <span className="block md:w-[57.6px] w-[40vw] h-[4px] bg-gradient-to-r to-[#5A8D3E] from-[#5A8D3E]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[261.6px] -mr-10 h-[4px] bg-[#5A8D3E]"></span>
        </div>
        <div className="mt-[19px]">
          <div className="flex flex-1 w-full flex-col gap-[32px]">
            <HeadingText className="text-[28.8px] text-left text-stroke-black">
              Phase 3
            </HeadingText>

            <ul className="list-outside list-disc ps-5">
              <li>Memepad Launch</li>
              <li>Memevangelization</li>
              <li> 50,000+ Citizens of Degen Island</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="flex gap-4 items-center mt-[34px]">
          <span className="block w-[57.6px] h-[4px] bg-[#5A8D3E]"></span>
          <Image
            src={"/assets/palm_tree.svg"}
            alt="tree"
            width={0}
            height={0}
            sizes="xl"
            className="w-[67px] h-auto max-h-[66px] object-cover object-center mx-auto"
          />
          <span className="block w-[261px] h-[4px] bg-gradient-to-r from-[#5A8D3E] to-[#a4d0d9]"></span>
        </div>
        <div className="mt-[19px]">
          <div className="flex flex-1 w-full flex-col gap-[32px]">
            <HeadingText className="text-[28.8px] text-left text-stroke-black">
              Phase 4
            </HeadingText>

            <ul className="list-outside list-disc ps-5">
              <li>Memecubator Launch</li>
              <li>Airdrop Launches</li>
              <li>100,000+ Citizens of Degen Island</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
