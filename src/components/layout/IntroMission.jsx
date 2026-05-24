import "../../assets/styles/introMission.css";
import aboutImg from "../../assets/images/main.logorr.jpeg";   // your no-bg image

const IntroMission = () => {

  
  
  return (
   <section className="intro-wrapper">

  <div className="intro-container">

    {/* LEFT IMAGE */}
    <div className="intro-image" data-aos="fade-right">
      <img src={aboutImg} alt="personality counseling experts" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="intro-content" data-aos="fade-left">

      <h2 className="org-name">
        Expert’s Personality Counselors® (Registered)
      </h2>

      <h4 className="sub-org">
        Institute for Psychological Guidance, Career Counseling & Personality Assessment
      </h4>

      <p className="para">
        <b>Expert’s Personality Counselors® (Registered)</b> is a professional organization dedicated to helping individuals discover their <b>personality type, cognitive strengths, interests, and career potential</b> through scientifically designed personality tests and psychological assessment tools.
      </p>

      <div className="quote">
        “Every individual has unique potential, but not everyone gets the opportunity to discover their true personality.”
      </div>

      <p className="para">
        Our mission is to make <b>personality testing, career guidance, and psychological assessment</b> simple, accessible, and effective through digital platforms, helping students, parents, and professionals make <b>informed career and life decisions with confidence.</b>
      </p>

    </div>
  </div>

  {/* ===== MISSION LIST ===== */}

  <div className="mission-box">

    <h3 className="MLH">Our Mission & Objectives</h3>

    <div className="mission-grid">

      {[
        "Promote self-awareness and personality discovery",
        "Reduce wrong career choices and academic confusion",
        "Align careers with personality type and aptitude",
        "Guide parents about children's strengths and behavior",
        "Reduce stress in academic and career decisions",
        "Introduce scientific personality testing in Pakistan",
        "Connect education, psychology, and career planning"
      ].map((m, i) => (
        <div key={i} className="m-card">
          {m}
        </div>
      ))}

    </div>

    <div className="quote last">
      “When people understand their personality, they make better decisions, build better careers, and live more meaningful lives.”
    </div>

  </div>

</section>
  );
};

export default IntroMission;
