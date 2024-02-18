import React from "react";
import Hero from "./Hero";
import ShopCategoties from "../shop_categories/ShopCategoties";
import DeliveryService from "./DeliveryService";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCategoties />
      <DeliveryService />
    </div>
  );
};

export default Home;
