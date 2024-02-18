import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import FormatPrice from "./FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, image, color, price, amount, size, name }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <div className="grid grid-cols-2 items-center mb-6">
      <div className="grid sm:grid-cols-2 items-center">
        <div className="flex gap-2 items-center">
          <figure>
            <img
              src={image}
              alt={id}
              className="h-12 md:h-24 w-[5rem] md:w-[10rem] border-[1px] object-cover"
            />
          </figure>
          <div>
            <p className="text-[10px] sm:text-xs xl:text-sm">
              <span className="font-serif">Size:</span> {size}
            </p>
            <div className="flex items-center gap-1">
              <p className="text-[10px] sm:text-xs xl-text-sm font-serif">
                Color:{" "}
              </p>
              <div
                className="w-2 sm:w-3 h-2 sm:h-3 rounded-full"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>
        <p className="hidden sm:flex justify-center text-xs xl:text-sm font-serif">
          {name}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center">
        <p className="hidden md:flex justify-center text-xs xl:text-sm ">
          <FormatPrice price={price} />
        </p>
        <div className="flex justify-center text-[9px] sm:text-xs xl:text-sm ">
          <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>
        <div className="hidden md:flex justify-center text-xs xl:text-sm ">
          <FormatPrice price={price * amount} />
        </div>
        <p className="text-green-600 hover:text-red-600 duration-300 cursor-pointer flex justify-center text-xs xl:text-sm">
          <FaRegTrashCan onClick={() => removeItem(id)} />
        </p>
      </div>
    </div>
  );
};

export default CartItem;
