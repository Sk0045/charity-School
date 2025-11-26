"use client";
import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Page = () => {
  return (
    <div className="w-full px-4 py-12 space-y-24 font-sans">

      {/* ---------- CONTACT INFO & MAP ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Column: Contact Info */}
        <div className="space-y-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center lg:text-left">
            Contact Information
          </h1>

          {/* Info Cards */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex flex-col gap-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-blue-600 w-6 h-6" />
                <h2 className="text-xl font-semibold">Address</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Sons of David School® <br />
                08/09 Father Colony, Street #01, KhurramPura, Khanewal, Pakistan <br />
                Postal Code: 58150
              </p>
            </div>

            {/* Phone & Email */}
            <div className="flex flex-col gap-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-blue-600 w-6 h-6" />
                <h2 className="text-xl font-semibold">Phone & Email</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Phone: +92-324-4080053 <br />
                Email: <span className="text-blue-600 font-semibold">adnanadams1616@gmail.com</span>
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-2 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-blue-600 w-6 h-6" />
                <h2 className="text-xl font-semibold">Hours</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Weekdays: 07:00 – 19:00 <br />
                Saturday: 09:00 – 15:00 <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <iframe
            title="School Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d72.66789!3d31.08345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391934b5678abcd%3A0xabcdef1234567890!2sMadina%20Colony%2C%20Toba%20Tek%20Singh!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ---------- CONTACT FORM ---------- */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold mb-3 text-center text-gray-800">
          We want to hear from you
        </h1>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Please use the contact form below to leave your message. One of our staff members will reply within 48 hours.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium mb-1">Message</label>
            <textarea
              placeholder="Enter your message"
              rows={5}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform"
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
