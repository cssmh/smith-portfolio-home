import logo from "../assets/logo-2.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#ffffff] pt-36 pb-44">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-40 h-auto" />
            <p className="mt-4 text-gray-500">
              All rights reserved{" "}
              <span className="font-semibold text-black">Shtheme</span> © 2025
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl mb-4">Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
            </form>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Follow Me</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-[#1877f2] transition-all">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#" className="text-[#1da1f2] transition-all">
                <FaTwitter className="text-4xl" />
              </a>
              <a href="#" className="text-[#0077b5] transition-all">
                <FaLinkedin className="text-4xl" />
              </a>
              <a href="#" className="text-[#405de6] transition-all">
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
