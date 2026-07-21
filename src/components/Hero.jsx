import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi,
          <br />
          I'm <span>Anushka Malkar</span>
        </h1>

        <h3>Software Developer | AI Enthusiast</h3>

        <p>
          I build responsive websites, Android applications,
          AI-powered software and full-stack web projects.
        </p>

      <div className="hero-buttons">

  <a href="/resume.pdf" download>
    <button>Download Resume</button>
  </a>

  <a href="#contact">
    <button className="hire-btn">
      Hire Me
    </button>
  </a>

</div>
<div className="stats">

    <div className="stat-card">
        <h2>10+</h2>
        <p>Technologies</p>
    </div>

    <div className="stat-card">
        <h2>2028</h2>
        <p>Graduation</p>
    </div>

    <div className="stat-card">
        <h2>Open</h2>
        <p>For Internship</p>
    </div>

</div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Profile" />
      </motion.div>

    </section>
  );
}

export default Hero;