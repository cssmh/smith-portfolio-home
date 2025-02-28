import { IoBagHandleOutline } from "react-icons/io5";
import workImg from "../assets/work-img-crop.jpg";

const Experience = () => {
  return (
    <div className="px-4 md:px-8 py-12 md:py-24">
      <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-1/2">
          <img
            src={workImg}
            alt="Work Experience"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8 md:space-y-10">
          <h1 className="text-[#98c954] text-2xl font-semibold text-center md:text-left">
            Work Experience
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-[#2e2e37] text-center md:text-left">
            My Experience
          </h1>
          <p className="text-gray-500 text-lg text-center md:text-left">
            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
            hoye khbor nio na sit voluptatem.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="bg-[#98c949] w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl">
              <IoBagHandleOutline className="hover:animate-bounce transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-center md:text-left">
                Senior System Engineer <br /> eThemeStudio
                <span className="text-base text-gray-500">
                  ( 2018 - Running )
                </span>
              </h1>
              <p className="text-gray-500 text-lg text-center md:text-left">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="bg-[#98c949] w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl">
              <IoBagHandleOutline className="hover:animate-bounce transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-center md:text-left">
                Senior System Engineer <br /> eThemeStudio
                <span className="text-base text-gray-500">
                  ( 2018 - Running )
                </span>
              </h1>
              <p className="text-gray-500 text-lg text-center md:text-left">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="bg-[#98c949] w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl">
              <IoBagHandleOutline className="hover:animate-bounce transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-center md:text-left">
                Senior System Engineer <br /> eThemeStudio
                <span className="text-base text-gray-500">
                  ( 2018 - Running )
                </span>
              </h1>
              <p className="text-gray-500 text-lg text-center md:text-left">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
