"use client";
import React from "react";

const Page = () => {
  return (
    <div className="w-full space-y-32 font-sans mb-10">

      {/* ---------- HERO SECTION ---------- */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/images/slider1.jpeg"
          alt="Hero"
          className="w-full h-full object-cover opacity-70 scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-orange-400/70 flex items-center justify-center px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fadeIn">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl">
              Our Programmes
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg">
              At Sons of David School®, every initiative is rooted in love, compassion, and faith.
              Through education, healthcare, and spiritual guidance, we aim to nurture each child with
              dignity, knowledge, and purpose.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- SECTION 1 – IMAGE LEFT ---------- */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-500">
            <img
              src="/images/slider1.jpeg"
              alt="Faith and Education"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Free Education for Underprivileged Children
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              We provide free English-medium education with books, uniforms, and meals—ensuring poverty never blocks education and hope.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- SECTION 2 – IMAGE RIGHT ---------- */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Special Education
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Individualized learning plans for children with special needs, supporting their communication, confidence, and God-given potential.
            </p>
            <h3 className="text-2xl font-bold mt-4">Medical & Rehabilitation Support</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              From physiotherapy to counseling, we provide holistic care alongside local doctors and volunteers—healing both body and soul.
            </p>
          </div>

          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-500">
            <img
              src="/images/slider2.jpeg"
              alt="Special Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ---------- SECTION 3 – IMAGE LEFT ---------- */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-500">
            <img
              src="/images/slider1.jpeg"
              alt="Character Building"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Faith & Character Building
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Daily prayer, worship, and Bible lessons cultivate integrity, kindness, and Christ-like character in every child.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed italic font-semibold">
              “Whatever you did for one of the least of these... you did for Me.” — Matthew 25:40
            </p>
          </div>
        </div>
      </div>

      {/* ---------- BLUE INFO BOXES ---------- */}
      <div className="px-6 lg:px-24 mb-20 space-y-10">
        {[
          { title: "Get Involved", text: `Join hands with us to bring hope, education, and faith to children in need.\nDonations, volunteering, or prayer — every act changes lives.`, scripture: `“Do not forget to do good and to share... God is pleased.” — Hebrews 13:16` },
          { title: "Testimonials", text: `“My child now learns with joy and confidence.” — Parent\n“This school is truly a light in our community.” — Local Pastor`, scripture: "" },
          { title: "Faith and Scripture", text: `Every lesson, act of kindness, and outreach is guided by Scripture and prayer.`, scripture: `“The fear of the Lord is the beginning of wisdom.” — Proverbs 9:10` }
        ].map((box, i) => (
          <div key={i} className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-full rounded-3xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-500 p-10">
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center">{box.title}</h2>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed whitespace-pre-line">{box.text}</p>
            {box.scripture && <p className="text-white/80 italic mt-2">{box.scripture}</p>}
          </div>
        ))}
      </div>

      {/* ---------- FOUNDER SECTION ---------- */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <img
            src="/images/manager1.jpeg"
            alt="Founder"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <div className="w-full md:w-[480px] text-center md:text-left space-y-3">
            <h1 className="font-extrabold text-2xl md:text-3xl mb-2">From Our Founder</h1>
            <p className="text-gray-800">God continues to guide our mission across Pakistan.</p>
            <p className="text-gray-800">After years in rented buildings, God helped us purchase land and build a school in 2016.</p>
            <p className="text-gray-800">Despite challenges, our students learn with passion and faith.</p>
            <p className="text-gray-800">We pray for partners who can help strengthen our facilities and bless more children.</p>
            <h2 className="text-xl md:text-2xl font-semibold">Pastor Victor Samuel</h2>
            <p className="text-gray-700">Son of David&apos;s School Pakistan</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
