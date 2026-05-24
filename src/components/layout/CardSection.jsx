import "../../assets/styles/CardSection.css";
import Self from "../../assets/images/self.svg";
import Career from "../../assets/images/career.jpg";
import Education from "../../assets/images/education.jpg";
import Guiding from "../../assets/images/guiding.avif";
import Science from "../../assets/images/Science.webp";
import Stress from "../../assets/images/stress.avif";

const data = [
  {
    img: Self,
    title: "Self-Awareness & Understanding Your Personality Type",
  },
  {
    img: Career,
    title: "Right Career Guidance Based on Personality & Skills",
  },
  {
    img: Guiding,
    title: "Guiding Students, Parents & Career Decision Making",
  },
  {
    img: Education,
    title: "Education Planning & Career Path Selection",
  },
  {
    img: Science,
    title: "Scientific Personality Assessment & Psychological Testing",
  },
  {
    img: Stress,
    title: "Reducing Stress, Anxiety & Career Confusion",
  },
];

const PotentialSection = () => {
  return (
    <div className="bg-wrapper">
      <div className="potential-wrapper">
        <h2 className="potential-title">
          Discover Your True Potential Through Personality Assessment,
          <span className="light">
            {" "}
            Because Everyone Has Unique Strengths,{" "}
          </span>
          <span className="highlight">
            But Not Everyone Gets the Opportunity to Understand Them
          </span>
        </h2>

        <div className="card-grid">
          {data.map((item, i) => (
            <div key={i} className="p-card" data-aos="fade-up">
              <img src={item.img} alt="card" className="p-img" />

              <div className="p-text">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotentialSection;
