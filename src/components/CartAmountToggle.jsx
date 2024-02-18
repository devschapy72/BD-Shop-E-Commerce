import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center gap-3 my-3">
      <button onClick={setDecrease} className="hover:text-red-600 duration-300">
        <FaMinus />
      </button>
      <p className="text-lg">{amount}</p>
      <button
        onClick={setIncrease}
        className="hover:text-green-600 duration-300"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
