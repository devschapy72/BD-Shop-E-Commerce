import React from "react";

const HappyShopping = () => {
  return (
    <div className=" w-full bg-[#eccc6d51] py-12 translate-y-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-serif font-medium mb-16 text-[#ff9102]">
        Happy Shopping
      </h2>
      <div className="w-8/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
        <figure>
          <img
            src="https://img.freepik.com/premium-vector/happy-shopping-day-text-effects_45668-268.jpg"
            alt="shoppingImage"
            className="h-[18rem] sm:h-[25rem] w-full "
          />
        </figure>
        <figure>
          <img
            src="https://img.freepik.com/free-photo/laughing-pretty-young-woman-jumping-holding-shopping-bags_171337-11429.jpg"
            alt="shoppingImage"
            className="h-[18rem] sm:h-[25rem] w-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default HappyShopping;
