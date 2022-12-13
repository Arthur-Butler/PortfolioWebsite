import React, { Component } from "react";
import "./App.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = { isClicked: false };
    this.percentageChange = this.percentageChange.bind(this);
    this.state = { percentage: 0 };
  }

   
  percentageChange(){
    setInterval(() => {
      let rand = Math.floor(Math.random() * 100) + 1
        this.setState({percentage: rand})
    }, 1000)
  }

  handleBtnClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    //const percentage = this.state.percentage;
    const app = document.getElementsByClassName("App");
    if (isClicked) {
      app.classlist.add("hidden");
    }
    return (
      <div className="App" onLoad={this.percentageChange}>
        <div className="page">
          <div id="container">
            <h1>:(</h1>
            <h2>
              Your PC ran into a very dedicated and hard working programmer's
              website.
            </h2>
            <h2>
              {this.state.percentage}% complete
            </h2>
            <div id="details">
              <div id="qr">
                <div id="image">
                  <img
                    src="https://qrcodechimp.s3.amazonaws.com/qr/PROD/61d820bab81ebe1e1e588db4/qr/61d820ccaa0b4151e3755296_t.png?v=79"
                    alt="QR Code"
                  />
                </div>
              </div>
              <div id="stopcode">
                <h4>
                  For more information about this issue and possible fixes,
                  visit
                  <br />
                  <a href="https://www.linkedin.com/in/arthur-butler-7721591a4" style={{color:'#7971f5'}}>www.linkedin.com/in/arthur-butler-7721591a4</a>
                </h4>
                <h5>
                  If you call an employer, give them this info:
                  <br />
                  Stop Code: 101 BACK-END ENGINEER FOUND
                </h5>
              </div>
            </div>
          </div>
        </div>
        <header className="Header">
          <button className="shadow" onClick={this.handleBtnClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8px"
              height="7px"
              viewBox="0 0 8 7"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
            >
              <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
            </svg>
          </button>
          <div className="typewriter">
            <div className="Name">
              <h1>Arthur Nyaniso Butler</h1>
            </div>
            <h2>Back-end Software Engineer</h2>
            <h3>press x to continue</h3>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
