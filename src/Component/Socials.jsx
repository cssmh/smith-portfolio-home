import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="absolute hidden right-12 top-1/2 transform -translate-y-1/2 lg:flex flex-col items-center">
      <div className="flex flex-col space-y-12 items-center">
        <a
          href="https://facebook.com/touristmomen"
          target="_blank"
          aria-label="Facebook"
          rel="noopener noreferrer"
          className="text-xl text-white transition-all"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/erdmomin"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
          className="text-xl text-white transition-all"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/devmomin"
          target="_blank"
          aria-label="Linkedin"
          rel="noopener noreferrer"
          className="text-xl text-white transition-all"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.youtube.com/@tourist19"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
          className="text-xl text-white transition-all"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
