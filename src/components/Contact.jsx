import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Contact() {

  return (

<section id="contact" data-aos="fade-left">

<h2>Contact Me</h2>

<p>

Feel free to connect with me for internships,
projects, collaborations or job opportunities.

</p>

<div className="contact-info">

<div>

<FaEnvelope />

<span>

malkaranushka07@gmail.com

</span>

</div>

<div>

<FaGithub />

<a
href="https://github.com/anushka-malkar"
target="_blank"
rel="noreferrer"
>

GitHub

</a>

</div>

<div>



<a

href="https://www.linkedin.com/in/anushka-malkar-8571263a2"
target="_blank"
rel="noreferrer"
>
<FaLinkedin />
LinkedIn

</a>

</div>

</div>

</section>

  )

}

export default Contact;