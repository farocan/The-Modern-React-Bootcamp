import React, { Component } from "react";
import { Routes, Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

const navActiveCheck = (navData) => (navData.isActive ? "active-link" : "");

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <NavLink exact className={navActiveCheck} to='/'>About</NavLink>
          <NavLink exact className={navActiveCheck} to='/dog'>Dog</NavLink>
          {/* <NavLink exact activeClassName='active-link' to='/dog/r'>Dog (r)</NavLink> */}
          <NavLink exact className={navActiveCheck} to='/dog/c'>Dog (c)</NavLink>
          <NavLink exact className={navActiveCheck} to='/contact'>Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' Component={About}/>
          <Route path='/dog' Component={Dog}/>
          <Route path='/dog/c' Component={() => <Dog name='Muffins'/>}/>
          {/* <Route path='/dog/r' render={() => <Dog name='Biscuits'/>}/> */}
          <Route path='/dog/hater' Component={Hater}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </div>
    );
  }
}

export default App;
