import React from "react";
import { FaTruckArrowRight, FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineSecurity, MdOutlinePayment } from "react-icons/md";

const DeliveryService = () => {
  return (
    <div className=" mt-10 w-full h-auto bg-gray-50 py-10">
      <h2 className="text-center text-4xl font-serif font-medium mb-8">
        Our Delivery Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-10/12 mx-auto gap-4 my-5">
        <div className="bg-white shadow-md flex flex-col justify-center items-center gap-2 h-[10rem]">
          <div className="px-2 py-2 rounded-full flex justify-center items-center bg-gray-700 text-xl text-white">
            <span>
              <FaTruckArrowRight />
            </span>
          </div>
          <p className="text-sm font-serif font-medium">
            Super Fast And Free Delivery
          </p>
        </div>

        <div className="bg-white shadow-md flex flex-col justify-center items-center gap-2 h-[10rem]">
          <div className="px-2 py-2 rounded-full flex justify-center items-center bg-gray-700 text-xl text-white">
            <span>
              <MdOutlineSecurity />
            </span>
          </div>
          <p className="text-sm font-serif font-medium">Non-Contact Shipping</p>
        </div>

        <div className="bg-white shadow-md flex flex-col justify-center items-center gap-2 h-[10rem]">
          <div className="px-2 py-2 rounded-full flex justify-center items-center bg-gray-700 text-xl text-white">
            <span>
              <FaMoneyBillTransfer />
            </span>
          </div>
          <p className="text-sm font-serif font-medium">
            Money-Back Guaranteed
          </p>
        </div>

        <div className="bg-white shadow-md flex flex-col justify-center items-center gap-2 h-[10rem]">
          <div className="px-2 py-2 rounded-full flex justify-center items-center bg-gray-700 text-xl text-white">
            <span>
              <MdOutlinePayment />
            </span>
          </div>
          <p className="text-sm font-serif font-medium">
            Super Secure Payment System
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryService;
