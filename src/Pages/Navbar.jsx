import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">

        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold">
          InternShala
        </NavLink>

        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-xl">

          <li>
            <NavLink
              to="/post-job"
              className={({ isActive }) =>
                isActive ? "opacity-100" : "opacity-60"
              }
            >
              Post a Job
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col mt-4 gap-4 text-lg">

          <li>
            <NavLink
              to="/post-job"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "opacity-100" : "opacity-60"
              }
            >
              Post a Job
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
