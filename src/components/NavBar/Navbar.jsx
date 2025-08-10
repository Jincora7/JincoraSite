import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Detect scroll for background change
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight;
            setScrolled(window.scrollY > heroHeight - 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToHome = () => {
        if (location.pathname === "/") {
            const section = document.getElementById("top-of-home");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: "home" } });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToServices = () => {
        if (location.pathname === "/services") {
            const section = document.getElementById("top-of-services");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/services", { state: { scrollTo: "services" } });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="Navbar" className={`wrapper ${scrolled ? "scrolled" : ""}`}>
            <Link to="/" onClick={scrollToHome}>
                <img src={logo} alt="Jincora" className="nav-logo" />
            </Link>

            <div className="navLink">
                <NavLink to="/" onClick={scrollToHome}>
                    Home
                </NavLink>
                <NavLink to="/services" onClick={scrollToServices}>
                    Services
                </NavLink>
                <NavLink to="/contact-us" onClick={scrollToContact}>
                    Contact Us
                </NavLink>
                <NavLink
                    to="/about"
                    onClick={() => {
                        navigate("/about", { state: { scrollToTop: true } });
                    }}
                >
                    About Us
                </NavLink>
            </div>

            <div className="search">
                <button
                    className="primary-btn"
                    onClick={() =>
                        window.open(
                            "https://calendly.com/admin-jincora/30min",
                            "_blank"
                        )
                    }
                >
                    Book a Call
                </button>

                {!menuOpen ? (
                    <span className="menu-icons" onClick={() => setMenuOpen(true)}>
                        <FiMenu size={24} />
                    </span>
                ) : (
                    <span className="menu-icons" onClick={() => setMenuOpen(false)}>
                        <RxCross2 size={24} />
                    </span>
                )}
            </div>

            {menuOpen && (
                <div className="responsive-nav">
                    <NavLink
                        to="/"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToHome();
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToServices();
                        }}
                    >
                        Services
                    </NavLink>
                    <button
                        className="calendly-button-box"
                        onClick={() => {
                            setMenuOpen(false);
                            window.open("https://calendly.com/admin-jincora/30min");
                        }}
                    >
                        Book a Call
                    </button>
                    <NavLink
                        to="/contact-us"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToContact();
                        }}
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => {
                            setMenuOpen(false);
                            navigate("/about", { state: { scrollToTop: true } });
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
