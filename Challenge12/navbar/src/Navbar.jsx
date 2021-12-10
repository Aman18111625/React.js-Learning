import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="menu_style">
        <NavLink activeClassName="active_class" to="/">
             About Us 
        </NavLink>
        <NavLink activeClassName="active_class" to="/contact"> 
        Contact Us 
        </NavLink>
        <NavLink activeClassName="active_class" to="/service">
         Services 
        </NavLink>
        <NavLink activeClassName="active_class" to="/user">
         User
        </NavLink>
        </div>
        </>
    )
}

export default Navbar;
