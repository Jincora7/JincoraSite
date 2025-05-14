import React from 'react'
import { Outlet } from 'react-router'

import "./App.css"
import Navbar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Page5 from './components/Home/Page5/Page5.jsx'

function Layout() {

    return (
        <div className="main">
            <Navbar />
            <Outlet />
            {/* <Page5/> */}
            <Footer />

        </div>
    )
}

export default Layout