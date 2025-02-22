import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Assets/logo.png";
import LogoWhite from "../Assets/logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight, FaTimes, FaPhoneAlt, FaEnvelope,FaClock } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const closeNavbar = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            {/* Top Navbar */}
            <nav className={`navbar navbar-expand-lg navbar-top ${scrolled ? "hidden" : ""}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                        <img src={Logo} alt="Logifix" className="logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`} tabIndex="-1" id="offcanvasNavbar">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" onClick={() => setIsOpen(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={closeNavbar}>HOME</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="#" onClick={() => toggleDropdown("pages")}>PAGES</Link>
                                    <ul className={`dropdown-menu ${activeDropdown === "pages" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/page1" onClick={closeNavbar}>About</Link></li>
                                        <li className="dropdown-submenu">
                                            <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("projects")}>Projects <i className="fas fa-chevron-right"></i></Link>
                                            <ul className={`dropdown-menu ${activeDropdown === "projects" ? "show" : ""}`}>
                                                <li><Link className="dropdown-item" to="/project-list" onClick={closeNavbar}>Project List</Link></li>
                                                <li><Link className="dropdown-item" to="/project-details" onClick={closeNavbar}>Project Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("team")}>Team <i className="fas fa-chevron-right"></i></Link>
                                            <ul className={`dropdown-menu ${activeDropdown === "team" ? "show" : ""}`}>
                                                <li><Link className="dropdown-item" to="/team-list" onClick={closeNavbar}>Team List</Link></li>
                                                <li><Link className="dropdown-item" to="/team-details" onClick={closeNavbar}>Team Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("shop")}>Shop <i className="fas fa-chevron-right"></i></Link>
                                            <ul className={`dropdown-menu ${activeDropdown === "shop" ? "show" : ""}`}>
                                                <li><Link className="dropdown-item" to="/products" onClick={closeNavbar}>Products</Link></li>
                                                <li><Link className="dropdown-item" to="/products-with-sidebar" onClick={closeNavbar}>Products with sidebar</Link></li>
                                                <li><Link className="dropdown-item" to="/product-details" onClick={closeNavbar}>Products details</Link></li>
                                                <li><Link className="dropdown-item" to="/cart" onClick={closeNavbar}>Cart</Link></li>
                                                <li><Link className="dropdown-item" to="/checkout" onClick={closeNavbar}>Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="dropdown-item" to="/testinomial" onClick={closeNavbar}>Testinomial</Link></li>
                                        <li><Link className="dropdown-item" to="/pricing" onClick={closeNavbar}>Pricing</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="#" onClick={() => toggleDropdown("services")}>SERVICES</Link>
                                    <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/service-details" onClick={closeNavbar}>Details</Link></li>
                                        <li><Link className="dropdown-item" to="/testinomial" onClick={closeNavbar}>Service details</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="#" onClick={() => toggleDropdown("news")}>NEWS</Link>
                                    <ul className={`dropdown-menu ${activeDropdown === "news" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/news-grid" onClick={closeNavbar}>Grid</Link></li>
                                        <li><Link className="dropdown-item" to="/news-details" onClick={closeNavbar}>News Details</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeNavbar}>CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/cart" className="icon-link"><i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/search" className="icon-link"><i className="fas fa-search"></i></Link>
                </div>
                <Link to="/contacts">
                    <div className="signup-btn"> <span>Sign Up &nbsp;</span> <FaArrowRight className="icon" /></div>
                </Link>
            </nav>

            {/* Scroll Navbar */}
            <nav className={`navbar navbar-expand-lg navbar-scroll ${scrolled ? "visible" : ""}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                        <img src={Logo} alt="Logifix" className="logo" />
                    </Link>

                    <div className="d-flex justify-content-end align-items-center">
                        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {isOpen && <div className="offcanvas-overlay" onClick={() => setIsOpen(false)}></div>}

                        <div className={`offcanvas offcanvas-end custom-offcanvas ${isOpen ? "show" : ""}`} tabIndex="-1" id="offcanvasNavbar">
                            <div className="offcanvas-header">
                                <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                                    <img src={LogoWhite} alt="Logifix" className="logo" />
                                </Link>
                                <button type="button" className="btn-close" onClick={() => setIsOpen(false)}>
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={closeNavbar}>HOME</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="#" onClick={() => toggleDropdown("pages")}>PAGES</Link>
                                        <ul className={`dropdown-menu ${activeDropdown === "pages" ? "show" : ""}`}>
                                            <li><Link className="dropdown-item" to="/about" onClick={closeNavbar}>About</Link></li>
                                            <li className="dropdown-submenu">
                                                <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("projects")}>Projects <i className="fas fa-chevron-right"></i></Link>
                                                <ul className={`dropdown-menu ${activeDropdown === "projects" ? "show" : ""}`}>
                                                    <li><Link className="dropdown-item" to="/project-list" onClick={closeNavbar}>Project List</Link></li>
                                                    <li><Link className="dropdown-item" to="/project-details" onClick={closeNavbar}>Project Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("team")}>Team <i className="fas fa-chevron-right"></i></Link>
                                                <ul className={`dropdown-menu ${activeDropdown === "team" ? "show" : ""}`}>
                                                    <li><Link className="dropdown-item" to="/team-list" onClick={closeNavbar}>Team List</Link></li>
                                                    <li><Link className="dropdown-item" to="/team-details" onClick={closeNavbar}>Team Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("shop")}>Shop <i className="fas fa-chevron-right"></i></Link>
                                                <ul className={`dropdown-menu ${activeDropdown === "shop" ? "show" : ""}`}>
                                                    <li><Link className="dropdown-item" to="/products" onClick={closeNavbar}>Products</Link></li>
                                                    <li><Link className="dropdown-item" to="/products-with-sidebar" onClick={closeNavbar}>Products with sidebar</Link></li>
                                                    <li><Link className="dropdown-item" to="/product-details" onClick={closeNavbar}>Products details</Link></li>
                                                    <li><Link className="dropdown-item" to="/cart" onClick={closeNavbar}>Cart</Link></li>
                                                    <li><Link className="dropdown-item" to="/checkout" onClick={closeNavbar}>Checkout</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link className="dropdown-item" to="/testinomial" onClick={closeNavbar}>Testinomial</Link></li>
                                            <li><Link className="dropdown-item" to="/pricing" onClick={closeNavbar}>Pricing</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="#" onClick={() => toggleDropdown("services")}>SERVICES</Link>
                                        <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                                            <li><Link className="dropdown-item" to="/service-details" onClick={closeNavbar}>Details</Link></li>
                                            <li><Link className="dropdown-item" to="/testinomial" onClick={closeNavbar}>Service details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link" to="#" onClick={() => toggleDropdown("news")}>NEWS</Link>
                                        <ul className={`dropdown-menu ${activeDropdown === "news" ? "show" : ""}`}>
                                            <li><Link className="dropdown-item" to="/news-grid" onClick={closeNavbar}>Grid</Link></li>
                                            <li><Link className="dropdown-item" to="/news-details" onClick={closeNavbar}>News Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeNavbar}>CONTACT</Link></li>

                                    {/* Mobile-only items */}
                                    <li className="nav-item d-lg-none d-flex align-items-center mt-3 mb-3">
                                        <FaPhoneAlt className="text-warning me-2" size={30} />
                                        <div className="offcanvas-icon-details">
                                            <span className="d-block fw-bold">Call Us</span>
                                            <span className="d-block">+91 4556 56765 55</span>
                                        </div>
                                    </li>
                                    <li className="nav-item d-lg-none d-flex align-items-center  mb-3">
                                        <FaEnvelope className="text-warning me-2" size={30} />
                                        <div className="offcanvas-icon-details">
                                            <span className="d-block fw-bold">Email Us</span>
                                            <span className="d-block">info@logifix.com</span>
                                        </div>
                                    </li>
                                    <li className="nav-item d-lg-none d-flex align-items-center">
                                        <FaClock className="text-warning me-2" size={30} />
                                        <div className="offcanvas-icon-details">
                                            <span className="d-block fw-bold">Working Hours</span>
                                            <span className="d-block">Mon - Fri: 9 AM - 6 PM</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;