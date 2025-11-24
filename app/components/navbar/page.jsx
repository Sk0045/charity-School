"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Our Programs", path: "/ourprogrames" },
  { name: "Support our School", path: "/supportourschool" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo-charity.jpeg"
            alt="Logo"
            className="h-16 md:h-20 cursor-pointer rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {links.map((item, i) => (
            <Link key={i} href={item.path}>
              <p className="text-gray-800 text-lg hover:text-blue-600 hover:font-medium cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
       <Link href="/contact">
        <button className="hidden md:block bg-blue-500 text-white w-32 h-12 rounded-2xl hover:bg-blue-700">
          Give
        </button>
       </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-green-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu (PUSHES CONTENT DOWN) */}
      <div
        className={`md:hidden bg-blue-500 text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((item, i) => (
            <Link key={i} href={item.path} onClick={() => setOpen(false)}>
              <p className="text-xl font-medium hover:text-gray-200 cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}

          <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold">
            Phone
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold">
            Email
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
