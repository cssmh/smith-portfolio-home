import { IoBagHandleOutline } from "react-icons/io5";
import workImg from "../assets/work-img-crop.jpg";
const Experience = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-16">
      <div className="w-1/2">
        <img src={workImg} alt="" />
      </div>
      <div className="w-1/2 space-y-4">
        <h1 className="text-[#98c954] text-2xl font-semibold">
          Work Experience
        </h1>
        <h1 className="font-bold text-7xl text-[#2e2e37]">My Experience</h1>
        <p className="text-gray-500 text-lg">
          Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
          hoye khbor nio na sit voluptatem.
        </p>
        <div className="flex items-center gap-4">
          <div className="bg-[#98c949] w-16 rounded-lg p-4 text-white text-3xl">
            <IoBagHandleOutline className="hover:animate-bounce transition-transform duration-300" />
          </div>
          <div>
            <h1 className="text-2xl">
              Senior System Engineer <br /> eThemeStudio
              <span className="text-base text-gray-500">
                ( 2018 - Running )
              </span>
            </h1>
            <p className="text-gray-500 text-lg">
              Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
              veritatis et quasi architecto beatae vitae.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#98c949] w-16 rounded-lg p-4 text-white text-3xl">
            <IoBagHandleOutline className="hover:animate-bounce transition-transform duration-300" />
          </div>
          <div>
            <h1 className="text-2xl">
              Senior System Engineer <br /> eThemeStudio
              <span className="text-base text-gray-500">
                ( 2018 - Running )
              </span>
            </h1>
            <p className="text-gray-500 text-lg">
              Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
              veritatis et quasi architecto beatae vitae.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#98c949] w-16 rounded-lg p-4 text-white text-3xl">
            <IoBagHandleOutline className="hover:animate-bounce transition-transform duration-300" />
          </div>
          <div>
            <h1 className="text-2xl">
              Senior System Engineer <br /> eThemeStudio
              <span className="text-base text-gray-500">
                ( 2018 - Running )
              </span>
            </h1>
            <p className="text-gray-500 text-lg">
              Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
              veritatis et quasi architecto beatae vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
