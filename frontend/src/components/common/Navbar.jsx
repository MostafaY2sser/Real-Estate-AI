

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="p-4 bg-white shadow-md sticky top-0 z-50">
      <nav className="relative flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">Test</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-600 transition">Services</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
          <li><Link to="/team" className="hover:text-blue-600 transition">Team</Link></li>
          <li><Link to="/reviews" className="hover:text-blue-600 transition">Reviews</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="absolute  md:hidden top-1 right-2 z-20 text-2xl text-blue-600"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={` md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-xl font-semibold text-gray-700 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <li><Link to="/" onClick={closeMenu} className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="hover:text-blue-600">About</Link></li>
            <li><Link to="/services" onClick={closeMenu} className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/projects" onClick={closeMenu} className="hover:text-blue-600">Projects</Link></li>
            <li><Link to="/team" onClick={closeMenu} className="hover:text-blue-600">Team</Link></li>
            <li><Link to="/reviews" onClick={closeMenu} className="hover:text-blue-600">Reviews</Link></li>
            <li><Link to="/blog" onClick={closeMenu} className="hover:text-blue-600">Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="hover:text-blue-600">Contact</Link></li>
          </ul>


        </div>


      </nav>
    </header>
  );
};

export default Navbar;
