import React, { Component } from "react";
import "./App.css";
import $ from 'jquery';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Hover from 'react-3d-hover';

function Footer() {
    return (
        <div className="Footer"  style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2019/02/21/12/19/sunset-4011217_960_720.jpg)"}}>
            <div id="social">
                <a href='www.linkedin.com/in/arthur-butler-7721591a4'><FontAwesomeIcon icon={brands('linkedin')}/></a>
            </div>
            <p className="siteCreator">Powered by: Arthur Butler</p>
        </div>
    );
}

export default Footer;
