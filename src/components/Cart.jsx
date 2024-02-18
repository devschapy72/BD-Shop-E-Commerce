import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./FormatPrice";

const Cart = () => {
  const { cart, clearCart, totalPrice, shippingFee } = useCartContext();
  if (!cart) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  if (cart.length === 0) {
    return (
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center h-[50vh]">
        <h3 className="text-xl sm:text-2xl md:text-4xl font-mono mb-6">
          No Cart in Item
        </h3>
        <NavLink to="/products">
          <button className="bg-[#ff9f43] px-10 py-3 text-sm border-2 border-[#ff9f43] rounded-md outline-none hover:bg-transparent duration-300">
            Add Products
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 mx-auto mt-10">
      <div className="grid grid-cols-2 font-serif text-sm">
        <div className="grid sm:grid-cols-2">
          <p>Item</p>
          <p className="hidden sm:flex justify-center">Name</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          <p className="hidden md:flex justify-center">Price</p>
          <p className="flex justify-center">Quantity</p>
          <p className="hidden md:flex justify-center">Subtotal</p>
          <p className="flex justify-center">Remove</p>
        </div>
      </div>
      <hr className="border-[#4f4d4d] my-4" />
      {cart.map((curItems) => {
        return <CartItem key={curItems.id} {...curItems} />;
      })}
      <hr className="border-[#4f4d4d] my-4" />

      {/* CONTINUE_SHOPPING_&_CLEAR_CART */}
      <div className="flex justify-between mb-6">
        <NavLink to="/products">
          <button className="bg-blue-500 text-white px-6 py-3 text-[10px] sm:text-sm hover:bg-green-500 duration-300 outline-none">
            CONTINUE SHOPPING
          </button>
        </NavLink>
        <button
          className="bg-[#ff9f43] px-6 py-3 text-[10px] sm:text-sm hover:bg-red-500 duration-300 cursor-pointer outline-none hover:text-white"
          onClick={clearCart}
        >
          CLEAR CART
        </button>
      </div>

      {/* CART_TOTAL_PRICE */}
      <div className="flex justify-end">
        <div className="w-[14rem] border-2 px-2 py-2">
          <div className="flex justify-between mb-2">
            <p className="font-serif">Subtotal:</p>
            <p className="text-sm">
              <FormatPrice price={totalPrice} />
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-serif">Shipping fee:</p>
            <p className="text-sm">
              <FormatPrice price={shippingFee} />
            </p>
          </div>
          <hr className="border-black my-2" />
          <div className="flex justify-between">
            <p className="font-serif">Total order:</p>
            <p className="text-sm">
              <FormatPrice price={shippingFee + totalPrice} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
