import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import PrimaryBtn from "../../reusableComponents/PrimaryBtn/PrimaryBtn";
import { useNavigate, useLocation } from "react-router-dom"; 
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [inputBox, setInputBox] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

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

    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.pageYOffset;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 60;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <div id="Navbar" className="wrapper">
            <Link to="/" onClick={scrollToHome}>
                <img src={logo} alt="Jincora" />
            </Link>

            <div className="navLink">
                <NavLink
                    to="/"
                    onClick={scrollToHome}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/services"
                    onClick={scrollToServices}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    Services
                </NavLink>

                <NavLink
                    to="/ContactUsPage"
                    onClick={scrollToContact}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    Contact Us
                </NavLink>

                <NavLink
                    to="/about"
                    onClick={() => {
                        navigate("/about", {
                            state: { scrollToTop: true },
                        });
                    }}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    About Us
                </NavLink>
            </div>

            <div className="search">
                <button
                    className="primary-btn"
                    onClick={() =>
                        window.open("https://calendly.com/admin-jincora/30min", "_blank")
                    }
                >
                    Book a Call
                </button>

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
                    <NavLink
                        to="/"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToHome();
                        }}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/services"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToServices();
                        }}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
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
                        to="/ContactUsPage"
                        onClick={() => {
                            setMenuOpen(false);
                            scrollToContact();
                        }}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        Contact Us
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => {
                            setMenuOpen(false);
                            navigate("/about", {
                                state: { scrollToTop: true },
                            });
                        }}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        About Us
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;
