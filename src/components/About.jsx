import React from "react";
import { NavLink } from "react-router-dom";
import TopBrandProducts from "../top_brand/TopBrandProducts";
import FeturedProducts from "../fetured_products/FeturedProducts";
import HappyShopping from "./HappyShopping";

const About = () => {
  return (
    <>
      <div className="-translate-y-10">
        <div className="relative">
          <figure className="">
            <img
              src="https://images.pexels.com/photos/2861655/pexels-photo-2861655.jpeg?cs=srgb&dl=pexels-magda-ehlers-2861655.jpg&fm=jpg"
              alt="shoping mal"
              className="w-full h-[70vh] object-cover"
            />
          </figure>
          <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-[#000000a0] text-white">
            <p className="sm:text-lg md:text-xl font-serif font-medium mb-2 sm:mb-3">
              Welcome our
            </p>
            <h2 className="sm:text-3xl md:text-4xl font-mono mb-4 sm:mb-6 md:mb-8 font-extrabold">
              BIGEAST BD SHOPPING MALL
            </h2>
            <p className="w-8/12 mx-auto text-center font-thin text-xs sm:text-[15px] md:text-sm mb-7 sm:mb-10">
              BigEast BD is your go-to destination for a wide variety of
              products in Bangladesh. From fashion find everything you need at
              competitive prices with dependable service. Shop conveniently and
              confidently for quality items, making BigEast BD your ultimate
              shopping destination
            </p>
            <NavLink to="/contact">
              <button className="bg-[#ff9f43] px-10 py-3 border-2 border-[#ff9f43] font-serif hover:bg-transparent duration-300 rounded-md hover:text-[#ff9f43]">
                Contact Me
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <TopBrandProducts />
      <FeturedProducts />
      <HappyShopping />
    </>
  );
};

export default About;
