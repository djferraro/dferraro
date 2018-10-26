import React, { Component } from 'react';
import './app.css';
import dominic from './images/dominic.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <div className="col">
              <div className="profile-pic">
                <img src={dominic} alt="Dominic Ferraro"/>
              </div>
            </div>
            <div className="col">
              <div className="intro-content col m10 s12">
                <h1>Dominic Ferraro</h1>
                <h2>Front-End Developer: vArmour</h2>
                <h2 className="small">San Francisco, CA</h2>
                <p>My career and business experience has cultivated a unique combination of strength in visual design, 
                marketing forte, and aptitude for business operations. I have a business brain painted in creative colors that 
                allows me to help organizations drive funnel engagement by understanding business concerns, and using that 
                understanding to design and build creative content.</p>
                <a href="https://www.linkedin.com/in/dominic-hoernecke-ferraro" target="blank" className="btn">Linked<i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="box dark">
              <h1>Technologies</h1>
              <div className="multi">
                <div className="box-multi">
                  <ul>
                    <li><span>Sass / LESS</span></li>
                    <li><span>HTML5 / CSS3</span></li>
                    <li><span>JavaScript / jQuery</span></li>
                    <li><span>Foundation / Bootstrap</span></li>
                    <li><span>Mobile First Thinking</span></li>
                    <li><span>Python</span></li>
                    <li><span>SQL</span></li>
                    <li><span>Version Control (GIT)</span></li>
                    <li><span>React.js</span></li>
                    <li><span>Ruby on Rails</span></li>
                    <li><span>Photoshop CC</span></li>
                    <li><span>Illustrator CC</span></li>
                    <li><span>InDesign CC</span></li>
                    <li><span>Lightroom CC</span></li>
                    <li><span>Sketch</span></li>
                  </ul>
                </div>
             </div>   
          </div>
          <div className="box education">
            <h1>Education</h1>
            <div className="school"> 
              <h2>Full-Stack Development Course</h2>
              <p>Udacity / San Francisco, California / 2018</p>
            </div>
            <div className="school">
              <h2>Front-End Development Course</h2>
              <p>General Assembly / San Francisco, California / 2014</p>
            </div>
            <div className="school"> 
              <h2>B.S. Marketing and International Business</h2>
              <p>Iowa State University / Ames, Iowa / 2003 - 2007</p>
            </div>
            <div className="school">
              <h2>International Study Abroad - International Business</h2>
              <p>Consortium of Universities / Paderno del Grappa, Italy / 2005</p>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
