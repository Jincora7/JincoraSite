import React from 'react'
import { Outlet } from 'react-router'

import "./App.css"
import Navbar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Scrollup from './reusableComponents/Scrollup.jsx'
// import Contact from './components/Contact/Contact.jsx'

function Layout() {

    return (
        <div className="main">
            <Navbar />
            <Outlet />
            {/* <Contact/> */}
            <Scrollup />
            <Footer />
        </div>
    )
}

export default Layout