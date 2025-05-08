// import React, { useState } from 'react';
// import logo from "../../assets/logo.png";
// import { FaAngleDown } from "react-icons/fa6";
// import { FiMenu } from "react-icons/fi";
// import { NavLink } from 'react-router-dom';
// import { RxCross2 } from "react-icons/rx";

// import "./Navbar.css";

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const [inputBox,setInputBox] = useState("");

//     const scrollToContact = () => {
//         const contactSection = document.getElementById('contact');
//         if (contactSection) {
//             contactSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="wrapper">
//             <img src={logo} alt="Jincora" />

//             <div className="navLink">
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/services">Services<FaAngleDown /></NavLink>
//                 <NavLink to="/portfolio">Portfolio</NavLink>
//                 <NavLink to="/about">About Us</NavLink>
//                 <NavLink to="#" onClick={scrollToContact}>Contact Us</NavLink>
//             </div>

//             <div className="search">
//                 <span className='search-icon'>
//                     <div className="container">
//                             <div className="mainbox">
//                                 <div className="iconContainer" onClick={() => setSearchOpen(prev => !prev)}>
//                                     <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
//                                 </div>
//                                 <input className="search_input" placeholder="Search" type="text" />
//                             </div>
//                     </div>
//                 </span>

//                 {!menuOpen ? (
//                     <span className='menu-icons' onClick={() => setMenuOpen(true)}><FiMenu size={24} /></span>
//                 ) : (
//                     <span className='menu-icons' onClick={() => setMenuOpen(false)}><RxCross2 size={24} /></span>
//                 )}
//             </div>

//             {menuOpen && (
//                 <div className='responsive-nav'>
//                     <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
//                     <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services<FaAngleDown /></NavLink>
//                     <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
//                     <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
//                     <NavLink to="#" onClick={() => { setMenuOpen(false); scrollToContact(); }}>Contact Us</NavLink>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;

// ----------------------------------------

// import React, { useState, useEffect } from "react";
// import logo from "../../assets/logo.png";
// import { FaAngleDown } from "react-icons/fa6";
// import { FiMenu } from "react-icons/fi";
// import { NavLink } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";

// import "./Navbar.css";

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [searchOpen, setSearchOpen] = useState(false);
//     const [inputBox, setInputBox] = useState("");

//     const scrollToContact = () => {
//         const contactSection = document.getElementById("contact");
//         if (contactSection) {
//             contactSection.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 1024) {
//                 setMenuOpen(false); // Close mobile menu if screen is large
//             }
//         };

//         window.addEventListener("resize", handleResize);

//         // Clean up the event listener on unmount
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     return (
//         <div className="wrapper">
//             <img src={logo} alt="Jincora" />

//             <div className="navLink">
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/services">
//                     Services
//                     <FaAngleDown />
//                 </NavLink>
//                 <NavLink to="/portfolio">Portfolio</NavLink>
//                 <NavLink to="/about">About Us</NavLink>
//                 <button
//                     className="calendly-button"
//                     onClick={() =>
//                         window.open(
//                             "https://calendly.com/admin-jincora/30min",
//                             "_blank"
//                         )
//                     }
//                 >
//                     Book a Call
//                 </button>

//                 <NavLink to="#" onClick={scrollToContact}>
//                     Contact Us
//                 </NavLink>
//             </div>

//             <div className="search">
//                 <span className="search-icon">
//                     <div className="container">
//                         <div className="mainbox">
//                             <div
//                                 className="iconContainer"
//                                 onClick={() => setSearchOpen((prev) => !prev)}
//                             >
//                                 <svg
//                                     viewBox="0 0 512 512"
//                                     height="1em"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="search_icon"
//                                 >
//                                     <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
//                                 </svg>
//                             </div>
//                             <input
//                                 className="search_input"
//                                 placeholder="Search"
//                                 type="text"
//                             />
//                         </div>
//                     </div>
//                 </span>

//                 {!menuOpen ? (
//                     <span
//                         className="menu-icons"
//                         onClick={() => setMenuOpen(true)}
//                     >
//                         <FiMenu size={24} />
//                     </span>
//                 ) : (
//                     <span
//                         className="menu-icons"
//                         onClick={() => setMenuOpen(false)}
//                     >
//                         <RxCross2 size={24} />
//                     </span>
//                 )}
//             </div>

//             {menuOpen && (
//                 <div className="responsive-nav">
//                     <NavLink to="/" onClick={() => setMenuOpen(false)}>
//                         Home
//                     </NavLink>
//                     <NavLink to="/services" onClick={() => setMenuOpen(false)}>
//                         Services
//                         <FaAngleDown />
//                     </NavLink>
//                     <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
//                         Portfolio
//                     </NavLink>

//                     <button
                    
//                         className="calendly-button-box"
//                         onClick={() => {
//                             setMenuOpen(false);
//                             window.open(
//                                 "https://calendly.com/admin-jincora/30min"
//                             );
//                         }}
//                     >
//                         Book a Call
//                     </button>

//                     <NavLink to="/about" onClick={() => setMenuOpen(false)}>
//                         About Us
//                     </NavLink>




//                     <NavLink
//                         to="#"
//                         onClick={() => {
//                             setMenuOpen(false);
//                             scrollToContact();
//                         }}
//                     >
//                         Contact Us
//                     </NavLink>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;



// ---------------------------------------------------





import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import { useNavigate, useLocation } from "react-router-dom"; /*changes*/

import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [inputBox, setInputBox] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    // const scrollToHome = () => {
    //     const HomeSection = document.getElementById("Home");
    //     if (HomeSection) {
    //         HomeSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    const scrollToHome = () => {
        if (location.pathname === "/") {
            // Already on home, scroll
            const section = document.getElementById("Home");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/", { state: { scrollTo: "Home" } });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    // const scrollToAboutUs = () => {
    //     const AboutUsSection = document.getElementById("AboutUs");
    //     if (AboutUsSection) {
    //         AboutUsSection.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setMenuOpen(false); // Close mobile menu if screen is large
            }
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="wrapper">
            <img src={logo} alt="Jincora" />

            <div className="navLink">
                {/* <NavLink to="/">Home</NavLink> */}

                <NavLink to="#" onClick={scrollToHome}>
                    Home
                </NavLink>

                <NavLink to="/services">
                    Services
                    {/* <FaAngleDown /> */}
                </NavLink>
                {/* <NavLink to="/portfolio">Portfolio</NavLink> */}
                {/* <NavLink to="/about">About Us</NavLink> */}


                <button
                    className="calendly-button"
                    onClick={() =>
                        window.open(
                            "https://calendly.com/admin-jincora/30min",
                            "_blank"
                        )
                    }
                >
                    Book a Call
                </button>

                <NavLink to="#" onClick={scrollToContact}>
                    Contact Us
                </NavLink>

                <NavLink to="/about">
                    About Us
                </NavLink>

            </div>

            <div className="search">
                <span className="search-icon">
                    <div className="container">
                        <div className="mainbox">
                            <div
                                className="iconContainer"
                                onClick={() => setSearchOpen((prev) => !prev)}
                            >
                                <svg
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="search_icon"
                                >
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                                </svg>
                            </div>
                            <input
                                className="search_input"
                                placeholder="Search"
                                type="text"
                            />
                        </div>
                    </div>
                </span>

                {!menuOpen ? (
                    <span
                        className="menu-icons"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FiMenu size={24} />
                    </span>
                ) : (
                    <span
                        className="menu-icons"
                        onClick={() => setMenuOpen(false)}
                    >
                        <RxCross2 size={24} />
                    </span>
                )}
            </div>

            {menuOpen && (
                <div className="responsive-nav">
                    {/* <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink> */}

                    <NavLink
                        to="#"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToHome();
                        }}
                    >
                        Home
                    </NavLink>

                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                        Services
                        {/* <FaAngleDown /> */}
                    </NavLink>
                    {/* <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
                        Portfolio
                    </NavLink> */}

                    <button
                        className="calendly-button-box"
                        onClick={() => {
                            setMenuOpen(false);
                            window.open(
                                "https://calendly.com/admin-jincora/30min"
                            );
                        }}
                    >
                        Book a Call
                    </button>

                    {/* <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                        About Us
                    </NavLink> */}



                    <NavLink
                        to="#"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToContact();
                        }}
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        to="#"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToAboutUs();
                        }}
                    >
                        About Us
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;
