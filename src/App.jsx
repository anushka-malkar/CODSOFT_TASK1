import { useEffect } from "react";
import AOS from "aos";

import Education from "./components/Education";
import Services from "./components/Services";
import BackToTop from "./components/BackToTop";
import FeaturedProject from "./components/FeaturedProject";
import Navbar from "./components/Navbar";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Skills />
      <FeaturedProject />
      <Achievements/>
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;