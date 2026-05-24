import { useState } from "react";
import { useNavigate } from "react-router-dom";
import riasecQuestions from "../utils/riasecQuestions";
import "../assets/styles/test2.css";

const options = [
  { label: "Strongly Disagree", value: -2 },
  { label: "Disagree", value: -1 },
  { label: "Neutral", value: 0 },
  { label: "Agree", value: 1 },
  { label: "Strongly Agree", value: 2 },
];

const Test2 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const handleSelect = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const submit = () => {
    if (Object.keys(answers).length !== riasecQuestions.length) {
      alert("Please answer all questions");
      return;
    }

    localStorage.removeItem("personalityType");
    localStorage.setItem("test2Answers", JSON.stringify(answers));

    navigate("/result2");
  };

 return (
  <>
  <SEO
  title="RIASEC Career Interest Test Results | Holland Code Analysis"
  description="Get your RIASEC Holland Code career profile and discover best career paths based on your interests and personality."
  keywords="RIASEC test, holland code, career interest test, career guidance"
/>
  <div className="cont">

    <div className="test-container">

      <h1 className="test-title">
        Free RIASEC Career Interest Test (Holland Code Personality Assessment)
      </h1>

      <p className="test-intro">
        Take this scientifically designed RIASEC career interest test to discover your personality-based career path. This assessment helps identify your strengths, interests, and ideal career fields based on the Holland Code model.
      </p>

      {riasecQuestions.map(q => (
        <div key={q.id} className="question-card">

          <p className="question-text">
            {q.id}. {q.text}
          </p>

          <div className="agree-disagree">
            {options.map(opt => (
              <button
                key={opt.value}
                className={`option ${
                  answers[q.id] === opt.value ? "active" : ""
                }`}
                onClick={() => handleSelect(q.id, opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        
      ))}

      <button className="submit-btn" onClick={submit}>
        Get My Career Interest Results
      </button>

    </div>
  </div>
  </>
);
};

export default Test2;
