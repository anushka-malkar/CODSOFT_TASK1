import profile from "../assets/profile.jpg";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCheckCircle
} from "react-icons/fa";

function About() {
  return (
    <section id="about" data-aos="fade-up">

      <h2>About Me</h2>

      <div className="about-container">


        <div className="about-content">

          <p>
            I am a  BE-Information Technology student passionate about
            software development, Artificial Intelligence, and
            full-stack web development.

            I enjoy building real-world applications that solve
            practical problems while continuously improving my
            programming skills.
          </p>

          <div className="about-details">

            <div>
              <FaGraduationCap />
              <span>Bachelor of engineering-IT Student</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Mumbai, India</span>
            </div>

            <div>
              <FaLaptopCode />
              <span>Looking for Internship</span>
            </div>

          </div>

          <div className="strengths">

            <div>
              <FaCheckCircle />
              <span>Quick Learner</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Problem Solver</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Team Player</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>AI Enthusiast</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Full Stack Developer</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>React Developer</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;