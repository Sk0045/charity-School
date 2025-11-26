import React from "react";

const Idcontact = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12 mb-12 px-4">

      {/* Decorative Flame Glow Behind Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-red-500 via-orange-400 to-yellow-300 opacity-30 blur-3xl animate-pulse"></div>

      {/* Image */}
      <div className="flex justify-center relative z-10">
        <img
          src="/images/manager1.jpeg"
          alt="Founder"
          className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-2xl ring-4 ring-orange-500 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-96 text-center md:text-left relative z-10">
        <h1 className="font-extrabold text-2xl md:text-3xl mb-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
          “We are praying and hoping for partners. With your help, the conditions of our school would greatly improve.”
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">
          Pastor Victor Samuel
        </h2>

        <p className="mb-6 text-orange-600 font-medium">
          Son of David's School, Pakistan
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white font-semibold text-lg w-52 h-14 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center flex items-center justify-center"
        >
          Learn how you can help
        </a>
      </div>
    </div>
  );
};

export default Idcontact;
