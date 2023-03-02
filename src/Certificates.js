import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import ReactTooltip from "react-tooltip";
import { FaArrowUp } from "react-icons/fa";
import Footer from "./Footer";

function Certificates() {
  const removeClass = (variable) => {
    if ($(`#${variable}`).hasClass("active")) {
      $(`#${variable}`).removeClass("active");
      $(`.card`).attr("data-tip", "click for full view");
      $(".cardBG").css("display", "none");
      if (variable == "card5") {
        $(`#card5`).css("flex", "0.5");
      }
    } else {
      console.log(variable);
      $(`.card`).removeClass("active");
      $(".cardBG").css("display", "block");
      if ($(window).width() < 768) {
        $(`.card`).attr("data-tip", "click for full view");
      }
      $(`#${variable}`).addClass("active");
      if ($(window).width() < 768) {
        $(".active").attr("data-tip", "click to minimize");
      }
      if (variable == "card5") {
        $(".active").css("flex", "1.1");
      } else {
        $(`#card5`).css("flex", "0.5");
      }
    }
  };

  const toolTip = () => {
    var windowWidth = $(window).width();
    if (768 >= windowWidth) {
      console.log(windowWidth);
      $(".card").attr("data-tip", "");
    }
  };

  const topFunction = () => {
    $(".topPage").hide();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  };

  return (
    <div className="Certificates" id="Certificates" onLoad={toolTip()}>
      <center>
        <div className="cardBG"></div>
        <center>
          <div className="mark">
            <h2 className="heading">Certification</h2>
          </div>
        </center>
        <p className="passage">
          Below is an assortment of the various certifications I have aquired
          throughout my five years of acquired expereince in the field of IT and
          Computer Science. Certifications include diplomas in the various.
        </p>
        <hr className="sectionDiv" />
        <div className="galleryContainer">
          <div
            onClick={() => removeClass("card1")}
            className="card"
            id="card1"
            data-tip="click for full view"
            style={{ backgroundImage: "url(images/MicrosoftCertificate.jpeg)" }}
          >
            <ReactTooltip />
          </div>
          <div
            onClick={() => removeClass("card2")}
            className="card"
            id="card2"
            data-tip="click for full view"
            style={{ backgroundImage: "url(images/JSUdemyCertificate.jpg)" }}
          >
            <ReactTooltip />
          </div>
          <div
            onClick={() => removeClass("card3")}
            className="card"
            id="card3"
            data-tip="click for full view"
            style={{ backgroundImage: "url(images/UdemyHTMLCSS.jpg)" }}
          >
            <ReactTooltip />
          </div>
          <div
            onClick={() => removeClass("card4")}
            className="card"
            id="card4"
            data-tip="click for full view"
            style={{ backgroundImage: "url(images/UdemyPython.jpg)" }}
          >
            <ReactTooltip />
          </div>
          <div
            onClick={() => removeClass("card5")}
            className="card"
            id="card5"
            data-tip="click for full view"
            style={{ backgroundImage: "url(images/hackathon.png)" }}
          >
            <a href="https://www.younglings.academy/35-2/">
              <h3 className="hackathonLink">Link to Hackathon Winners Page</h3>
            </a>
            <ReactTooltip />
          </div>
          <div
            onClick={() => removeClass("card6")}
            className="card"
            id="card1"
            data-tip="click for full view"
            style={{
              backgroundImage: "url(images/ResposiveWebDesignCertificate.png)",
            }}
          >
            <ReactTooltip />
          </div>
        </div>
      </center>
      <button onClick={() => topFunction()} className="topPage">
        <FaArrowUp className="arrowUp" />
      </button>
      <Footer />
    </div>
  );
}

export default Certificates;
