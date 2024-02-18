import React from "react";
import { Link } from "react-router-dom";

const CategoriesLogo = ({ id, name, image, category }) => {
  return (
    <Link to={`/categoridetails/${category}`} key={id} className="block">
      <div className="w-20 h-20 flex justify-center  rounded-full overflow-hidden cursor-pointer mb-3">
        <figure className="w-full h-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover hover:scale-x-[-1] duration-300"
          />
        </figure>
      </div>
      <p className="font-mono text-center">{name}</p>
    </Link>
  );
};

export default CategoriesLogo;
