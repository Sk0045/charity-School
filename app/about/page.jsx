"use client";
import React from "react";
import Idcontact from "../components/idcontect/Idcontact";

const Page = () => {
  return (
    <div className="w-full space-y-32">

      {/* ---------- HERO SECTION ---------- */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="/images/slider1.jpeg"
          alt="Hero"
          className="w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-orange-400/60 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-center drop-shadow-xl animate-pulse">
            About – Son of David&apos;s School
          </h1>
        </div>
      </div>

      {/* ---------- MISSION + VISION ---------- */}
      <div className="flex flex-col lg:flex-row items-stretch gap-12 px-6 lg:px-24">

        {/* MISSION */}
        <div className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 w-full lg:w-1/2 rounded-3xl shadow-2xl p-12 flex flex-col justify-center text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 animate-pulse">
            Our Mission
          </h2>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            To provide free education to underprivileged children and medical healthcare to intellectually challenged children in Pakistan — empowering them to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion for a healthy life.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-white w-full lg:w-1/2 rounded-3xl shadow-2xl p-12 hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-orange-500">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            At Sons of David School®, we envision a world where every child—regardless of poverty or disability—receives love, care, and the opportunity to grow in wisdom and faith. Through free education and rehabilitation programs, we nurture young hearts and minds, offering learning, nutrition, and medical support.
            <br /><br />
            <span className="italic text-red-500 font-semibold">
              “Whatever you did for one of the least of these brothers and sisters of mine, you did for Me.” — Matthew 25:40
            </span>
          </p>
        </div>
      </div>

      {/* ---------- OUR STORY SECTIONS ---------- */}
      <div className="space-y-32 px-6 lg:px-24">

        {/* Story 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-red-500 drop-shadow-lg">
              Our Story
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Sons of David School® was founded in 2020 from a vision of compassion and faith. While serving in underprivileged areas, we witnessed hardships faced by children with disabilities and the struggles of their families.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Motivated by this calling, we established Sons of David School® to provide free education and medical care to intellectually challenged children in Pakistan, empowering them to grow academically, socially, and spiritually.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="/images/slider2.jpeg"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="/images/center.jpeg"
              alt="Building Character"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-orange-500 drop-shadow-lg">
              Build Character
            </h2>
            <p className="text-gray-800 text-xl font-medium leading-relaxed mb-4">
              At Son of David's School, education is not just academics; it's about building character and preparing students for life beyond the classroom.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              In 2023, our mission expanded to include care for intellectually challenged children, ensuring they receive education, medical care, and dignity.
            </p>
          </div>
        </div>

        {/* Story 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-yellow-500 drop-shadow-lg">
              Why Son's of David's School?
            </h2>
            <p className="text-gray-800 text-xl font-medium leading-relaxed mb-4">
              Son of David's School® is more than an institution; it is a community where faith and learning go hand in hand.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Through prayer and dedication, we provide education, healthcare, and hope. Over 400 children are supported with free education, nutritious meals, and medical aid.
            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="/images/slider1.jpeg"
              alt="Faith and Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ---------- CONTACT SECTION ---------- */}
      <Idcontact />
    </div>
  );
};

export default Page;
