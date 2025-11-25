import Link from "next/link";
import React from "react";

const cards = [
  {
    image: "/images/slider1.jpeg",
    title: "Charity Event 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    image: "/images/center.jpeg",
    title: "Charity Event 2",
    desc: "Quia doloribus ab excepturi soluta, magni inventore illo iste.",
  },
  {
    image: "/images/slider2.jpeg",
    title: "Charity Event 3",
    desc: "Exercitationem quis atque consectetur aliquid maxime nostrum.",
  },
];

const Main = () => {
  return (
    <div className="px-4 md:px-10 flex flex-col items-center gap-16 mb-10">
      {/* ⭐⭐⭐ GALLERY SECTION (ADDED HERE) ⭐⭐⭐ */}
      <div className="w-full max-w-6xl mt-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Gallery – Sons of Daved's Charity School
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Video 1 */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-xl p-4 shadow-lg">
            <video controls className="w-full h-72 rounded-lg object-cover shadow-md">
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
            <h3 className="text-xl font-semibold mt-3">Charity School Activity – Video 1</h3>
            <p className="text-gray-600 text-sm">
              Students enjoying classroom learning with creativity and excitement.
            </p>
          </div>

          {/* Video 2 */}
          <div className="col-span-1 md:col-span-3 bg-white rounded-xl p-4 shadow-lg">
            <video controls className="w-full h-72 rounded-lg object-cover shadow-md">
              <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
            <h3 className="text-xl font-semibold mt-3">Charity School Activity – Video 2</h3>
            <p className="text-gray-600 text-sm">
              Kids participating in outdoor teamwork and fun activities.
            </p>
          </div>
          </div>
      </div>

      {/* Scene Section */}
      <div className="w-full max-w-6xl bg-gray-100 rounded-xl shadow-lg overflow-hidden">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold mt-10 mb-8 text-gray-800 px-4">
          Scenes From Sons of Daved's Charity School
        </h1>

        <div className="flex justify-center mb-10">
          <img
            src="/images/center.jpeg"
            alt="Charity School Scene"
            className="w-full md:w-4/5 h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>



      {/* Latest News Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Latest News from Sons of Daved's Charity School
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/news">
        <button className="bg-blue-600 w-[240px] h-10 text-center mb-2 -mt-2 text-white font-medium text-2xl rounded-2xl underline hover:bg-blue-700 cursor-pointer">
          view more article
        </button>
      </Link>
    </div>
  );
};

export default Main;
