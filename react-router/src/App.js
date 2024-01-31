import React, { Component } from "react";
import { Routes, Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

// const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/dog' Component={Dog}/>
        </Routes>
      </div>
    );
  }
}

export default App;
