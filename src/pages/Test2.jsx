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
    <div className="cont">
      <div className="test-container">
        <h2 className="test-title">RIASEC Career Interest Test</h2>

        {riasecQuestions.map(q => (
          <div key={q.id} className="question-card">
            <p>{q.id}. {q.text}</p>

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
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default Test2;
