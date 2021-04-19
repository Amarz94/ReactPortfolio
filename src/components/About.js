import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profile.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>I am 27 years old and got started in web development after completeing the Full-Stack Developer Bootcamp course from UCONN. I am currently enlisted as a sergeant in the U.S. Army Reserve.</p>

               <div className="row">

                  <div className="columns contact-details">

                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}