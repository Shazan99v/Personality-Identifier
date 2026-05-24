// src/pages/Result.jsx
import { useAuth } from "../context/AuthContext";
import { getPersonalityDetail } from "../utils/personalityCalculator";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/result.css";
import SEO from "../components/SEO";

const Result = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const type = localStorage.getItem("personalityType") || "Unknown";
  const detail = getPersonalityDetail(type) || "No personality details available.";

  const founderWhatsApp = "https://wa.me/923126231457";

  const name = user?.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : "Guest";

  const gender = user?.gender || "Not specified";

  return (
    <>
    <SEO
  title={`${type} Personality Type | Traits, Meaning & Career Guide`}
  description={`Discover ${type} personality traits, strengths, weaknesses, and career guidance based on scientific personality assessment.`}
  keywords="personality type, career guidance, personality traits, psychology test"
/>
   <div className="result-page">

  {/* ================= LEFT CARD ================= */}
  <div className="card result-card">

    <div className="profile-header">
      <div className="profile-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-gender">{gender}</p>
      </div>

      <img src={logo} alt="Expert’s Personality Counselors logo" className="profile-logo" />
    </div>

    <h1 className="personality-type">
      Your Personality Test Result: {type}
    </h1>

    <p className="personality-line">
      {detail}
    </p>

    <p className="result-note">
      This result is based on a scientifically designed personality assessment test that analyzes your behavior patterns, interests, and cognitive preferences to determine your personality type.
    </p>

    <button className="btn" onClick={() => navigate("/home")}>
      Take Another Personality Test
    </button>

  </div>

  {/* ================= RIGHT CARD ================= */}
  <div className="card company-card">

    <h2>
      Expert’s Personality Counselors® — Personality Assessment & Career Counseling Platform
    </h2>

    <p><b>Founder:</b> Ghazi Shoaib Awan</p>
    <p><b>Contact:</b> +92-312-6231457</p>

    <p className="company-desc">
      We provide professional <b>personality assessment tests, career counseling, and psychological guidance</b> based on internationally recognized personality theories and career interest models to help individuals make better academic and career decisions.
    </p>

    <a href={founderWhatsApp} target="_blank" rel="noopener noreferrer">
      <button className="btn whatsapp-btn">
        Get Career Guidance on WhatsApp
      </button>
    </a>

  </div>

  {/* ================= BOTTOM BLUR STRIP ================= */}
  <div className="blur-strip">
    <div className="scrolling-text">
      Personality Test Results | Personality Type Analysis | Career Counseling | Psychological Assessment | Expert’s Personality Counselors®
    </div>
  </div>

</div>
</>
  );
};

export default Result;
