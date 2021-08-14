import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Installed from './Installed';
import Redundant from './Redundant';
import Slowest from './Slowest';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return <div className="App" >
  <NavBar />
  <Route exact path="/" component={Home} />
  <Route exact path="/installed" component={Installed} />
  <Route exact path="/redundant" component={Redundant} />
  <Route exact path="/slowest" component={Slowest} />
  </div>;
}

export default App;
