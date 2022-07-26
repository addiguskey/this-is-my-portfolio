import React from "react";
import { saveAs } from "file-saver";

const styles = {
  header: {
    color: "#da5c3a",
    fontWeight: "bold",
    marginLeft: 50,
    padding: 10,
    marginTop: 40,
  },
  body: {
    marginLeft: 90,
  },
  btn: {
    color: "#2d62a2",
  },
};
export default function Resume() {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  return (
    <div>
      <div>
        <h2 style={styles.header}>Resume</h2>
      </div>
      <div id="resume-body">
        <div
          className="hstack gap-3 mx-5 p-5 align-items-center"
          style={{ marginRight: "5rem" }}
        >
          <h5 style={{ fontWeight: "bold" }}>Education</h5>
          <div class="d-flex" style={{ height: "14rem" }}>
            <div class="vr"></div>
          </div>
          <div>
            <h6 style={{ fontWeight: "bold" }}>University of Denver</h6>
            <p>
              2022 <br></br>∙ Full-Stack Coding Bootcamp
            </p>
            <br></br>
            <p>
              2015 - 2019 <br></br>
              (Pre-Dental) <br></br>∙ Biochemistry& Molecular Biology, B.S.{" "}
              <br></br> ∙ Minor: Mathematics
            </p>
          </div>
        </div>

        <div
          className="hstack gap-3 mx-5 p-5 align-items-center"
          style={styles.body}
        >
          <h5 style={{ fontWeight: "bold", marginRight: "3rem" }}>Skills</h5>
          <div class="d-flex" style={{ height: "11rem" }}>
            <div class="vr"></div>
          </div>
          <div>
            {/* <h6 style={{ fontWeight: "bold" }}>Job Title</h6> */}
            <p>
              <br></br>∙ Html5 / CSS3 / Bootstrap <br></br>∙ JavaScript ES6/
              jQuery
              <br></br>∙ Express.js/MySQL/ MongoDB
              <br></br>∙ RESTful API/ Third-party APIs/ GraphQL API
              <br></br>∙ React.js<br></br>∙ Git/ GitHub / npm <br></br>∙
              Node.js/ Object-Oriented Programming (OOP)
            </p>
          </div>
        </div>
        <div className="text-center">
          <btn
            style={styles.btn}
            className="btn-lg btn-outline-light align-items-center"
            onClick={saveFile}
          >
            Download CV
          </btn>
        </div>
      </div>
    </div>
  );
}
