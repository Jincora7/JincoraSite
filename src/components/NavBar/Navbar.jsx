import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch, FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="wrapper">
            <img src={logo} alt="Jincora" />

            <div className="navLink">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services<FaAngleDown /></NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>

            <div className="search">
                <span className='search-icon'><FiSearch size={24} /></span>
                
                {!menuOpen ? (
                    <span className='menu-icons' onClick={() => setMenuOpen(true)}><FiMenu size={24} /></span>
                ) : (
                    <span className='menu-icons' onClick={() => setMenuOpen(false)}><RxCross2 size={24} /></span>
                )}
            </div>

            {menuOpen && (
                <div className='responsive-nav'>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services<FaAngleDown /></NavLink>
                    <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;
