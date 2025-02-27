import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import brand1 from "../assets/brand-hover-img1 (1).png";
import brand2 from "../assets/brand-hover-img2.png";
import brand3 from "../assets/brand-hover-img4.png";
import brand4 from "../assets/brand-hover-img5.png";
import brand5 from "../assets/brand-hover-img2.png";
import brand6 from "../assets/brand-hover-img5.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const Brand = () => {
  return (
    <div className="py-20 bg-white border-b border-gray-300 mb-12 px-6">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        className="w-full px-6"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-40 h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
