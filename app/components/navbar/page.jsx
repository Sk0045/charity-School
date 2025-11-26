"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Our Programs", path: "/ourprogrames" },
  { name: "Gallery", path: "/gallery" },
  { name: "Support our School", path: "/supportourschool" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 shadow-2xl px-6 py-4 flex justify-between items-center border-b-4 border-orange-500">

        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo-charity.jpeg" // <-- Your logo here
            alt="Logo"
            className="h-16 md:h-20 cursor-pointer rounded-full ring-4 ring-yellow-400 shadow-xl hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {links.map((item) => {
            const active = pathname === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <p
                  className={`
                    text-lg font-semibold cursor-pointer transition-all
                    ${active ? "text-yellow-300 scale-110 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]" : "text-white"}
                    hover:text-yellow-200
                  `}
                >
                  {item.name}
                  {active && (
                    <span className="block h-[4px] bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 rounded-full mt-1 animate-pulse"></span>
                  )}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Donate Button */}
        <Link href="/contact">
          <button className="hidden md:block bg-yellow-400 text-black w-32 h-12 rounded-xl hover:bg-orange-300 hover:scale-105 transition-all font-semibold shadow-xl border-2 border-orange-600">
            Donate
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white drop-shadow-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
{/* Mobile Menu */}
<div
  className={`md:hidden bg-gradient-to-b from-red-700 via-orange-600 to-yellow-500 text-white overflow-hidden transition-all duration-300 ${
    open ? "max-h-screen py-6" : "max-h-0 py-0"
  }`}
>
  <div className="flex flex-col items-center gap-6">
    {links.map((item) => {
      const active = pathname === item.path;
      return (
        <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
          <p
            className={`text-xl font-semibold transition cursor-pointer 
              ${active ? "text-yellow-300 underline drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]" : "text-white"} 
              hover:text-yellow-300
            `}
          >
            {item.name}
          </p>
        </Link>
      );
    })}

    <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-orange-300 transition shadow-xl border-2 border-orange-600">
      Phone
    </button>

    <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-orange-300 transition shadow-xl border-2 border-orange-600">
      Email
    </button>
  </div>
</div>


    </>
  );
};

export default Navbar;
