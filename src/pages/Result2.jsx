import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import riasecQuestions from "../utils/riasecQuestions";
import logo from "../assets/images/main.logorr.jpeg";
import "../assets/styles/result.css";
import SEO from "../components/SEO";

const Result2 = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Safe user data
  const name = user?.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : "Guest";

  const gender = user?.gender || "Not specified";

  // Get Test2 answers (values: -2 to +2)
  const answers = JSON.parse(localStorage.getItem("test2Answers")) || {};

  // RIASEC score calculation
  const scores = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };

  riasecQuestions.forEach((q) => {
    const value = answers[q.id]; // -2, -1, 0, 1, 2
    if (value !== undefined) {
      scores[q.type] += value;
    }
  });

  // Rank RIASEC letters (highest score first)
  const rankedTypes = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3) // Top 3 interests
    .map(([type]) => type)
    .join("");

  const founderWhatsApp = "https://wa.me/923126231457";

  return (
    <>
    <SEO
  title={` Personality Type | Traits, Meaning & Career Guide`}
  description={`Discover personality traits, strengths, weaknesses, and career guidance based on scientific personality assessment.`}
  keywords="personality type, career guidance, personality traits, psychology test"
/>
   <div className="result-page">

  {/* Left Card: User Result */}
  <div className="card result-card">

    {/* Profile Header */}
    <div className="profile-header">
      <div className="profile-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-gender">{gender}</p>
      </div>

      <img src={logo} alt="Expert’s Personality Counselors logo" className="profile-logo" />
    </div>

    <h1 className="personality-type">
      Your RIASEC Career Interest Profile
    </h1>

    <p className="personality-line">
      Based on the Holland Code (RIASEC) personality model, your career interest profile is:
    </p>

    <p className="personality-line">
      <b>{rankedTypes}</b>
    </p>

    <p className="result-note">
      This result is calculated using a scientifically validated career interest assessment model that helps identify suitable career fields based on your personality, interests, and behavioral preferences.
    </p>

    <button className="btn" onClick={() => navigate("/home")}>
      Take Another Career Interest Test
    </button>

  </div>

  {/* Right Card: Company Info */}
  <div className="card company-card">

    <h2>
      Expert’s Personality Counselors® — Career Guidance & Personality Assessment Platform
    </h2>

    <p><b>Founder:</b> Ghazi Shoaib Awan</p>
    <p><b>Contact:</b> +92-312-6231457</p>

    <p className="company-desc">
      We provide professional <b>RIASEC career interest tests, personality assessments, and career counseling</b> based on internationally recognized psychological models such as the Holland Code system to help individuals choose the right career path.
    </p>

    <a
      href={founderWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="btn whatsapp-btn">
        Get Career Guidance on WhatsApp
      </button>
    </a>

  </div>

  {/* Bottom Animated Strip */}
  <div className="blur-strip">
    <div className="scrolling-text">
      RIASEC Career Interest Test Results | Holland Code Personality Types | Career Guidance | Psychological Assessment | Expert’s Personality Counselors®
    </div>
  </div>

</div>
</>
  );
};

export default Result2;
