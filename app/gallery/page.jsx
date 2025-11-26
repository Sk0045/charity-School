"use client";

import React from "react";

const MediaGallery = () => {
  // Videos
  const videos = [
    { src: "/videos/video1.mp4", title: "Sons of David's School Activity – Video 1", desc: "Students enjoying classroom learning with creativity and excitement." },
    { src: "/videos/video2.mp4", title: "Sons of David's Activity – Video 2", desc: "Kids participating in outdoor teamwork and fun activities." },
  ];

  // Images
  const images = [
    "/images/slider1.jpeg",
    "/images/slider2.jpeg",
    "/images/slider3.jpeg",
    "/images/slider4.jpeg",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4 mv-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
        Media Gallery – Sons of David's School
      </h2>

      {/* Videos first - full width */}
      <div className="flex flex-col gap-10 mb-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <video
              controls
              className="w-full h-[60vh] md:h-[70vh] object-cover"
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="p-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-b-2xl">
              <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                {video.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {video.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Images below in grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-72 md:h-80 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-2 md:px-4 text-sm md:text-base font-semibold">
                Sons of David's School Activity – Image {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
