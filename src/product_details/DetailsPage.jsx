import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../components/FormatPrice";
import Stars from "../components/Stars";
import AddCart from "../components/AddCart";

const DetailsPage = () => {
  const { id } = useParams();
  const { productDetails } = useProductContext();

  // Find product details by id
  const prddtls = productDetails.find((currlm) => currlm.id === id);

  // Check if product details exist before destructure
  if (!prddtls) {
    return <div>Product not found</div>;
  }

  const {
    id: none,
    image,
    category,
    brand,
    name,
    price,
    description,
    stars,
    stock,
    reviews,
  } = prddtls;

  return (
    <div className="w-10/12 sm:w-8/12 md:w-10/12 lg:w-8/12 mx-auto grid md:grid-cols-2 gap-10 md:gap-0 items-center justify-center">
      <div className="flex justify-center">
        <figure>
          <img
            src={image}
            alt={name}
            className="h-[16rem] object-cover w-[14rem]"
          />
        </figure>
      </div>
      <div>
        <p className="text-xl font-serif font-medium">
          Brand: <span className="text-[#ff9f43]">{brand}</span>
        </p>
        <p className="text-sm font-serif my-3">Model: {name}</p>
        <p className="text-base text-blue-600 font-mono font-semibold mb-3">
          <span>Price:</span> <FormatPrice price={price}></FormatPrice>
        </p>
        <Stars stars={stars} reviews={reviews} />
        <p className="text-sm font-serif my-3">
          <span className="text-base font-serif font-semibold">
            Description:
          </span>{" "}
          {description}
        </p>
        <hr className="mb-3 border-black" />
        <p className="text-sm font-serif">
          <span className="text-base">category:</span> {category}
        </p>
        <p className="text-sm  my-3">
          <span className="text-base font-serif">Id:</span> {id}
        </p>
        {stock > 0 && <AddCart product={prddtls} />}
      </div>
    </div>
  );
};

export default DetailsPage;
