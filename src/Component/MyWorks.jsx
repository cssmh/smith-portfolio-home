import { useState } from "react";
import myworks1 from "../assets/portfolio-img1.jpg";
import myworks2 from "../assets/portfolio-img2.jpg";
import myworks3 from "../assets/portfolio-img3.jpg";
import myworks4 from "../assets/portfolio-img5.jpg";
import myworks5 from "../assets/portfolio-img6.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const MyWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    {
      src: myworks1,
      category: "Web Design",
      description: "When the music's over, turn off the light",
    },
    {
      src: myworks2,
      category: "Development",
      description: "When the music's over, turn off the light",
    },
    {
      src: myworks3,
      category: "Photography",
      description: "When the music's over, turn off the light",
    },
    {
      src: myworks4,
      category: "Web Design",
      description: "When the music's over, turn off the light",
    },
    {
      src: myworks5,
      category: "Development",
      description: "When the music's over, turn off the light",
    },
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
          <div
            key={index}
            className="mb-4 relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#9ecc54] bg-opacity-100 opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="self-end relative -top-50">
                <FaArrowUpRightFromSquare className="text-white text-4xl opacity-100" />
              </div>
              <p className="text-white text-lg font-semibold mt-4 opacity-100">
                {image.description}
              </p>
              <p className="text-white text-sm opacity-100">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
