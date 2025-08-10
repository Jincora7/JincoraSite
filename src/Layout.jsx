
import React, { useState } from "react";
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Scrollfea from '../src/reusableComponents/Scrollup.jsx';
import Loader from '../src/reusableComponents/Loader/Loader.jsx';

function Layout() {
   const [loading, setLoading] = useState(true);
  return (
        <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="main">
          <div className="content">
            <Navbar />
              <Outlet />
              <Scrollfea />
              <Footer />
          </div>
        </div>
      )}
    </>
   
  );
}

export default Layout;
