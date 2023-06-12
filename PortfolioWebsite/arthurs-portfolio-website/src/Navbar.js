import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPhone, FaBars, FaXmark} from "react-icons/fa";
import $ from 'jquery';

function Navbar(){
  var navMenuBool=false;
  const navMenuOpen=()=>{
      $(".NavMenu").slideDown();
      $(".NavMenu").css("display","flex");
      navMenuBool=true;
      $("#open").hide();
      $("#close").show();
  }

  const navMenuClose=()=>{
    console.log("click");
    $(".NavMenu").slideUp();
    navMenuBool=false;
    $("#open").show();
    $("#close").hide();
  }

  const navFunction=(value)=>{
    console.log("click");
    $(".nav").removeClass("clicked");
    $(`#${value}`).addClass("clicked");
  }

  return (
    <div className='Navbar' style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2019/02/21/12/19/sunset-4011217_960_720.jpg)"}}>
        <div className="navBtn" id="open" onClick={()=>navMenuOpen()}><FaBars className="navIcon"/></div>
        <div className="navBtn" id="close" onClick={()=>navMenuClose()}><div className="navIcon" style={{fontSize:"50px"}}>X</div></div>
        <div className='NavMenu'>
          <div className="headComp">
            <div className="navImgBG">
              <img
                className="ArthurPic"
                src="ArthurPic.png"
                alt="Headshot"
              />
            </div>
            <Link
              to={`${window.location.origin.toString()}/`}
              className="nav"
              id="nav1"
              onClick={()=>navFunction("nav1")}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              ABOUT ME
            </Link>
            <Link
              to={`${window.location.origin.toString()}/Certificates`}
              className="nav"
              id="nav2"
              onClick={()=>navFunction("nav2")}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              CERTIFICATION
            </Link>
            <Link
              to={`${window.location.origin.toString()}/Projects`}
              className="nav"
              id="nav3"
              onClick={()=>navFunction("nav3")}
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              PROJECTS
            </Link>
            <Link
              to={`${window.location.origin.toString()}/Contact`}
              className="nav"
              id="nav4"
              onClick={()=>navFunction("nav4")}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              CONTACT ME
              <FaPhone />
            </Link>
          </div>
        </div>
        
    </div>
  );
}
export default Navbar;