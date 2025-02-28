import shape3 from "../assets/shape3.png";

const MySkill = () => {
  return (
    <div className="px-3 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-[#98c949] text-2xl font-semibold">My Skill</h1>
          <div className="relative">
            <h2 className="text-7xl font-semibold text-[#2e2e37] mt-4">
              Growing{" "}
              <span className="relative">
                Over
                <img
                  src={shape3}
                  alt="shape3"
                  className="absolute -top-2 -right-12 animate-bounce"
                />
              </span>{" "}
              <br /> Times
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex-1 flex justify-center gap-8"
        >
          <div>
            <div className="relative w-48 h-48">
              <div
                className="absolute inset-0 rounded-full border-8"
                style={{
                  borderColor: "#98c949",
                  clipPath: "polygon(0 10%, 100% 10%, 100% 100%, 0 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-8"
                style={{
                  borderColor: "#dde4e5",
                  clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 10%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl font-semibold text-[#2e2e37]">90%</p>
              </div>
            </div>
            <p className="text-2xl font-medium text-center mt-3">
              Software Development
            </p>
          </div>
          <div>
            <div className="relative w-48 h-48">
              <div
                className="absolute inset-0 rounded-full border-8"
                style={{
                  borderColor: "#98c949",
                  clipPath: "polygon(0 25%, 100% 25%, 100% 100%, 0 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-6"
                style={{
                  borderColor: "#dde4e5",
                  clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 25%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl font-semibold text-[#2e2e37]">75%</p>
              </div>
            </div>
            <p className="text-2xl font-medium text-center mt-3">
              System Application
            </p>
          </div>
          <div>
            <div className="relative w-48 h-48">
              <div
                className="absolute inset-0 rounded-full border-8"
                style={{
                  borderColor: "#98c949",
                  clipPath: "polygon(0 15%, 100% 15%, 100% 100%, 0 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-8"
                style={{
                  borderColor: "#dde4e5",
                  clipPath: "polygon(0 0, 100% 0, 100% 15%, 0 15%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl font-semibold text-[#2e2e37]">85%</p>
              </div>
            </div>
            <p className="text-2xl font-medium text-center mt-3">
              Data Administration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
