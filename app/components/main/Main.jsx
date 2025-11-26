"use client";
import Link from "next/link";
import React from "react";

const cards = [
  {
    image: "/images/slider1.jpeg",
    title: "Charity Event 1",
    desc: "Students engaging in fun and educational activities.",
  },
  {
    image: "/images/center.jpeg",
    title: "Charity Event 2",
    desc: "Kids participating in outdoor teamwork and games.",
  },
  {
    image: "/images/slider2.jpeg",
    title: "Charity Event 3",
    desc: "Community gathering and celebration at the school.",
  },
];

const Main = () => {
  return (
    <div className="px-4 md:px-10 flex flex-col items-center gap-16 mb-20">

      
      {/* ---------- SCENE IMAGE ---------- */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-2xl shadow-2xl overflow-hidden">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold mt-10 mb-8 text-white drop-shadow-lg px-4">
          Scenes From Sons of David's Charity School
        </h1>

        <div className="flex justify-center mb-10 px-4">
          <img
            src="/images/center.jpeg"
            alt="Charity School Scene"
            className="w-full md:w-4/5 h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* ---------- LATEST NEWS ---------- */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Latest News from Sons of David's Charity School
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white drop-shadow-md">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- VIEW MORE BUTTON ---------- */}
      <Link href="/news">
        <button className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 w-64 h-12 text-white font-bold text-xl rounded-2xl hover:scale-105 transition-transform duration-300 drop-shadow-lg">
          View More Articles
        </button>
      </Link>

    </div>
  );
};

export default Main;
