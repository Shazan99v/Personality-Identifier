import { useState } from "react";
import questions from "../utils/question";
import { calculateType } from "../utils/personalityCalculator";
import { useNavigate } from "react-router-dom";
import "../assets/styles/test.css";
import SEO from "../components/SEO";

const Test1 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const select = (id, type) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: type,
    }));
  };

  const submit = () => {
    // ✅ HARD CHECK
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions");
      return;
    }

    // ✅ Calculate personality
    const finalType = calculateType(Object.values(answers));

    // ✅ CLEAR test2 data (VERY IMPORTANT)
    localStorage.removeItem("test2Answers");

    // ✅ SAVE test1 result
    localStorage.setItem("personalityType", finalType);

    // ✅ FORCE NAVIGATION
    navigate("/result", { replace: true });
  };

  return (
    <>
    <SEO
  title="Free Personality Assessment Test | Answer Questions & Get Results"
  description="Take our free personality assessment test to understand your behavior, strengths, and career compatibility."
  keywords="personality test online, free personality quiz, personality assessment"
/>

  <div className="test-body">

    <div className="test-container">

      <h1 className="test-title">
        Free Personality Assessment Test
      </h1>

      <p className="test-intro">
        Take this scientifically designed personality test to understand your personality type, behavior patterns, strengths, and career compatibility. Answer all questions honestly for accurate results.
      </p>

      {/* Progress Bar */}
      <div className="progress-bg">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {questions.map((q) => (
        <div key={q.id} className="question-card">

          <div className="q-header">
            Question {q.id} / {questions.length}
          </div>

          <div
            className={`option ${answers[q.id] === q.typeA ? "active" : ""}`}
            onClick={() => select(q.id, q.typeA)}
          >
            <span className="badge">A</span>
            <span className="option-text">{q.a}</span>
          </div>

          <div
            className={`option ${answers[q.id] === q.typeB ? "active" : ""}`}
            onClick={() => select(q.id, q.typeB)}
          >
            <span className="badge">B</span>
            <span className="option-text">{q.b}</span>
          </div>
        </div>
      ))}

      <button type="button" className="submit-btn" onClick={submit}>
        Get My Personality Result
      </button>

    </div>
  </div>
  </>
);
};

export default Test1;
