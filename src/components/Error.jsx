import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col w-10/12 mx-auto">
      <p className="font-serif font-semibold text-2xl sm:text-4xl">404 Error</p>
      <p className="font-serif font-medium text-sm sm:text-lg mt-5 mb-10">
        Page not found. Please check the URL and try again.
      </p>
      <NavLink to="/">
        <button className="font-serif font-semibold text-sm lg:text-lg px-12 sm:px-16 lg:px-20 py-3 md:py-4 border-[1.5px] border-[#ff9f43] rounded-lg hover:bg-[#ff9f43] hover:text-white duration-300">
          go back
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
