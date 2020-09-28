import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './componenets/home/home.js';
import About from './componenets/about/about.js';
import NavBar from './componenets/navBar/navBar.js';
import Blogs from './componenets/blogs/blogs.js';
import Projects from './componenets/projects/projects.js';

import { AnimatedSwitch } from 'react-router-transition';

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedSwitch
        atEnter={{ opacity: 0.2 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className='switch-wrapper'
      >
        <Route component={Home} exact path='/' />
        <Route component={About} exact path='/about' />
        <Route component={Blogs} exact path='/blogs' />
        <Route component={Projects} exact path='/projects' />
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
