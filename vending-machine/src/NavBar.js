import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render(){
        return (
            <div className='NavBar'>
                <NavLink exact activeClassName='NavBar-active' to="/">Home</NavLink>
                <NavLink exact activeClassName='NavBar-active' to="/chips">Chips</NavLink>
                <NavLink exact activeClassName='NavBar-active' to="/soda">Soda</NavLink>
                <NavLink exact activeClassName='NavBar-active' to="/sardines">Sardines</NavLink>
            </div>
        )
    }
}
export default NavBar;