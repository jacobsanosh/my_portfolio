import React from "react";
import "./About.css";
function About() {
  return (
    <div id="about">
    <div className="about__div"  data-aos-delay='200' data-aos-offset='200'data-aos="zoom-in" >
      <h2 className="about__me">
        Experienced software developer with years of expertise, specializing
        in crafting websites and mobile experiences for various projects.
      </h2>
      <div className="scoaial__media">
        <div className="social__let">
          <a href="https://www.linkedin.com/in/sanoshjacob/">Linked in</a>
          <a href="https://github.com/jacobsanosh?tab=repositories">Git hub </a>
          <a href="https://twitter.com/SanoshJacob">X</a>
        </div>
        <div className="social__right">
          <a href="mailto:sanoshappu123@gmail.com}">Sanosh@gmail.com</a>

        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
