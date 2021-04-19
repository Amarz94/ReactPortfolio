import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Alexander Marzullo </h1>
               <h2>Software Developer</h2>
                  <ul className="social">
                      <li>
                      <a class="fa fa-linkedin" href="https://www.linkedin.com/in/alexander-marzullo-50a6111b5/"></a>
                      </li>
                      <li>
                      <a class="fa fa-github" href="https://github.com/Amarz94"></a>
                      </li>
                      <li>
                      <a class="fa fa-envelope" href="mailto:marzullo94@gmail.com"></a>
                      </li>
                  </ul>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}