"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-auto"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-[70vh] md:h-[80vh]">
          <img
            src="/images/slider1.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-green-700/70 flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5">
                Welcome to the Great SON OF DAVID's Charity School.
              </h1>

              <p className="text-sm md:text-xl font-medium text-left">
                This is greet Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quia doloribus ab excepturi obcaecati soluta,
                magni inventore illo iste accusamus voluptas? Exercitationem quis
                atque consectetur aliquid maxime nostrum odio officiis minima
                praesentium quam ipsam aspernatur.
              </p>

             <Link href="/contact">
                <button className="mt-6 px-6 py-2 bg-transparent border rounded-lg text-sm md:text-base">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-[70vh] md:h-[80vh]">
          <img
            src="/images/slider2.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-green-700/70 flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5">
                Your Dream Place
              </h1>

              <p className="text-sm md:text-xl font-medium text-left">
                This is greet Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quia doloribus ab excepturi obcaecati soluta,
                magni inventore illo iste accusamus voluptas?
              </p>

              <Link href="/contact">
                <button className="mt-6 px-6 py-2 bg-transparent border rounded-lg text-sm md:text-base">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative w-full h-[70vh] md:h-[80vh]">
          <img
            src="/images/slider1.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-green-700/70 flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5">
                Inspiration & Hope
              </h1>

              <p className="text-sm md:text-xl font-medium text-left">
                This is greet Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quia doloribus ab excepturi obcaecati soluta,
                magni inventore illo iste accusamus voluptas?
              </p>

              <Link href="/contact">
                <button className="mt-6 px-6 py-2 bg-transparent border rounded-lg text-sm md:text-base">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
