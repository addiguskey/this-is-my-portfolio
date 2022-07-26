import React from "react";
import MCimg from "../../assets/images/melted-cone.png";
import bookify from "../../assets/images/bookify.png";
import rnb from "../../assets/images/rhythm.png";
import githubImg from "../../assets/images/github-logo.png";
const styles = {
  img: {
    width: "100%",
  },
  header: {
    // fontFamily: "Italiana",
    // fontDisplay: "serif",
    color: "#da5c3a",
    fontWeight: "bold",
    // marginLeft: 50,
    padding: 10,
  },
  card: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 35,
    // maxHeight: "20%",
    border: "transparent",
    marginBottom: 45,
    maxWidth: "160%",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "#2d62a2",
    fontWeight: "bold",
  },
  gh: {
    maxWidth: "12%",
  },
};
export default function Projects() {
  return (
    <div
      id="proj-box"
      className=" row align-items-center justify-content-between "
      style={styles.card}
    >
      <h2 className="card-title" style={styles.header}>
        Projects
      </h2>
      <div className="row align-items-center my-4">
        <div className="d-flex flex-column my-5 col-xl-4 col-lg-6 col-md-12 col-sm-12 align-items-center">
          <div
            style={styles.card}
            className="card bg-transparent align-items-center text-center"
          >
            <a href="https://the-melted-cone.herokuapp.com/" target="_blank">
              <img src={MCimg} id="melted-cone" style={styles.img}></img>
            </a>

            <div className="card-body" style={styles.container}>
              <h4 className="card-title" style={styles.cardTitle}>
                <br></br> the Melted Cone{" "}
              </h4>
              <p className="card-text">
                No need to worry about keeping your ice cream in stock in your
                freezer !
              </p>
            </div>
            <div className="card-body">
              <a
                href="https://bookify-project-du.herokuapp.com/"
                target="_blank"
                className="btn-lg btn-outline-light"
                style={styles.link}
              >
                get the scoop{" "}
              </a>
              <a
                href="https://github.com/addiguskey/theMeltedCone"
                target="_blank"
                style={styles.link}
              >
                <img src={githubImg} style={styles.gh} className="repo"></img>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column my-5 col-xl-4 col-lg-6 col-md-12 col-sm-12 align-items-center">
          <div
            style={styles.card}
            className="card bg-transparent align-items-center text-center"
          >
            <a href="https://bookify-project-du.herokuapp.com/" target="_blank">
              <img src={bookify} id="bookify" style={styles.img}></img>
            </a>

            <div className="card-body" style={styles.container}>
              <h4 className="card-title" style={styles.cardTitle}>
                <br></br> Bookify{" "}
              </h4>
              <p className="card-text">
                Don't know what to read next and want to keep a log of your past
                books in one place?
              </p>
            </div>
            <div className="card-body">
              <a
                href="https://bookify-project-du.herokuapp.com/"
                target="_blank"
                className="btn-lg btn-outline-light"
                style={styles.link}
              >
                bookworms only{" "}
              </a>
              <a
                href="https://github.com/addiguskey/bookify"
                target="_blank"
                style={styles.link}
              >
                <img src={githubImg} style={styles.gh} className="repo"></img>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column my-5 col-xl-4 col-lg-6 col-md-12 col-sm-12 align-items-center">
          <div
            style={styles.card}
            className="card bg-transparent align-items-center text-center"
          >
            <a
              href="https://addiguskey.github.io/Rhythm-and-Booze/"
              target="_blank"
            >
              <img src={rnb} id="bookify" style={styles.img}></img>
            </a>

            <div className="card-body" style={styles.container}>
              <h4 className="card-title" style={styles.cardTitle}>
                <br></br> Rhythm & Booze{" "}
              </h4>
              <p className="card-text">
                Your next Friday night plans- <br></br>but, make it random
              </p>
            </div>
            <div className="card-body align-items-center">
              <a
                href="https://addiguskey.github.io/Rhythm-and-Booze/"
                target="_blank"
                className="btn-lg btn-outline-light"
                style={styles.link}
              >
                find your combo{" "}
              </a>
              <a
                href="https://github.com/addiguskey/Rhythm-and-Booze"
                target="_blank"
                style={styles.link}
              >
                <img src={githubImg} style={styles.gh} className="repo"></img>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
