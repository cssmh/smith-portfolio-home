import AboutMe from "./Component/AboutMe";
import Achievements from "./Component/Achievements";
import Count from "./Component/Count";
import Header from "./Component/Header";
import MyWorks from "./Component/MyWorks";
import Plans from "./Component/Plans";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Count />
      <MyWorks />
      <Achievements />
      <Plans />
    </>
  );
};

export default Home;
