"use client";
import React from "react";

const Page = () => {
  return (
    <div className="w-full space-y-10 px-4 lg:px-24">

      {/* ---------- HERO SECTION ---------- */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] mb-16">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/slider1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-blue-700/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
            Latest News
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg mt-3 max-w-2xl drop-shadow">
            Stay up to date with the latest news and events from Son of David's School
          </p>
        </div>
      </div>

      {/* ---------- NEWS / GIVING SECTIONS ---------- */}

      <div className="bg-blue-600 w-full rounded-2xl shadow-xl p-10 text-left">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
          Automated Giving
        </h2>
        <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
          Regular donations help us meet ongoing needs and provide sustainability to our programs.
          Support can be sent through bank wiring, PayPal, MoneyGram, or Western Union. To become a regular donor, please email us for details.
        </p>
      </div>

      <div className="bg-blue-600 w-full rounded-2xl shadow-xl p-10 text-left">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
          Corporate Matching Gifts
        </h2>
        <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
          Many companies match employee charitable contributions to organizations like Sons of David School®. Check with your employer’s HR or Payroll department to see if such a program exists. If so, contact us to double your impact for God’s work in education.
          <br /><br />
          <span className="italic">
            If so, contact us to double your impact for God’s work in education.
          </span>
        </p>
      </div>

      <div className="bg-blue-600 w-full rounded-2xl shadow-xl p-10 text-left">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
          Together, Let Us Build a Brighter Tomorrow
        </h2>
        <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
          At Sons of David School®, we are united by faith, compassion, and purpose. Every lesson taught, every meal shared, and every prayer lifted reflects God’s love at work. Join us in this sacred mission — to bring light where there is darkness, and hope where there is despair.
          <br /><br />
          <span className="italic">
            “Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.” — Matthew 5:16
          </span>
        </p>
      </div>

    </div>
  );
};

export default Page;
