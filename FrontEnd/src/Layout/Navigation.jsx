import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/Navigation.css";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

import logo from '../images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav>
      {/* Logo */}
      <img src={logo} alt="Logo" />

      {/* Menu */}
      <div className="menu">
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="../../public/Faizan.pdf" download>
              <button>Download CV</button>
            </a>
          </li>
        </ul>
      </div>

  {/* Mobile Hamburger */}
      <div className="md:hidden text-white text-2xl mr-2" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-15 w-full bg-[#364153] flex flex-col items-center space-y-3 py-3 text-white text-md z-50 mobile">
          <li><a href="#home" onClick={toggleMenu} className="hover:text-lg">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:text-lg">About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu} className="hover:text-lg">Portfolio</a></li>
          <li><a href="#service" onClick={toggleMenu} className="hover:text-lg">Service</a></li>
          <li><a href="#blog" onClick={toggleMenu} className="hover:text-lg">Blog</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-lg">Contact</a></li>
          <li>
            <a href="/cv.pdf" download onClick={toggleMenu}>
              <button className="border border-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white hover:text-lg">
                Download CV
              </button>
            </a>
          </li>
        </ul>
      )}
    </nav>
        <Home/>
        <About/>
        <Portfolio/>
        <Service/>
        <Contact/>

</>
  );
};

export default Navbar;
