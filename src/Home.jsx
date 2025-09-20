import AboutMe from "./Component/AboutMe";
import Achievements from "./Component/Achievements";
import ContactMe from "./Component/ContactMe";
import Count from "./Component/Count";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import MyWorks from "./Component/MyWorks";
import PeopleSay from "./Component/PeopleSay";
import Plans from "./Component/Plans";
import RecentBlog from "./Component/RecentBlog";
import Service from "./Component/Service";

const Home = () => {
  return (
    <div className="font-play">
      <Header />
      <main className="container mx-auto">
        <AboutMe />
        <Count />
        <MyWorks />
        <Achievements />
        <Plans />
        <Service />
        <PeopleSay />
        <ContactMe />
        <RecentBlog />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
