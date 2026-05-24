import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import heroImage from "../assets/images/hero.jpg";
import PotentialSection from  "../components/layout/CardSection";
import IntroMission from "../components/layout/IntroMission";
import FounderSection from "../components/layout/FounderSection";
import WhyChoose from "../components/layout/WhyChoose";
import SEO from "../components/SEO";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <SEO
  title="Personality Test Online | Discover Your Personality Type"
  description="Take free scientifically designed personality tests to discover your personality type, strengths, and career path in minutes."
  keywords="personality test, online personality test, career test, personality assessment"
/>
      <Navbar />

      <div className="home-container">

  {/* LEFT CONTENT */}
  <div className="home-content" data-aos="fade-right">

    <h1 className="main-title">
      Discover Your Personality Type & Unlock Your True Potential
    </h1>

    <hr className="divider" />

    <p className="sub-title">
      Take scientifically designed personality tests to understand your behavior, strengths, weaknesses, and career potential in minutes
    </p>

    <div className="btn-group" data-aos="zoom-in" data-aos-delay="200">
      <button
        className="test-btn primary"
        onClick={() => navigate("/test1")}
      >
        Start Personality Test 1
      </button>

      <button
        className="test-btn secondary"
        onClick={() => navigate("/test2")}
      >
        Start Personality Test 2
      </button>
    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="home-image" data-aos="fade-left">
    <img src={heroImage} alt="personality test illustration" />
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
