import "../../assets/styles/WhyChoose.css";

const WhyChoose = () => {

  const founderWhatsApp = "https://wa.me/923126231457";
  
  return (
    <div className="Why-body">
    <section className="why-wrapper">

      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left" data-aos="fade-up">

          <h2>Why Choose Expert’s Personality Counselors®?</h2>

          <p className="intro">
            Because we:
          </p>

          <ul className="main-list">
            <li>Work on <b>assessment, not assumptions</b></li>
            <li>Provide <b>clarity, not confusion</b></li>
            <li>Offer <b>long-term direction, not temporary advice</b></li>
            <li>Combine psychology with <b>real-world career planning</b></li>
          </ul>

          <p className="para">
            If you or your child are:
          </p>

          <ul className="sub-list">
            <li>Confused about career choices</li>
            <li>Unsure about personal strengths</li>
            <li>Afraid of making the wrong decision</li>
          </ul>

          <div className="trust">
            <b>Expert’s Personality Counselors®</b> is your trusted partner  
            in shaping a confident future.
          </div>

        </div>

        {/* RIGHT CTA CARD */}
        <div className="why-right" data-aos="zoom-in">

          <h3>Take the First Step Today</h3>

          <div className="phone">
            📞 +92-312-6231457
          </div>

          <p className="cta-text">
            Discover your personality.<br/>
            Choose the right career.<br/>
            Build a confident and successful future.
          </p>

          <div className="final">
            Contact Expert’s Personality Counselors® today  
            for your personalized assessment and career counseling.
          </div>

           <a href={founderWhatsApp} target="_blank" rel="noopener noreferrer">
          <button className="contact-btn whatsapp-btn">Contact on WhatsApp</button>
        </a>

        </div>

      </div>

    </section>
    </div>
  );
};

export default WhyChoose;
