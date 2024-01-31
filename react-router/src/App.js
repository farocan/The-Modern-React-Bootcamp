import React, { Component } from "react";
import { Routes, Route, Switch, NavLink } from "react-router-dom";
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
          <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
          <NavLink exact activeClassName='active-link' to='/dog'>Dog</NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
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
