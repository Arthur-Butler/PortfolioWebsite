import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import $ from 'jquery';
import { useRef } from 'react';

function Contact() {
    const form = useRef();
    const recaptchaRef = React.createRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b1iz9yd', 'template_fesp2je', form.current, 'uuxqeqPCq0d-qHJNZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const onChange = (value) => {
        console.log("Captcha value:",  $(".from_name").val());
        if( $(".subject").val()==="" ||  $(".subject").val()===null ||  $(".email").val()==="" ||  $(".email").val()===null || $(".inputMessage").val()==="" || $(".inputMessage").val()===null){
            recaptchaRef.current?.reset();
            $(".note").show(); 
        }else{
            $(".submit").show(); 
        }
    }

    const btnChange =(event)=>{
        $(".submit").attr("value","Sent");
        setTimeout(function () {
        recaptchaRef.current?.reset();
        $(".submit").attr("value","Send");
        $(".submit").hide(); 
        $(".from_name").val("");
        $(".email").val("");
        $(".message").val("");
        }, 20000);
    }

    const onExpire = (value) => {
        $(".submit").hide(); 
    }

    return (
        <div class="Contact" id="Contact">
            <center><div className="mark"><h2 class="heading">Contact Me</h2></div></center>
            <div class="form">
                <center>
                    <h2>Contact details:</h2>
                    <p class="con-info">Phone Number: 0658422435<br/><br/>
                    Email Address: arthurbutler1738@gmail.com</p>
                </center>
                <center>
                    <form  ref={form} onSubmit={sendEmail} className="contactForm">
                        <h2>Send me an email:</h2>
                        <label class="lbl" for="from">From:  </label>
                        <input type="text" class="from" name="form" placeholder="email address"/><br/>
                        <br/><br/>
                        <label class="lbl" for="subject">Subject:  </label>
                        <input type="text" class="subject" name="subject" placeholder="Subject"/><br/>
                        <br/><br/>
                        <label class="lbl" for="lname">Message:  </label>
                        <textarea type="text" class="message" name="message" placeholder="Message"></textarea>
                        <br/>
                        <center>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LdCepkbAAAAAIXFZlcSSOGgApA0M5AkArDX_3io"
                                onChange={onChange}
                                onExpired={onExpire}
                                className="recaptcha"
                            />
                        </center>
                        <p className="note" style={{display:"none"}}>* please fill in all text fields</p>
                        <input className="submit" type="submit" value="Send" onClick={(e)=>btnChange(e)} style={{display:"none"}}/>
                    </form>
                </center>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
