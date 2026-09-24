
import "../styles/Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <p className="section-label">CONTACT</p>

        <h2>Let's Connect</h2>

        <p className="contact-intro">
  I'm currently looking for internship and entry-level opportunities in
  Full Stack Web Development. Feel free to connect with me!
</p>

       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashrivadtava772@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-cta"
>
  <FaEnvelope />
  <span>Email Me</span>
</a>
      </div>


      <div className="contact-container">

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashrivadtava772@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaEnvelope className="contact-icon" />

  <div>
    <h3>Email</h3>
    <span>ashrivadtava772@gmail.com</span>
  </div>
</a>


        <a
          href="https://github.com/ashrivadtava772-ops"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <div>
            <h3>GitHub</h3>
            <span>github.com/ashrivadtava772-ops</span>
          </div>
        </a>


        <a
          href="https://www.linkedin.com/in/anshika-shrivastava-58b529351"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedinIn className="contact-icon" />

          <div>
            <h3>LinkedIn</h3>
            <span>Anshika Shrivastava</span>
          </div>
        </a>

      </div>


      <footer className="contact-footer">
        © 2026 Anshika Shrivastava
      </footer>

    </section>
  );
}

export default Contact;
