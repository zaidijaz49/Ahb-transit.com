import React, { useContext, useRef } from 'react';
import { NavbarColorContext, NavbarContext } from '../../context/NavContext';
import ContactBar from './ContactBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor, setNavColor] = useContext(NavbarColorContext);

  return (
    <div className="z-50 fixed top-0 w-full flex items-center justify-between h-16 px-4 md:px-8  text-white">

      {/* Logo */}
      <div className="h-full flex items-center">
        <div className="lg:w-36 w-24">
          <svg
            className="w-full px-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 50"
          >
            <text
              x="0"
              y="35"
              fill="white"
              fontSize="35"
              fontFamily="nimbus"
              fontWeight="bold"
            >
              AHB
            </text>
          </svg>
        </div>
      </div>

      {/* Menu Links (Tablet/Desktop) */}
      <div className="hidden md:flex flex-1 items-center justify-center font-[font5] ">
        <div className="flex gap-8 uppercase">
          <Link to="/"><h1 className=" cursor-pointer transform transition-transform duration-300 hover:scale-125">HOME</h1></Link>
          <Link to="/services"><h1 className=" cursor-pointer transform transition-transform duration-300 hover:scale-125">Services</h1></Link>
          <Link to="/about"><h1 className="transform transition-transform duration-300 hover:scale-125 cursor-pointer">About</h1></Link>
          <Link to="/contact"><h1 className="transform transition-transform duration-300 hover:scale-125 cursor-pointer">Contact</h1></Link>
          <Link to="/blogs"><h1 className="transform transition-transform duration-300 hover:scale-125 cursor-pointer">Blogs</h1></Link>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="hidden sm:flex items-center ml-auto">
        <ContactBar />
      </div>

      {/* Hamburger Menu (Mobile Only) */}
      <div
        onClick={() => setNavOpen(true)}
        className="flex flex-col justify-center items-end md:hidden cursor-pointer px-2"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-4 h-0.5 bg-white mb-1"></div>
        <div className="w-2 h-0.5 bg-white"></div>
      </div>
    </div>
  );
};

export default Navbar;
