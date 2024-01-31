import React, { Component } from "react";
import { Routes, Route, Link, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <Link to='/'>About</Link>
          <Link to='/dog'>Dog</Link>
          <Link to='/contact'>Contact</Link>
          <a href='/dog'>Dog</a>
          <a href='/contact'>Contact</a>
          <a href='/'>About</a>
        </nav>
        <Routes>
          <Route path='/' Component={About}/>
          <Route path='/dog' Component={Dog}/>
          <Route path='/dog/hater' Component={Hater}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </div>
    );
  }
}

export default App;
