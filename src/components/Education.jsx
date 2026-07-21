import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaBriefcase
} from "react-icons/fa";

function Education() {

  return (

<section id="education">

<h2>Education & Career</h2>

<div className="education-container">

<div className="education-card">

<FaGraduationCap />

<h3>Bachelor of Engineering</h3>

<p>Computer Engineering</p>

</div>

<div className="education-card">

<FaUniversity />

<h3>University</h3>

<p>Mumbai University</p>

</div>

<div className="education-card">

<FaCalendarAlt />

<h3>Graduation</h3>

<p>Expected 2028</p>

</div>

<div className="education-card">

<FaBriefcase />

<h3>Career Goal</h3>

<p>Looking for Software Development Internship</p>

</div>

</div>

</section>

)

}

export default Education;