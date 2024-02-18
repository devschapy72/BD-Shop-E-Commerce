import React from "react";
import CategoriesData from "./CategoriesData";
import CategoriesLogo from "./CategoriesLogo";

const ShopCategoties = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-serif font-medium my-10">
        Shop by Categories
      </h1>
      <div className="w-11/12 sm:w-10/12 md:w-8/12 mx-auto flex flex-wrap justify-center  gap-4 sm:gap-7  md:gap-10">
        {CategoriesData.map((curItems) => {
          return <CategoriesLogo key={curItems.id} {...curItems} />;
        })}
      </div>
    </div>
  );
};

export default ShopCategoties;
