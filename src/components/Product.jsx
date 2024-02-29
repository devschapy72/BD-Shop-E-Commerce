import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";
import Aos from "aos";
import "aos/dist/aos.css";

const Product = ({ id, image, price, name, brand }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-[#ffffffc7] shadow-lg rounded-t-lg overflow-hidden"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <figure>
        <img src={image} alt={name} className="h-36 w-full object-cover" />
      </figure>
      <div className="text-center my-4">
        <p className="font-serif text-sm">Brand: {brand}</p>
        <p className="my-2 font-serif text-sm text-red-700">Model: {name}</p>
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <NavLink to={`/details/${id}`}>
        <button className="text-center w-full border-[1px] border-[#ff9f43] py-2 bg-[#ff9f43] hover:bg-transparent duration-300">
          View details
        </button>
      </NavLink>
    </div>
  );
};

export default Product;
