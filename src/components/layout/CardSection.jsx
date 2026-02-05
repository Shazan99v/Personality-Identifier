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
    title: "Understand Yourself/Self-awareness"
  },
  {
    img: Career,
    title: "Right Career Guidance"
  },
  {
    img: Guiding,
    title: "Guiding students & parents"
  },
  {
    img: Education,
    title: "Education & Career Planning"
  },
  {
    img: Science,
    title: "Scientific Assessments"
  },
  {
    img: Stress,
    title: "Reducing Stress & Anxiety"
  }
];

const PotentialSection = () => {
  return (
    <div className="bg-wrapper">
    <div className="potential-wrapper">

      <h2 className="potential-title">
        Every individual has unique potential,  
        <span className="light">
          {" "}but not everyone gets the{" "}
        </span>
        <span className="highlight">
          opportunity to discover it
        </span>
      </h2>

      <div className="card-grid">
        {data.map((item, i) => (
          <div key={i} className="p-card" data-aos="fade-up">

            <img
              src={item.img}
              alt="card"
              className="p-img"
            />

            <div className="p-text">
              {item.title}
            </div>

          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default PotentialSection;
