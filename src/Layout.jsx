import React from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Scrollfea from '../src/reusableComponents/Scrollup.jsx';

function Layout() {
  return (
    <div className="main">
      {/* Video Background */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="\18458403-hd_1920_1080_24fps.mp4" type="video/mp4" />
        
        
      </video>

      {/* Layout content */}
      <div className="content">
        <Navbar />
        <Outlet />
        <Scrollfea />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
