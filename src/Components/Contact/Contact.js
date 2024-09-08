import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    const template = {
      from_name: name,
      from_email: email,
      to_name: "Sanosh Jacob",
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        template,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
         
          setEmail("");
          setName("");
          setMessage("");
          setSend(true)
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div
      className="contact__div"
      data-aos-delay="200"
      data-aos-offset="200"
      data-aos="zoom-in"
    >
      <h1 className="about__me">Let's connect</h1>
      <div className="contact__container">
        <div id="contact">
          <div className="contact-box">
            <div className="contact-links">
              <h2 className="about__me">Contact</h2>
              <div className="links">
                <div className="link">
                  <a href="https://www.linkedin.com/in/sanoshjacob/">
                    <img
                      src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </div>
                <div className="link">
                  <a href="https://github.com/jacobsanosh?tab=repositories">
                    <img
                      src="https://i.postimg.cc/YCV2QBJg/github.png"
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <div className="form-item">
                <input
                  type="text"
                  name="sender"
                  required
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-item">
                <textarea
                  className=""
                  name="message"
                  required
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {send &&<p>message sended successfully</p>}
              <button
                className="submit-btn"
                type="button"
                onClick={(e) => sendEmail(e)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
