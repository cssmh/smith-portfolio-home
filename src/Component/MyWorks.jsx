import { useState } from "react";
import myworks1 from "../assets/portfolio-img1.jpg";
import myworks2 from "../assets/portfolio-img2.jpg";
import myworks3 from "../assets/portfolio-img3.jpg";
import myworks4 from "../assets/portfolio-img5.jpg";
import myworks5 from "../assets/portfolio-img6.jpg";

const MyWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    { src: myworks1, category: "Web Design" },
    { src: myworks2, category: "Development" },
    { src: myworks3, category: "Photography" },
    { src: myworks4, category: "Web Design" },
    { src: myworks5, category: "Development" },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="mt-16 mb-8 px-3">
      <div className="text-center mb-12">
        <p className="text-2xl text-[#98c949] font-bold mb-4">Portfolio</p>
        <h2 className="text-7xl font-semibold text-[#2e2e37]">My Works</h2>
      </div>
      <div className="mb-9 flex justify-center gap-8">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-6 py-2 text-lg font-semibold ${
            selectedCategory === "All" ? "text-[#98c949]" : "text-gray-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Web Design")}
          className={`px-6 py-2 text-lg font-semibold ${
            selectedCategory === "Web Design"
              ? "text-[#98c949]"
              : "text-gray-600"
          }`}
        >
          Web Design
        </button>
        <button
          onClick={() => setSelectedCategory("Development")}
          className={`px-6 py-2 text-lg font-semibold ${
            selectedCategory === "Development"
              ? "text-[#98c949]"
              : "text-gray-600"
          }`}
        >
          Development
        </button>
        <button
          onClick={() => setSelectedCategory("Photography")}
          className={`px-6 py-2 text-lg font-semibold ${
            selectedCategory === "Photography"
              ? "text-[#98c949]"
              : "text-gray-600"
          }`}
        >
          Photography
        </button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
