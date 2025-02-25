import React from 'react';
import { Link } from "react-router-dom";
import PageTitle from '../../Components/PageTitle';
import { FaStar, FaArrowRight, FaBuilding, FaCalendarAlt, FaGlobeAmericas, FaClock, FaShippingFast, FaGlobe, FaWarehouse, FaStopwatch, FaDollarSign, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import AboutPerson from '../../Assets/about-person.jpg';
import AboutShip from '../../Assets/about-ship.jpg';
import LogifixCEO from '../../Assets/logifix-ceo.jpg';
import LogifixLCEO from '../../Assets/logifix-lady-ceo.jpg';
import LogifixEmp from '../../Assets/logifix-employee.jpg';
import LogifixEmp1 from '../../Assets/logifix-employee2.jpg';

const AboutPage = () => {
    return (
        <div>
            <PageTitle title="About" breadcrumb="Home > About" />

            <section className="transport-section">
                <div className="content-wrapper">
                    <div className="image-column">
                        <img src={AboutPerson} alt="Main" className='about-main-image' />
                        <img src={AboutShip} alt="Overlap" className="about-image-overlap" />
                    </div>
                    <div className="text-column">
                        <h4>WHO WE ARE</h4>
                        <h2>We are best For secure Business Transport</h2>
                        <p>
                            With over four decades of experience providing solutions to large-scale enterprises who fail their duty through weakness will which is the saying through.
                        </p>
                        <ul>
                            <li><i className="red-icon"><FaStar /></i>End-to-End Transportation</li>
                            <li><i className="red-icon"><FaStar /></i>Warehousing & Distribution</li>
                            <li><i className="red-icon"><FaStar /></i>Digital Solutions</li>
                            <li><i className="red-icon"><FaStar /></i>Supply Chain Solutions</li>
                        </ul>
                        <div className="hero-buttons">
                            <Link to="/services" className="explore-btn">
                                Explore More <FaArrowRight className="icon" />
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="stats-wrapper">
                    <div className="stat-item">
                        <i className="red-icon"><FaBuilding /></i>
                        <div className="stat-text">
                            <h3>541+</h3>
                            <p>Distribution Centers</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <i className="red-icon"><FaCalendarAlt /></i>
                        <div className="stat-text">
                            <h3>35+</h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <i className="red-icon"><FaGlobeAmericas /></i>
                        <div className="stat-text">
                            <h3>147+</h3>
                            <p>Countries and Regions</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="top-section">
                    <h5>WHY SELECT US</h5>
                    <h2>We create opportunity <br /> to reach potential</h2>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="icon-wrapper">
                                <i className="red-icon"><FaClock /></i>
                            </div>
                            <p>On-Time Deliveries</p>
                        </div>
                        <div className="grid-item">
                            <div className="icon-wrapper">
                                <i className="red-icon"><FaShippingFast /></i>
                            </div>
                            <p>Ship Transport</p>
                        </div>
                        <div className="grid-item">
                            <div className="icon-wrapper">
                                <i className="red-icon"><FaGlobe /></i>
                            </div>
                            <p>Global Network Coverage</p>
                        </div>
                        <div className="grid-item">
                            <div className="icon-wrapper">
                                <i className="red-icon"><FaWarehouse /></i>
                            </div>
                            <p>Warehousing and Distribution</p>
                        </div>
                        <div className="transport-box">
                            <h3>Logifix Quick Transport</h3>
                            <p>Starting From <span>$20/kg</span></p>
                            <button>Get Started Now</button>
                        </div>
                        <div className="grid-item">
                            <div className="icon-wrapper">
                                <i className="red-icon"><FaStopwatch /></i>
                            </div>
                            <p>Reduced Transit Time</p>
                        </div>
                        <div className="grid-item">
                            <div className="icon-wrapper">
                                <i className="red-icon"><FaDollarSign /></i>
                            </div>
                            <p>Optimized Cost</p>
                        </div>
                    </div>
                </div>

                <div className="bottom-section">
                    <h5>TEAM MEMBERS</h5>
                    <h2>We have specialist <br /> skilled expert</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixCEO} alt="Alan Holand" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Alan Holand</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixLCEO} alt="David Goa" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>David Goa</h3>
                            <p>Logistics Manager</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixEmp} alt="Macland Minor" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Macland Minor</h3>
                            <p>Operations Head</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixEmp1} alt="Viland Rolex" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Viland Rolex</h3>
                            <p>Sales Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;