import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";

const Count = () => {
  const [inView, setInView] = useState(false);
  const countSectionRef = useRef(null);

  const checkInView = () => {
    if (countSectionRef.current) {
      const bounding = countSectionRef.current.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
        setInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <div
      ref={countSectionRef}
      data-aos="fade-up"
      data-aos-duration="3000"
      className="min-h-[40vh] bg-[#37403d] flex items-center justify-center py-12 my-36"
    >
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 xl:gap-24">
          <div className="flex items-center gap-2">
            <div className="text-[#98c949] text-6xl lg:text-7xl font-bold">
              {inView && <CountUp end={12} duration={3} />}
            </div>
            <p className="text-white text-3xl">
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#98c949] text-6xl lg:text-7xl font-bold">
              {inView && (
                <>
                  <CountUp end={200} duration={3} />+
                </>
              )}
            </div>
            <p className="text-white text-3xl">
              Worldwide <br /> Clients
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#98c949] text-6xl lg:text-7xl font-bold">
              {inView && (
                <>
                  <CountUp end={3} duration={3} />
                  K+
                </>
              )}
            </div>
            <p className="text-white text-3xl">
              Total <br /> Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
