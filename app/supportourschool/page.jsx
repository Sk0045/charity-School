"use client";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">

      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] mb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/slider1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* BLUE OVERLAY + CENTERED TEXT */}
        <div className="absolute inset-0 bg-blue-700/60 flex items-center justify-center px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
              Support Our School
            </h1>

            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow">
              Your generosity sustains our mission. Sons of David School® continues to grow because 
              of donors who believe in education rooted in love and faith. With your help, we provide 
              food, books, healthcare, and hope to children for generations.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- TEXT SECTION ---------- */}
      <div className="max-w-5xl mx-auto px-4 mb-14">
        <h1 className="text-2xl font-bold mb-4">
          Son of David's School – Helping Children in Khurram Pura Khanewal, Pakistan.
        </h1>
        <p className="text-gray-700 leading-relaxed">
          None of this would be possible without the generosity of loving donors.
          Tuition covers most expenses, but your support helps us improve programs,
          expand resources, and keep our facilities strong for future generations.
        </p>
      </div>

      {/* ---------- DONATION FORM ---------- */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Donation Form</h2>

        <p className="text-gray-700 leading-relaxed mb-8 text-center">
          Every gift — large or small — changes a child’s life.
          Donations can be made securely through PayPal or direct bank transfer.  
          Email us at: 
          <span className="font-semibold"> adnanadams1616@gmail.com</span>
          <br />
          <span className="italic font-semibold block mt-3">
            “Each of you should give what you have decided in your heart to give…  
            for God loves a cheerful giver.” — 2 Corinthians 9:7
          </span>
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* First + Last Name */}
          <div className="flex flex-col">
            <label className="font-medium">First Name</label>
            <input className="border p-2 rounded" type="text" placeholder="Enter first name" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Last Name</label>
            <input className="border p-2 rounded" type="text" placeholder="Enter last name" />
          </div>

          {/* Street Address */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Street Address</label>
            <input className="border p-2 rounded" type="text" placeholder="Enter street address" />
          </div>

          {/* CITY + STATE + ZIP */}
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="font-medium">City</label>
              <input className="border p-2 rounded" type="text" placeholder="Enter city" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">State</label>
              <input className="border p-2 rounded" type="text" placeholder="Enter state" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Zip Code</label>
              <input className="border p-2 rounded" type="text" placeholder="Enter zip code" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Email</label>
            <input className="border p-2 rounded" type="email" placeholder="Enter email address" />
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Phone</label>
            <input className="border p-2 rounded" type="text" placeholder="Enter phone number" />
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Donation Message</label>
            <textarea
              rows="5"
              className="border p-2 rounded"
              placeholder="Write a message (optional)"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Page;
