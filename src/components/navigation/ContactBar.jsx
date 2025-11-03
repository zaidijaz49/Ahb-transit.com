import React from "react";
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className=" h-full flex flex-row gap-10 items-center text-2xl text-white justify-end">
      {/* 📞 Phone */}
      <a href="tel:0041782577372" className="transform transition-transform duration-300 hover:scale-125">
        <FaPhone />
      </a>

     

      {/* 📧 Gmail */}
      <a href="mailto:info@ahb-transit.com" className="transform transition-transform duration-300 hover:scale-125">
        <FaEnvelope />
      </a>

      {/* 🌐 Facebook */}
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform duration-300 hover:scale-125"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default ContactBar;
