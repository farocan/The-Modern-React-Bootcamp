import React, { Component } from 'react';
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import {Route, Routes} from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" Component={() => <VendingMachine/>}/>
          <Route exact path="/chips" Component={() => <Chips/>}/>
          <Route exact path="/sardines" Component={() => <Sardines/>}/>
          <Route exact path="/soda" Component={() => <Soda/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
