import React from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
function Testimonial() {
  return (
    <div className="tesimonial__div" id="testimonials" data-aos-delay="200"
    data-aos-offset="200"
    data-aos="zoom-in">
      <h1 className="about__me">Let's see what others are saying</h1>
      <Marquee
        direction="left"
        speed={150}
        delay={-10}
        style={{ textAlign: "center" }}
        pauseOnHover={true}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Marquee>
    </div>
  );
}

export default Testimonial;
