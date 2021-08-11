import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import { Route, Link } from 'react-router-dom';

function App() {
  return <div className="App" >
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/projects" component={Projects} />
  </div>;
}

export default App;
