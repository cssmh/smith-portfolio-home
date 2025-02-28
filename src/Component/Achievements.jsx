import lily from "../assets/lily.png";
import sone from "../assets/sone.png";
import vant from "../assets/vant.png";
import Education from "./Education";
import Experience from "./Experience";
import MySkill from "./MySkill";
const Achievements = () => {
  return (
    <div>
      <div className="bg-[#f0f9fa] py-16 md:py-32 mt-20 md:mt-44">
        <div className="text-center">
          <h4 className="text-[#98c954] text-2xl font-semibold">
            Success Stories
          </h4>
          <h1 className="font-bold text-3xl md:text-7xl text-[#2e2e37] mt-4">
            Awards & Achievements
          </h1>
        </div>
        <div className="px-3 my-10">
          <div className="flex flex-col md:flex-row items-center gap-5 justify-between border-y py-8 md:py-12 border-gray-300">
            <img
              src={lily}
              alt="Lily Award"
              className="md:w-auto md:h-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-xl">
                Best Developer Award <span className="text-gray-500">2022</span>
              </p>
              <p className="text-xl mt-2">
                Developer Association
                <span className="text-gray-500 block">New York, Usa</span>
              </p>
            </div>
            <p className="text-lg text-gray-500 text-center md:text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore.
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="flex flex-col md:flex-row items-center gap-5 justify-between border-y py-8 md:py-12 border-gray-300">
            <img
              src={sone}
              alt="Sone Award"
              className="w-24 h-24 md:w-auto md:h-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-xl">
                Best Developer Award <span className="text-gray-500">2022</span>
              </p>
              <p className="text-xl mt-2">
                Developer Association
                <span className="text-gray-500 block">New York, Usa</span>
              </p>
            </div>
            <p className="text-lg text-gray-500 text-center md:text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dolore.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 justify-between border-y py-8 md:py-12 border-gray-300">
            <img
              src={vant}
              alt="Vant Award"
              className="w-24 h-24 md:w-auto md:h-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-xl">
                Best Developer Award <span className="text-gray-500">2022</span>
              </p>
              <p className="text-xl mt-2">
                Developer Association
                <span className="text-gray-500 block">New York, Usa</span>
              </p>
            </div>
            <p className="text-lg text-gray-500 text-center md:text-left">
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
