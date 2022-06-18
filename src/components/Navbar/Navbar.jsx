import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className='nav'>
        <div>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'activeLink' : 'inactive'}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? 'activeLink' : 'inactive'}>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news" className={({ isActive }) => isActive ? 'activeLink' : 'inactive'}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" className={({ isActive }) => isActive ? 'activeLink' : 'inactive'}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className={({ isActive }) => isActive ? 'activeLink' : 'inactive'}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;