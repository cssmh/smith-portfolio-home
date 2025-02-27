import { PiGraduationCap } from "react-icons/pi";
import educationImg from "../assets/education-img-2.jpg";
import shape2 from "../assets/shape2.png";

const Education = () => {
  return (
    <div className="px-4 py-16 my-8">
      <div className="flex justify-end mb-3">
        <img src={shape2} alt="shape2" className="animate-bounce" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-[#98c949] text-2xl font-semibold">Education</h4>
          <h2 className="text-5xl font-bold text-[#2e2e37] mt-4">
            My Education
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
            hoye khbor nio na sit voluptatem accusantium dolore.
          </p>
          <div className="mt-8 space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-[#98c949] w-16 rounded-lg p-4 text-white text-3xl">
                <PiGraduationCap className="hover:animate-bounce transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2e2e37]">
                  Masters in Computer Science
                </h3>
                <p className="text-gray-500">
                  New York University (2012 - 2016)
                </p>
                <p className="text-gray-600 mt-2">
                  Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                  veritatis et quasi architecto beatae vitae.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-[#98c949] w-16 rounded-lg p-4 text-white text-3xl">
                <PiGraduationCap className="hover:animate-bounce transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2e2e37]">
                  Bachelor in Computer Engineering
                </h3>
                <p className="text-gray-500">Dhaka University (2008 - 2011)</p>
                <p className="text-gray-600 mt-2">
                  Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                  veritatis et quasi architecto beatae vitae.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-[#98c949] w-16 rounded-lg p-4 text-white text-3xl">
                <PiGraduationCap className="hover:animate-bounce transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2e2e37]">
                  Diploma in Graphic Design
                </h3>
                <p className="text-gray-500">Bangla College (2006 - 2008)</p>
                <p className="text-gray-600 mt-2">
                  Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                  veritatis et quasi architecto beatae vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={educationImg}
            alt="Education"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
