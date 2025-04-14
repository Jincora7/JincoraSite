import React from 'react'
import Navbar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout