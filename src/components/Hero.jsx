import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import HeroData from "../hero_data/HeroData";

const HeroProduct = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* grid_1 */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {HeroData.map((product) => {
              const { image, id } = product;
              return (
                <SwiperSlide key={id}>
                  <figure>
                    <img
                      src={image}
                      alt="hero image"
                      className="w-full h-[20rem] sm:h-[30rem] object-cover"
                    />
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* grid_2 */}
        <div className="">
          <div>
            <figure>
              <img
                src="https://pergasco.com/wp-content/uploads/2016/05/c-users-reza-jarah-desktop-3-jpg.jpeg"
                alt="shirtimage"
                className="w-full sm:h-[16rem] md:h-[20rem] lg:h-[14.5rem] mb-[1rem]  object-cover"
              />
            </figure>
          </div>
          <div>
            <figure className="">
              <img
                src="https://img.freepik.com/premium-photo/happy-smiling-beautiful-blonde-girl-has-sale-up-90-sign-with-colorful-shopping-bags-isolated-yellow_97712-1514.jpg?size=626&ext=jpg&ga=GA1.1.1987737718.1707836024&semt=ais"
                alt="shirtimage"
                className=" w-full sm:h-[16rem] md:h-[20rem] lg:h-[14.5rem] object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;
