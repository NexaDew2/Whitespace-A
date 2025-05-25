import React, { useState } from "react";
import logoo from '../../assetss/logoo.png';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003C88] text-white px-6 md:px-[100px] py-3">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img alt="logoo" className="h-[40px]" src={logoo} />
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            aria-label="menu-toggle"
            className="p-2 cursor-pointer text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <select
            aria-label="Products Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Products</option>
            <option value="1">Products 1</option>
            <option value="2">Products 2</option>
            <option value="3">Products 3</option>
          </select>

          <select
            aria-label="Solutions Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Solutions</option>
            <option value="1">Solutions 1</option>
            <option value="2">Solutions 2</option>
            <option value="3">Solutions 3</option>
          </select>

          <select
            aria-label="Resources Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Resources</option>
            <option value="1">Resources 1</option>
            <option value="2">Resources 2</option>
            <option value="3">Resources 3</option>
          </select>

          <select
            aria-label="Pricing Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Pricing</option>
            <option value="1">Pricing 1</option>
            <option value="2">Pricing 2</option>
            <option value="3">Pricing 3</option>
          </select>

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
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <select
            aria-label="Products Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Products</option>
            <option value="1">Products 1</option>
            <option value="2">Products 2</option>
            <option value="3">Products 3</option>
          </select>

          <select
            aria-label="Solutions Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Solutions</option>
            <option value="1">Solutions 1</option>
            <option value="2">Solutions 2</option>
            <option value="3">Solutions 3</option>
          </select>

          <select
            aria-label="Resources Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Resources</option>
            <option value="1">Resources 1</option>
            <option value="2">Resources 2</option>
            <option value="3">Resources 3</option>
          </select>

          <select
            aria-label="Pricing Dropdown"
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="">Pricing</option>
            <option value="1">Pricing 1</option>
            <option value="2">Pricing 2</option>
            <option value="3">Pricing 3</option>
          </select>

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
      )}
    </nav>
  );
}
