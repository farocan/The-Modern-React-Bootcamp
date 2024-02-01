import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const navActiveCheck = (navData) => (navData.isActive ? "active-link" : "");

class NavBar extends Component {
    render(){
        const activeClassName = "Navbar-active";
        return (
            <div className='NavBar'>
                <NavLink exact className={navActiveCheck} to="/">Home</NavLink>
                <NavLink exact className={navActiveCheck}   to="/chips">Chips</NavLink>
                <NavLink exact className={navActiveCheck}   to="/soda">Soda</NavLink>
                <NavLink exact className={navActiveCheck}   to="/sardines">Sardines</NavLink>

                {/* <NavLink exact  activeClassName='NavBar-active' to="/">Home</NavLink>
                <NavLink exact activeClassName='NavBar-active' to="/chips">Chips</NavLink>
                <NavLink exact activeClassName='NavBar-active' to="/soda">Soda</NavLink>
                <NavLink exact activeClassName='NavBar-active' to="/sardines">Sardines</NavLink> */}
            </div>
        )
    }
}
export default NavBar;