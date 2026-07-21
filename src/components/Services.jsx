import {
  FaLaptopCode,
  FaRobot,
  FaMobileAlt,
  FaDatabase
} from "react-icons/fa";

function Services() {

  return (

<section id="services">

<h2>What I Do</h2>

<div className="services-grid">

<div className="service-card">

<FaLaptopCode />

<h3>Full Stack Development</h3>

<p>

Build modern web applications using
React, Node.js and Express.js.

</p>

</div>

<div className="service-card">

<FaRobot />

<h3>AI Applications</h3>

<p>

Develop AI-powered applications using
Gemini AI and intelligent automation.

</p>

</div>

<div className="service-card">

<FaMobileAlt />

<h3>Responsive Websites</h3>

<p>

Create responsive websites that work
perfectly on desktop, tablet and mobile.

</p>

</div>

<div className="service-card">

<FaDatabase />

<h3>Backend & Database</h3>

<p>

Work with Supabase, authentication,
REST APIs and secure backend systems.

</p>

</div>

</div>

</section>

  );

}

export default Services;