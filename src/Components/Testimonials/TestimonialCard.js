import React from "react";
import "./Testimonial.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import image from "../../assets/my_projects/excelerate.png";

function TestimonialCard() {
  return (
    <div class="testimonial__card">
      <div className="testimonialContainer">
        <div className="testimonialHeader">
          <div className="imageContainer">
            <img src={image} alt="krittibas" />
          </div>
          <div className="nameContainer">
            <h4>Amrita Goswami</h4>
            <p>Baby Carer</p>
          </div>
          <div className="iconContainer">
            <RiDoubleQuotesL className="icon" />
          </div>
        </div>
        <div className="testimonialBody">
          <p className="testimonialBodyText">
            "I am really grateful to BlueHelmet for finding a baby carer for my
            child. Happy with the woman who was given to me. The BlueHelmet team
            was extremely cooperative. It is a great portal for working parents
            like us who can easily search and find any kind of domestic help."
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
