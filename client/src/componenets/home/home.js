import React from 'react';
import profilePic from './image.jpg';
import './home.css';
import githubLogo from '../about/githubLogo.png';
import linkedinLogo from '../about/linkedInLogo.png';
import documentLogo from './documentLogo.png';
import { thistle } from 'color-name';

class Home extends React.Component {
  state = {
    windowWidth: window.innerWidth
  };
  handleResize = e => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }
  render() {
    if (this.state.windowWidth < 700) {
      return (
        <div id='main-dev'>
          <div id='left-div'>
            <h1>
              <span className='font1'>Hi there, I am</span> <br />
              <span className='font2'>
                NASR
                <br /> SHAMALKH
              </span>
            </h1>
            <h2 className='font3'>FULL STACK WEB DEVELOPER</h2>
          </div>
          <div id='right-div'>
            <img alt='Profile pic' className='nasrImage' src={profilePic}></img>
          </div>
          <div id='newDiv'>
            <div id='contactImageDiv'>
              <a
                href='https://github.com/NasrShamalkh'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  alt='Github logo'
                  className='homeContactImage1'
                  src={githubLogo}
                ></img>
              </a>
              <a
                href='https://www.linkedin.com/in/nasr-shamalkh-5b15961b5/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  alt='linkedin logo'
                  className='homeContactImage2'
                  src={linkedinLogo}
                ></img>
              </a>
              <a
                href='https://drive.google.com/file/d/1WB4FJCLhVG4av9Dmehd5vhSWBA0DFtzk/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  alt='Document logo'
                  className='homeContactImage3'
                  src={documentLogo}
                ></img>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id='main-dev'>
          <div id='left-div'>
            <h1>
              <span className='font1'>Hi there, I am</span> <br />
              <span className='font2'>
                NASR
                <br /> SHAMALKH
              </span>
            </h1>
            <h2 className='font3'>FULL STACK WEB DEVELOPER</h2>
            <div id='contactImageDiv'>
              <a
                href='https://github.com/NasrShamalkh'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  alt='Github logo'
                  className='homeContactImage1'
                  src={githubLogo}
                ></img>
              </a>
              <a
                href='https://www.linkedin.com/in/nasr-shamalkh-5b15961b5/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  alt='linkedin logo'
                  className='homeContactImage2'
                  src={linkedinLogo}
                ></img>
              </a>
              <a
                href='https://drive.google.com/file/d/1WB4FJCLhVG4av9Dmehd5vhSWBA0DFtzk/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  alt='Document logo'
                  className='homeContactImage3'
                  src={documentLogo}
                ></img>
              </a>
            </div>
          </div>
          <div id='right-div'>
            <img alt='Profile pic' className='nasrImage' src={profilePic}></img>
          </div>
        </div>
      );
    }
  }
}
export default Home;
