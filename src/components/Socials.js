import React from "react";
import "./style.css";
import GitHubLogo from "../assets/images/github-logo.png";
import LinkedInLogo from "../assets/images/linkedin-logo.png";
import TwitterLogo from "../assets/images/twitter-logo.png";

const styles = {
  links: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Lexend Deca",
    fontDisplay: "sans-serif",
  },
};
export default function Socials() {
  return (
    <div id="socials">
      <ul>
        <li>
          <a
            style={styles.links}
            href="https://github.com/addiguskey"
            target="_blank"
          >
            Github <img src={GitHubLogo} alt="github-logo" />
          </a>
        </li>
        <li>
          <a
            style={styles.links}
            href="https://www.linkedin.com/in/addi-guskey-533998185/"
            target="_blank"
          >
            LinkedIn <img src={LinkedInLogo} alt="linkedin-logo" />
          </a>
        </li>
        <li>
          <a
            style={styles.links}
            href="https://twitter.com/addiguskey"
            target="_blank"
          >
            Twitter <img src={TwitterLogo} alt="twitter-logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}
