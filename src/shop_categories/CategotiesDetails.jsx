import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import CategoriesProduct from "./CategoriesProduct";

const CategotiesDetails = () => {
  const categoriParams = useParams().id;
  const { products } = useProductContext();

  const categoriItems = products.filter(
    (items) => items.category === categoriParams
  );
  return (
    <div className="w-8/12 sm:w-9/12 md:w-11/12 lg:w-10/12 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {categoriItems.map((curItems) => {
        return <CategoriesProduct key={curItems.id} {...curItems} />;
      })}
    </div>
  );
};

export default CategotiesDetails;
