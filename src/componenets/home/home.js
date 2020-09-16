import React from 'react';
import Kakashi from './kakashi.jpg';
import './home.css';
class Home extends React.Component {
  state = {};
  render() {
    return (
      <div id='main-dev'>
        <div id='left-div'>
          <h1>
            Hi there, I am <br /> NASR SHAMALKH
          </h1>
          <h2>FULL STACK WEB DEVELOPER</h2>
        </div>
        <div id='right-div'>
          <img src={Kakashi}></img>
        </div>
      </div>
    );
  }
}
export default Home;
