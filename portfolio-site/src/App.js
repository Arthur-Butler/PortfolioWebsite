import logo from './logo.svg';
import './App.css';
import { data } from "C:/Users/Noakes 2/Documents/PortfolioWebsite/portfolio-site/src/services/data";

var percentageElement = document.getElementById("percentage");
var percentage = 0;

function process() {
  percentage += parseInt(Math.random() * 10);
  if (percentage > 100) {
    percentage = 100;
  }
  percentageElement.innerText = percentage;
  processInterval();
}

function processInterval() {
  setTimeout(process, Math.random() * (1000 - 500) + 500)
}

function Landing() {
  //const { data, loading } = this.state;
  const name = data.name;
  const occupation = data.occupation;
  const description = data.description;
  const pic = "images/" + data.image;
  return (
    <div className="App">
          <div className="page">
              <div id="container">
                  <h1>:(</h1>
                  <h2>Your PC ran into a very dedicated and hard working programmer's website.</h2>
                  <h2>
                      <span id="percentage">0</span>% complete</h2>
                  <div id="details">
                      <div id="qr">
                          <div id="image">
                              <img src="https://qrcodechimp.s3.amazonaws.com/qr/PROD/61d820bab81ebe1e1e588db4/qr/61d820ccaa0b4151e3755296_t.png?v=79" alt="QR Code" />
                          </div>
                      </div>
                      <div id="stopcode">
                          <h4>For more information about this issue and possible fixes, visit
                              <br />www.linkedin.com/in/arthur-butler-7721591a4</h4>
                          <h5>If you call an employer, give them this info:
                              <br />Stop Code: 101 BACK-END ENGINEER FOUND</h5>
                      </div>
                  </div>
              </div>
          </div>
      <header className="Header">
        <button class="shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8px"
            height="7px"
            viewBox="0 0 8 7"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" />
          </svg>
        </button>
        <div className="typewriter">
          <div className="Name">
            <h1>{name}</h1>
          </div>
          <h2>{occupation}</h2>
        </div>
      </header>
    </div>
  );
}

export default Landing;