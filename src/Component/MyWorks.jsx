import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      id: 1,
      src: myworks1,
      category: "Web Design",
      description: "Creative Concept 1",
    },
    {
      id: 2,
      src: myworks2,
      category: "Development",
      description: "Full-Stack Solution",
    },
    {
      id: 3,
      src: myworks3,
      category: "Photography",
      description: "Captured Moments",
    },
    {
      id: 4,
      src: myworks4,
      category: "Web Design",
      description: "Modern UI Approach",
    },
    {
      id: 5,
      src: myworks5,
      category: "Development",
      description: "Scalable Systems",
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
      <div className="mb-9 flex flex-col md:flex-row justify-center gap-8">
        {["All", "Web Design", "Development", "Photography"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 text-lg font-semibold transition-colors duration-300 ${
              selectedCategory === category ? "text-[#98c949]" : "text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="columns-1 md:columns-2 lg:columns-3 md:space-y-5"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.description}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#9ecc54] bg-opacity-100 opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="self-end relative">
                  <FaArrowUpRightFromSquare className="text-white text-4xl opacity-100" />
                </div>
                <p className="text-white text-lg font-semibold mt-4 opacity-100">
                  {image.description}
                </p>
                <p className="text-white text-sm opacity-100">
                  {image.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MyWorks;
