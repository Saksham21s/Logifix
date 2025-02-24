import React from 'react';
import '../Styles/Footer.css';
import logo from '../Assets/logo-white.png';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-logo">
                                <img src={logo} alt="Logifix Logo" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="text-wrapper">
                                        <p>Call Us On</p>
                                        <p>+91 123 456 789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="text-wrapper">
                                        <span>Mail to Us</span>
                                        <p>Logifix@support.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-section">
                                <h3>About Us</h3>
                                <p>To get started with us, please go over all of our internet plans and other plans to let our operators.</p>
                                <div className="social-icons">
                                    <button className="social-icon" onClick={() => console.log('Facebook clicked')}>
                                        <FaFacebookF />
                                    </button>
                                    <button className="social-icon" onClick={() => console.log('Twitter clicked')}>
                                        <FaTwitter />
                                    </button>
                                    <button className="social-icon" onClick={() => console.log('LinkedIn clicked')}>
                                        <FaLinkedinIn />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-section">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><a href="/about-us"><i class="rect-icon">&gt;</i> About Us</a></li>
                                    <li><a href="/services"><i class="rect-icon">&gt;</i> Our Services</a></li>
                                    <li><a href="/clients"><i class="rect-icon">&gt;</i> Our Clients</a></li>
                                    <li><a href="/testimonials"><i class="rect-icon">&gt;</i> Testimonial</a></li>
                                    <li><a href="/news"><i class="rect-icon">&gt;</i> News & Media</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-section">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="/services"><i class="rect-icon">&gt;</i> Air Freight</a></li>
                                    <li><a href="/services"><i class="rect-icon">&gt;</i> Land Freight</a></li>
                                    <li><a href="/services"><i class="rect-icon">&gt;</i> Ocean Freight</a></li>
                                    <li><a href="/services"><i class="rect-icon">&gt;</i> Rail Freight</a></li>
                                    <li><a href="/services"><i class="rect-icon">&gt;</i> Warehousing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-section newsletter">
                                <h3>Newsletter</h3>
                                <p>Sign up for alerts, our latest blogs, thoughts, and insights.</p>
                                <div className="newsletter-form">
                                    <input type="email" placeholder="Your Email" />
                                    <button><i class="fa-brands fa-telegram"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>© Copyrights reserved by Logifix</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;