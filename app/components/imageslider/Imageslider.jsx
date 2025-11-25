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

          <div className="absolute inset-0 bg-blue-700/60 flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5">
                Welcome to the Great SON OF DAVID's School.
              </h1>

              <p className="text-sm md:text-xl font-medium text-left">
                To provide free education to underprivileged children and medical healthcare to intellectually challenged children in Pakistan — empowering them to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion for a healthy life.
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

          <div className="absolute inset-0 bg-blue-700/60 flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5">
                My Dream is to see every child happy.
              </h1>

              <p className="text-sm md:text-xl font-medium text-left">
                Sons of David School® was founded in 2020 from a vision of compassion and faith. While serving in underprivileged areas, we witnessed the hardships faced by children with disabilities and the struggles of their families. Remembering the Lord’s command, “Love your neighbor as yourself” (Mark 12:31), God placed a burden on our hearts for these precious children.
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

          <div className="absolute inset-0 bg-blue-700/60 flex items-center justify-center text-white">
            <div className="text-center px-4 md:px-10 animate-fadeSlide max-w-[95%] md:max-w-[900px]">
              <h1 className="text-2xl md:text-4xl font-bold mb-5">
                Education is the most powerful weapon which you can use to change the world.
              </h1>

              <p className="text-sm md:text-xl font-medium text-left">
                At Sons of David School®, we envision a world where every child—regardless of poverty or disability—receives love, care, and the opportunity to grow in wisdom and faith. Through our free education and rehabilitation programs, we nurture young hearts and minds, offering learning, nutrition, and medical support to children who deserve dignity and hope.
              </p>

              <Link href="/ourprogrames">
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
