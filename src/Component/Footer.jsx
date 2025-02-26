const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-500">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
