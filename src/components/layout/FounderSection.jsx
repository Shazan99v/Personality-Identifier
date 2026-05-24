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

  <h3>
    Our Digital Services: Online Personality Assessment & Career Guidance Platform
  </h3>

  <div className="service-grid">

    <div className="s-card" data-aos="flip-up">
      <h4>Online Personality Assessment Test</h4>
      <ul>
        <li>Personality traits analysis</li>
        <li>Cognitive patterns & behavior tendencies</li>
        <li>Interests, strengths & weaknesses identification</li>
        <li>Career compatibility based on personality type</li>
      </ul>
    </div>

    <div className="s-card" data-aos="flip-up">
      <h4>Career Counseling & Professional Guidance</h4>
      <ul>
        <li>For students, graduates & professionals</li>
        <li>Personalized career roadmaps</li>
        <li>Career selection based on personality & skills</li>
      </ul>
    </div>

    <div className="s-card" data-aos="flip-up">
      <h4>Student & Parent Career Counseling</h4>
      <ul>
        <li>Understanding student abilities & personality type</li>
        <li>Guidance for better academic decisions</li>
      </ul>
    </div>

    <div className="s-card" data-aos="flip-up">
      <h4>Stress Management & Emotional Support</h4>
      <ul>
        <li>Academic pressure & exam stress support</li>
        <li>Career confusion & decision anxiety</li>
        <li>Motivation & mental clarity improvement</li>
      </ul>
    </div>

    <div className="s-card" data-aos="flip-up">
      <h4>Personality Development Program</h4>
      <ul>
        <li>Confidence building techniques</li>
        <li>Communication & interpersonal skills</li>
        <li>Life skills & personal growth training</li>
      </ul>
    </div>

    <div className="s-card" data-aos="flip-up">
      <h4>Academic & Admission Guidance</h4>
      <ul>
        <li>Study planning & subject selection</li>
        <li>Career pathway planning</li>
        <li>Study abroad guidance & consultancy</li>
      </ul>
    </div>

  </div>

</div>

    </section>
  );
};

export default FounderSection;
