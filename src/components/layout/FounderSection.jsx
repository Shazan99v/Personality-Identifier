import "../../assets/styles/FounderSection.css";
import founderImg from "../../assets/images/Founder.png";   // use your image

const FounderSection = () => {
  return (
    <section className="founder-wrapper">

      <div className="founder-container">

        {/* LEFT IMAGE */}
        <div className="founder-img" data-aos="zoom-in">
          <img src={founderImg} alt="founder" />
        </div>

        {/* RIGHT TEXT */}
        <div className="founder-content">

          <h2>Founder & CEO – Expert’s Personality Counselors®</h2>

          <p className="para">
            <b>Mr. Muhammad Shoaib Awan</b> is a professional  
            <b> Psychologist, Career Counselor, Trainer, and Educational Strategist</b>  
            with a Master’s degree in <b>Applied Psychology</b>.
          </p>

          <p className="para">
            With years of hands-on experience, he has guided  
            <b> thousands of students, parents, educators, and professionals</b>  
            in understanding their personality traits, mental patterns,  
            and career direction.
          </p>

          <div className="quote">
            “Career decisions should be based on personality and potential,  
            not pressure, trends, or assumptions.”
          </div>

          <p className="para">
            What makes him distinct is his ability to explain psychology  
            in a <b>simple, practical, and result-oriented manner</b>,  
            making it understandable and applicable for everyone.
          </p>

        </div>
      </div>

      {/* ===== DIGITAL SERVICES ===== */}

      <div className="service-box">

        <h3>Our Digital Services (Website & Mobile App)</h3>

        <div className="service-grid">

          <div className="s-card" data-aos="flip-up">
            <h4>Online Personality Assessment</h4>
            <ul>
              <li>Personality traits</li>
              <li>Mental tendencies</li>
              <li>Interests and strengths</li>
              <li>Career compatibility</li>
            </ul>
          </div>

          <div className="s-card" data-aos="flip-up">
            <h4>Career Counseling & Guidance</h4>
            <ul>
              <li>For students & graduates</li>
              <li>For professionals</li>
              <li>Personalized roadmaps</li>
            </ul>
          </div>

          <div className="s-card" data-aos="flip-up">
            <h4>Student & Parent Counseling</h4>
            <ul>
              <li>Understanding child abilities</li>
              <li>Confident decisions</li>
            </ul>
          </div>

          <div className="s-card" data-aos="flip-up">
            <h4>Stress & Emotional Support</h4>
            <ul>
              <li>Academic pressure</li>
              <li>Career confusion</li>
              <li>Motivation issues</li>
            </ul>
          </div>

          <div className="s-card" data-aos="flip-up">
            <h4>Personality Development</h4>
            <ul>
              <li>Confidence building</li>
              <li>Communication skills</li>
              <li>Life skills</li>
            </ul>
          </div>

          <div className="s-card" data-aos="flip-up">
            <h4>Admissions Guidance</h4>
            <ul>
              <li>Study planning</li>
              <li>Abroad guidance</li>
              <li>Consultancy</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FounderSection;
