import React from 'react';
import './contactMe.css';
import cell from './cell.jpg';
import email from './email.png';

class ContactMe extends React.Component {
  state = {};
  render() {
    return (
      <div id='mainDiv1'>
        <h1 className='blueColor'>Get in touch with me</h1>
        <h3>
          Have a question ? or just wanna say hi <br /> I am always available !
        </h3>
        <hr></hr>
        <div id='mainDiv2'>
          <div id='contact1'>
            <ul>
              <li>
                <img className='contactImage' src={cell}></img>{' '}
                <p>+970592010820</p>
              </li>
              <li>
                <img id='emailImage' className='contactImage' src={email}></img>{' '}
                <p>naaaa9sr-@hotmail.com</p>
              </li>
            </ul>
          </div>
          <div id='contact2'>
            <ul>
              <li>Linked in: linkedin.com/in/nasr-shamalkh-5b15961b5/</li>
              <li>Github: github.com/NasrShamalkh</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactMe;
