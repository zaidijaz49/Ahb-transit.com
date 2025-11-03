import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#80A1BA] text-black overflow-hidden">
      {/* === Wave Divider (Top) === */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,
            146.53,26.09,214.34,3V0H0V27.35A600.21,
            600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* === Footer Content === */}
      <div className="relative z-10 w-screen">
        <div className="flex flex-wrap md:flex-nowrap p-4 md:p-6">
          {/* Column 1 */}
          <div className="w-1/2 md:w-1/4 flex flex-col gap-2 md:gap-3 text-center justify-center font-[font5] mb-4 md:mb-0 p-10">
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Why AHB?</a>
          </div>

          {/* Column 2 */}
          <div className="w-1/2 md:w-1/4 flex flex-col gap-2 md:gap-3 text-center justify-center font-[font5] mb-4 md:mb-0">
            <a href="">Careers</a>
            <a href="">FAQs</a>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/4 flex flex-col gap-2 md:gap-3 text-center justify-center font-[font5] mb-4 md:mb-0">
            <a href="">Terms & Conditions</a>
            <a href="">Cookies</a>
            <a href="">Privacy Policy</a>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 text-center justify-center font-[font5] mt-6 p-5">
            <h1 className="text-lg md:text-xl leading-tight">
              Elevating Luxury <br /> Redefining Entertainment
            </h1>

            {/* Live Time */}
            <div className="text-lg md:text-xl font-[font5] text-gray-800">
              {time.toLocaleTimeString()}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4 justify-center">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-300 hover:scale-110"
                  >
                    <Icon className="text-black text-2xl md:text-3xl" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="flex justify-center items-center py-6 md:py-8">
          <h1 className="text-center text-3xl md:text-5xl font-[font5]">
            AHB-TRANSIT
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
