import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './AboutMe';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Landing/>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path=''  element={<About/>}></Route> 
        <Route path='Certificates' element={<Certificates/>}></Route> 
        <Route path='Projects' element={<Projects/>}></Route> 
        <Route path='Contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    {/* <About /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

