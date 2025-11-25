"use client";
import Link from "next/link";
import React from "react";

const footerData = [
  {
    name: "About GCES",
    des:
      "To provide free education to underprivileged children and medical healthcare to intellectually challenged children in Pakistan — empowering them to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion for a healthy life.",
  },
  {
    name: "Contact us",
    des: `Sons of David School® <br/>
08/09 Father Colony, Street #01, KhurramPura, Khanewal, Pakistan <br/>
Postal Code: 58150 <br/>
Email: adnanadams1616@gmail.com   <br/>
Phone: +92-324-4080053`,
  },
  {
    name: "Support our School",
    des:
      "Your generosity sustains our mission. Sons of David School® continues to grow because of donors who believe in education rooted in love and faith. With your help, we can provide food, books, healthcare, and hope to children for generations to come.",
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-gray-200">


      {/* CEO Message Section */}
      <div className="max-w-5xl mx-auto text-center px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          CEO Message of Faith and Hope
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          We are praying and believing for partners who share our vision. With your support,
          the conditions of our school can improve greatly — creating an environment where
          every child can learn, heal, and grow in Christ’s love.
          <br /><br />
          <span className="italic font-semibold">
            “And my God will meet all your needs according to the riches of His glory in Christ Jesus.” — Philippians 4:19
          </span>
          <br /><br />
          <span className="font-bold">— Pastor Adnan Rehmat</span>
          <br />
          Sons of David School®
        </p>
      </div>

      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 px-6">
        {footerData.map((items, index) => (
          <div key={index}>
            <h1 className="font-extrabold text-gray-900 text-xl mb-3">
              {items.name}
            </h1>
            {items.name === "Contact us" ? (
              <p
                className="text-gray-700 text-base sm:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: items.des }}
              />
            ) : (
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {items.des}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Background Image Section */}
      <div className="relative w-full h-96 sm:h-[400px] md:h-[500px]">
        <div
          className="absolute inset-0  bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('/images/1 (2).jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />
        <div className="relative bg-blue-700/60 h-full max-w-10xl text-white mx-auto py-10 sm:py-16 px-4 sm:px-6  text- space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Sons of David School helps educate and guide children in Toba Tek Singh, Pakistan
          </h1>
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
            To provide free education to underprivileged children and medical healthcare to intellectually challenged children in Pakistan — empowering them to grow academically, socially, ethically, and spiritually through love, compassion, and inclusion for a healthy life.
          </p>
          <Link href="/contact"><button className="bg-transparent border  text-white px-5 hover:font-semibold sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base">
            Learn more
          </button></Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gray-800 text-white text-center sm:text-left">
        <p className="text-sm sm:text-base mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Son of David's School — All Rights Reserved.
        </p>
        <p className="text-sm sm:text-base">
          Website Design by:{" "}
          <a
            className="hover:text-blue-400 font-medium"
            href="https://csdcollege.edu.pk/"
            target="_blank"
          >
            CSD College
          </a>
        </p>
      </footer>

    </div>
  );
};

export default Footer;
