import AboutMe from "./Component/AboutMe";
import Achivements from "./Component/Achivements";
import Count from "./Component/Count";
import Header from "./Component/Header";
import MyWorks from "./Component/MyWorks";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Count />
      <MyWorks />
      <Achivements />
    </>
  );
};

export default Home;
