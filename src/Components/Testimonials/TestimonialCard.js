import React from "react";
import "./Testimonial.css";
import { RiDoubleQuotesL } from "react-icons/ri";


function TestimonialCard(props) {
  // console.log(props)
  return (
    <div class="testimonial__card">
      <div className="testimonialContainer">
        <div className="testimonialHeader">
          <div className="imageContainer">
            <img src={props.data.img_url} alt="wrong" referrerpolicy="no-referrer" />
          </div>
          <div className="nameContainer">
            <h2>{props.data.name}</h2>
            <a href={props.data.linkedin}><p>{props.data.linkedin}</p></a>
          </div>
          <div className="iconContainer">
            <RiDoubleQuotesL className="icon" />
          </div>
        </div>
        <div className="testimonialBody">
          <p className="testimonialBodyText">
           {props.data.aboutme}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
