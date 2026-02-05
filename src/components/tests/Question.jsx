const Question = ({ q, onAnswer }) => {
  return (
    <div className="question">
      <p>{q.text}</p>

      <div className="answer-options">
        <label>
          <input
            type="radio"
            name={q.id}
            onChange={() => onAnswer(q, "yes")}
          />
          <span>Yes</span>
        </label>

        <label>
          <input
            type="radio"
            name={q.id}
            onChange={() => onAnswer(q, "no")}
          />
          <span>No</span>
        </label>
      </div>
    </div>
  );
};

export default Question;
