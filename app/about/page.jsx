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
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
            Education for Life and Eternity.
          </p>
        </div>

        {/* STRATEGY */}
        <div className="bg-white w-full lg:w-1/2 rounded-2xl shadow-xl p-10">
          <h2 className="text-black text-3xl sm:text-4xl font-extrabold mb-5">
            Our Strategy
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Grace Charity High School strives to help students strengthen
            their relationship with God, build a foundation of strong moral
            character, and achieve academic excellence. These core values
            appear in every aspect of our school environment.
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
              Strengthen Faith
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Son of David&apos;s School holds firmly to the foundation laid by
              Pastor Victor Samuel in September 2010. Our founders established a
              place in Madina Colony, Toba Tek Singh, where children can grow
              spiritually and academically through purposeful education.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              Students attend daily Religion Periods to focus their hearts and
              minds on God. These moments encourage them to build faith,
              develop moral character, and support each other with spiritual
              unity and encouragement.
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
              Faith defines character and as we strengthen each student’s faith and relationship with God, we help further build character.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              Through athletics, service groups, and class group projects, students gain real-life experience in leadership, communication, problem solving, and volunteering their time for others. Our teachers are committed not only to teaching GCHS students using a robust curriculum, but also in providing each student with an opportunity to learn how to become a contributing member of society. Teachers and administrators encourage students to excel in the classroom and in life.
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
              Son of David's School provides the opportunity for students to develop their strengths and discover their potential in a safe and supportive setting.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              At SoDS there is a sense of belonging where each child is valued as an individual. SoDS is committed to developing all areas of an individual’s scholastic experience. While formal academic education may be found in many places, the Son of Divid's School difference is that teaching is Christ-centered in every class and activity.
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
