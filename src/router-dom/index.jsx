import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Products from "../components/Products";
import DetailsPage from "../product_details/DetailsPage";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Error from "../components/Error";
import TopBrandDetails from "../top_brand/TopBrandDetails";
import CategotiesDetails from "../shop_categories/CategotiesDetails";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/categoridetails/:id" element={<CategotiesDetails />} />
      <Route path="/topbranddetails/:id" element={<TopBrandDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterDom;
