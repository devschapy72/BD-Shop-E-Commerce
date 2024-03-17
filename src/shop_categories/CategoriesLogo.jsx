import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const CategoriesLogo = ({ id, name, image, category }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Link to={`/categoridetails/${category}`} key={id} className="block">
      <div
        className="w-full bg-gray-100 shadow-xl py-5 rounded-t-full"
        data-aos="flip-down"
        data-aos-duration="1400"
      >
        <div className="flex justify-center items-center">
          <figure className="w-24 xs:w-32 sm:w-40 h-24 xs:h-32 sm:h-40 rounded-full overflow-hidden cursor-pointer ">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover hover:scale-x-[-1] duration-300"
            />
          </figure>
        </div>
        <p className="font-mono text-center my-3">{name}</p>
      </div>
    </Link>
  );
};

export default CategoriesLogo;
