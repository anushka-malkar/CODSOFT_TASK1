import {
  FaTrophy,
  FaLaptopCode,
  FaGithub,
  FaBookOpen,
  FaBriefcase,
  FaRocket
} from "react-icons/fa";

function Achievements() {
  return (
    <section id="achievements">

      <h2>Achievements & Highlights</h2>

      <div className="achievement-grid">

        <div className="achievement-card">
          <FaTrophy />
          <h3>AI Resume Analyzer</h3>
          <p>Successfully built and deployed a full stack AI project.</p>
        </div>

        <div className="achievement-card">
          <FaLaptopCode />
          <h3>Full Stack Development</h3>
          <p>Building complete frontend and backend applications.</p>
        </div>

        <div className="achievement-card">
          <FaGithub />
          <h3>GitHub Portfolio</h3>
          <p>Maintaining projects and continuously improving coding skills.</p>
        </div>

        <div className="achievement-card">
          <FaBookOpen />
          <h3>Continuous Learning</h3>
          <p>Always learning new technologies and improving skills.</p>
        </div>

        <div className="achievement-card">
          <FaBriefcase />
          <h3>Open For Internship</h3>
          <p>Actively looking for software development opportunities.</p>
        </div>

        <div className="achievement-card">
          <FaRocket />
          <h3>AI Enthusiast</h3>
          <p>Exploring Artificial Intelligence and modern web technologies.</p>
        </div>

      </div>

    </section>
  );
}

export default Achievements;