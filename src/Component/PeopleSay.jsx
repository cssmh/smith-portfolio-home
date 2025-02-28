import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testimonial from "../assets/testimonials-img-1.jpg";
import testimonial2 from "../assets/testimonial-icon-3.png";
import author from "../assets/author-img-1.jpg";
import Brand from "./Brand";

const reviews = [
  {
    text: "This service was amazing! The team was professional and delivered high-quality work on time.",
    name: "John Doe",
    img: author,
  },
  {
    text: "I highly recommend them! The project was executed perfectly, and the support was excellent.",
    name: "Sarah Smith",
    img: author,
  },
  {
    text: "Fantastic experience! They understood my requirements and exceeded my expectations.",
    name: "Michael Johnson",
    img: author,
  },
];

const PeopleSay = () => {
  return (
    <div>
      <div className="py-16 md:py-32 mt-16 px-3 bg-[#f0f9fa] flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-[#98c954] text-2xl font-semibold">
            Testimonials
          </h2>
          <p className="font-bold text-7xl text-[#2e2e37] mb-6">
            What People Say
          </p>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="p-6 rounded-lg shadow-lg">
                <p className="flex items-center gap-3">
                  <img src={testimonial2} alt="testimonial2" />{" "}
                  <span className="text-gray-700 text-xl italic mb-4">
                    {review.text}
                  </span>
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-gray-500">eThemeStudio</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <img
            src={testimonial}
            alt="Testimonial"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default PeopleSay;
