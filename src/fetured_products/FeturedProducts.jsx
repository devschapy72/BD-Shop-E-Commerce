import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../components/FormatPrice";
import { NavLink } from "react-router-dom";

const FeturedProducts = () => {
  const { products } = useProductContext();

  return (
    <div className="mt-10">
      <h2 className="my-10 text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-center">
        Fetured Products
      </h2>
      <div className="w-10/12 mx-auto">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          className="hidden lg:block"
        >
          {products.map((productItems) => {
            const { id, image, price, name, brand } = productItems;
            return (
              <SwiperSlide
                key={id}
                className="bg-[#ffffffc7] shadow-lg rounded-t-lg overflow-hidden"
              >
                <figure>
                  <img
                    src={image}
                    alt={name}
                    className="h-36 w-full object-cover"
                  />
                </figure>
                <div className="text-center my-4">
                  <p className="font-serif text-sm">Brand: {brand}</p>
                  <p className="my-2 font-serif text-sm text-red-700">
                    Model: {name}
                  </p>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <NavLink to={`/details/${id}`}>
                    <button className="text-center w-full border-[1px] border-[#ff9f43] py-2 bg-[#ff9f43] hover:bg-transparent duration-300">
                      View details
                    </button>
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* *******************md********************** */}

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          className="hidden md:block lg:hidden"
        >
          {products.map((productItems) => {
            const { id, image, price, name, brand } = productItems;
            return (
              <SwiperSlide
                key={id}
                className="bg-[#ffffffc7] shadow-lg rounded-t-lg overflow-hidden"
              >
                <figure>
                  <img
                    src={image}
                    alt={name}
                    className="h-36 w-full object-cover"
                  />
                </figure>
                <div className="text-center my-4">
                  <p className="font-serif text-sm">Brand: {brand}</p>
                  <p className="my-2 font-serif text-sm text-red-700">
                    Model: {name}
                  </p>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <NavLink to={`/details/${id}`}>
                    <button className="text-center w-full border-[1px] border-[#ff9f43] py-2 bg-[#ff9f43] hover:bg-transparent duration-300">
                      View details
                    </button>
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* *******************sm********************** */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          className="hidden sm:block md:hidden"
        >
          {products.map((productItems) => {
            const { id, image, price, name, brand } = productItems;
            return (
              <SwiperSlide
                key={id}
                className="bg-[#ffffffc7] shadow-lg rounded-t-lg overflow-hidden"
              >
                <figure>
                  <img
                    src={image}
                    alt={name}
                    className="h-36 w-full object-cover"
                  />
                </figure>
                <div className="text-center my-4">
                  <p className="font-serif text-sm">Brand: {brand}</p>
                  <p className="my-2 font-serif text-sm text-red-700">
                    Model: {name}
                  </p>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <NavLink to={`/details/${id}`}>
                    <button className="text-center w-full border-[1px] border-[#ff9f43] py-2 bg-[#ff9f43] hover:bg-transparent duration-300">
                      View details
                    </button>
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* ***************************************** */}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          className="sm:hidden"
        >
          {products.map((productItems) => {
            const { id, image, price, name, brand } = productItems;
            return (
              <SwiperSlide
                key={id}
                className="bg-[#ffffffc7] shadow-lg rounded-t-lg overflow-hidden"
              >
                <figure>
                  <img
                    src={image}
                    alt={name}
                    className="h-20 w-full object-cover"
                  />
                </figure>
                <div className="text-center my-2">
                  <p className="font-serif text-[10px]">Brand: {brand}</p>
                  <p className="my-1 font-serif text-[10px] text-red-700">
                    Model: {name}
                  </p>
                  <p className="text-[10px] mb-1">
                    <FormatPrice price={price} />
                  </p>
                  <NavLink to={`/details/${id}`}>
                    <button className="text-center text-xs w-full border-[1px] border-[#ff9f43] py-2 bg-[#ff9f43] hover:bg-transparent duration-300">
                      View details
                    </button>
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeturedProducts;
