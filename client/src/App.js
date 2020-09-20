import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './componenets/home/home.js';
import About from './componenets/about/about.js';
import NavBar from './componenets/navBar/navBar.js';
import Blogs from './componenets/blogs/blogs.js';
import ContactMe from './componenets/contactMe/contactMe.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} exact path='/about' />
        <Route component={Blogs} exact path='/blogs' />
        <Route component={ContactMe} exact path='/contactMe' />
      </Switch>
    </Router>
    // <div className='App'>
    //   <p>Hello there MAA Nigga </p>
    // </div>
  );
}

export default App;
