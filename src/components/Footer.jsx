import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Anushka Malkar</h2>

      <p className="footer-role">
        Full Stack Developer | AI Enthusiast
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/anushka-malkar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/anushka-malkar-8571263a2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:malkaranushka07@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <div className="footer-location">
        <FaMapMarkerAlt />
        <span>Mumbai, Maharashtra, India</span>
      </div>

      <hr />

      <p className="copyright">
        © 2026 Anushka Malkar. All Rights Reserved.
      </p>

      <p className="developer">
        Designed & Developed by <span>Anushka Malkar</span> ❤️
      </p>

    </footer>
  );
}

export default Footer;