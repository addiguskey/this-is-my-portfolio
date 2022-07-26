import React from "react";
// import "../style.css";
import image from "../assets/images/logo-darkmode.png";
// import { Link } from "react-router-dom";

const styles = {
  foot: {
    // fontFamily: "Italiana",
    // fontDisplay: "serif",
    fontSize: 14,
    color: "#7a7875",
    // letterSpacing: 1,
    // marginTop: 200,
    padding: 12,
  },
};
export default function Footer() {
  return (
    <div clasName="row " style={styles.foot}>
      <div className="d-flex flex-column align-items-center mt-5">
        <img style={{ height: "2rem" }} id="logo" src={image} alt="logo" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <p id="foot">Designed and Built by Addi Guskey</p>
      </div>
    </div>
  );
}
