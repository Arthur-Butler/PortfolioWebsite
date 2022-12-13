import React, { Component } from "react";
import "./App.css";
import $ from 'jquery';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hover from 'react-3d-hover';
import Footer from "./Footer";

function About() {

    const scrollFunction = () => {
        $(".topPage").show();
    }

    return (
        <div className="AboutMe" id="AboutMe" onScroll={()=>scrollFunction()}>
            <div className="AboutSection">
                <img className="AboutImg" src="images/working.jpg"/>
                <div className="AboutPg">
                    <center>
                    <div className="mark"><h2 className="heading">About Me</h2></div>
                    </center>
                    <div className="assets">
                        <img alt="" className="AboutPic" src="images/ArthurPic.jpg"/>
                        <center>
                            <p className="passage">
                            I am a Cape Town based developer that has been in the industry in different roles mostly full-stack for 4 years now. My passion for all things computers and IT started
                            at a very young age and I have since grown a sizeable knowledge base since then. I have worked with multiple programming languages and frameworks. I have utilized my 
                            skills on multiple projects both for personal use and for business clients. After high school I was accepted into the <a className="links" href="https://www.citi.org.za/capaciti/">Cape Innovation and Technology Innitiative</a> start up.
                            Over my year with them I coded in mostly HTML, CSS, Javascript and Python and won a hackathon by coding the backend python controls for a mine detector robot. The next year I 
                            interned at <a className="links" href="https://www.younglings.academy/">Younglings</a> where I worked on multiple projects for clients and won another hackathon for my Devhelp application at the end of my year there. After that I 
                            worked on contract at <a className="links" href="https://monzamedia.com/">Monzamedia</a> where over my 5 months there I constructed a search engine, a Whatsapp and Gmail powered chatbot, integrated a Payflex payment system 
                            and added social media login buttons to key websites. While working with Monzamedia I coded in PHP and a framework called Laravel. You will find that I am a hard 
                            working, diligent individual that strives to complete tasks to the best of my ability. I have always loved complexed logical problems that I can muse over and solve. 
                            My interests are emerging technologies such as ray tracing, quantum supremacy, VR, AI and micro-computing. My ultimate goal is to become a Senior back-end or full-stack
                            developer. 
                            </p>
                        </center>
                    </div>
                </div>
            </div>
            <center><a className="cvBtn" href="/documents/CV.pdf" download>
                Download Curriculum Vitae
            </a></center>
            <hr className="sectionDiv"/>
            <center><div className="mark"><h2 className="heading">Personal Skills</h2></div></center>
                <div className="grid-container">
                    <Hover  scale={1} perspective={900} speed={500} style={{zIndex:"1"}}>
                        <div className="grid-item">
                            <center>Python</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/python.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high <br/> 2 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>CSS and HTML</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/html.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high  <br/>  5 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>Javascript</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/javascript.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high  <br/>  4 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>SQL</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/sql.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high  <br/>  5 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>Typescript</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/typescript.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: medium  <br/>  2 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>Delphi</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/Delphi.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high <br/>  5 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>C#</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/C.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: medium  <br/>  1 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>PHP</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/php.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: medium  <br/>  4 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>React Framework</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/react.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high  <br/>  2 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>Laravel Framework</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/laravel.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high  <br/>  1 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>Firebase</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/firebase.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: high  <br/>  3 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                    <Hover  scale={1} perspective={900} speed={500}>
                        <div className="grid-item">
                            <center>Java</center>
                            <center>
                                <img
                                className="skill-image"
                                src="images/Java.png"
                                alt="Headshot"
                                />
                                <p className="skill-info hidden">Skill level: medium  <br/>  1 years of experience</p>
                            </center>
                        </div>
                    </Hover>
                </div>
                <hr className="sectionDiv"/>
                <center><div className="mark"><h2 className="heading">Testimonials</h2></div></center>
                <div className="testimonials">
                    <div className="testimonial" id="testimonial1"><p><div className="qoutes">"</div><span className="testimonialHighlight">Arthur is an extremely polite and friendly young man. He has a tremendous amount of potential and working in the right environment, where his programming skills can be nurtured and his project management can be further developed - he could be an asset to a company. He is eager and positive and simply needs the right environment to help foster and grow his abilities.</span><div className="qoutes">"</div></p><h4>- Matthew Scher (Monzamedia manager)</h4><hr className="testimonialHR"/></div>
                    <div className="testimonial" id="testimonial2"><p><div className="qoutes">"</div><span className="testimonialHighlight">Arthur was one of the most driven intern that we have ever had. His ability to quickly pick up any techology given to him was insane. He worked really well in any project team we threw him in. And we were amazed by his amazing communication skills.</span><div className="qoutes">"</div></p><h4>-  Joshua Schell (Younglings manager)</h4><hr className="testimonialHR"/></div>
                </div>
                <button onclick="topFunction()" className="topPage"><FontAwesomeIcon icon={["fal", "coffee"]} /></button>
                <Footer/> 
        </div>
    );
}

export default About;
