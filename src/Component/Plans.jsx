import { IoMdCheckmark } from "react-icons/io";

const Plans = () => {
  const pricingPlans = [
    {
      title: "Hourly",
      price: "$99",
      time: "/ Per Hour",
      features: [
        "One time contract",
        "Flexible Contract",
        "Source Files",
        "Support",
        "Updates",
      ],
    },
    {
      title: "Project Basis",
      price: "$69",
      time: "/ Per Hour",
      features: [
        "One time contract",
        "Flexible Contract",
        "Source Files",
        "Support",
        "Updates",
      ],
    },
    {
      title: "Monthly",
      price: "$39",
      time: "/ Per Hour",
      features: [
        "One time contract",
        "Flexible Contract",
        "Source Files",
        "Support",
        "Updates",
      ],
    },
  ];

  return (
    <div className="pt-16 pb-32 px-4 bg-[#f0f9fa]">
      <div className="text-center">
        <h1 className="text-[#98c954] text-2xl font-semibold text-center">
          Let’s Start Working
        </h1>
        <p className="font-bold text-center text-7xl text-[#2e2e37]">
          Pricing Plans
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 transition-all transform hover:-translate-y-2 hover:shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-[#2e2e37]">
              {plan.title}
            </h2>
            <p className="text-5xl font-semibold text-[#98c949] my-4">
              {plan.price}{" "}
              <span className="text-lg text-black">{plan.time}</span>
            </p>
            <ul className="text-gray-600 space-y-3 text-lg">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <IoMdCheckmark className="text-[#98c949]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-[#98c949] text-white px-6 py-2 rounded-md text-lg font-medium transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
