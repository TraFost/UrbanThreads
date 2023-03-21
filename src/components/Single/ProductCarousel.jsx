import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ProductCarousel = ({ image }) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <>
      <div className="overflow-hidden">
        <div className="grid grid-cols-3 gap-x-3">
          <div className="w-full h-full rounded-2xl bg-black duration-500">
            <img src={image[0]} alt="test" />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
