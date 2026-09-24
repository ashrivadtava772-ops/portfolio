import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <p className="section-label">ABOUT ME</p>
        <h2>Building solutions beyond the screen.</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm <strong>Anshika Shrivastava</strong>, a BCA student and
            Full Stack Web Developer focused on building modern,
            responsive, and practical web applications.
          </p>

          <p>
            I work primarily with the <strong>MERN stack</strong> and enjoy
            understanding how different parts of an application connect,
            from frontend interfaces and REST APIs to backend logic and
            databases.
          </p>

          <p>
            During my Full Stack Web Development internship, I independently
            built an <strong>AI Resume Builder</strong> using React,
            Node.js, Express.js, MongoDB, and Gemini API, working across
            authentication, APIs, database operations, AI integration,
            and document generation.
          </p>

          <p>
            I'm currently looking for opportunities where I can contribute
            to real-world web development projects, strengthen my backend
            and full-stack skills, and build products that solve meaningful
            problems.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <span className="card-icon">💻</span>
            <h3>Full Stack Development</h3>
            <p>
              React, JavaScript, Node.js, Express.js, MongoDB & REST APIs
            </p>
          </div>

          <div className="card">
            <span className="card-icon">🤖</span>
            <h3>AI Integration</h3>
            <p>
              Building AI-powered features and integrating APIs into web
              applications.
            </p>
          </div>

          <div className="card">
            <span className="card-icon">⚙️</span>
            <h3>Problem Solving</h3>
            <p>
              Breaking real-world requirements into practical technical
              solutions.
            </p>
          </div>

          <div className="card">
            <span className="card-icon">🎯</span>
            <h3>Career Focus</h3>
            <p>
              Seeking Web Development and Full Stack Development
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;