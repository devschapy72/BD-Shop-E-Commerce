import React from "react";
import CategoriesData from "./CategoriesData";
import CategoriesLogo from "./CategoriesLogo";

const ShopCategoties = () => {
  return (
    <div>
      <h1
        className="text-2xl sm:text-3xl md:text-4xl text-center font-serif font-medium my-10"
        data-aos="fade-up-right"
        data-aos-duration="1200"
      >
        Shop by Categories
      </h1>
      <div className="w-11/12 sm:w-10/12 md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-5 sm:gap-7  md:gap-10">
        {CategoriesData.map((curItems) => {
          return <CategoriesLogo key={curItems.id} {...curItems} />;
        })}
      </div>
    </div>
  );
};

export default ShopCategoties;
