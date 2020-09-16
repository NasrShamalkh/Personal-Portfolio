import React from 'react';
import './contactMe.css';
import cell from './cell.jpg';

class ContactMe extends React.Component {
  state = {};
  render() {
    return (
      <div id='mainDiv'>
        <h1 className='blueColor'>Get in touch with me</h1>
        <h3>
          Have a question ? or just wanna say hi <br /> I am always available !
        </h3>
        <hr></hr>
        <div>
          <ul></ul>
        </div>
        <div></div>
      </div>
    );
  }
}
export default ContactMe;
