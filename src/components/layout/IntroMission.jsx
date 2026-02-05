import "../../assets/styles/introMission.css";
import aboutImg from "../../assets/images/main.logorr.jpeg";   // your no-bg image

const IntroMission = () => {

  
  
  return (
    <section className="intro-wrapper">

      <div className="intro-container">

        {/* LEFT IMAGE */}
        <div className="intro-image" data-aos="fade-right">
          <img src={aboutImg} alt="experts counselors" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="intro-content" data-aos="fade-left">

          <h2 className="org-name">
            Expert’s Personality Counselors® (Regd)
          </h2>

          <h4 className="sub-org">
            Institute for Psychological Guidance,  
            Education & Career Counseling
          </h4>

          <p className="para">
            <b>Expert’s Personality Counselors® (Regd)</b> is a visionary  
            and purpose-driven organization dedicated to helping  
            individuals understand their <b>personality, mental strengths,  
            interests, and potential</b> through scientifically designed  
            assessment tools and professional counseling.
          </p>

          <div className="quote">
            “Every individual has unique potential,  
            but not everyone gets the opportunity to discover it.”
          </div>

          <p className="para">
            Our mission is to make <b>personality assessment and career  
            guidance simple, accessible, and effective</b> through  
            digital platforms, enabling students, parents, and  
            professionals to make <b>confident and informed life  
            decisions—anytime, anywhere.</b>
          </p>

        </div>
      </div>

      {/* ===== MISSION LIST ===== */}

      <div className="mission-box">

        <h3 className="MLH">Our Mission & Objectives</h3>

        <div className="mission-grid">

          {[
            "Promote self-awareness and self-discovery",
            "Prevent wrong career choices & confusion",
            "Align careers with personality & aptitude",
            "Guide parents about children strengths",
            "Reduce stress & decision pressure",
            "Introduce scientific assessments in Pakistan",
            "Bridge education, personality & career"
          ].map((m, i) => (
            <div key={i} className="m-card">
              {m}
            </div>
          ))}

        </div>

        <div className="quote last">
          “When people understand themselves, their education improves,  
          their careers become clearer, and their lives become more meaningful.”
        </div>

      </div>

    </section>
  );
};

export default IntroMission;
