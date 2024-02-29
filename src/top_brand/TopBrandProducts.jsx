import React from "react";
import TopBrandData from "./TopBrandData";
import TopBrandLogo from "./TopBrandLogo";

const TopBrandProducts = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-center mb-10">
        Top Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-10">
        {TopBrandData.map((itemBrand) => {
          return <TopBrandLogo key={itemBrand.id} {...itemBrand} />;
        })}
      </div>
    </div>
  );
};

export default TopBrandProducts;
