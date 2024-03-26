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
      speed={800}
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
