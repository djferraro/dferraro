import React, { Component } from 'react';
import './app.css';
import dominic from './images/dominic.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="intro">
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
                      <a href="https://www.linkedin.com/in/dominic-hoernecke-ferraro" className="btn btn-success">Linked<i class="fab fa-linkedin"></i></a>
                  </div>
              </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
