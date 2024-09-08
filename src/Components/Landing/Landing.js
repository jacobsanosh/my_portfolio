import React from "react";
import "./Landing.css";
import myimg from "../../assets/myjpg.jpeg";

import dots from "../../assets/svg/dots.svg";
import Stars from "../Stars/Stars";
import "animate.css";
function Landing() {
  return (
    <div className="Main__div">
      <div
        className="landing__div"
        id="home"
        data-aos-offset="200"
        data-aos="zoom-in"
      >
        <h1 className="landing__top">Hey</h1>
        <div className="ladning__img__div">
          <img src={dots} alt="" className="langing__dot" />
          <img src={myimg} className="landing__img" alt="" />
        </div>
        <h1 className="landing__bottom">I'm Sanosh.</h1>
      </div>
      <div className="stars">
      <Stars/>
      </div>
    </div>
  );
}

export default Landing;
