import React from "react";
import "./Skills.css";
import { myskills } from "../../data/myskills";
function Skills() {
  return (
    <div
      className="my__skills"
      id="skills"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos="zoom-in"
    >
      <h1 className="about__me">My Skills</h1>
      <div className="icons__container">
        {myskills.map((data) => (
          <div className="myskill__details">
            <img
              key={data.id}
              src={data.icon}
              alt=""
              className="myskill__icon"
            />
            <p>{data.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
