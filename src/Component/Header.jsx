import logo from "../assets/logo-2.png";
import smith from "../assets/slider-img.jpg";
const Header = () => {
  return (
    <header className="fixed w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-white">James Smith</h1>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-400">
                Works
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
