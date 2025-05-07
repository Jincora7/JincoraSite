import React from 'react'
import { Outlet,useLocation } from 'react-router'

import "./App.css"
import Navbar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Page5 from './components/Home/Page5/Page5.jsx'
import HomePageBackground from './components/Backgrounds/HomePageBackground/HomePageBackground.jsx'
import ServicesPageBackground from './components/Backgrounds/ServicesPageBackground/ServicesPageBackground.jsx'
import AboutUsPageBackground from './components/Backgrounds/AboutUsPageBackground/AboutUsPageBackground.jsx'
import PrivacyPolicyBackground from './components/Backgrounds/Privacy-PolicyBackground/PrivacyPolicyBackground.jsx'

function Layout() {
    const location=useLocation();
    
    const renderBackground=()=>{
        switch (location.pathname) {
            case "/":
                return <HomePageBackground/>
            
            case "/services":
                return <ServicesPageBackground/>

            case "/about":
                return <AboutUsPageBackground/>
            
            case "/privacy-policy":
                return <PrivacyPolicyBackground/>
        
            default:
                return <ServicesPageBackground/>;
        }
    }

    return (
        <div className="main">
            <div className="web-wrapper">
                <div className="background-elements">
                    {renderBackground()}
                </div>
                <div className="content-wrap">
                    <Navbar />
                    <Outlet/>
                    <Page5/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout