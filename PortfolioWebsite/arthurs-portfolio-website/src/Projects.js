import React, { Component } from "react";
import "./App.css";
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import { FaArrowUp } from 'react-icons/fa';
import Footer from "./Footer";

function Projects() {
    const removeClass=(variable)=>{
        if($(`#${variable}`).hasClass( "active" )){
            $(`#${variable}`).removeClass("active");
            $(`.card`).attr("data-tip","click for full view");
            if(variable==="card5"){
                $(`#card5`).css("flex","0.5")
            }
        }else{
            console.log(variable);
            $(`.card`).removeClass("active");
            $(`.card`).attr("data-tip","click for full view");
            $(`#${variable}`).addClass("active");
            $(".active").attr("data-tip","click to minimize");
            if(variable==="card5"){
                $(".active").css("flex","1.1")
            }else{
                $(`#card5`).css("flex","0.5")
            }
        }
      
        // $(`#${variable}`).css('min-width','700px!important');
    }

    const topFunction = () => {
        $(".topPage").hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }


    return (
        <div class="Projects" id="Projects">
            <center>
            <center><div className="mark"><h2 className="heading">Projects</h2></div></center>
                <p className="passage">Below is a display of the projects I have worked on and am currently working on.
                 The languages used in each project are listed below each item. Click an item in order to be linked to 
                 the hosted website or github repository.
                </p> 
                <hr className="sectionDiv"/>
                <div className="grid-projects">
                    <div className="grid-project"><h2>Ken's Gallery Website</h2><p className="projDescrip">Built a gallery website for a local Cape Town based artist who has art currently being sold in the Cape Gallery.</p><a href="https://kens-gallery.web.app/"><img className="project-img" src="images/KensGallery.png" alt="KensGallery"/></a><div className="skillsList"><div className="skill-item"><img className="applied-skill" src="images/firebase.png" alt="firebase"/></div><div className="skill-item"><img className="applied-skill" src="images/react.png" alt="react"/></div><div className="skill-item"><img className="applied-skill" src="images/javascript.png" alt="javascript"/></div><div className="skill-item"><img className="applied-skill" src="images/html.png" alt="html"/></div></div></div>
                    <div className="grid-project"><h2>Devhelp App</h2><p className="projDescrip">Built a Java app for a hackathon which I then won by placing first. The app was built to help developers gain expereince by linking them up with other developers who need help with projects.</p><a href="https://github.com/Arthur-Butler/DevHelp-App-Beta-"><img className="project-img" src="images/devhelp.png" alt="devhelp"/></a><div className="skillsList"><div className="skill-item"><img className="applied-skill" src="images/firebase.png" alt="firebase"/></div><div className="skill-item"><img className="applied-skill" src="images/Java.png" alt="java"/></div></div></div>
                    <div className="grid-project"><h2>Vernon's Academy of dance Website</h2><p className="projDescrip">Built a website for a local ballroom and latin american dance teacher and certified professional judge. The purpose of which was to advertise and bring awareness to his dance cool and allow potential dancers to conatact him and book through the website.</p><a href="https://vernonsacademy.web.app/"><img className="project-img" src="images/VernonsAcademy.png" alt="KensGallery"/></a><div className="skillsList"><div className="skill-item"><img className="applied-skill" src="images/firebase.png" alt="firebase"/></div><div className="skill-item"><img className="applied-skill" src="images/react.png" alt="react"/></div><div className="skill-item"><img className="applied-skill" src="images/javascript.png" alt="javascript"/></div><div className="skill-item"><img className="applied-skill" src="images/html.png" alt="html"/></div></div></div>
                </div>
            </center>
            <button onClick={()=>topFunction()} className="topPage"><FaArrowUp className="arrowUp"/></button>
            <Footer/>
        </div>
                //    <div className="grid-item"><img className="skill-image" src="images/python.png" alt="Headshot" /></div>
                //    <div className="grid-item"><center><img className="skill-image" src="images/html.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/javascript.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/sql.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/typescript.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/Delphi.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/C.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/php.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/react.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/laravel.png" alt="Headshot"/></div>
                //    <div className="grid-item"><img className="skill-image" src="images/firebase.png" alt="Headshot"/></div>
    );
}

export default Projects;
