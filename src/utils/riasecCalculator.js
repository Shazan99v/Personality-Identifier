import riasecQuestions from "../utils/riasecQuestions";

export const calculateRIASEC = (answers) => {
  const score = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  riasecQuestions.forEach(q => {
    const value = answers[q.id]; // -2 to 2
    score[q.type] += value;
  });

  return Object.entries(score)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(item => item[0])
    .join("");
};
