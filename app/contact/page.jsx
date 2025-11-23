import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Page = () => {
  return (
    <div className="w-full px-4 py-12">

      {/* ---------- CONTACT SECTION ---------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left Column: Contact Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-4">Contact Information</h1>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="text-blue-600" />
              <h2 className="text-xl font-semibold">Address</h2>
            </div>
            <p className="text-gray-700">
              Madina Colony, Shorkot Road,<br />
              Toba Tek Singh, 36050
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone className="text-blue-600" />
              <h2 className="text-xl font-semibold">Phone</h2>
            </div>
            <p className="text-gray-700">+92-(328)-761-7134</p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock className="text-blue-600" />
              <h2 className="text-xl font-semibold">Hours</h2>
            </div>
            <p className="text-gray-700">
              Weekdays: 7:00 – 19:00 <br />
              Saturday: 09:00 – 15:00 <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
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
      <div className="max-w-4xl mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-3 text-center">We want to hear from you</h1>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Please use the contact form below to leave your message. One of our staff members will reply within 48 hours.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="flex flex-col">
            <label className="font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="font-medium">Message</label>
            <textarea
              placeholder="Enter your message"
              rows="5"
              className="border p-2 rounded"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
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
