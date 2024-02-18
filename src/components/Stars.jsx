import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Stars = ({ reviews, stars }) => {
  const ratingStars = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <IoIosStar />
        ) : stars >= number ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-orange-400 text-xs sm:text-sm">
        {ratingStars}
      </div>
      <p className="text-xs sm:text-sm">({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
