import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaUser, FaComment, FaTag } from "react-icons/fa";
import blog1 from "../assets/blog-img1-1.jpg";
import blog2 from "../assets/blog-img2-1.jpg";
import blog3 from "../assets/blog-img3-1.jpg";

const blogData = [
  { img: blog1, category: "Web Design", admin: "Admin", comments: "1 Comment" },
  { img: blog2, category: "Web Design", admin: "Admin", comments: "1 Comment" },
  { img: blog3, category: "Web Design", admin: "Admin", comments: "1 Comment" },
  { img: blog1, category: "Web Design", admin: "Admin", comments: "1 Comment" },
  { img: blog2, category: "Web Design", admin: "Admin", comments: "1 Comment" },
  { img: blog3, category: "Web Design", admin: "Admin", comments: "1 Comment" },
];

const RecentBlog = () => {
  return (
    <div className="mt-20 py-32 bg-[#f0f9fa] px-3">
      <h4 className="text-[#98c949] text-2xl font-semibold">Get Updates</h4>
      <h2 className="text-7xl font-semibold text-[#2e2e37] mt-4">
        Recent Blog
      </h2>
      <div className="mt-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
        //   navigation={true}
          modules={[Navigation]}
          className="swiper-container"
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const BlogCard = ({ img, category, admin, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="Blog"
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-6 text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <FaTag className="text-[#98c949]" />
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-[#98c949]" />
            <span>{admin}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaComment className="text-[#98c949]" />
            <span>{comments}</span>
          </div>
        </div>
        <p className="text-2xl text-[#2e2e37]">
          The man who is happy will make others too.
        </p>
      </div>
    </div>
  );
};

export default RecentBlog;
