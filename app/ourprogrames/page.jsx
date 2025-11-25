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
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
              Our Programmes
            </h1>

            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow">
              At Sons of David School®, every initiative is rooted in love, compassion, and faith.
              Through education, healthcare, and spiritual guidance, we aim to nurture each child with
              dignity, knowledge, and purpose.
            </p>
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* SECTION 1 – IMAGE LEFT */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/images/slider1.jpeg"
              alt="Faith and Education"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Free Education for Underprivileged Children
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              We provide free English-medium education with books, uniforms, and meals—
              ensuring poverty never blocks education and hope.
            </p>
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* SECTION 2 – IMAGE RIGHT */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Special Education
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              We design individualized learning plans for children with special needs,
              supporting their communication, confidence, and God-given potential.
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Medical & Rehabilitation Support
            </h3>

            <p className="text-gray-800 text-lg leading-relaxed">
              From physiotherapy to counseling, we provide holistic care alongside local
              doctors and volunteers—healing both body and soul.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/images/slider2.jpeg"
              alt="Special Education"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* SECTION 3 – IMAGE LEFT */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/images/slider1.jpeg"
              alt="Character Building"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Faith & Character Building
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Daily prayer, worship, and Bible lessons cultivate integrity, kindness,
              and Christ-like character in every child.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed italic font-semibold">
              “Whatever you did for one of the least of these... you did for Me.”
              — Matthew 25:40
            </p>
          </div>
        </div>
      </div>

      {/* ============================ */}
      {/* NEW BLUE SECTIONS (CENTERED & FIXED) */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20 space-y-10">

        {/* BOX 1 */}
        <div className="bg-blue-600 w-full rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Get Involved
          </h2>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-left">
            Join hands with us to bring hope, education, and faith to children in need.
            Donations, volunteering, or prayer — every act changes lives.
            <br /><br />
            <span className="italic">
              “Do not forget to do good and to share... God is pleased.” — Hebrews 13:16
            </span>
          </p>
        </div>

        {/* BOX 2 */}
        <div className="bg-blue-600 w-full rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Testimonials
          </h2>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-left">
            “My child now learns with joy and confidence.” — Parent  
            <br /><br />
            “This school is truly a light in our community.” — Local Pastor
          </p>
        </div>

        {/* BOX 3 */}
        <div className="bg-blue-600 w-full rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Faith and Scripture
          </h2>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-left">
            Every lesson, act of kindness, and outreach is guided by Scripture and prayer.
            <br /><br />
            <span className="italic">
              “The fear of the Lord is the beginning of wisdom.” — Proverbs 9:10
            </span>
          </p>
        </div>

      </div>

      {/* ============================ */}
      {/* FOUNDER SECTION */}
      {/* ============================ */}
      <div className="px-6 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">

          <img
            src="/images/manager1.jpeg"
            alt="Founder"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-xl"
          />

          <div className="w-full md:w-[480px] text-center md:text-left">
            <h1 className="font-extrabold text-2xl md:text-3xl mb-4">From Our Founder</h1>

            <p className="text-gray-800 mb-3">
              God continues to guide our mission across Pakistan.
            </p>
            <p className="text-gray-800 mb-3">
              After years in rented buildings, God helped us purchase land and build a school in 2016.
            </p>
            <p className="text-gray-800 mb-3">
              Despite challenges, our students learn with passion and faith.
            </p>
            <p className="text-gray-800 mb-4">
              We pray for partners who can help strengthen our facilities and bless more children.
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
