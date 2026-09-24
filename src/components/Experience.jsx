import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="experience-header">
        <p className="section-label">CAREER</p>
<h2>Professional Experience</h2>
      </div>
      <div className="experience-card">

       <div className="experience-top">
  <div>
    <h3>Full Stack Web Development Intern</h3>
    <h4>Kommonify Ventures Pvt. Ltd.</h4>
  </div>

  <div className="experience-meta">
    <span>Jun 15 – Jul 15, 2026</span>
    <span>Remote</span>
  </div>
</div>

<p className="experience-summary">
  Independently developed an AI-powered Resume Builder, contributing across
  frontend development, backend APIs, authentication, database operations,
  and AI integration.
</p>

<ul>
  <li>
    Designed REST APIs and MongoDB data structures for user accounts,
    profiles, and resume management.
  </li>

  <li>
    Implemented JWT authentication, bcrypt password encryption,
    email OTP verification, and password reset functionality.
  </li>

  <li>
    Integrated Gemini API for resume analysis, ATS-focused suggestions,
    and AI-powered content improvements.
  </li>

  <li>
    Built resume templates, profile management, resume storage,
    and PDF export using jsPDF and html2canvas.
  </li>
</ul>

        <div className="experience-tech">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Gemini API</span>
          <span>JWT</span>
        </div>

      </div>

    </section>
  );
}

export default Experience;