import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-gray-700 text-center text-white font-serif text-xs sm:text-sm py-2">
      <p className="mb-1">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="text-blue-400">Bd Shop</span>.All right reserved.
      </p>
      <p>
        Design & Developed by{" "}
        <span className="text-blue-400">MD: Sumon Ahmed</span>
      </p>
    </div>
  );
};

export default Footer;
