import React, { Component } from 'react';
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <VendingMachine />
        <Chips />
        <Sardines />
        <Soda />
      </div>
    );
  }
}

export default App;
