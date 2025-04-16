import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [inputBox,setInputBox] = useState("");

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
                <span className='search-icon'>
                    <div className="container">
                            <div className="mainbox">
                                <div className="iconContainer" onClick={() => setSearchOpen(prev => !prev)}>
                                    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                                </div>
                                <input className="search_input" placeholder="Search" type="text" />
                            </div>
                    </div>
                </span>

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
