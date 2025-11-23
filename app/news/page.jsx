import React from "react";

const Page = () => {
  return (
    <div className="w-full">

      {/* ---------- HERO SECTION ---------- */}
      <div className="relative w-full h-72 sm:h-[330px] md:h-[420px] lg:h-[520px] mb-16">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/slider1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-blue-700/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
            Latest News
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg mt-3 max-w-2xl">
            Stay up to date with the latest news and events from Son of David's School
          </p>
        </div>
      </div>

      {/* ---------- CONTENT SECTION ---------- */}
      <div className="max-w-4xl mx-auto px-4 mb-20 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          See the latest updates from Son of David's School
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Here you will find announcements, events, and important developments happening at our school.
        </p>
      </div>

    </div>
  );
};

export default Page;
