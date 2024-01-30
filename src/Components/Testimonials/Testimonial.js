import React from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";
function Testimonial() {
  return (
    <div className="tesimonial__div">
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
