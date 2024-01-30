import React, { useState } from "react";
import "./Mywork.css";
import myworks from "../../data/works";

function Mywork() {
  const [show, setShow] = useState(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <div
      className="my__works"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos="zoom-in"
    >
      <hr
        className="horizontal-line"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos="zoom-in"
      />
      <h1
        className="about__me"
        data-aos-delay="200"
        data-aos-offset="200"
        data-aos="zoom-in"
        id="my_works"
      >
        Let's Explore my works
      </h1>
      {myworks.map((work) => (
        <a href={work.url}>
        <div
          key={work.id}
          className="work__card"
          data-aos-delay="200"
          data-aos-offset="200"
          data-aos="zoom-in"
          onMouseOver={showOverlay}
          onMouseLeave={hideOverlay}
        >
          <img src={work.image} alt={`Project ${work.id}`} />
          {show && (
            <div className="overlay">
              <h2>{work.heading}</h2>
              <p>{work.description}</p>
            </div>
          )}
          <hr
            className="horizontal-line"
            data-aos-delay="100"
            data-aos-offset="100"
            data-aos="zoom-in"
          />
        </div>
        </a>
      ))}
    </div>
  );
}

export default Mywork;
