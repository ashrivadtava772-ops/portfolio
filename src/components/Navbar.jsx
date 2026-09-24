
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">

        <a
          href="#home"
          className="logo"
          aria-label="Anshika Shrivastava - Home"
        >
          Anshika<span>.</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
