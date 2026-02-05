export const calculateType = (answers) => {

  let result = {
    E: 0, I: 0,
    N: 0, S: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  answers.forEach(ans => {
    result[ans]++;
  });

  const EI = result.E >= result.I ? "E" : "I";
  const NS = result.N >= result.S ? "N" : "S";
  const TF = result.T >= result.F ? "T" : "F";
  const JP = result.J >= result.P ? "J" : "P";

  return EI + NS + TF + JP;
};
// Example MBTI personality details
const personalityDetails = {
  ISTJ: "Responsible, organized, practical, and detail-oriented. Values traditions and reliability.",
  ISFJ: "Caring, loyal, and conscientious. Focuses on helping others and maintaining harmony.",
  INFJ: "Insightful, idealistic, and empathetic. Guided by strong personal values and visions.",
  INTJ: "Strategic, logical, and independent. Natural planner and problem solver.",
  ISTP: "Practical, analytical, and adaptable. Enjoys hands-on problem solving.",
  ISFP: "Gentle, sensitive, and artistic. Lives in the present and values personal freedom.",
  INFP: "Idealistic, creative, and empathetic. Seeks meaning and authenticity.",
  INTP: "Analytical, logical, and curious. Enjoys abstract thinking and problem-solving.",
  ESTP: "Energetic, outgoing, and action-oriented. Lives in the moment and loves excitement.",
  ESFP: "Spontaneous, playful, and social. Enjoys experiences and connecting with others.",
  ENFP: "Enthusiastic, imaginative, and outgoing. Values creativity and human potential.",
  ENTP: "Innovative, quick-witted, and curious. Enjoys challenges and exploring possibilities.",
  ESTJ: "Organized, practical, and strong-willed. Focuses on structure and efficiency.",
  ESFJ: "Friendly, empathetic, and cooperative. Values community and helping others.",
  ENFJ: "Charismatic, empathetic, and inspiring. Natural leaders who guide and support others.",
  ENTJ: "Decisive, strategic, and confident. Strong leadership and goal-oriented."
};

export const getPersonalityDetail = (type) => {
  return personalityDetails[type] || "Personality details not available.";
};

// src/utils/personalityCalculator.js
export const calculateTest2Personality = (answers) => {
  if (!answers || Object.keys(answers).length === 0) return "Unknown";

  // Example logic: average score of all answers
  const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const avg = total / Object.keys(answers).length;

  // Map average to personality type
  if (avg >= 4.5) return "ENTJ";
  if (avg >= 4) return "ENFP";
  if (avg >= 3.5) return "INFP";
  if (avg >= 3) return "ISTJ";
  return "ISFJ";
};
