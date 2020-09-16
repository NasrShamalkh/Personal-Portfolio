import React from 'react';
import Web_developer from './web-developer.jpg';
import './about.css';
class About extends React.Component {
  state = {};
  render() {
    return (
      <div id='main-div'>
        <div className='aboutDiv'>
          <div>
            <h1>
              GET TO <br /> KNOW ME{' '}
            </h1>
          </div>
          <div>
            <p>
              I am a full stack web developer based in Palestine. I am an
              intrinsically motivated person aiming to excel in life and the
              software industry along side with the people around me.
              <br />
              New experiences and challenges are my thing and I enjoy turning
              big scary problems into little simple things. I've also studied
              Mechanical Engineering which added to my people skills and made
              problem solving an everyday thing.
              <br />
              When I am not coding, I am usually poking around into either one
              of two worlds, <span className='blueColor'>Movies and TV</span> or
              <span className='blueColor'>
                {' '}
                anything with wheels and an engine.
              </span>
              .
            </p>
          </div>
          <div></div>
        </div>
        <div className='aboutDiv'>
          <div>
            <h2>Geek stuff</h2>
            <p>
              I am a graduate of PLUS program which is the result of partnership
              between AneraOrg and RBK to produce job-ready full stack web
              developers.
            </p>
            <h4 className='blueColor'>Technical skills</h4>
            <ul>
              <li>- Advanced problem solving skills.</li>
              <li>
                - Handles both front and back end development (superpowes in
                Back end).
              </li>
              <li>
                - Constantly developing skills ( currently learning python &
                other javascript frameworks).
              </li>
              <li>- A team player and oriented towards the scrum workflow.</li>
            </ul>
            <p>
              I fill my free time on sites such as{' '}
              <a
                target='_blank'
                href='https://www.freecodecamp.org/fcc7b717385-d10b-49fd-a5d1-f7ca0f959a28'
              >
                FreeCodeCamp
              </a>
              ,{' '}
              <a
                target='_blank'
                href='https://www.codewars.com/users/NasrShamalkh'
              >
                CodeWars
              </a>{' '}
              ,{' '}
              <a target='_blank' href='https://www.hackerrank.com/NasrShamalkh'>
                Hackerrank
              </a>{' '}
              and many others, where I enjoy solving coding challenges and
              learning new stuff.
            </p>
            <span>If you're interested in knowing me more: </span>
            <a
              href='https://drive.google.com/file/d/1p9UTjqbm0j3VbYzExj2grOZAhx6_-GYP/view?usp=sharing'
              target='_blank'
            >
              <button>View my CV</button>
            </a>
          </div>
          <div>
            <img src={Web_developer}></img>
          </div>
        </div>
        <div className='aboutDiv'></div>
      </div>
    );
  }
}
export default About;
