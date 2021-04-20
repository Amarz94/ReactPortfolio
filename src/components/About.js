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

               <h2 style={{fontWeight: "bold", fontSize: "25px"}}>About Me</h2>
               <p style={{fontWeight: "bold", fontSize: "17px"}}>I am 27 years old and got started in web development after completeing the Full-Stack Developer Bootcamp course from UCONN. I am currently enlisted as a sergeant in the U.S. Army Reserve.</p>
               <ul>
            <li style={{fontSize:"20px", fontWeight:"bold"}}>
               Feel free to contact me at:
            </li>
            <li style={{fontSize:"15px", fontWeight:"bold"}}>
              Email: marzullo94@gmail
            </li>
            <li style={{fontSize:"15px", fontWeight:"bold"}}>
              Phone: +1 (203) 570-1130
            </li>
          </ul>

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