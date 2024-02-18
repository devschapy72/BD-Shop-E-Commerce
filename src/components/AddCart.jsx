import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddCart = ({ product }) => {
  const { addtoCart } = useCartContext();
  const { id, colors, stock, sizes } = product;
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div>
      {/* COLOR_CHOSSE */}
      <div className="flex items-center gap-2 my-3">
        <span className="text-base font-serif">Colors:</span>
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={
                color === curColor
                  ? "w-5 h-5 rounded-full opacity-100 flex justify-center items-center"
                  : "w-5 h-5 rounded-full opacity-50 hover:opacity-100 duration-300 cursor-pointer flex justify-center items-center"
              }
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? (
                <FaCheck className="text-gray-400 text-xs" />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* SIZE_CHOSSE */}
      <div className="flex items-center gap-2">
        <span className="text-base font-serif">Sizes:</span>
        {sizes.map((curSize, index) => {
          return (
            <button
              key={index}
              className={
                size === curSize
                  ? "w-5 h-5 rounded-full flex justify-center items-center text-xs bg-green-600 opacity-100 text-white"
                  : "w-5 h-5 rounded-full flex justify-center items-center text-xs"
              }
              onClick={() => setSize(curSize)}
            >
              {curSize}
            </button>
          );
        })}
      </div>
      {/* AMOUNT_INCREASE_DECREASE */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* ADD_TO_CART_BUTTON */}
      <NavLink
        to="/cart"
        onClick={() => addtoCart(id, color, size, amount, product)}
      >
        <button className="bg-[#ff9f43] px-10 py-3 border-2 border-[#ff9f43] rounded-md hover:bg-transparent duration-300 text-sm font-mono mt-3 sm:mt-7 ">
          Add cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddCart;
