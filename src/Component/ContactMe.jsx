/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
          <ContactItem
            icon={<FaMapMarkerAlt />}
            title="Location"
            text="20 Bordeshi, London, USA"
          />
          <ContactItem icon={<FaPhone />} title="Phone" text="+123 456 7890" />
          <ContactItem
            icon={<FaEnvelope />}
            title="Email"
            text="hello@hibro.com"
          />
        </div>
        <div className="bg-white rounded-lg">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InputField type="text" placeholder="Enter your name" />
              <InputField type="email" placeholder="Enter your email" />
              <InputField type="tel" placeholder="Enter your phone" />
              <InputField type="text" placeholder="Enter your subject" />
            </div>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
              rows="5"
              placeholder="Start writing message here"
            ></textarea>
            <button className="bg-[#98c949] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#85b53d] transition-all">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <div className="mt-16">
        <div className="relative h-80">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            className="h-full w-full rounded-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, text }) => (
  <div className="flex items-center gap-4">
    <div className="bg-[#98c949] p-6 rounded-full text-white text-2xl">
      {icon}
    </div>
    <div>
      <p className="text-lg font-semibold text-[#2e2e37]">{title}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98c949]"
    placeholder={placeholder}
  />
);

export default ContactMe;
