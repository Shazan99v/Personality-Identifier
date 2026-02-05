import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import heroImage from "../assets/images/hero.jpg";
import PotentialSection from  "../components/layout/CardSection";
import IntroMission from "../components/layout/IntroMission";
import FounderSection from "../components/layout/FounderSection";
import WhyChoose from "../components/layout/WhyChoose";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="home-container">

  {/* LEFT CONTENT */}
  <div className="home-content" data-aos="fade-right">

    <h1 className="main-title">
      Discover Your Personality,  
      Unlock Your Potential!
    </h1>

    <hr className="divider" />

    <p className="sub-title">
      Scientifically crafted assessments & professional counseling
    </p>

    <div className="btn-group" data-aos="zoom-in" data-aos-delay="200">
      <button
        className="test-btn primary"
        onClick={() => navigate("/test1")}
      >
        Start Test 1
      </button>

      <button
        className="test-btn secondary"
        onClick={() => navigate("/test2")}
      >
        Start Test 2
      </button>
    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="home-image" data-aos="fade-left">
    <img src={heroImage} alt="personality" />
  </div>

</div>


      <IntroMission />
      <PotentialSection />
      <FounderSection />
      <WhyChoose />
    </>
  );
};

export default Home;
