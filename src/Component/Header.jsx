import { useState, useEffect } from "react";
import logo from "../assets/logo-2.png";
import smith from "../assets/slider-img.jpg";
import shape1 from "../assets/shape1.png";
import Socials from "./Socials";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header
        className={`fixed top-0 w-full flex justify-between items-center px-3 ${
          isScrolled ? "py-5" : "py-10"
        } z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <nav>
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
      </header>
      <section className="flex min-h-[95vh]">
        <div className="w-1/2 bg-white flex flex-col space-y-4 justify-center items-start px-3 relative">
          <div
            className="absolute top-[20%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
            style={{ zIndex: 10 }}
          >
            <img src={shape1} alt="Shape" className="w-12 h-12" />
          </div>
          <h2 className="text-9xl mt-12 font-bold text-[#2e2e37]">
            James Smith
          </h2>
          <p className="text-3xl text-[#555664] mt-2">
            Senior Web Developer and Designer <br /> from the heart of New York
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-6 bg-[#98c949] px-12 py-4 rounded-lg font-bold text-white text-xl"
          >
            Say Hello
          </button>
        </div>
        <div className="w-1/2 relative flex justify-center items-center">
          <img
            src={smith}
            alt="Smith"
            className="absolute bottom-[-75px] w-full"
          />
          <Socials />
        </div>
      </section>
    </div>
  );
};

export default Header;
