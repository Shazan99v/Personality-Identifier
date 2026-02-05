import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import riasecQuestions from "../utils/riasecQuestions";
import logo from "../assets/images/main.logorr.jpeg";
import "../assets/styles/result.css";

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
    <div className="result-page">

      {/* Left Card: User Result */}
      <div className="card result-card">

        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-info">
            <h3 className="user-name">{name}</h3>
            <p className="user-gender">{gender}</p>
          </div>

          {/* Logo */}
          <img src={logo} alt="Logo" className="profile-logo" />
        </div>

        {/* Result */}
        <p className="personality-type">{rankedTypes}</p>

        <p className="personality-line">
          Your RIASEC career interests are:
          <br />
          <b>{rankedTypes}</b>
        </p>

        <button className="btn" onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>

      {/* Right Card: Company Info */}
      <div className="card company-card">
        <h2>Experts Personality Counselors®</h2>
        <p><b>Founder:</b> Ghazi Shoaib Awan</p>
        <p><b>Contact:</b> 0312-6231457</p>
        <p className="company-desc">
          We provide professional personality analysis and career guidance
          based on scientifically validated psychological models.
        </p>

        <a
          href={founderWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn whatsapp-btn">
            Contact on WhatsApp
          </button>
        </a>
      </div>

      {/* Bottom Animated Strip */}
      <div className="blur-strip">
        <div className="scrolling-text">
          Experts Personality Counselors® — ادارہ برائے نفسیاتی مشاورت، تعلیمی و کیریئر کونسلنگ
        </div>
      </div>

    </div>
  );
};

export default Result2;
