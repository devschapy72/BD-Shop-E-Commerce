import React from "react";
// import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import FilterSection from "./FilterSection";
import { useFilterContext } from "../context/FilterContext";

const Products = () => {
  // const { products } = useProductContext();
  const { filterProducts } = useFilterContext();

  return (
    <div className="mt-10">
      <h2 className="text-center text-xl sm:text-4xl font-serif my-10 font-semibold">
        Our Brand New Products
      </h2>
      <div>
        <div className="w-10/12 mx-auto my-10">
          <FilterSection />
        </div>
        <div className="w-8/12 sm:w-9/12 md:w-11/12 lg:w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filterProducts.map((items, index) => {
            return <Product key={index} {...items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
