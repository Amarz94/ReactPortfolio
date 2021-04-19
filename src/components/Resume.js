import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default  class Resume extends Component {

  render() {

    return (
      
      <section id="resume">

         <div className="row education">
           
            <div className="three columns header-col">
               <h1>Education</h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                      <h3>Uconn Coding Bootcamp</h3>
                      <p className="date">
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
               <h1>Work</h1>
            </div>

            <div className="nine columns main-col">

                <div className="row item">
                    <div className="twelve columns">
                      <h3>U.S Army Reserve</h3>
                      <p className="date">
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
                      <p className="date">
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
              <h1>Skills</h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                      
                      <FontAwesomeIcon style={{margin: "15px", fontSize:"100px"}} icon={['fab', 'react']} /> 
                      <FontAwesomeIcon style={{margin: "15px", fontSize:"100px"}}icon={['fab', 'html5']} />
                      <FontAwesomeIcon style={{margin: "15px", fontSize:"100px"}}icon={['fab', 'css3']} />
                      <FontAwesomeIcon style={{margin: "15px", fontSize:"100px"}}icon={['fab', 'js']} />
                      <FontAwesomeIcon style={{margin: "15px", fontSize:"100px"}}icon={['fab', 'node-js']} />

                    </div>
                </div>
            </div>
        </div>

      </section>
    );
  }
}