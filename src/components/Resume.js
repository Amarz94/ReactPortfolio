import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'
import resPDF from "./docs/resume.pdf";


export default  class Resume extends Component {

  render() {

    return (

      <section id="resume">

         <div className="row education">
            <div style={{fontWeight: "bold", textAlign: "center", marginBottom:"50px"}}>
                    <h1 style={{fontSize:"40px"}}>Resume</h1>
                    <a href={resPDF}> <FontAwesomeIcon style={{fontSize:"35px", color:"turquoise"}} icon={faFileDownload} /></a></div>
            <div className="three columns header-col">
               <h1 style={{fontWeight: "bold", fontSize: "25px"}}><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                      <h3>Uconn Coding Bootcamp</h3>
                      <p style={{fontWeight: "bold", fontSize: "17px"}} className="date">
                      Full-Stack Developer Course
                      | October 2020 - April 2021</p>
                      <p>
                      React.js - Node.js - Javascript - HTML - CSS
                      </p>
                    </div>
                </div>
            </div>
         </div>

        <div className="row work">
            <div className="three columns header-col">
               <h1 style={{fontWeight: "bold", fontSize: "25px"}}><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">

                <div className="row item">
                    <div className="twelve columns">
                      <h3>U.S Army Reserve</h3>
                      <p style={{fontWeight: "bold", fontSize: "17px"}} className="date">
                      Paralegal Specialist |
                      April 2015 - Present</p>
                      <p>
                      Power of Attorneys - Wills - Notary - Military Law
                    </p>
                    </div>
                </div>

                <div className="row item">
                    <div className="twelve columns">
                      <h3>The Capital Grille</h3>
                      <p style={{fontWeight: "bold", fontSize: "17px"}}className="date">
                      Server |
                      April 2018 - March 2020</p>
                      <p>
                        Customer Service
                      </p>
                    </div>
                </div>              
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
              <h1 style={{fontWeight: "bold", fontSize: "25px"}}><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                      
                      <FontAwesomeIcon style={{fontSize:"100px"}} icon={['fab', 'react']} /> 
                      <FontAwesomeIcon style={{marginLeft: "15px", fontSize:"100px"}}icon={['fab', 'html5']} />
                      <FontAwesomeIcon style={{marginLeft: "15px", fontSize:"100px"}}icon={['fab', 'css3']} />
                      <FontAwesomeIcon style={{marginLeft: "15px", fontSize:"100px"}}icon={['fab', 'js']} />
                      <FontAwesomeIcon style={{marginLeft: "15px", fontSize:"100px"}}icon={['fab', 'node-js']} />

                    </div>
                </div>
            </div>
        </div>

      </section>
    );
  }
}