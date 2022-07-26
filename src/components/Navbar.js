import React from "react";
import Image from "../assets/images/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

const styles = {
  logo: {
    marginLeft: 5,
    // fontSize: 70,
    height: "6rem",
    // width: "10rem",
    // fontFamily: "Italiana",
    // fontDisplay: "cursive",
    padding: 10,
    // float: "right",
  },
  nav: {
    // fontFamily: "Epilogue",
    // fontDisplay: "sans-serif",
    fontSize: 22,
    fontWeight: 800,
    textDecoration: "none",
  },
  navdiv: {
    marginRight: 55,
    marginTop: 0,
  },
};
export default function Navbar() {
  return (
    <div>
      <div className="d-flex flex-column justify-content-end flex-md-row align-items-center p-3 px-md-4 mb-3">
        <a href="/" style={styles.logo} id="nav-logo">
          <img src={Image} style={styles.logo} />
        </a>
      </div>
      <div
        className="d-flex flex-column justify-content-end flex-md-row"
        style={styles.navdiv}
      >
        <Link to="/about">
          <a
            style={styles.nav}
            id="about-me"
            className="about-me btn bg-transparent"
          >
            About Me
          </a>
        </Link>

        <Link to="/projects">
          <a
            style={styles.nav}
            id="projects"
            className="projects btn bg-transparent"
          >
            Projects
          </a>
        </Link>

        <Link to="/contact">
          <a
            style={styles.nav}
            id="contact"
            className="contact btn bg-transparent"
          >
            Contact Me
          </a>
        </Link>

        <Link to="/resume">
          <a
            style={styles.nav}
            id="contact"
            className="contact btn bg-transparent"
          >
            Resume
          </a>
        </Link>
      </div>
    </div>
  );
}
