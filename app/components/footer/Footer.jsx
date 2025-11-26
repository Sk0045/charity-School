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
Email: adnanadams1616@gmail.com <br/>
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
    <div className="w-full bg-gradient-to-b from-red-700 via-orange-600 to-yellow-500">

      {/* CEO Message */}
      <div className="max-w-5xl mx-auto text-center px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-300 drop-shadow-[0_4px_15px_rgba(255,150,0,0.8)]">
          CEO Message of Faith and Hope
        </h1>

        <p className="text-white/90 text-lg leading-relaxed mt-5 drop-shadow-md">
          We are praying and believing for partners who share our vision. With your support,
          the conditions of our school can improve greatly — creating a warm, nurturing
          environment for every child.
          <br /><br />

          <span className="italic font-semibold text-yellow-200 drop-shadow-[0_3px_10px_rgba(255,150,0,0.8)]">
            “And my God will meet all your needs according to the riches of His glory in Christ Jesus.” — Philippians 4:19
          </span>

          <br /><br />
          <span className="font-bold text-white text-xl">— Pastor Adnan Rehmat</span>
          <br />
          <span className="text-white/80">Sons of David School®</span>
        </p>
      </div>

      {/* Footer Boxes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 px-6">
        {footerData.map((items, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md border border-orange-300/30 hover:scale-[1.03] transition transform"
          >
            <h1 className="font-extrabold text-yellow-300 text-xl mb-3 drop-shadow-[0_3px_8px_rgba(255,150,0,0.8)]">
              {items.name}
            </h1>

            {items.name === "Contact us" ? (
              <p
                className="text-white/85 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: items.des }}
              />
            ) : (
              <p className="text-white/85 text-base leading-relaxed">
                {items.des}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Background Image Section */}
      <div className="relative w-full h-96 sm:h-[400px] md:h-[520px]">
        <div
          className="absolute inset-0 bg-black/60"
          style={{
            backgroundImage: "url('/images/1 (2).jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative bg-gradient-to-r from-red-800/70 via-orange-700/60 to-yellow-600/60 h-full text-white py-12 px-6 space-y-6 backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-300 drop-shadow-[0_4px_15px_rgba(255,150,0,0.9)]">
            Sons of David School helps educate and guide children in Khurram Pura Khanewal Punjab, Pakistan
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-white/90 drop-shadow-md">
            To provide free education to underprivileged children and medical healthcare to
            intellectually challenged children — empowering them through love, compassion,
            and inclusion.
          </p>

          <Link href="/contact">
            <button className="bg-orange-500/80 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition shadow-xl hover:shadow-orange-400/50">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-6 py-5 bg-black/80 text-white text-center sm:text-left backdrop-blur-md border-t border-orange-400/30">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Son of David's School — All Rights Reserved.
        </p>
        <p className="text-sm sm:text-base">
          Website Design by:{" "}
          <a
            className="text-yellow-300 hover:text-orange-300 transition"
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
