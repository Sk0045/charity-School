"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Our Programs", path: "/ourProgrames" },
  { name: "Support and School", path: "/supportandSystem" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex sticky top-0 z-50 bg-white shadow-md px-6 py-4 justify-between items-center">

      {/* Logo */}
      <div>
        <Link href="/"><img
          src="https://lirp.cdn-website.com/fb49e962/import/clib/gracecharityschool_org/dms3rep/multi/opt/grace-charity-school-logo-200x242-163h.png"
          alt="Logo"
          className="h-20 cursor-pointer"
        /></Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        {links.map((item, index) => (
          <ul className="flex" key={index}>
            <li className="text-gray-800 text-lg hover:text-green-600 cursor-pointer hover:font-medium">
              <Link href={item.path}>{item.name}</Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Give Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-green-600 text-white w-32 h-12 rounded-2xl hover:bg-green-700">
          Give
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-green-700"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu Modal */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-green-700 text-white py-10 px-6 md:hidden flex flex-col gap-6 items-center">
          {links.map((item, index) => (
            <Link href={item.path} key={index} onClick={() => setOpen(false)}>
              <p className="text-xl font-medium hover:text-gray-200 cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
