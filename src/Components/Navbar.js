import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";
import { FaMapMarkerAlt, FaBell, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaHeadphones, FaSearch, FaShoppingCart, FaClock, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import Logo from "../Assets/logo-white.png";
import LogoWhite from "../Assets/logo-white.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const closeNavbar = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    return (
        <div>
            <div className="top-navbar">
                <div className="container">
                    <div className="top-navbar-content">
                        <div className="top-navbar-left">
                            <span className="address"><i><FaMapMarkerAlt /></i> 1901 Broadway, New York</span>
                            <span className="hours"><i><FaBell /></i> Mon-Fri: 09.00am-10.00 pm</span>
                            <span className="email"><i><FaEnvelope /></i> info_ourmail@Logifix.com</span>
                        </div>
                        <div className="top-navbar-right">
                            <div className="social-icons">
                                <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><i><FaFacebook /></i></a>
                                <a href="www.x.com" target="_blank" rel="noopener noreferrer"><i><FaTwitter /></i></a>
                                <a href="www.instagram.com" target="_blank" rel="noopener noreferrer"><i><FaInstagram /></i></a>
                                <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><i><FaFacebook /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Middle Navbar */}
            <nav className="middle-navbar">
                <div className="container">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Middle - Navigation */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeNavbar}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="#" onClick={() => toggleDropdown("pages")}>
                                PAGES
                            </Link>
                            <ul className={`dropdown-menu ${activeDropdown === "pages" ? "show" : ""}`}>
                                <li><Link className="dropdown-item" to="/about" onClick={closeNavbar}>About</Link></li>
                                <li className="dropdown-submenu">
                                    <Link className="dropdown-item" to="#" onClick={() => toggleDropdown("projects")}>
                                        Projects <i className="fas fa-chevron-right"></i>
                                    </Link>
                                    <ul className={`dropdown-menu ${activeDropdown === "projects" ? "show" : ""}`}>
                                        <li><Link className="dropdown-item" to="/project-list" onClick={closeNavbar}>Project List</Link></li>
                                        <li><Link className="dropdown-item" to="/project-details" onClick={closeNavbar}>Project Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="dropdown-item" to="/testinomial" onClick={closeNavbar}>Testimonial</Link></li>
                                <li><Link className="dropdown-item" to="/pricing" onClick={closeNavbar}>Pricing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="#" onClick={() => toggleDropdown("services")}>
                                SERVICES
                            </Link>
                            <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`}>
                                <li><Link className="dropdown-item" to="/service-details" onClick={closeNavbar}>Details</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="#" onClick={() => toggleDropdown("news")}>
                                NEWS
                            </Link>
                            <ul className={`dropdown-menu ${activeDropdown === "news" ? "show" : ""}`}>
                                <li><Link className="dropdown-item" to="/news-grid" onClick={closeNavbar}>Grid</Link></li>
                                <li><Link className="dropdown-item" to="/news-details" onClick={closeNavbar}>News Details</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    {/* Right - Icons */}
                    <div className="navbar-icons">
                        <div className="icon-circle">
                            <i><FaHeadphones /></i>
                            <div className="text-container">
                                <span style={{color: "#e74c3c"}}>Call Us Now</span>
                                <span>+91 123 456 789</span>
                            </div>
                        </div>
                    </div>
                    <div className="icon">
                        <i>  <FaSearch /></i>
                        <div className="icon">
                            <i><FaShoppingCart /></i>
                        </div>
                    </div>
                </div>

            </nav>
            {/* Scroll Navbar  */}
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
        </div>
    );
};

export default Navbar;