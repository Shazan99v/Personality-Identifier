import "../../assets/styles/WhyChoose.css";

const WhyChoose = () => {

  const founderWhatsApp = "https://wa.me/923126231457";
  
  return (
<div className="Why-body">
<section className="why-wrapper">

  <div className="why-container">

    {/* LEFT CONTENT */}
    <div className="why-left" data-aos="fade-up">

      <h2>
        Why Choose Expert’s Personality Counselors® for Personality Assessment & Career Guidance?
      </h2>

      <p className="intro">
        Because we focus on:
      </p>

      <ul className="main-list">
        <li>Evidence-based <b>personality assessment</b> instead of assumptions</li>
        <li>Providing <b>clarity in career decision making</b>, not confusion</li>
        <li>Offering <b>long-term career guidance</b> instead of temporary advice</li>
        <li>Combining psychology with <b>real-world career planning strategies</b></li>
      </ul>

      <p className="para">
        If you or your child are experiencing:
      </p>

      <ul className="sub-list">
        <li>Confusion about career selection or academic direction</li>
        <li>Uncertainty about personal strengths, personality type, and abilities</li>
        <li>Fear of making the wrong career or life decision</li>
      </ul>

      <div className="trust">
        <b>Expert’s Personality Counselors®</b> is a trusted platform for
        <b> personality assessment, career counseling, and psychological guidance</b>
        to help individuals build a confident and successful future.
      </div>

    </div>

    {/* RIGHT CTA CARD */}
    <div className="why-right" data-aos="zoom-in">

      <h3>Start Your Personality Assessment Today</h3>

      <div className="phone">
        📞 +92-312-6231457
      </div>

      <p className="cta-text">
        Discover your personality type.<br/>
        Choose the right career path.<br/>
        Build a confident and successful future with expert guidance.
      </p>

      <div className="final">
        Contact Expert’s Personality Counselors® today for personalized
        <b> personality testing, career counseling, and psychological assessment</b>.
      </div>

      <a href={founderWhatsApp} target="_blank" rel="noopener noreferrer">
        <button className="contact-btn whatsapp-btn">
          Contact on WhatsApp
        </button>
      </a>

    </div>

  </div>

</section>
</div>
  );
};

export default WhyChoose;
