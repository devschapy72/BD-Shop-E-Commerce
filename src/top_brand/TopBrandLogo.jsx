import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const TopBrandLogo = ({ id, image, brand, name }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Link
      to={`/topbranddetails/${brand}`}
      key={id}
      className="block"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      <div className="shadow-lg">
        <div className="relative">
          <figure>
            <img src={image} alt={name} className="h-28 w-full object-cover" />
          </figure>
          <h4 className="absolute w-full h-full top-0 left-0 flex justify-center items-center hover:bg-[#000000b3] opacity-0 hover:opacity-100 text-white font-serif text-xl font-extrabold duration-300">
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default TopBrandLogo;
