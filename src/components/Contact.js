import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row">
          <ul>
            <li style={{fontSize:"25px", fontWeight:"bold"}}>
              Feel free to contact me at:
            </li>
            <li style={{fontSize:"20px", fontWeight:"bold"}}>
              Email: marzullo94@gmail
            </li>
            <li style={{fontSize:"20px", fontWeight:"bold"}}>
              Phone: +1 (203) 570-1130
            </li>
          </ul>
          </div>
        </section>
        );
  }
}