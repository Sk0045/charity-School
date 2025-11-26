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
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="w-full h-auto"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-[70vh] md:h-[80vh] mb-10">
          <img
            src="/images/slider1.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-purple-700/70 via-indigo-600/60 to-transparent flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5 drop-shadow-lg">
                Welcome to the Great SON OF DAVID's School
              </h1>

              <p className="text-sm md:text-xl font-medium text-left drop-shadow-sm">
                To provide free education to underprivileged children and medical healthcare to intellectually challenged children in Pakistan — empowering them to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion for a healthy life.
              </p>

              <Link href="/contact">
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
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

          <div className="absolute inset-0 bg-gradient-to-b from-pink-600/70 via-red-500/50 to-transparent flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5 drop-shadow-lg">
                My Dream is to see every child happy
              </h1>

              <p className="text-sm md:text-xl font-medium text-left drop-shadow-sm">
                Sons of David School® was founded in 2020 from a vision of compassion and faith. While serving in underprivileged areas, we witnessed the hardships faced by children with disabilities and the struggles of their families. Remembering the Lord’s command, “Love your neighbor as yourself” (Mark 12:31), God placed a burden on our hearts for these precious children.
              </p>

              <Link href="/contact">
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
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

          <div className="absolute inset-0 bg-gradient-to-b from-teal-700/70 via-green-600/50 to-transparent flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5 drop-shadow-lg">
                Education is the most powerful weapon to change the world
              </h1>

              <p className="text-sm md:text-xl font-medium text-left drop-shadow-sm">
                At Sons of David School®, we envision a world where every child—regardless of poverty or disability—receives love, care, and the opportunity to grow in wisdom and faith. Through our free education and rehabilitation programs, we nurture young hearts and minds, offering learning, nutrition, and medical support to children who deserve dignity and hope.
              </p>

              <Link href="/ourprogrames">
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
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
