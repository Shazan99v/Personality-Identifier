// src/pages/Result.jsx
import { useAuth } from "../context/AuthContext";
import { getPersonalityDetail } from "../utils/personalityCalculator";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/result.css";

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
    <div className="result-page">

      {/* ================= LEFT CARD ================= */}
      <div className="card result-card">
        <div className="profile-header">
          <div className="profile-info">
            <h3 className="user-name">{name}</h3>
            <p className="user-gender">{gender}</p>
          </div>

          {/* Logo on RIGHT */}
          <img src={logo} alt="Logo" className="profile-logo" />

          
        </div>

        <p className="personality-type">{type}</p>

        <p className="personality-line">
          {detail}
        </p>

        <button className="btn" onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>

      {/* ================= RIGHT CARD ================= */}
      <div className="card company-card">
        <h2>Experts Personality Counselors®</h2>
        <p><b>Founder:</b> Ghazi Shoaib Awan</p>
        <p><b>Contact:</b> 0312-6231457</p>

        <p className="company-desc">
          Professional personality assessment and career counseling
          based on internationally recognized psychological models.
        </p>

        <a href={founderWhatsApp} target="_blank" rel="noopener noreferrer">
          <button className="btn whatsapp-btn">
            Contact on WhatsApp
          </button>
        </a>
      </div>

      {/* ================= BOTTOM BLUR STRIP ================= */}
      <div className="blur-strip">
        <div className="scrolling-text">
          Experts Personality Counselors® — ادارہ برائے نفسیاتی مشاورت، تعلیمی و کیریئر کونسلنگ
        </div>
      </div>

    </div>
  );
};

export default Result;
