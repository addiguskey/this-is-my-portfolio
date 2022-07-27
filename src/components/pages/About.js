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
    maxWidth: "80%",
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
    maxWidth: "90%",
  },
};
export default function About() {
  return (
    <div className="row" style={styles.card}>
      <div className="card  col-md-6" id="About-Card" style={styles.width}>
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
            <div className="card-body">
              <p className="card-text" style={styles.p}>
                {" "}
                Hi there!
              </p>
              <p style={styles.p2}>
                My name is Addi Guskey. I am a full-stack developer who enjoys
                designing and building things from scratch.
              </p>
              <p style={styles.p2}>
                Most recently, I have been working with{" "}
                <span style={styles.span}>React, Node.js, and GraphQL,</span>{" "}
                which have been allowing my creativity to flourish while
                strengthening my back-end skills.
              </p>

              <p style={styles.p2}>
                My unique background and education have equipped me to provide a
                fresh lense to a solution while maintaining strong communication
                and the ability to thrive in a fast-paced enviornment. <br></br>{" "}
                <br></br> When I am not coding, I spend my time painting,
                cooking, skiing and hiking with my two pups-{" "}
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
