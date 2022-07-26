import React from "react";
import Image from "../../assets/images/profile-gray.png";

const styles = {
  card: {
    marginTop: 200,
    marginBottom: 80,
  },
  link: {
    textDecoration: "none",
    color: "black",
    // fontWeight: "bold",
    color: "#2d62a2",
  },
  width: {
    maxWidth: "65%",
    alignItems: "center",
  },
  header: {
    // fontFamily: "Italiana",
    // fontDisplay: "serif",
    color: "#da5c3a",
    fontWeight: "bold",
    // marginLeft: 50,
    padding: 10,
  },
  p: {
    // fontFamily: "Epilogue",
    // fontDisplay: "sans-serif",
    fontSize: 20,
  },
  p2: {
    fontSize: 18,
    // fontFamily: "Epilogue",
    // fontDisplay: "sans-serif",
  },
  span: {
    // color: "#2d62a2",
    fontWeight: "bold",
  },
  img: {
    maxWidth: "110%",
  },
};
export default function About() {
  return (
    <div className="row" style={styles.card}>
      <div className="card mb-5 col-md-6" id="About-Card" style={styles.width}>
        <div className="row g-0">
          <h2 className="card-title" id="about-me-header" style={styles.header}>
            About Me
          </h2>
          <div className="col-md-4">
            <img
              src={Image}
              style={styles.img}
              className="img-fluid rounded-start"
              alt="profilepic"
              id="profilepic"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body mx-5">
              <p className="card-text" style={styles.p}>
                {" "}
                Hi there!
              </p>
              <p style={styles.p2}>
                My name is Addi Guskey, a full-stack web developer who enjoys
                front-end development and building things from scratch.
              </p>
              <p style={styles.p2}>
                Most recently, I have been working with{" "}
                <span style={styles.span}>React, Sequelize, and Graph-ql</span>{" "}
                which have been allowing my creative and design-forward mind to
                come back to life while strengthening my back-end skills.
              </p>

              <p style={styles.p2}>
                With strong communication skills, I thrive working and
                collaborating in a team-environment with other devs and project
                managers. When I am not coding, I spend my time painting,
                cooking, skiing and hiking with our two pups-{" "}
                <a
                  style={styles.link}
                  href="http://instagram.com/khione.and.udon"
                  target="_blank"
                >
                  Khione and Udon
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
