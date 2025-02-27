import service1 from "../assets/service-icon-1.png";
import service2 from "../assets/service-icon-2.png";
import service3 from "../assets/service-icon-3.png";
import service4 from "../assets/service-icon-4.png";

const Service = () => {
  const services = [
    {
      image: service1,
      title: "Web Development",
      description:
        "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
    },
    {
      image: service2,
      title: "App Development",
      description:
        "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
    },
    {
      image: service3,
      title: "UI/UX Design",
      description:
        "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
    },
    {
      image: service4,
      title: "Digital Marketing",
      description:
        "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="px-3 py-16 bg-[#fffffd]">
      <div className="text-center mb-12">
        <h1 className="text-[#98c949] text-2xl font-semibold">Service</h1>
        <h2 className="text-7xl font-semibold text-[#2e2e37] mt-4">
          What I Do
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-6 shadow-md bg-white px-6 py-16 rounded-lg transition-shadow duration-300"
          >
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#2e2e37]">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
