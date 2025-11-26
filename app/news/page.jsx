"use client";
import React from "react";

const Page = () => {
  return (
    <div className="w-full space-y-10 mb-20">

      {/* ---------- HERO SECTION ---------- */}
      <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl">

        {/* Full-width Background Image with opacity */}
        <img
          src="/images/slider1.jpeg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-60"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg animate-pulse">
            Latest News
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg mt-3 max-w-2xl drop-shadow">
            Stay up to date with the latest news and events from Son of David's School
          </p>
        </div>
      </div>

      {/* ---------- NEWS / GIVING SECTIONS ---------- */}
      <div className="space-y-8 w-full">

        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 w-full rounded-xl shadow-2xl p-6 sm:p-10 text-left hover:scale-105 transition-transform duration-300">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center sm:text-left">
            Automated Giving
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
            Regular donations help us meet ongoing needs and provide sustainability to our programs.
            Support can be sent through bank wiring, PayPal, MoneyGram, or Western Union. To become a regular donor, please email us for details.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 w-full rounded-xl shadow-2xl p-6 sm:p-10 text-left hover:scale-105 transition-transform duration-300">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center sm:text-left">
            Corporate Matching Gifts
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
            Many companies match employee charitable contributions to organizations like Sons of David School®. Check with your employer’s HR or Payroll department to see if such a program exists. If so, contact us to double your impact for God’s work in education.
            <br /><br />
            <span className="italic text-yellow-100">
              If so, contact us to double your impact for God’s work in education.
            </span>
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 w-full rounded-xl shadow-2xl p-6 sm:p-10 text-left hover:scale-105 transition-transform duration-300 mb-40">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center sm:text-left">
            Together, Let Us Build a Brighter Tomorrow
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
            At Sons of David School®, we are united by faith, compassion, and purpose. Every lesson taught, every meal shared, and every prayer lifted reflects God’s love at work. Join us in this sacred mission — to bring light where there is darkness, and hope where there is despair.
            <br /><br />
            <span className="italic text-yellow-100">
              “Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.” — Matthew 5:16
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Page;
