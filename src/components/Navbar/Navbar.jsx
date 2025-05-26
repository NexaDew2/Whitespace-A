import React, { useState } from "react";
import logoo from '../../assetss/logoo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#073874] text-white px-6 lg:px-[100px] py-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img alt="logoo" className="h-[40px]" src={logoo} />
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button
            aria-label="menu-toggle"
            className="p-2 cursor-pointer text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop menu (visible from 1024px+) */}
        <div className="hidden lg:flex items-center gap-6">
          {["Products", "Solutions", "Resources", "Pricing"].map((label) => (
            <select
              key={label}
              aria-label={`${label} Dropdown`}
              className=" text-white text-sm focus:outline-none "
            >
              <option value="" className="text-black">{label}</option>
              <option value="1" className="text-black">{label} 1</option>
              <option value="2" className="text-black">{label} 2</option>
              <option value="3" className="text-black">{label} 3</option>
            </select>
          ))}

          <a href="/login" data-discover="true">
            <button className="bg-yellow-200 border border-white text-black px-6 py-3 rounded text-sm hover:bg-yellow-300">
              Login
            </button>
          </a>

          <a href="/try" data-discover="true">
            <button className="bg-[#4A90FF] text-white px-6 py-3 rounded text-sm hover:bg-[#367DFF]">
              Try Whitepace free
            </button>
          </a>
        </div>
      </div>

      {/* Mobile & Tablet dropdown menu (only below 1024px) */}
      <div className={`lg:hidden flex flex-col gap-4 mt-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        {["Products", "Solutions", "Resources", "Pricing"].map((label) => (
          <select
            key={label}
            aria-label={`${label} Dropdown`}
            className="bg-transparent text-white text-base px-2 py-2 focus:outline-none border border-white rounded"
          >
            <option value="" className="text-black">{label}</option>
            <option value="1" className="text-black">{label} 1</option>
            <option value="2" className="text-black">{label} 2</option>
            <option value="3" className="text-black">{label} 3</option>
          </select>
        ))}

        <a href="/login" data-discover="true">
          <button className="bg-yellow-200 border border-white text-black px-6 py-2 rounded text-sm hover:bg-yellow-300">
            Login
          </button>
        </a>

        <a href="/try" data-discover="true">
          <button className="bg-[#4A90FF] text-white px-6 py-2 rounded text-sm hover:bg-[#367DFF]">
            Try Whitepace free
          </button>
        </a>
      </div>
    </nav>
  );
}
