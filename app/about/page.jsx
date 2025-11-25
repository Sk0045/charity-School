"use client";
import React from "react";
import Idcontact from "../components/idcontect/Idcontact";
const Page = () => {
  return (
    <div className="w-full">

      {/* ======================================== */}
      {/* HERO SECTION */}
      {/* ======================================== */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] mb-20">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/slider1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-700/60 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center drop-shadow-lg">
            About  – Son of David&apos;s School
          </h1>
        </div>
      </div>

      {/* ======================================== */}
      {/* MISSION + STRATEGY */}
      {/* ======================================== */}
      <div className="flex flex-col lg:flex-row items-stretch gap-12 px-6 lg:px-24">

        {/* MISSION */}
        <div className="bg-blue-600 w-full lg:w-1/2 rounded-2xl shadow-xl p-10 text-center flex flex-col justify-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-white/90 text-lg text-left sm:text-xl leading-relaxed">
            To provide free education to underprivileged children and medical healthcare to intellectually challenged children in Pakistan — empowering them to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion for a healthy life.
          </p>
        </div>

        {/* STRATEGY */}
        <div className="bg-white w-full lg:w-1/2 rounded-2xl shadow-xl p-10">
          <h2 className="text-black text-3xl sm:text-4xl font-extrabold mb-5">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
           At Sons of David School®, we envision a world where every child—regardless of poverty or disability—receives love, care, and the opportunity to grow in wisdom and faith. Through our free education and rehabilitation programs, we nurture young hearts and minds, offering learning, nutrition, and medical support to children who deserve dignity and hope. Our special education services empower children with physical and intellectual challenges to discover their God-given abilities. With daily prayer, Bible study, and moral guidance, we strengthen character and faith, helping children walk in truth and compassion. Guided by the Word—“Let the little children come to Me, and do not hinder them, for the kingdom of heaven belongs to such as these” (Matthew 19:14)—we continue our mission to uplift every child as a precious creation of God.

           “Whatever you did for one of the least of these brothers and sisters of mine, you did for Me.” — Matthew 25:40

          </p>
        </div>
      </div>

      {/* ======================================== */}
      {/* STRENGTH FAITH SECTION */}
      {/* ======================================== */}
      <div className="bg-blue-100 py-16 mt-20 px-6 lg:px-24 rounded-2xl">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Our Story
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Sons of David School® was founded in 2020 from a vision of compassion and faith. While serving in underprivileged areas, we witnessed the hardships faced by children with disabilities and the struggles of their families. Remembering the Lord’s command, “Love your neighbor as yourself” (Mark 12:31), God placed a burden on our hearts for these precious children.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              Motivated by this calling, we established Sons of David School® to provide free education and medical care to intellectually challenged children in Pakistan. Our mission is to empower these children to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion. Guided by faith and the teachings of Christ, we strive to create a nurturing environment where every child can thrive and experience the transformative power of God’s love.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/slider2.jpeg"
              alt="Faith and Education"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-16 mt-20 px-6 lg:px-24 rounded-2xl">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/center.jpeg"
              alt="Faith and Education"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Bulid Character
            </h2>

            <p className="text-gray-800 text-xl font-medium leading-relaxed mb-4">
              At Son of David's School, we believe that education is not just about academics; it's about building character and preparing students for life beyond the classroom.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              In 2023, our mission expanded to include care for intellectually challenged children. We encountered many living with Down syndrome, Microcephaly, and other physical or intellectual challenges — as well as those from low-income Christian families — who were denied education, medical care, and dignity. 
            </p>
          </div>

        </div>
      </div>
      <div className="bg-blue-200 py-16 mt-20 px-6 lg:px-24 rounded-2xl">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Why Son's of David's School?
            </h2>

            <p className="text-gray-800 text-xl font-medium leading-relaxed mb-4">
              Son of David's School® is more than just an educational institution; it is a community where faith and learning go hand in hand.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
             Through prayer and dedication, we established a place of learning, healing, and hope. What began as a small act of faith has grown to serve over 400 children, providing free education, nutritious meals, doorstep medical aid, and physiotherapy healthcare to challenged children.

Guided by God’s grace, we continue to expand this mission — transforming lives, one child at a time.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/slider1.jpeg"
              alt="Faith and Education"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Idcontact />
    </div>
  );
};

export default Page;
