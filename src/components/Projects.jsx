import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "FULL STACK • AI",
      title: "AI Resume Builder",
      description:
        "A full-stack resume platform that lets users create, manage, analyze, and export professional resumes with AI-powered assistance.",
      technologies:
        "React · Node.js · Express.js · MongoDB · Mongoose · Gemini API",
      features:
        "JWT Authentication · Email OTP · ATS Analysis · AI Suggestions · PDF Export",
      implementation:
        "Gemini API analyzes resume content and generates ATS-focused suggestions, while MongoDB stores user and resume data.",
      github: "https://github.com/ashrivadtava772-ops/auth-project",
      live: null,
    },

    {
      number: "02",
      category: "AI • COMPUTER VISION • REAL-TIME",
      title: "AI Vision Assistant",
      description:
        "A real-time computer vision application that processes camera frames and detects objects using YOLO with a React and FastAPI architecture.",
      technologies:
        "React · FastAPI · Python · YOLO11 · WebSockets · OpenCV",
      features:
        "Real-time Detection · WebSockets · Camera Processing · Live FPS · Assistive Controls",
      implementation:
        "Camera frames are processed through a WebSocket connection and YOLO11 detects objects while the React interface displays live results.",
      github: "https://github.com/ashrivadtava772-ops",
      live: null,
    },

    {
      number: "03",
      category: "WEB DEVELOPMENT • CRUD",
      title: "MP Tourism",
      description:
        "A tourism website for exploring Madhya Pradesh destinations with dynamic content, feedback handling, and database-backed functionality.",
      technologies:
        "HTML · CSS · JavaScript · PHP · MySQL",
      features:
        "Dynamic Pages · Feedback System · MySQL Integration · CRUD Operations · Responsive UI",
      implementation:
        "PHP connects the frontend with MySQL to handle destination data, feedback submissions, and CRUD-based operations.",
      github: "https://github.com/ashrivadtava772-ops",
      live: null,
    },

    {
      number: "04",
      category: "FRONTEND • REACT",
      title: "Personal Portfolio",
      description:
        "A React-based developer portfolio designed to present technical skills, projects, internship experience, achievements, and professional information.",
      technologies:
        "React · JavaScript · Vite · CSS · React Icons",
      features:
        "Component Architecture · Responsive UI · Reusable Sections · Interactive Navigation",
      implementation:
        "Built reusable React sections with responsive layouts, interactive navigation, and a developer-focused visual system.",
      github: "https://github.com/ashrivadtava772-ops",
      live: null,
    },

    {
      number: "05",
      category: "DATABASE • MANAGEMENT SYSTEM",
      title: "Library Management System",
      description:
        "A database-focused system for managing books, student records, and issue and return operations.",
      technologies:
        "SQL · Database Design · CRUD",
      features:
        "Student Records · Book Records · Issue/Return · Relational Data",
      implementation:
        "Designed relational tables with keys and queries to manage books, student records, and issue-return transactions.",
      github: "https://github.com/ashrivadtava772-ops",
      live: null,
    },

    {
      number: "06",
      category: "WEB UI • REACT",
      title: "ANSHIX",
      description:
        "A modern web experience created to explore interface design, responsive layouts, and interactive web presentation.",
      technologies:
        "React · JavaScript · Web UI",
      features:
        "Responsive Layout · UI Composition · Component-Based Structure",
      implementation:
        "Focused on visual hierarchy, responsive composition, and translating a product concept into an interactive web interface.",
      github: "https://github.com/ashrivadtava772-ops",
      live: "https://anshix-launchpad.lovable.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p className="section-label">SELECTED WORK</p>

        <h2>Projects I’ve Built</h2>

        <p className="projects-intro">
          A selection of applications covering full-stack development,
          AI integration, real-time systems, databases, and frontend
          engineering.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-item" key={project.number}>
            <div className="project-main">
              <div className="project-heading">
                <div className="project-meta">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-info">
                <div>
  <h4>Technologies</h4>

  <div className="project-tech">
    {project.technologies.split(" · ").map((tech) => (
      <span key={tech}>{tech}</span>
    ))}
  </div>
</div>

                <div>
                  <h4>Features</h4>
                  <p>{project.features}</p>
                </div>

                <div>
                  <h4>Implementation</h4>
                  <p>{project.implementation}</p>
                </div>
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span>
                    <span className="project-arrow">↗</span>
                  </a>
                )}

                {project.live && (
                  <a
                    className="project-link live-link"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Demo</span>
                    <span className="project-arrow">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;