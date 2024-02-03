import React, { useState } from "react";
import { Link as NavLink } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import "./Navbar.css";

function Navbar() {
  const [drawer, setDrawer] = useState(false);
  let scrollPosition = useScrollPosition();
  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const location = useLocation();

  const notHome = location.pathname.length > 1 ? true : false;

  const navStyleHome = {
    background: scrollPosition > 300 ? "#111111" : "",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
    backdropFilter: 'blur(10px)'
  }
  const navStyle = {
    background: scrollPosition > 300 ? "#111111" : "#111111",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
    backdropFilter: 'none'
  }

  return (
    <div className="navbar" style={notHome ? navStyle : navStyleHome}>
      <div className="navbar__main container">
        <div className="nav__logo">
          <NavLink to="home">
            <h1>SJ</h1>
          </NavLink>
        </div>
        <div className="nav_contents">
          
          <NavLink to='home' smooth={true} duration={500} className="nav__link">Home</NavLink>
          <NavLink to='about' smooth={true} duration={500} offset={-200}className="nav__link">About</NavLink>
          <NavLink to='my_works' smooth={true} duration={500} offset={-200}className="nav__link">Works</NavLink>
          <NavLink to='testimonials' smooth={true} duration={500} offset={-200}className="nav__link">References</NavLink>
          <NavLink to='skills' smooth={true} duration={500} offset={-300}className="nav__link">Skills</NavLink>
          <NavLink to='resume' smooth={true} duration={500} offset={-500}className="nav__link">Resume</NavLink>
          <NavLink to='contact' smooth={true} duration={500} offset={-400}className="nav__link">Contact</NavLink>
        </div>
        {/* <a href='https://rzp.io/l/finnext' target='_blank' rel="noreferrer">
          <button className="nav_btn">Register</button>
        </a> */}

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              data-aos="fade-right"
              data-aos-duration="200"
              to="home"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Home
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="400"
              to="about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              About
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="600"
              to="my_works"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Works
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="800"
              to="testimonials"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              References
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1000"
              to="skills"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Skills
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1400"
              to="resume"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Resume
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1400"
              to="contact"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;