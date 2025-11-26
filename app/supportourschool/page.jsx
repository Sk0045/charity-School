"use client";
import React from "react";

const Page = () => {
  return (
    <div className="w-full font-sans space-y-24 mt-10 mb-10">

      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-3xl shadow-2xl">
        <img
          src="/images/slider1.jpeg"
          alt="Support Our School"
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 via-blue-500/50 to-blue-700/70 flex flex-col items-center justify-center text-center px-4 space-y-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl">
            Support Our School
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg max-w-2xl">
            Your generosity sustains our mission. Sons of David School® continues to grow because 
            of donors who believe in education rooted in love and faith. With your help, we provide 
            food, books, healthcare, and hope to children for generations.
          </p>
          <button className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
            Donate Now
          </button>
        </div>
      </div>

      {/* ---------- TEXT SECTION ---------- */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 relative before:absolute before:-bottom-2 before:left-1/2 before:w-20 before:h-1 before:bg-blue-500 before:-translate-x-1/2">
          Son of David's School – Helping Children in Khurram Pura Khanewal
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          None of this would be possible without the generosity of loving donors.
          Tuition covers most expenses, but your support helps us improve programs,
          expand resources, and keep our facilities strong for future generations.
        </p>
      </div>

      {/* ---------- DONATION FORM ---------- */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Donation Form</h2>

        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          Every gift — large or small — changes a child’s life.
          Donations can be made securely through PayPal or direct bank transfer.  
          Email us at: <span className="font-semibold text-blue-600">adnanadams1616@gmail.com</span>
          <br />
          <span className="italic font-semibold block mt-3 text-gray-600">
            “Each of you should give what you have decided in your heart to give…  
            for God loves a cheerful giver.” — 2 Corinthians 9:7
          </span>
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl">
          {/* First + Last Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">First Name</label>
            <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter first name" />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Last Name</label>
            <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter last name" />
          </div>

          {/* Street Address */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Street Address</label>
            <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter street address" />
          </div>

          {/* CITY + STATE + ZIP */}
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="font-medium mb-1">City</label>
              <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter city" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1">State</label>
              <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter state" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1">Zip Code</label>
              <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter zip code" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Email</label>
            <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="email" placeholder="Enter email address" />
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Phone</label>
            <input className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition" type="text" placeholder="Enter phone number" />
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Donation Message</label>
            <textarea
              rows={5}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Write a message (optional)"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Page;
