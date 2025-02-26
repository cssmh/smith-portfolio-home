import { useState, useEffect } from "react";
import logo from "../assets/logo-2.png";
import smith from "../assets/slider-img.jpg";
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
          <img src={logo} alt="Logo" className="h-9" />
        </div>
        <nav>
          <ul
            className={`flex gap-8 text-lg font-medium transition-all duration-300 ${
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
      <section className="flex min-h-screen">
        <div className="w-1/2 bg-white flex flex-col justify-center items-start px-3">
          <h2 className="text-9xl font-bold text-[#2e2e37]">James Smith</h2>
          <p className="text-3xl text-[#555664] mt-2">
            Senior Web Developer and Designer <br /> from the heart of New York
          </p>
        </div>
        <div className="w-1/2 bg-[#1f1e1d] relative flex justify-center items-center">
          <img
            src={smith}
            alt="Smith"
            className="absolute bottom-[-45px] w-full"
          />
          <Socials />
        </div>
      </section>
    </div>
  );
};

export default Header;
