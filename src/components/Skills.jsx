import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiSupabase } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" data-aos="zoom-in">

      <h2>My Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 size={50} />
          <h3>HTML</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt size={50} />
          <h3>CSS</h3>
        </div>

        <div className="skill-card">
          <FaJsSquare size={50} />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaReact size={50} />
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <FaNodeJs size={50} />
          <h3>Node.js</h3>
        </div>

        <div className="skill-card">
          <SiExpress size={50} />
          <h3>Express</h3>
        </div>

        <div className="skill-card">
          <SiSupabase size={50} />
          <h3>Supabase</h3>
        </div>

        <div className="skill-card">
          <FaGitAlt size={50} />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub size={50} />
          <h3>GitHub</h3>
        </div>

      </div>

    </section>
  );
}

export default Skills;