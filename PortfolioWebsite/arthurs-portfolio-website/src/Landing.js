import React, { Component } from "react";
import "./App.css";
import $ from 'jquery';

function Landing() {
    function percentageChange(){
        setInterval(() => {
        let rand = Math.floor(Math.random() * 100) + 1
        $(".percentage").text(`${rand}% complete`);
        }, 1000)
    }

    function handleBtnClick() {
        $(".App").hide();
    }

    return (
        <div className="App" onLoad={percentageChange}>
            {/* <img className="landingBG" src="https://cdn.pixabay.com/photo/2019/02/21/12/19/sunset-4011217_960_720.jpg"/> */}
            <div className="landing">
                {/* <div className="page">
                    <div id="container">
                        <h1>:(</h1>
                        <h2>
                        Your PC ran into a very dedicated and hard working developer's
                        website.
                        </h2>
                        <h2>
                        <p className="percentage"></p>
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
                </div> */}
                <header className="Header">
                    {/* <button className="shadow" onClick={handleBtnClick}>
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
                    </button> */}
                    <div className="typewriter">
                        <div className="Name">
                        <h1>Arthur Nyaniso Butler</h1>
                        </div>
                        <h2>I am a Full-stack Web developer</h2>
                        <h3  className="continueBtn" onClick={handleBtnClick}>press to continue</h3>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Landing;
