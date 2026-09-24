import "../styles/Hero.css";
import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">

        <div className="hero-image">
          <img
            src={profile}
            alt="Anshika Shrivastava"
            loading="eager"
            draggable={false}
          />
        </div>

        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>
            Anshika <span>Shrivastava</span>
          </h1>

          <h2>
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Content Creator",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h2>

          <p className="description">
            I build responsive, AI-powered web apps with the MERN stack.
            Currently open to internship and entry-level Full Stack roles.
          </p>

          <p className="location">
            <FaMapMarkerAlt />
            <span>Gwalior, India</span>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>

            <a
              href="/Anshika_Resume.pdf"
              download
              className="secondary-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/ashrivadtava772-ops"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/anshika-shrivastava-58b529351"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ashrivadtava772@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;