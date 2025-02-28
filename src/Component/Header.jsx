import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo-2.png";
import smith from "../assets/slider-img.jpg";
import shape1 from "../assets/shape1.png";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen font-sans">
      <header
        className={`fixed top-0 w-full flex justify-between items-center px-3 ${
          isScrolled ? "py-5" : "py-5 md:py-10"
        } z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent"
        } md:bg-transparent bg-white`}
      >
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <nav className="hidden md:block">
          <ul
            className={`flex gap-8 text-lg transition-all duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Works</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          </ul>
        </nav>
        <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
          <FaBars />
        </button>
      </header>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#b5d87c] p-6"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            <FaTimes />
          </button>
          <ul className="space-y-6 text-white">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Works</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          </ul>
        </motion.div>
      )}
      <section className="flex flex-col-reverse md:flex-row min-h-[95vh]">
        <div className="w-full md:w-1/2 bg-white flex flex-col space-y-4 justify-center items-start px-3 relative">
          <div
            className="absolute top-[20%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
            style={{ zIndex: 10 }}
          >
            <img src={shape1} alt="Shape" className="w-12 h-12" />
          </div>
          <h2 className="text-5xl md:text-9xl mt-12 font-bold text-[#2e2e37]">
            James Smith
          </h2>
          <p className="text-xl md:text-3xl text-[#555664] mt-2">
            Senior Web Developer and Designer <br /> from the heart of New York
          </p>
          <button className="mt-6 bg-[#98c949] px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-white text-lg md:text-xl">
            Say Hello
          </button>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <img
            src={smith}
            alt="Smith"
            className="w-full h-auto md:absolute md:bottom-[-75px]"
          />
          <Socials />
        </div>
      </section>
    </div>
  );
};

export default Header;
