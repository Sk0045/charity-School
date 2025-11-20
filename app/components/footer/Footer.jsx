"use client";
import React from "react";

const footerData = [
  {
    name: "About GCES",
    des:
      "Grace Charity Elementary School provides the opportunity for students to develop their strengths and discover their potential in a safe and supportive setting.",
  },
  {
    name: "Contact us",
    des: `Madina Colony, Shorkot Road,<br/> Tek Singh, 36050 <br/> Punjab, Pakistan <br/> +92-(328)-761-7134`,
  },
  {
    name: "Support our School",
    des:
      "With your help, we can keep GCHS strong for generations to come. Your donations help keep our programs and facilities competitive.",
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-gray-200">

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
          <div className="relative bg-green-700/70 h-full max-w-10xl text-white mx-auto py-10 sm:py-16 px-4 sm:px-6  text- space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Grace Charity School helps educate and guide children in Toba Tek Singh, Pakistan
          </h1>
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
            Join us in making a real difference in the lives of children in Toba Tek Singh, Pakistan. Your support can help provide quality education and guidance to these young minds, shaping their future for the better. Find out how you can help through donations and be a part of our mission to empower the next generation. Together, we can create a brighter tomorrow for these children.
          </p>
          <button className="bg-transparent border  text-white px-5 hover:font-semibold sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base">
            Learn more
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gray-800 text-white text-center sm:text-left">
        <p className="text-sm sm:text-base mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Grace Charity School — All Rights Reserved.
        </p>
        <p className="text-sm sm:text-base">
          Website Design by:{" "}
          <a
            className="hover:text-green-400 font-medium"
            href="https://portfolio-shoaib-khan.vercel.app/"
            target="_blank"
          >
            SHOAIB KHAN
          </a>
        </p>
      </footer>

    </div>
  );
};

export default Footer;
