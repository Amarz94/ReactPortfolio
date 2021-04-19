import React, { Component } from 'react';
import ProjectOne from "./images/gitresume.JPG"
import ProjectTwo from "./images/whoiswho.JPG"
import ProjectThree from "./images/gametag.JPG"
import ProjectFour from "./images/fitness.jpg"
export default class Porfolio extends Component {


  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontSize: "30px"}}>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                <a href="https://github.com/Amarz94/git-resume-1">
                    <div className="item-wrap">

                        <img src={ProjectOne} alt="project one" className="item-img"/>
                    </div>
                    <h5>Git Resume</h5>
                    </a>
                    <p>Generates a resume based on your GitHub Profile.</p>
                </div>
                <div className="columns portfolio-item">
                <a href="https://github.com/Amarz94/DateMeForReal">
                    <div className="item-wrap">

                        <img src={ProjectTwo} alt="project one" className="item-img"/>
                    </div>
                    <h5>DateMeForReal</h5>
                    </a>
                    <p>Dating App with account creation.</p>
                </div>
                <div className="columns portfolio-item">
                <a href="https://github.com/Amarz94/GameTagr">
                    <div className="item-wrap">

                        <img src={ProjectThree} alt="project one" className="item-img"/>
                    </div>
                    <h5>GameTagr</h5>
                    </a>
                    <p>Video review app that allows users to search/create reviews.</p>
                </div>
                <div className="columns portfolio-item">
                <a href="https://github.com/Amarz94/FitnessTracker">
                    <div className="item-wrap">

                        <img src={ProjectFour} alt="project one" className="item-img"/>
                    </div>
                    <h5>Fitness Tracker</h5>
                    </a>
                    <p>Tracks your workouts with detailed inputs.</p>
                </div>
          </div>
        </div>
      </div>
  </section>
        );
  }
}