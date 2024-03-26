"use client";
import Image from "next/image";
import React from "react";
import { Keyboard, Mousewheel } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export const TicketsSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
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
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 1.6,
        },
        768: {
          slidesPerView: 2.2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3.5,
        },
        1400: {
          slidesPerView: 4.3,
        },
      }}
      className="mySwiper min-[992px]:-mr-6 md:!mr-0 !mr-2.5  min-[992px]:w-[calc(100%+24px)] min-[992px]:ml-[25px] !ml-[14px] !pb-[113px] !pt-[71px]"
    >
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  Blacklisted
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  Retarded
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  On-Chan Terrorist
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  Gigachad
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  Larper
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  GF asked u to SELL IT ALL
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px]">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  Up 6-figs on the Niggafolio
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#313133] rounded-bl-[20px] rounded-2xl pt-3 px-4 pb-[19px] md:!mr-4">
          <Image
            src={"/assets/logo.svg"}
            priority
            alt="logo"
            width={0}
            height={0}
            sizes="4xl"
            className="w-[140px] h-[123px] mx-auto"
          />

          <div className="flex items-baseline justify-between mt-2.5 gap-[30px]">
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-poppins">
              LAX
            </h4>
            <Image
              src={"/assets/flight_vector.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="2xl"
              className="sm:w-[153px] w-[138px] h-auto"
            />
            <h4 className="md:text-[24px] text-lg m-0 font-[400] text-[#ADD8EB] font-p">
              DGI
            </h4>
          </div>

          <div className="flex justify-between md:pb-[25px] pb-[22px]">
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Los Angeles
            </h5>
            <h5 className="md:text-[14px] text-xs font-[400] text-[#8C8A93] font-poppins text-nowrap">
              Degen Island
            </h5>
          </div>

          <div className="flex w-[calc(100%+32px)] flex-col md:gap-[24px] gap-5 border-t border-t-[#1D1D1F] pt-[30px] pb-[55px] relative -mx-4 px-4 h-[205px]">
            <div className="flex justify-between">
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Date & time
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  04/01/2024
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Flight Number
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  A420/69
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="basis-5/12">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Passenger
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  Wife Changing Money
                </h4>
              </div>
              <div className="basis-1/4">
                <h5 className="text-[12px] font-[400] text-[#8C8A93] font-poppins text-nowrap">
                  Class
                </h5>
                <h4 className="text-[16px] front-[500] text-[#ADD8EB] font-poppins mb-2.5">
                  First Class
                </h4>
              </div>
            </div>
            <Image
              src={"/assets/dashed_border.svg"}
              alt="border"
              width={0}
              height={0}
              sizes="4xl"
              className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            />
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -right-2.5 -bottom-[8px]"></span>
            <span className="absolute bg-[#add8eb] w-5 h-5 rounded-full -left-2.5 -bottom-[8px]"></span>
          </div>

          <div className="flex flex-col justify-center items-center pt-6 gap-[18px]">
            <h3 className="md:text-[14px] text-xs font-[600] text-[#45EA69] text-center font-poppins leading-[124%]">
              First Class
            </h3>
            <Image
              src={"/assets/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="xl"
              className="w-[242px]"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
