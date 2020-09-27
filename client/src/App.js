import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './componenets/home/home.js';
import About from './componenets/about/about.js';
import NavBar from './componenets/navBar/navBar.js';
import Blogs from './componenets/blogs/blogs.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} exact path='/about' />
        <Route component={Blogs} exact path='/blogs' />
      </Switch>
    </Router>
  );
}

export default App;
