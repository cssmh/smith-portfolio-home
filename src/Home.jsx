import AboutMe from "./Component/AboutMe";
import Achievements from "./Component/Achievements";
import Count from "./Component/Count";
import Header from "./Component/Header";
import MyWorks from "./Component/MyWorks";
import PeopleSay from "./Component/PeopleSay";
import Plans from "./Component/Plans";
import Service from "./Component/Service";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Count />
      <MyWorks />
      <Achievements />
      <Plans />
      <Service />
      <PeopleSay />
    </>
  );
};

export default Home;
