import React from "react";
import "./App.css";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="Footer"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2019/02/21/12/19/sunset-4011217_960_720.jpg)",
      }}
    >
      <div id="social">
        <a href="https://www.linkedin.com/in/arthur-butler-7721591a4">
          <FaLinkedin className="socialIcon" />
        </a>
        <a href="https://github.com/">
          <FaGithubAlt className="socialIcon" />
        </a>
      </div>
      <p className="siteCreator">Powered by: Arthur Butler</p>
    </div>
  );
}

export default Footer;
