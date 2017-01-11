import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello!</h1>
          <p className="App-header-p">My name is Evan Johnson, but you can find me online as evblurbs. I'm a software engineer who is passionate about JavaScript and creating user interfaces. I currently work at Amazon where I build products for their customers in India. When not working, I enjoy teaching people about programming at <a href="https://generalassemb.ly/instructors/evan-johnson/4095" target="_blank">General Assembly</a>.</p>
        </div>
        <p className="App-intro">
          <div className="social">
            <a className="icon-link" href="https://github.com/evblurbs" target="_blank"><div className="github icon" alt="Github"></div></a>
            <a className="icon-link" href="https://twitter.com/evblurbs" target="_blank"><div className="twitter icon" alt="Twitter"></div></a>
            <a className="icon-link" href="https://www.linkedin.com/in/evblurbs" target="_blank"><div className="linkedin icon" alt="LinkedIn"></div></a>
            <a className="icon-link" href="https://firebasestorage.googleapis.com/v0/b/evblurbs.appspot.com/o/E_Johnson_Resume-20170110.pdf?alt=media&token=7ab8c265-5f52-4688-ae0c-658334a311a1" target="_blank"><div className="resume icon" alt="resume"></div></a>
          </div>
          <h2 className="teaser">More content coming soon...</h2>
        </p>
      </div>
    );
  }
}

export default App;
