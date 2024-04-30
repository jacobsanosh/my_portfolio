import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Resume.css";
import Aos from "aos";
import { myresume_data, intership } from "../../data/myresume_data";
import myresume from "../../assets/myOffcampus.pdf";
const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  const customTheme = {
    lineColor: "#ffff",
    fontFamily: "Oxygen",
  };

  // const gradient = "#1a1617";
  const gradient = "transparent";
  const border = "none";

  return (
    <div
      className="timeline"
      id="resume"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos="zoom-in"
    >
      <h2 className="about__me">Resume</h2>
      <div className="timeline__container">
        <div className="timeline__section" data-aos="zoom-in">
          <a
            href={myresume}
            download="SanoshJacob"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download</button>
          </a>
          <h2 className="section__title">Education</h2>

          <VerticalTimeline theme={customTheme} lineColor="#21b8cb">
            {myresume_data.map((item) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentStyle={{
                  color: "#ffff",
                  background: "transparent",
                  border: border,
                }}
                contentArrowStyle={{ display: "none" }}
              >
                <div className="timeline__element_txt" key={item.id}>
                  <h3 className="vertical-timeline-element-title">
                    {item.stream}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.branch}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.board}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.school}
                  </h3>

                  <p className="timeline__para" style={{ fontSize: "1.25rem" }}>
                    {item.percentage}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* intership */}
        <div className="timeline__section" data-aos="zoom-in">
          <h2 className="section__title">interships</h2>

          <VerticalTimeline theme={customTheme} lineColor="#21b8cb">
            {intership.map((item) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentStyle={{
                  color: "#ffff",
                  background: "transparent",
                  border: border,
                }}
                contentArrowStyle={{ display: "none" }}
              >
                <div className="timeline__element_txt" key={item.id}>
                  <h3 className="vertical-timeline-element-title">
                    {item.Company}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.Role}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.date}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {item.school}
                  </h3>
                  <a href={item.certificate} className="intership__certificate">
                    View internship Certificate
                  </a>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
