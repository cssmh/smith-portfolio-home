import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="px-3 py-16">
      <div className="text-center mb-12">
        <h4 className="text-[#98c949] text-2xl font-semibold">Contact Me</h4>
        <h2 className="text-7xl font-semibold text-[#2e2e37] mt-4">
          Let&apos;s Start A New Project
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#98c949] p-6 rounded-full text-white">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-[#2e2e37]">Location</p>
              <p className="text-gray-600">20 Bordeshi, London, Usa</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#98c949] p-6 rounded-full text-white">
              <FaPhone className="text-2xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-[#2e2e37]">Phone</p>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#98c949] p-6 rounded-full text-white">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-[#2e2e37]">Email</p>
              <p className="text-gray-600">hello@hibro.com</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
                  placeholder="Enter your subject"
                />
              </div>
            </div>
            <div>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
                rows="5"
                placeholder="Start writing message here"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#98c949] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#85b53d] transition-all"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
