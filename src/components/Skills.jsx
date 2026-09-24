import "../styles/Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: "◈",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      icon: "⌘",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "FastAPI",
        "WebSockets"
      ]
    },
    {
      title: "Database & Development Tools",
      icon: "▣",
      skills: [
        "MongoDB",
        "Mongoose",
        "SQL",
        "Git",
        "GitHub",
        "Vite"
      ]
    },
    {
      title: "AI & Integrations",
      icon: "✦",
      skills: [
        "Gemini API",
        "AI Integration",
        "API Integration",
        "JWT Authentication",
        "Multer",
        "Nodemailer"
      ]
    },
    {
      title: "Digital & Creative",
      icon: "✧",
      skills: [
        "Canva",
        "Content Creation",
        "Social Media Marketing",
        "Google Analytics",
        "SEO"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p className="section-label">SKILLS & TECHNOLOGIES</p>

        <h2>What I Work With</h2>

        <p className="skills-intro">
          Technologies, tools, and creative skills I use to build
          web applications and digital experiences.
        </p>
      </div>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-header">
              <span className="skill-icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;