import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <span>elseif-anas</span>
      </div>

      {/* Icons on the Right */}
      <div className="flex items-center space-x-6 text-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaWhatsapp />
        <FaEnvelope />
      </div>
    </nav>
  );
};

export default Navbar;
