import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './navBarStyle.css';

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <div>
          <NavLink className='navLink' id='name-logo' to='/'>
            Nasr
          </NavLink>
        </div>
        <ul id='links'>
          <li>
            <NavLink className='navLink' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='navLink' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='navLink' to='/blogs'>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className='navLink' to='/contactMe'>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
