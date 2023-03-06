import React from "react";
import { NavLink } from "react-router-dom";
import logoNavbar from "../assets/logo.png";
import "../styles/Header.css"

function Navbar() {

    return (
        <header>
            <div className="logo">
                <img className="logo-img" src= {logoNavbar} alt ="logo" /> 
            </div>
            <nav className="nav-links">
                <NavLink
                    to="/"
                     className={({ isActive, notActive }) =>
                     "header_Nav_link" + (isActive ? " activated" : "")
                        
                 }>
                
                    Accueil
                </NavLink>
                <NavLink
                    to="/apropos"
                     className={({ isActive }) =>
                     "header_Nav_link" + (isActive ? " activated" : "")
                     }>
                        
                    A propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar ;


