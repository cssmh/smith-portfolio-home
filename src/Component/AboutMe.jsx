import aboutMe from "../assets/about-img-2.jpg";
import signature from "../assets/signature-3.png";
import shape2 from "../assets/shape2.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans mt-40 mb-16">
      <div className="w-full md:w-1/2 relative">
        <div
          className="md:absolute md:top-[293px] md:left-5 md:w-3/5 md:h-3/5 rounded-lg bg-[#98c949]"
          style={{ zIndex: 1 }}
        ></div>
        <div
          className="md:absolute top-0 left-0 w-full h-full flex justify-center items-center"
          style={{ zIndex: 2 }}
        >
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            src={aboutMe}
            alt="About Me"
            className="w-3/4 h-auto object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl text-[#98c949] font-bold">About Me</h3>
          <img src={shape2} alt="shape2" className="animate-bounce" />
        </div>
        <h2 className="text-3xl md:text-6xl font-bold text-[#2e2e37] mt-4">
          I Develop Systems that Work
        </h2>
        <p className="text-gray-700 mt-6">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia dese runt mollit anim id est laborum. <br />
          <br /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperia m, eaque ipsa quae
          ab illo inven tore veritatis et quasi architecto beatae vitae.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
          <p className="text-lg font-bold text-[#2e2e37]">Name</p>
          <p className="text-[#2e2e37]">James Smith</p>
          <p className="text-lg font-bold text-[#2e2e37]">Age</p>
          <p className="text-[#2e2e37]">29 Years</p>
          <p className="text-lg font-bold text-[#2e2e37]">Occupation</p>
          <p className="text-[#2e2e37]">System Engineer</p>
          <p className="text-lg font-bold text-[#2e2e37]">Education</p>
          <p className="text-[#2e2e37]">PhD in Physics</p>
          <p className="text-lg font-bold text-[#2e2e37]">Phone</p>
          <p className="text-[#2e2e37]">+123 456 7890</p>
          <p className="text-lg font-bold text-[#2e2e37]">Email</p>
          <p className="text-[#2e2e37]">hello@hibro.com</p>
          <p className="text-lg font-bold text-[#2e2e37]">Nationality</p>
          <p className="text-[#2e2e37]">Bangladeshi</p>
          <p className="text-lg font-bold text-[#2e2e37]">Freelance</p>
          <p className="text-[#2e2e37]">Available</p>
        </div>
        <div className="mt-8">
          <img src={signature} alt="Signature" className="w-52" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
