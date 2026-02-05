import { useState } from "react";
import questions from "../utils/question";
import { calculateType } from "../utils/personalityCalculator";
import { useNavigate } from "react-router-dom";
import "../assets/styles/test.css";

const Test1 = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const progress =
    (Object.keys(answers).length / questions.length) * 100;

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
    <div className="test-body">
      <div className="test-container">
        <h2 className="test-title">Personality Assessment</h2>

        {/* Progress Bar */}
        <div className="progress-bg">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <div className="q-header">
              Question {q.id} / {questions.length}
            </div>

            <div
              className={`option ${
                answers[q.id] === q.typeA ? "active" : ""
              }`}
              onClick={() => select(q.id, q.typeA)}
            >
              <span className="badge">A</span> {q.a}
            </div>

            <div
              className={`option ${
                answers[q.id] === q.typeB ? "active" : ""
              }`}
              onClick={() => select(q.id, q.typeB)}
            >
              <span className="badge">B</span> {q.b}
            </div>
          </div>
        ))}

        {/* IMPORTANT: button type="button" */}
        <button
          type="button"
          className="submit-btn"
          onClick={submit}
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default Test1;
