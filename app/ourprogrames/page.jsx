"use client";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">

      {/* ============================ */}
      {/* HERO SECTION */}
      {/* ============================ */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] mb-20">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/slider1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-blue-700/60 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg">
            Our Programmes
          </h1>
        </div>
      </div>

      {/* ============================ */}
      {/* SECTION 1 – IMAGE LEFT */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/slider1.jpeg"
              alt="Faith and Education"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Son of David&apos;s School
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Founded in September of 2010, Grace Charity School, run by God Grace Ministries of Pakistan (GGMOP) and led by teacher/pastor Mr. Victor Sammuel, has spent the last 10 years successfully educating poor and needy children.
              Now, by God’s grace, we are expanding into the slums of Toba Tek Singh, providing education where no other school exists.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              We offer completely free education, but because of increasing student numbers, GGMOP faces financial strain. Yet despite challenges, results remain excellent — proving the value and impact of this mission.
            </p>
          </div>

        </div>
      </div>

      {/* ============================ */}
      {/* SECTION 2 – IMAGE RIGHT */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Why Son of David&apos;s School?
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Our Early Childhood classrooms offer developmentally appropriate learning, meaningful play, and loving guidance. Students learn in a safe, joyful, and spiritually uplifting environment.
            </p>

            <h3 className="text-2xl font-bold mb-4">Experience God&apos;s Love</h3>

            <p className="text-gray-800 text-lg leading-relaxed">
              Children explore, sing, pray, and grow through a curriculum created with high standards and rooted in God&apos;s love. Teachers reinforce daily lessons with engaging activities that help students grow academically and spiritually.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/slider2.jpeg"
              alt="Faith and Education"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* ============================ */}
      {/* FOUNDER SECTION */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/manager1.jpeg"
              alt="Founder"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-xl"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-[480px] text-center md:text-left">
            <h1 className="font-extrabold text-2xl md:text-3xl mb-4">
              From Our Founder
            </h1>

            <p className="text-gray-800 mb-3">
              We believe God will continue to help us expand this mission to the needy communities of Pakistan.
            </p>
            <p className="text-gray-800 mb-3">
              Although we faced many challenges with rented buildings, God made a way. In 2016, we purchased land and built our own school.
            </p>
            <p className="text-gray-800 mb-3">
              Despite limited facilities and tough weather conditions, our students continue learning with passion. We thank God for their courage!
            </p>
            <p className="text-gray-800 mb-4">
              We pray for partners who can help improve our school and bless these children.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold">Pastor Victor Samuel</h2>
            <p className="text-gray-700">Son of David&apos;s School Pakistan</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Page;
