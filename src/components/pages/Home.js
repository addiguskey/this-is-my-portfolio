import React from "react";
import "../style.css";
import Image from "../../assets/images/bg.png";

const styles = {
  Intro1: {
    marginTop: 200,
    fontFamily: "Montserrat",
    fontDisplay: "sans-serif",
    fontSize: 22,
    color: "#7a7875",
    textAlign: "center",
  },
  Intro2: {
    fontFamily: "Italiana",
    fontDisplay: "serif",
    letterSpacing: 5,
    fontSize: 150,
  },
  Intro3: {
    fontFamily: "Montserrat",
    fontDisplay: "sans-serif",
    letterSpacing: 1,
    fontSize: 24,
    color: "#7a7875",
    textAlign: "center",
  },
  Intro4: {
    // fontFamily: "Montserrat",
    // fontDisplay: "sans-serif",
    fontSize: 20,
    // fontWeight: "bold",
    color: "#da5c3a",
    textAlign: "center",
    marginBottom: 150,
  },
  span: {
    fontWeight: "bold",
    color: "#3d3733",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
  },
  link: {
    textDecoration: "none",
    // fontFamily: "Montserrat",
    // fontDisplay: "sans-serif",
    fontSize: 30,
    textAlign: "center",
  },
  img: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    // backgroundSize: "30%",
    alignItems: "center",
    backgroundPosition: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
export default function Home() {
  return (
    <div
      className="intro"
      // style={styles.img}
    >
      <p className=" pt-5" style={styles.Intro1}>
        hi, my name is
      </p>
      <h1 id="name" style={styles.Intro2}>
        Addi Guskey
      </h1>
      <p style={styles.Intro3}>I am excited to be your new</p>
      <p style={styles.span}>
        <span>Full-Stack Developer</span>!
      </p>
      <div style={styles.Intro4} id="denver">
        {/* <p className="intro4">
          Based in{" "} */}
        <a
          style={styles.link}
          href="https://instagram.com/gusgoes0utside/"
          target="_blank"
        >
          <strong style={styles.Intro4}>Denver, CO</strong>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
}
