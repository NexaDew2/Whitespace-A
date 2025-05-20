import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoo from '../../assetss/logoo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState({});
  const navItems = ['Products', 'Solutions', 'Resources', 'Pricing'];

  const handleChange = (label) => (event) => {
    setSelectedValues((prev) => ({
      ...prev,
      [label]: event.target.value,
    }));
  };

  return (
    <nav className="bg-[#003C88] text-white px-6 md:px-[100px] py-3">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src={logoo} alt="logo" className="h-[40px]" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 cursor-pointer text-white text-2xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((label) => (
            <select
              key={label}
              value={selectedValues[label] || ''}
              onChange={handleChange(label)}
              className="bg-transparent border-b border-white text-white text-sm focus:outline-none"
            >
              <option value="">{label}</option>
              <option value="1">{label} 1</option>
              <option value="2">{label} 2</option>
              <option value="3">{label} 3</option>
            </select>
          ))}

          <Link to="/login">
            <button className="bg-yellow-200 border border-white text-black px-6 py-2 rounded text-sm hover:bg-yellow-300">
              Login
            </button>
          </Link>
          <Link to="/try">
            <button className="bg-[#4A90FF] text-white px-6 py-2 rounded text-sm hover:bg-[#367DFF]">
              Try Whitepace free
            </button>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          {navItems.map((label) => (
            <select
              key={label}
              value={selectedValues[label] || ''}
              onChange={handleChange(label)}
              className="bg-transparent border-b border-white text-white text-sm focus:outline-none"
            >
              <option value="">{label}</option>
              <option value="1">{label} 1</option>
              <option value="2">{label} 2</option>
              <option value="3">{label} 3</option>
            </select>
          ))}

          <Link to="/login">
            <button className="bg-yellow-200 border border-white text-black px-6 py-2 rounded text-sm hover:bg-yellow-300">
              Login
            </button>
          </Link>
          <Link to="/try">
            <button className="bg-[#4A90FF] text-white px-6 py-2 rounded text-sm hover:bg-[#367DFF]">
              Try Whitepace free
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
