import lily from "../assets/lily.png";
import sone from "../assets/sone.png";
import vant from "../assets/vant.png";
import Education from "./Education";
import Experience from "./Experience";
import MySkill from "./MySkill";
const Achievements = () => {
  return (
    <div>
      <div className="bg-[#f0f9fa] py-32 mt-44">
        <h4 className="text-[#98c954] text-2xl font-semibold text-center">
          Success Stories
        </h4>
        <h1 className="font-bold text-center text-7xl text-[#2e2e37]">
          Awards & Achievements
        </h1>
        <div className="px-3 my-10">
          <div className="flex items-center gap-5 justify-between border-y py-12 border-gray-300">
            <img src={lily} alt="" />
            <p className="flex flex-col text-xl">
              Best Developer Award <span className="text-gray-500">2022</span>
            </p>
            <p className="flex flex-col text-xl">
              Developer Association
              <span className="text-gray-500">New York, Usa</span>
            </p>
            <p className="text-lg text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore.
            </p>
          </div>
          <div className="flex items-center gap-5 justify-between border-y py-12 border-gray-300">
            <img src={sone} alt="sone" />
            <p className="flex flex-col text-xl">
              Best Developer Award <span className="text-gray-500">2022</span>
            </p>
            <p className="flex flex-col text-xl">
              Developer Association
              <span className="text-gray-500">New York, Usa</span>
            </p>
            <p className="text-lg text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore.
            </p>
          </div>
          <div className="flex items-center gap-5 justify-between border-y py-12 border-gray-300">
            <img src={vant} alt="vant" />
            <p className="flex flex-col text-xl">
              Best Developer Award <span className="text-gray-500">2022</span>
            </p>
            <p className="flex flex-col text-xl">
              Developer Association
              <span className="text-gray-500">New York, Usa</span>
            </p>
            <p className="text-lg text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore.
            </p>
          </div>
        </div>
      </div>
      <Experience />
      <Education />
      <MySkill />
    </div>
  );
};

export default Achievements;
