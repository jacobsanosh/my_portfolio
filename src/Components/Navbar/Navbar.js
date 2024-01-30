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
          <NavLink>
            <h1>SJ</h1>
          </NavLink>
        </div>
        <div className="nav_contents">
          
          <NavLink to='home' smooth={true} duration={500} className="nav__link">Home</NavLink>
          <NavLink to='about' smooth={true} duration={500} offset={-200}className="nav__link">About</NavLink>
          <NavLink to='my_works' smooth={true} duration={500} offset={-200}className="nav__link">works</NavLink>
          <NavLink to='/' smooth={true} duration={500} offset={-200}className="nav__link">Panelists</NavLink>
          <NavLink to='/' smooth={true} duration={500} offset={-200}className="nav__link">Schedule</NavLink>
          <NavLink to='/' smooth={true} duration={500} offset={-200}className="nav__link">Contact Us</NavLink>
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
              to="speakers"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Speakers
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="800"
              to="panelists"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Panelists
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1000"
              to="schedule"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Schedule
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1400"
              to="contact"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Contacts Us
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;